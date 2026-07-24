(() => {
  const event = window.HOMECOMING_EVENT;
  if (!event) return;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value || "";
  };

  setText("eyebrow", event.eyebrow);
  setText("hero-title", event.title);
  setText("hero-description", event.description);
  setText("date-label", event.dateLabel);
  setText("time-label", event.timeLabel);
  setText("venue-name", event.venueName);
  setText("venue-area", event.venueArea);
  setText("info-date", event.dateLabel);
  setText("info-time", event.timeLabel);
  setText("info-venue", event.venueName);
  setText("info-area", event.venueArea);
  setText("venue-note", event.venueNote);
  setText("schedule-intro", event.scheduleIntro);

  const configureLink = (id, url, label) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = label;
    if (url) {
      el.href = url;
      el.classList.remove("is-disabled", "is-hidden");
      el.removeAttribute("aria-disabled");
      if (url.startsWith("http")) {
        el.target = "_blank";
        el.rel = "noopener";
      }
    }
  };

  configureLink("rsvp-button", event.rsvpUrl, event.rsvpButtonLabel);
  configureLink("closing-rsvp", event.rsvpUrl, event.rsvpButtonLabel);
  configureLink("map-link", event.mapUrl, "지도에서 보기 ↗");

  const contactLine = document.getElementById("contact-line");
  if (contactLine && event.contact) {
    contactLine.textContent = `문의 · ${event.contact}`;
    contactLine.classList.remove("is-hidden");
  }

  const scheduleList = document.getElementById("schedule-list");
  if (scheduleList) {
    scheduleList.innerHTML = event.schedule.map(item => `
      <article class="schedule-item">
        <div class="schedule-time">${item.time}</div>
        <div class="schedule-copy">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
        <span class="schedule-status ${item.status === "confirmed" ? "confirmed" : ""}">
          ${item.status === "confirmed" ? "확정" : "예정"}
        </span>
      </article>
    `).join("");
  }

  const noticeList = document.getElementById("notice-list");
  if (noticeList) {
    noticeList.innerHTML = event.notice.map(item => `<li>${item}</li>`).join("");
  }

  const target = new Date(event.dateTime).getTime();
  const updateCountdown = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      setText("days", "00");
      setText("hours", "00");
      setText("minutes", "00");
      setText("countdown-caption", "오늘, 반가운 얼굴로 만나요.");
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    setText("days", String(days).padStart(2, "0"));
    setText("hours", String(hours).padStart(2, "0"));
    setText("minutes", String(minutes).padStart(2, "0"));
  };

  updateCountdown();
  window.setInterval(updateCountdown, 60000);
})();
