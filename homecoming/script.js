(() => {
  const panel = document.querySelector('.payment-panel');
  if (!panel) return;

  const account = panel.dataset.account || '';
  const feeButtons = Array.from(panel.querySelectorAll('.fee-choice'));
  const copyAccountButton = document.getElementById('copy-account');
  const copyAmountButton = document.getElementById('copy-amount');
  const copyPaymentInfoButton = document.getElementById('copy-payment-info');
  const selectionText = document.getElementById('payment-selection');
  const statusText = document.getElementById('copy-status');

  let selectedFee = null;
  let selectedType = '';
  let statusTimer = null;

  const formatWon = (value) => `${Number(value).toLocaleString('ko-KR')}원`;

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    const copied = document.execCommand('copy');
    document.body.removeChild(textarea);
    if (!copied) throw new Error('copy failed');
  }

  function showStatus(message, isError = false) {
    window.clearTimeout(statusTimer);
    statusText.textContent = message;
    statusText.dataset.state = isError ? 'error' : 'success';
    statusTimer = window.setTimeout(() => {
      statusText.textContent = '';
      delete statusText.dataset.state;
    }, 2600);
  }

  feeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedFee = Number(button.dataset.fee);
      selectedType = button.querySelector('span')?.textContent.trim() || '';

      feeButtons.forEach((item) => {
        item.setAttribute('aria-pressed', String(item === button));
      });

      copyAmountButton.disabled = false;
      copyPaymentInfoButton.disabled = false;
      selectionText.textContent = `${selectedType} 참가비 ${formatWon(selectedFee)}이 선택되었습니다.`;
      showStatus('');
    });
  });

  copyAccountButton.addEventListener('click', async () => {
    try {
      await copyText(account);
      showStatus('계좌번호가 복사되었습니다.');
    } catch (error) {
      showStatus('복사하지 못했습니다. 계좌번호를 직접 선택해 주세요.', true);
    }
  });

  copyAmountButton.addEventListener('click', async () => {
    if (!selectedFee) return;
    try {
      await copyText(String(selectedFee));
      showStatus(`${formatWon(selectedFee)}이 복사되었습니다.`);
    } catch (error) {
      showStatus('금액을 복사하지 못했습니다.', true);
    }
  });

  copyPaymentInfoButton.addEventListener('click', async () => {
    if (!selectedFee) return;
    const paymentInfo = [
      `참가 구분: ${selectedType}`,
      `참가비: ${formatWon(selectedFee)}`,
      '은행: 신한은행',
      `계좌번호: ${account}`,
      '예금주: 이정은'
    ].join('\n');

    try {
      await copyText(paymentInfo);
      showStatus('입금 정보 전체가 복사되었습니다.');
    } catch (error) {
      showStatus('입금 정보를 복사하지 못했습니다.', true);
    }
  });
})();
