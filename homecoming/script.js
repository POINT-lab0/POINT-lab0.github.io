(() => {
  const panel = document.querySelector('.payment-panel');
  if (!panel) return;

  const account = panel.dataset.account || '';
  const feeButtons = Array.from(panel.querySelectorAll('.fee-choice'));
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

      copyPaymentInfoButton.disabled = false;
      selectionText.textContent = `${selectedType} 참가비 ${formatWon(selectedFee)}이 선택되었습니다.`;
      showStatus('');
    });
  });

  copyPaymentInfoButton.addEventListener('click', async () => {
    if (!selectedFee) return;

    const paymentInfo = `신한은행 ${account} 이정은 / ${formatWon(selectedFee)}`;

    try {
      await copyText(paymentInfo);
      showStatus(`${paymentInfo} 복사 완료`);
    } catch (error) {
      showStatus('입금 정보를 복사하지 못했습니다.', true);
    }
  });
})();
