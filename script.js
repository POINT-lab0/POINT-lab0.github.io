/* script.js */

/* =========================================
   [1] 공통 레이아웃 & 유틸리티
   ========================================= */
function loadCommonHead() {
    const head = document.head;
    if (!document.querySelector('link[href="images/Logo_small.png"]')) {
        const favicon = document.createElement('link'); favicon.rel = 'icon'; favicon.type = 'image/png'; favicon.href = 'images/Logo_small.png'; head.appendChild(favicon);
    }
    if (!document.querySelector('link[href*="style.css"]')) {
        const style = document.createElement('link'); style.rel = 'stylesheet'; style.href = 'style.css?v=17'; head.appendChild(style);
    }
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fa = document.createElement('link'); fa.rel = 'stylesheet'; fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'; head.appendChild(fa);
    }
}

function loadLayout() {
    loadCommonHead();
    const headerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo"><a href="index.html"><img src="images/logo.png" alt="Lab Logo"></a></div>
                <div class="menu-toggle"><i class="fas fa-bars"></i></div>
                <ul class="nav-links">
                    <li><a href="index.html" class="nav-item">Home</a></li>
                    <li><a href="news.html" class="nav-item">News</a></li>
                    <li><a href="research.html" class="nav-item">Research</a></li>
                    <li><a href="members.html" class="nav-item">Members</a></li>
                    <li><a href="publications.html" class="nav-item">Publications</a></li>
                    <li><a href="awards.html" class="nav-item">Awards</a></li>
                    <li><a href="photos.html" class="nav-item">Photos</a></li>
                    <li><a href="contact.html" class="nav-item">Contact</a></li>
                </ul>
            </div>
        </nav>`;
    const footerHTML = `
        <footer>
            <div style="line-height: 1.6;">
                &copy; 2026 Interaction Lab. POSTECH. All Rights Reserved.<br>
                <span style="font-size: 0.9rem; opacity: 0.8;">
                    Engineering Building 4, Room 125, 77 Cheongam-Ro, Nam-Gu, Pohang, Gyeongbuk, 37673, Korea
                </span>
            </div>
        </footer>`;
    const headerPlaceholder = document.getElementById('global-header');
    const footerPlaceholder = document.getElementById('global-footer');
    if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;
    highlightActiveMenu();
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        const newToggle = menuToggle.cloneNode(true);
        menuToggle.parentNode.replaceChild(newToggle, menuToggle);
        newToggle.addEventListener('click', () => { navLinks.classList.toggle('active'); });
    }
}

function highlightActiveMenu() {
    const path = window.location.pathname;
    const page = path.split("/").pop().replace(/\.html$/i, '') || 'index';
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const linkPage = (item.getAttribute('href') || '').replace(/\.html$/i, '');
        if (page === linkPage || (page === 'index' && linkPage === 'index')) item.classList.add('active');
        else item.classList.remove('active');
    });
}
function getQueryParam(param) { const urlParams = new URLSearchParams(window.location.search); return urlParams.get(param); }
function getSortedNews() { if (typeof newsData === 'undefined') return []; return [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date)); }

const NEWS_CATEGORIES = {
    paper:    { label: 'Paper',    color: '#0085CA', bg: '#e8f4fb' },
    award:    { label: 'Award',    color: '#b45309', bg: '#fef3c7' },
    service:  { label: 'Service',  color: '#047857', bg: '#d1fae5' },
    event:    { label: 'Event',    color: '#7c3aed', bg: '#ede9fe' },
    grant:    { label: 'Grant',    color: '#0e7490', bg: '#cffafe' },
    graduate: { label: 'Graduate', color: '#be185d', bg: '#fce7f3' },
};
function getCategoryBadge(category) {
    const cat = NEWS_CATEGORIES[category] || { label: category || 'News', color: '#64748b', bg: '#f1f5f9' };
    return `<span class="news-cat-badge" style="background:${cat.bg};color:${cat.color}">${cat.label}</span>`;
}

/* =========================================
   [2] 메인 페이지 (Home) & 슬라이더
   ========================================= */
   let currentSlide = 0;
   let slideInterval;

   function initSlider() {
       const slides = document.querySelectorAll('.slide');
       const dotsContainer = document.getElementById('slider-dots');

       if (!slides.length || !dotsContainer) return;

       // 도트 생성
       dotsContainer.innerHTML = '';
       slides.forEach((_, i) => {
           const dot = document.createElement('div');
           dot.className = `dot ${i === 0 ? 'active' : ''}`;
           dot.onclick = () => goToSlide(i);
           dotsContainer.appendChild(dot);
       });

       startAutoSlide();
   }

   function updateSlides() {
       const slides = document.querySelectorAll('.slide');
       const dots = document.querySelectorAll('.dot');

       slides.forEach((slide, i) => {
           slide.classList.toggle('active', i === currentSlide);
       });
       dots.forEach((dot, i) => {
           dot.classList.toggle('active', i === currentSlide);
       });
   }

   function moveSlide(direction) {
       const slides = document.querySelectorAll('.slide');
       currentSlide = (currentSlide + direction + slides.length) % slides.length;
       updateSlides();
       resetAutoSlide();
   }

   function goToSlide(index) {
       currentSlide = index;
       updateSlides();
       resetAutoSlide();
   }

   function startAutoSlide() {
       slideInterval = setInterval(() => moveSlide(1), 5000);
   }

   function resetAutoSlide() {
       clearInterval(slideInterval);
       startAutoSlide();
   }

   // 페이지 로드 시 실행
   document.addEventListener('DOMContentLoaded', initSlider);
function renderHome() {
    const ytContainer = document.getElementById('youtube-gallery');
    if (ytContainer && typeof youtubeVideos !== 'undefined') {
        ytContainer.innerHTML = '';
        youtubeVideos.forEach(v => {
            ytContainer.innerHTML += `<div class="video-wrapper"><iframe src="${v.embedUrl}" title="${v.title}" allowfullscreen></iframe></div>`;
        });
    }
    const newsContainer = document.getElementById('home-news');
    if (newsContainer && typeof newsData !== 'undefined') {
        const sorted = getSortedNews();
        const latestNews = sorted.slice(0, 5);
        newsContainer.innerHTML = `<div class="news-split-layout"><div class="news-list-container" id="home-news-list"></div><div class="news-preview-pane" id="home-news-preview"></div></div>`;
        const listContainer = document.getElementById('home-news-list');
        const previewPane = document.getElementById('home-news-preview');
        latestNews.forEach((item, index) => {
            const originalIndex = newsData.findIndex(n => n.id === item.id);
            const li = document.createElement('div'); li.className = 'news-list-item';
            li.innerHTML = `<div class="news-item-meta">${getCategoryBadge(item.category)}<span class="news-item-date">${item.date}</span></div><h3 class="news-item-title">${item.title}</h3>`;
            li.addEventListener('mouseenter', () => { updateHomeNewsPreview(previewPane, item); });
            li.addEventListener('click', () => { location.href = `news.html?id=${originalIndex}`; });
            listContainer.appendChild(li);
        });
        if (latestNews.length > 0) updateHomeNewsPreview(previewPane, latestNews[0]);
    }
}
/* script.js - updateHomeNewsPreview 함수 수정 */

function updateHomeNewsPreview(pane, item) {
    if (item.image) {
        pane.innerHTML = `<img src="${item.image}" class="news-preview-img" alt="Preview">`;
    } else {
        // [수정] 박스 크기에 맞춰 글자 수를 80자로 제한하여 잘림 방지
        const shortContent = item.content.length > 80 ? item.content.substring(0, 80) + "..." : item.content;

        pane.innerHTML = `
            <div class="news-preview-content">
                <i class="far fa-newspaper"></i>
                <h3>${item.title}</h3>
                <p>${shortContent}</p>
            </div>`;
    }
}

/* =========================================
   [3] 뉴스 페이지
   ========================================= */
const NEWS_ICONS = { paper: '📄', award: '🏆', service: '🏛', event: '📣', grant: '💡', graduate: '🎓' };

let _newsActiveFilter = 'all';

function renderNewsPage() {
    const id = getQueryParam('id'); if (id !== null && newsData[id]) { renderNewsDetail(id); return; }
    const container = document.getElementById('news-grid-full'); if (!container || typeof newsData === 'undefined') return;

    // ── Filter bar ─────────────────────────────────────────
    const filterOrder = ['all', 'paper', 'award', 'grant', 'graduate', 'service', 'event'];
    const filterLabels = { all: 'All', paper: 'Paper', award: 'Award', service: 'Service', event: 'Event', grant: 'Grant', graduate: 'Graduate' };
    const usedCats = new Set(newsData.map(n => n.category));
    const visibleFilters = filterOrder.filter(f => f === 'all' || usedCats.has(f));

    const filterBar = document.createElement('div');
    filterBar.className = 'news-filter-bar';
    visibleFilters.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'news-filter-btn' + (cat === _newsActiveFilter ? ' active' : '');
        if (cat !== 'all' && NEWS_CATEGORIES[cat]) {
            btn.dataset.color = NEWS_CATEGORIES[cat].color;
            if (cat === _newsActiveFilter) btn.style.background = NEWS_CATEGORIES[cat].color;
        }
        btn.textContent = filterLabels[cat];
        btn.dataset.filter = cat;
        btn.addEventListener('click', () => {
            _newsActiveFilter = cat;
            document.querySelectorAll('.news-filter-btn').forEach(b => {
                b.classList.remove('active');
                b.style.background = '';
            });
            btn.classList.add('active');
            if (cat !== 'all' && NEWS_CATEGORIES[cat]) btn.style.background = NEWS_CATEGORIES[cat].color;
            _renderNewsGrid(container, filterBar);
        });
        filterBar.appendChild(btn);
    });
    container.innerHTML = '';
    container.appendChild(filterBar);

    _renderNewsGrid(container, filterBar);
}

function _renderNewsGrid(container, filterBar) {
    Array.from(container.children).forEach(el => { if (el !== filterBar) el.remove(); });

    const sorted = getSortedNews();
    const filtered = _newsActiveFilter === 'all' ? sorted : sorted.filter(n => n.category === _newsActiveFilter);
    const current  = filtered.filter(n => (n.date || '').startsWith('2026'));
    const archived = filtered.filter(n => !(n.date || '').startsWith('2026'));

    if (current.length === 0 && archived.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'news-empty-msg';
        empty.textContent = 'No news in this category yet.';
        container.appendChild(empty);
        return;
    }

    if (current.length > 0) {
        const sec = document.createElement('div');
        sec.className = 'nls-section';
        sec.innerHTML = `<div class="nls-year">2026</div><ul class="nls-list"></ul>`;
        container.appendChild(sec);
        const listEl = sec.querySelector('.nls-list');
        current.forEach(item => {
            const idx = newsData.findIndex(n => n.id === item.id);
            const md  = item.date ? item.date.slice(5).replace('-', '/') : '';
            const row = document.createElement('li');
            row.className = 'nls-row';
            row.onclick = () => location.href = `news.html?id=${idx}`;
            row.innerHTML = `<span class="nls-date">${md}</span>${getCategoryBadge(item.category)}<span class="nls-title">${item.title}</span><span class="nls-arrow">→</span>`;
            listEl.appendChild(row);
        });
    }

    if (archived.length > 0) {
        const yearMap = {};
        archived.forEach(item => {
            const yr = (item.date || '').split('-')[0] || 'Unknown';
            if (!yearMap[yr]) yearMap[yr] = [];
            yearMap[yr].push(item);
        });
        const years = Object.keys(yearMap).sort((a, b) => parseInt(b) - parseInt(a));

        const archiveDiv = document.createElement('div');
        archiveDiv.className = 'news-archive';
        archiveDiv.innerHTML = `<div class="news-archive-label">Archive</div>`;

        years.forEach(yr => {
            const yearDiv = document.createElement('div');
            yearDiv.className = 'news-archive-year';
            const rows = yearMap[yr].map(item => {
                const idx = newsData.findIndex(n => n.id === item.id);
                const md  = item.date ? item.date.slice(5).replace('-', '/') : '';
                return `<li class="nls-row" style="cursor:pointer;" onclick="location.href='news.html?id=${idx}'"><span class="nls-date">${md}</span>${getCategoryBadge(item.category)}<span class="nls-title">${item.title}</span><span class="nls-arrow">→</span></li>`;
            }).join('');
            yearDiv.innerHTML = `
                <button class="news-archive-btn" onclick="this.parentElement.classList.toggle('open')">
                    <span class="news-archive-yr">${yr}</span>
                    <span class="news-archive-count">${yearMap[yr].length} items</span>
                    <i class="fas fa-chevron-down news-archive-chevron"></i>
                </button>
                <ul class="nls-list news-archive-list">${rows}</ul>`;
            archiveDiv.appendChild(yearDiv);
        });
        container.appendChild(archiveDiv);
    }
}
function renderNewsDetail(index) {
    const item = newsData[index]; const container = document.querySelector('.container');
    const imgHtml = item.image ? `<img src="${item.image}" class="news-detail-hero" onerror="this.style.display='none'">` : '';
    const rawContent = item.detailContent || item.content || '';
    const formattedContent = rawContent
        .replace(/\[([^\]]+)\]/g, '<div class="news-section-label">$1</div>')
        .replace(/\b(\d{1,2}\))\s*/g, '<span class="news-paper-num">$1</span> ')
        .replace(/'([^']{3,}?)'/g, '$1')
        .replace(/—\s*/g, '');
    container.innerHTML = `
        <div class="news-detail-wrap">
            <a href="news.html" class="back-btn"><i class="fas fa-arrow-left"></i> Back to News</a>
            ${imgHtml}
            <div class="news-detail-header">
                <span class="news-detail-date">${item.date}</span>
                <h1>${item.title}</h1>
            </div>
            <div class="news-detail-content">${formattedContent}</div>
        </div>`;
    window.scrollTo(0, 0);
}

/* =========================================
   [4] 멤버 페이지 (Members)
   ========================================= */
function getGroup(m) {
    const d = m.desc.toLowerCase();
    if (m.role === 'prof') return 'prof';
    if (m.role === 'alumni') return 'alumni';
    if (d.includes('post-doc') || d.includes('researcher')) return 'postdoc';
    if (d.includes('ph.d') || d.includes('direct')) return 'phd';
    if (d.includes('master') || d.includes('m.s')) return 'ms';
    return 'phd';
}
function renderMembersContent(activeGroup) {
    const content = document.getElementById('member-content');
    if (!content || typeof memberData === 'undefined') return;
    const groups = activeGroup === 'all' ? ['prof','postdoc','phd','ms','alumni'] : [activeGroup];
    const labels = { prof:'Director', postdoc:'Post-Doctoral Researchers', phd:'Ph.D. Students', ms:'Master Students', alumni:'Alumni' };
    let html = '';
    groups.forEach(g => {
        const members = memberData.map((m,i) => ({m,i})).filter(({m}) => getGroup(m) === g);
        if (!members.length) return;
        html += `<div class="member-section"><h2 class="section-header">${labels[g]}</h2>`;
        if (g === 'alumni') {
            members.sort((a,b) => { const yr = s => { const match = s.m.desc.match(/\((19|20)\d{2}\)/); return match ? parseInt(match[0].replace(/[()]/g,'')) : 0; }; return yr(b)-yr(a); });
            html += `<div class="alumni-list">`;
            members.forEach(({m}) => { const parts = m.desc.split(' / '); html += `<div class="alumni-item"><strong>${m.name}</strong>${parts.map(p => `<span>${p}</span>`).join('')}</div>`; });
            html += `</div>`;
        } else if (g === 'prof' || g === 'postdoc') {
            html += `<div class="member-grid-center">`;
            members.forEach(({m,i}) => { html += createMemberCard(m, i); });
            html += `</div>`;
        } else {
            html += `<div class="member-grid">`;
            members.forEach(({m,i}) => { html += createMemberCard(m, i); });
            html += `</div>`;
        }
        html += `</div>`;
    });
    content.innerHTML = html;
}
function renderMembers() {
    const id = getQueryParam('id'); if (id !== null && memberData[id]) { renderMemberDetail(id); return; }
    const content = document.getElementById('member-content'); if (!content) return;
    renderMembersContent('all');
    document.querySelectorAll('.member-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.member-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMembersContent(btn.dataset.group);
        });
    });
}
function createMemberCard(m, index) {
    let engName = m.name; let korName = "";
    if (m.name.includes('(')) { const parts = m.name.split('('); engName = parts[0].trim(); korName = parts[1].replace(')', '').trim(); }
    const descParts = m.desc.split(','); let keyword = "";
    if (descParts.length > 1) { keyword = descParts.slice(1).join(', ').trim(); }
    const onclick = (m.role === 'prof' && m.website)
        ? `window.open('${m.website}','_blank')`
        : `location.href='members.html?id=${index}'`;
    return `<div class="member-card" onclick="${onclick}"><img src="${m.image}" onerror="this.src='images/member_placeholder.png'" alt="${m.name}">${keyword ? `<span class="member-keyword">${keyword}</span>` : ''}<div class="member-name-group"><div class="name-eng">${engName}</div>${korName ? `<div class="name-kor">${korName}</div>` : ''}</div></div>`;
}
function renderMemberDetail(index) {
    const m = memberData[index];
    if (m.role === 'prof' && m.website) { window.location.replace(m.website); return; }
    const container = document.querySelector('.container');
    const imgSrc = m.detailImage || m.image;

    // Keywords → hero pill badges
    const kwHtml = (m.detail && m.detail.keyword && m.detail.keyword.length)
        ? `<div class="member-detail-keywords">${m.detail.keyword.map(k => `<span class="member-detail-kw">${k}</span>`).join('')}</div>`
        : '';

    const websiteLink = m.website
        ? `<a href="${m.website}" target="_blank" class="member-detail-website"><i class="fas fa-globe"></i> Personal Website</a>`
        : '';

    let extraInfo = '';
    if (m.detail) {
        if (m.detail.introduction) {
            extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary);border-bottom:2px solid #f1f5f9;padding-bottom:10px;font-size:1.2rem;">Introduction</h4><p style="margin-top:14px;font-size:1.05rem;line-height:1.85;color:#334155;white-space:pre-wrap;">${m.detail.introduction}</p></div>`;
        }
        if (m.detail.research) {
            extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary);border-bottom:2px solid #f1f5f9;padding-bottom:10px;font-size:1.2rem;">Research</h4><p style="margin-top:14px;font-size:1.05rem;line-height:1.85;color:#334155;white-space:pre-wrap;">${m.detail.research}</p></div>`;
        }
        if (m.detail.interest) {
            extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary);border-bottom:2px solid #f1f5f9;padding-bottom:10px;font-size:1.2rem;">Interests</h4><ul style="padding-left:20px;margin-top:14px;font-size:1.05rem;line-height:1.85;">${m.detail.interest.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
        }
        if (m.detail.education) {
            extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary);border-bottom:2px solid #f1f5f9;padding-bottom:10px;font-size:1.2rem;">Education</h4><ul style="padding-left:20px;margin-top:14px;font-size:1.05rem;line-height:1.85;">${m.detail.education.map(e => `<li>${e}</li>`).join('')}</ul></div>`;
        }
        if (m.detail.position) {
            extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary);border-bottom:2px solid #f1f5f9;padding-bottom:10px;font-size:1.2rem;">Positions</h4><ul style="padding-left:20px;margin-top:14px;font-size:1.05rem;line-height:1.85;">${m.detail.position.map(p => `<li>${p}</li>`).join('')}</ul></div>`;
        }
    } else {
        extraInfo = `<div class="info-group"><p style="color:#64748b;">${m.desc}</p></div>`;
    }

    container.innerHTML = `
<div style="max-width:900px;margin:0 auto;padding-top:20px;">
  <a href="members.html" class="back-btn" style="margin-bottom:28px;display:inline-flex;align-items:center;gap:8px;font-weight:700;color:var(--dark);text-decoration:none;font-size:0.97rem;"><i class="fas fa-arrow-left"></i> Back to Members</a>
  <div class="member-detail-hero">
    <img src="${imgSrc}" class="member-detail-photo" onerror="this.src='images/member_placeholder.png'" alt="${m.name}">
    <div class="member-detail-info">
      <h1 class="member-detail-name">${m.name}</h1>
      <p class="member-detail-role">${m.desc}</p>
      <p class="member-detail-email">${m.email || ''}</p>
      ${kwHtml}
      ${websiteLink}
    </div>
  </div>
  ${extraInfo ? `<div class="member-detail-card">${extraInfo}</div>` : ''}
</div>`;
    window.scrollTo(0, 0);
}

/* =========================================
   [5] 논문 페이지 (베뉴 연동 & 페이지네이션)
   ========================================= */
let currentPubList = []; let currentPage = 1; const itemsPerPage = 10;
function renderPublications() {
    const container = document.getElementById('pub-list'); if (!container || typeof publicationData === 'undefined') return;
    if (typeof koreanPapers !== 'undefined' && koreanPapers.length > 0) {
        const existingIds = new Set(publicationData.map(p => p.title));
        koreanPapers.forEach(p => { if (!existingIds.has(p.title)) { publicationData.push(p); existingIds.add(p.title); } });
    }
    const startInput = document.getElementById('year-start'); const endInput = document.getElementById('year-end');
    let minYear = 2000; let maxYear = new Date().getFullYear();
    if (startInput && endInput && publicationData.length > 0) {
        const years = publicationData.map(p => p.year); minYear = Math.min(...years); maxYear = Math.max(...years);
        startInput.min = minYear; startInput.max = maxYear; endInput.min = minYear; endInput.max = maxYear;
        startInput.value = minYear; endInput.value = maxYear;
        [startInput, endInput].forEach(input => {
            input.addEventListener('change', () => { updateVenueOptions(); applyPubFilter(); document.querySelectorAll('.year-chip').forEach(b => b.classList.remove('active')); });
        });
    }
    renderQuickYearFilters(minYear, maxYear); updateVenueOptions(); applyPubFilter();
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => { buttons.forEach(b => b.classList.remove('active')); btn.classList.add('active'); updateVenueOptions(); applyPubFilter(); });
    });
}
function updateVenueOptions() {
    const venueSelect = document.getElementById('venue-filter'); if (!venueSelect) return;
    const activeTab = document.querySelector('.tab-btn.active'); const category = activeTab ? activeTab.dataset.cat : 'all';
    const startInput = document.getElementById('year-start'); const endInput = document.getElementById('year-end');
    const startYear = startInput ? (parseInt(startInput.value) || 0) : 0; const endYear = endInput ? (parseInt(endInput.value) || 9999) : 9999;
    const currentVenue = venueSelect.value;
    const targetPubs = publicationData.filter(pub => {
        let catMatch;
        if (category === 'all') {
            catMatch = pub.category === 'journal' || pub.category === 'conference' || pub.category === 'poster' || pub.category === 'demo';
        } else if (category === 'poster') {
            catMatch = pub.category === 'poster' || pub.category === 'demo';
        } else {
            catMatch = pub.category === category;
        }
        return catMatch && pub.year >= startYear && pub.year <= endYear;
    });
    const venueSet = new Set(); targetPubs.forEach(pub => { if (pub.venueShort) venueSet.add(pub.venueShort); });
    venueSelect.innerHTML = '<option value="all">All Venues</option>';
    Array.from(venueSet).sort().forEach(shortName => { const option = document.createElement('option'); option.value = shortName; option.innerText = shortName; venueSelect.appendChild(option); });
    if (venueSet.has(currentVenue)) venueSelect.value = currentVenue; else venueSelect.value = 'all';
}
function renderQuickYearFilters(minDataYear, maxDataYear) {
    const controls = document.querySelector('.pub-controls'); const searchContainer = document.querySelector('.search-container');
    if (!controls || !searchContainer) return;
    const existing = document.querySelector('.quick-year-container'); if (existing) existing.remove();
    const quickContainer = document.createElement('div'); quickContainer.className = 'quick-year-container';
    const allBtn = document.createElement('button'); allBtn.className = 'year-chip active'; allBtn.innerText = 'All Time'; allBtn.onclick = () => setYearRange(minDataYear, maxDataYear, allBtn); quickContainer.appendChild(allBtn);
    for (let i = 0; i < 5; i++) { const year = maxDataYear - i; const btn = document.createElement('button'); btn.className = 'year-chip'; btn.innerText = year; btn.onclick = () => setYearRange(year, year, btn); quickContainer.appendChild(btn); }
    const cutoffYear = maxDataYear - 5; const prevBtn = document.createElement('button'); prevBtn.className = 'year-chip'; prevBtn.innerText = `~ ${cutoffYear}`; prevBtn.onclick = () => setYearRange(minDataYear, cutoffYear, prevBtn); quickContainer.appendChild(prevBtn);
    controls.insertBefore(quickContainer, searchContainer);
}
function setYearRange(start, end, activeBtn) {
    const startInput = document.getElementById('year-start'); const endInput = document.getElementById('year-end');
    if (startInput && endInput) { startInput.value = start; endInput.value = end; updateVenueOptions(); applyPubFilter(); document.querySelectorAll('.year-chip').forEach(b => b.classList.remove('active')); if(activeBtn) activeBtn.classList.add('active'); }
}
/* script.js - applyPubFilter 함수 수정 */

function applyPubFilter() {
    const activeTab = document.querySelector('.tab-btn.active');
    const category = activeTab ? activeTab.dataset.cat : 'all';

    const startInput = document.getElementById('year-start');
    const endInput = document.getElementById('year-end');
    const searchInput = document.getElementById('search-keyword');
    const venueSelect = document.getElementById('venue-filter');

    const startYear = startInput ? (parseInt(startInput.value) || 0) : 0;
    const endYear = endInput ? (parseInt(endInput.value) || 9999) : 9999;
    const searchKeyword = searchInput ? searchInput.value.toLowerCase() : "";
    const selectedVenue = venueSelect ? venueSelect.value : 'all';

    currentPubList = publicationData.filter(pub => {
        let catMatch;
        if (category === 'all') {
            catMatch = pub.category === 'journal' || pub.category === 'conference' || pub.category === 'poster' || pub.category === 'demo';
        } else if (category === 'poster') {
            catMatch = pub.category === 'poster' || pub.category === 'demo';
        } else {
            catMatch = pub.category === category;
        }
        const yearMatch = pub.year >= startYear && pub.year <= endYear;
        const textMatch = pub.title.toLowerCase().includes(searchKeyword) ||
                          pub.authors.toLowerCase().includes(searchKeyword);
        const venueMatch = selectedVenue === 'all' || pub.venueShort === selectedVenue;
        return catMatch && yearMatch && textMatch && venueMatch;
    });

    currentPubList.sort((a, b) => b.year - a.year);

    // [신규] 필터링된 개수 표시 로직
    updatePubCount(currentPubList.length);

    currentPage = 1;
    renderPubPage(currentPage);
    renderPagination();
}

// [신규] 개수 표시 헬퍼 함수
function updatePubCount(count) {
    let countContainer = document.getElementById('pub-count-display');

    // 처음 실행 시 컨테이너가 없으면 생성하여 pub-controls 뒤에 삽입
    if (!countContainer) {
        countContainer = document.createElement('div');
        countContainer.id = 'pub-count-display';
        countContainer.className = 'pub-count-banner';
        const controls = document.querySelector('.pub-controls');
        if (controls) {
            controls.parentNode.insertBefore(countContainer, controls.nextSibling);
        }
    }

    countContainer.innerHTML = `Total <strong>${count}</strong> publication${count !== 1 ? 's' : ''} found`;
}
function renderPubPage(page) {
    const container = document.getElementById('pub-list'); container.innerHTML = ''; if (currentPubList.length === 0) { container.innerHTML = '<div style="text-align:center; padding:40px; color:#999;">No publications found.</div>'; return; }
    const startIndex = (page - 1) * itemsPerPage; const endIndex = Math.min(startIndex + itemsPerPage, currentPubList.length); const batch = currentPubList.slice(startIndex, endIndex);
    let lastYear = null;
    batch.forEach(pub => {
        if (pub.year !== lastYear) { const yearHeader = document.createElement('div'); yearHeader.className = 'pub-year-header'; yearHeader.innerText = pub.year; container.appendChild(yearHeader); lastYear = pub.year; }
        const itemDiv = document.createElement('div');
        if (pub.category === 'korean') {
            itemDiv.className = 'pub-item korean-pub-item';
            const linkHtml = pub.link ? ` <a href="${pub.link}" target="_blank" class="korean-pub-link"><i class="fas fa-external-link-alt"></i></a>` : '';
            itemDiv.innerHTML = `<div class="pub-content"><div class="korean-pub-title">${pub.title}${linkHtml}</div><div class="pub-authors">${pub.authors}</div><div class="pub-venue">${pub.venue || ''}</div></div>`;
        } else {
            itemDiv.className = 'pub-item';
            let linkButtons = '';
            if (pub.link && !pub.link.includes('youtu')) {
                let btnText = pub.category === 'patent' ? "Patent" : "Paper";
                let btnIcon = pub.category === 'patent' ? "fa-certificate" : "fa-file-alt";
                linkButtons += `<a href="${pub.link}" class="pub-link btn-paper" target="_blank"><i class="fas ${btnIcon}"></i><span>${btnText}</span></a>`;
            }
            let videoUrl = pub.video || (pub.link && pub.link.includes('youtu') ? pub.link : null);
            if (videoUrl) linkButtons += `<a href="${videoUrl}" class="pub-link btn-video" target="_blank"><i class="fab fa-youtube"></i><span>Video</span></a>`;
            const catBadge = `<span class="pub-badge ${pub.category}">${pub.category}</span>`; const venueBadge = (pub.category === 'patent' && pub.venueShort) ? `<span class="pub-badge venue-tag">${pub.venueShort}</span>` : '';
            const awardRegex = /(Best|Award|Honorable|Prize|Choice|Candidate|Finalist|Teaser|Cover)/i;
            let displayTitle = pub.title.replace('👑', '').trim(); if (pub.venue && awardRegex.test(pub.venue)) displayTitle = "👑 " + displayTitle;
            let highlightedVenue = pub.venue || ""; if (highlightedVenue) highlightedVenue = highlightedVenue.replace(/(\([^)]*(?:Best|Award|Honorable|Prize|Choice|Candidate|Finalist|Teaser|Cover)[^)]*\))/gi, '<span class="award-text">$1</span>');
            itemDiv.innerHTML = `<div class="pub-content"><div class="badge-container">${catBadge}${venueBadge}</div><h3>${displayTitle}</h3><div class="pub-authors">${pub.authors}</div><div class="pub-venue">${highlightedVenue}</div></div><div class="pub-actions">${linkButtons}</div>`;
        }
        container.appendChild(itemDiv);
    });
}
function renderPagination() {
    const oldPag = document.getElementById('pub-pagination'); if (oldPag) oldPag.remove();
    const container = document.getElementById('pub-list'); if (currentPubList.length <= itemsPerPage) return;
    const totalPages = Math.ceil(currentPubList.length / itemsPerPage); const pagDiv = document.createElement('div'); pagDiv.id = 'pub-pagination'; pagDiv.className = 'pagination';
    let html = ''; if (currentPage > 1) html += `<button class="page-btn prev" onclick="changePage(${currentPage - 1})"><i class="fas fa-chevron-left"></i></button>`;
    let startPage = Math.max(1, currentPage - 2); let endPage = Math.min(totalPages, currentPage + 2);
    if (startPage > 1) { html += `<button class="page-btn" onclick="changePage(1)">1</button>`; if (startPage > 2) html += `<span class="dots">...</span>`; }
    for (let i = startPage; i <= endPage; i++) html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    if (endPage < totalPages) { if (endPage < totalPages - 1) html += `<span class="dots">...</span>`; html += `<button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>`; }
    if (currentPage < totalPages) html += `<button class="page-btn next" onclick="changePage(${currentPage + 1})"><i class="fas fa-chevron-right"></i></button>`;
    pagDiv.innerHTML = html; container.parentNode.appendChild(pagDiv);
}
function changePage(page) { currentPage = page; renderPubPage(page); renderPagination(); const pubSection = document.querySelector('.pub-controls'); if(pubSection) pubSection.scrollIntoView({ behavior: 'smooth' }); }

/* =========================================
   [6] 연구/수상/기타 페이지
   ========================================= */
function renderResearchPage() {
    const areaId = getQueryParam('area'); const projectId = getQueryParam('id');
    if (areaId !== null && researchAreas && researchAreas[areaId]) { renderAreaDetail(areaId); return; }
    if (projectId !== null && researchData && researchData[projectId]) { renderProjectDetail(projectId); return; }
    renderResearchHub();
}

function renderResearchHub() {
    const root = document.getElementById('research-root') || document.querySelector('.container');
    if (!root || typeof researchTopics === 'undefined') return;
    const cardsHtml = researchTopics.map(t => `
        <a href="research-detail.html?topic=${t.id}" class="rtopic-card">
            <div class="rtopic-num">${t.num}</div>
            <div class="rtopic-body">
                <h3 class="rtopic-title">${t.title}</h3>
                <p class="rtopic-tagline">${t.tagline}</p>
                <div class="rtopic-keys">${t.keywords.map(k => `<span class="rtopic-key">${k}</span>`).join('')}</div>
            </div>
            <i class="fas fa-arrow-right rtopic-arrow"></i>
        </a>`).join('');
    root.innerHTML = `
        <div class="page-header">
            <h1>Research</h1>
            <p>Ten focus areas spanning haptics, XR, and human-computer interaction.</p>
        </div>
        <div class="rtopic-grid">${cardsHtml}</div>`;
}

function renderResearchTopicPage() {
    const root = document.getElementById('research-detail-root');
    if (!root || typeof researchTopics === 'undefined') return;
    const topicId = parseInt(getQueryParam('topic'), 10);
    const t = researchTopics.find(x => x.id === topicId);
    if (!t) { root.innerHTML = '<p style="padding:60px 0;color:#64748b;">Topic not found.</p>'; return; }

    const thrustsHtml = t.thrusts.map(th => `
        <div class="rtd-thrust">
            <div class="rtd-thrust-header">
                <div class="thrust-badge">${th.badge}</div>
                <h3 class="thrust-name">${th.name}</h3>
            </div>
            <ul class="thrust-body">${th.items.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>`).join('');

    const grantsHtml = (t.grants && t.grants.length) ? `
        <div class="rtd-section">
            <h2 class="rtd-section-title">Major Grants</h2>
            <div style="overflow-x:auto;">
            <table class="grant-table">
                <thead><tr><th>Funding Organization</th><th>Project</th><th>Amount</th><th>Period</th><th>Role</th></tr></thead>
                <tbody>${t.grants.map(g => `<tr>
                    <td class="grant-org">${g.org}</td>
                    <td>${g.name}</td>
                    <td style="white-space:nowrap;">${g.amount}</td>
                    <td style="white-space:nowrap;">${g.years}</td>
                    <td style="white-space:nowrap;">${g.role}</td>
                </tr>`).join('')}</tbody>
            </table>
            </div>
        </div>` : '';

    const chaptersHtml = (t.chapters && t.chapters.length) ? `
        <div class="rtd-section">
            <h2 class="rtd-section-title">Book Chapters</h2>
            ${t.chapters.map(c => `
                <div class="rtd-pub-item">
                    <span class="venue-chip other">${c.venue}</span>
                    <div class="rtd-pub-body">
                        <div class="rtd-pub-title">${c.title}</div>
                        <div class="rtd-pub-authors">${c.authors}</div>
                        <div class="rtd-pub-venue">${c.venue}, ${c.year}</div>
                    </div>
                </div>`).join('')}
        </div>` : '';

    const makePubItems = arr => (arr && arr.length)
        ? arr.map(p => `
            <div class="rtd-pub-item">
                <span class="venue-chip ${p.venueClass}">${p.venue}</span>
                <div class="rtd-pub-body">
                    <div class="rtd-pub-title">${p.title}${p.award ? ` <span class="rtd-award"><i class="fas fa-trophy"></i> ${p.award}</span>` : ''}</div>
                    <div class="rtd-pub-authors">${p.authors}</div>
                    <div class="rtd-pub-venue">${p.venue}, ${p.year}</div>
                </div>
            </div>`).join('')
        : '<p style="color:#94a3b8;font-size:0.9rem;padding:10px 0;">No papers listed.</p>';

    // prev / next navigation
    const idx = researchTopics.indexOf(t);
    const prev = researchTopics[idx - 1];
    const next = researchTopics[idx + 1];
    const navHtml = `
        <div class="rtd-nav">
            ${prev ? `<a href="research-detail.html?topic=${prev.id}" class="rtd-nav-btn"><i class="fas fa-arrow-left"></i> ${prev.num} ${prev.title.split('&')[0].trim()}</a>` : '<span></span>'}
            ${next ? `<a href="research-detail.html?topic=${next.id}" class="rtd-nav-btn rtd-nav-btn--right">${next.num} ${next.title.split('&')[0].trim()} <i class="fas fa-arrow-right"></i></a>` : '<span></span>'}
        </div>`;

    root.innerHTML = `
        <div style="max-width:960px;margin:0 auto;padding-bottom:80px;">
            <nav class="rtd-breadcrumb">
                <a href="research.html">Research</a>
                <i class="fas fa-chevron-right"></i>
                <span>${t.title}</span>
            </nav>
            <div class="rtd-header">
                <div class="topic-watermark">${t.num}</div>
                <div class="rtd-header-content">
                    <div class="rtd-num-badge">Topic ${t.num}</div>
                    <h1 class="rtd-title">${t.title}</h1>
                    <div class="rtd-keys">${t.keywords.map(k => `<span class="rtd-key">${k}</span>`).join('')}</div>
                </div>
            </div>
            <div class="rtd-section">
                <h2 class="rtd-section-title">Overview</h2>
                <div class="rtd-overview">${t.overview.map(p => `<p>${p}</p>`).join('')}</div>
            </div>
            <div class="rtd-section">
                <h2 class="rtd-section-title">Research Thrusts</h2>
                <div class="rtd-thrusts">${thrustsHtml}</div>
            </div>
            ${grantsHtml}
            ${chaptersHtml}
            <div class="rtd-section">
                <h2 class="rtd-section-title">Representative Publications</h2>
                <div class="rtd-pub-tabs">
                    <button class="rtd-tab active" onclick="switchRtdTab(this,'rtd-journals-${t.id}')">Journal</button>
                    <button class="rtd-tab" onclick="switchRtdTab(this,'rtd-confs-${t.id}')">Conference</button>
                </div>
                <div id="rtd-journals-${t.id}">${makePubItems(t.journals)}</div>
                <div id="rtd-confs-${t.id}" style="display:none;">${makePubItems(t.conferences)}</div>
            </div>
            ${navHtml}
        </div>`;
    window.scrollTo(0, 0);
}

function switchRtdTab(btn, targetId) {
    const section = btn.closest('.rtd-section');
    section.querySelectorAll('.rtd-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tabParent = section.parentElement;
    tabParent.querySelectorAll('[id^="rtd-journals-"],[id^="rtd-confs-"]').forEach(el => el.style.display = 'none');
    document.getElementById(targetId).style.display = 'block';
}
function renderAreaDetail(index) {
    const area = researchAreas[index]; const container = document.querySelector('.container');
    container.innerHTML = `<div style="max-width:800px; margin:0 auto; padding-top:20px;"><a href="research.html" class="back-btn" style="margin-bottom:30px; display:inline-flex; align-items:center; gap:8px; font-weight:700; color:var(--dark); text-decoration:none;"><i class="fas fa-arrow-left"></i> Back to Research</a><img src="${area.thumbnail}" style="width:100%; height:300px; object-fit:cover; border-radius:16px; margin-bottom:30px;" onerror="this.src='images/lab_intro1.jpg'"><h1 style="font-size:2.5rem; margin-bottom:20px; line-height:1.3;">${area.title}</h1><div style="background:#fff; padding:40px; border-radius:20px; box-shadow:0 4px 15px rgba(0,0,0,0.05); font-size:1.1rem; line-height:1.8; color:#333;">${area.detail || area.desc}</div></div>`;
    window.scrollTo(0, 0);
}
function renderProjectDetail(index) {
    index = parseInt(index, 10);
    const r = researchData[index];
    const container = document.querySelector('.container');
    const allIndices = researchData.map((_, i) => i);
    const prevIdx = allIndices.slice(0, index).reverse().find(i => researchData[i].status === r.status);
    const nextIdx = allIndices.slice(index + 1).find(i => researchData[i].status === r.status);
    const statusColor = r.status === 'Ongoing' ? 'var(--primary)' : '#64748b';

    // Teaser image
    const teaserHtml = r.thumbnail
        ? `<img src="${r.thumbnail}" alt="${r.title}" style="width:100%;height:auto;display:block;" onerror="this.parentElement.innerHTML='<div style=\'display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 0;color:#8aaccc;gap:8px\'><i class=\'fas fa-image\' style=\'font-size:2rem\'></i><span style=\'font-size:13px\'>Teaser image</span></div>'">`
        : `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 0;color:#8aaccc;gap:8px;"><i class="fas fa-image" style="font-size:2rem;"></i><span style="font-size:13px;">Teaser image</span></div>`;

    // Keywords
    const kwHtml = (r.keywords && r.keywords.length)
        ? r.keywords.map(k => `<span style="background:#e6f1fb;color:#0c447c;font-size:12px;font-weight:600;padding:5px 13px;border-radius:20px;border:1px solid #b5d4f4;">${k}</span>`).join('')
        : '<span style="color:#8a9ab0;font-size:13px;">—</span>';

    // Related papers
    const papersHtml = (r.papers && r.papers.length)
        ? r.papers.map(p => `
            <div style="background:#fff;border:1px solid #dde5f0;border-radius:10px;padding:14px 16px;display:flex;gap:14px;align-items:flex-start;margin-bottom:10px;">
                <span style="background:#EEEDFE;color:#3C3489;font-size:10px;font-weight:700;padding:3px 9px;border-radius:5px;white-space:nowrap;margin-top:2px;letter-spacing:.05em;">${p.venueShort || ''}</span>
                <div>
                    <div style="font-size:14px;font-weight:600;color:#1a2540;margin-bottom:3px;line-height:1.4;">${p.title}</div>
                    <div style="font-size:12px;color:#6a7a90;margin-bottom:3px;">${p.authors}</div>
                    <div style="font-size:12px;color:#8a9ab0;font-style:italic;margin-bottom:4px;">${p.venue}</div>
                    ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" style="font-size:12px;color:#185FA5;text-decoration:none;font-weight:500;">View paper →</a>` : ''}
                </div>
            </div>`).join('')
        : '<p style="color:#8a9ab0;font-size:14px;margin:0;">No publications linked yet.</p>';

    // Prev / Next navigation
    const truncate = (t, n) => t && t.length > n ? t.slice(0, n) + '…' : (t || '');
    const prevBtn = prevIdx !== undefined
        ? `<a href="research.html?id=${prevIdx}" style="background:#fff;border:1px solid #d0dae8;border-radius:8px;padding:10px 16px;font-size:13px;color:#3a4a60;text-decoration:none;display:inline-flex;align-items:center;gap:6px;"><i class="fas fa-chevron-left"></i> ${truncate(researchData[prevIdx].title, 32)}</a>`
        : `<span style="opacity:.3;font-size:13px;padding:10px 0;">No previous</span>`;
    const nextBtn = nextIdx !== undefined
        ? `<a href="research.html?id=${nextIdx}" style="background:#fff;border:1px solid #d0dae8;border-radius:8px;padding:10px 16px;font-size:13px;color:#3a4a60;text-decoration:none;display:inline-flex;align-items:center;gap:6px;">${truncate(researchData[nextIdx].title, 32)} <i class="fas fa-chevron-right"></i></a>`
        : `<span style="opacity:.3;font-size:13px;padding:10px 0;">No next</span>`;

    container.innerHTML = `
        <div style="max-width:960px;margin:0 auto;padding-top:20px;padding-bottom:80px;">

            <!-- Back button -->
            <a href="research.html" class="back-btn" style="margin-bottom:28px;display:inline-flex;align-items:center;gap:8px;font-weight:700;color:var(--dark);text-decoration:none;">
                <i class="fas fa-arrow-left"></i> Back to Research
            </a>

            <!-- Hero -->
            <div style="background:#1a3a6b;border-radius:16px;padding:36px 32px 30px;margin-bottom:28px;">
                <div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:14px;">
                    <span style="background:${statusColor};color:#fff;font-size:11px;font-weight:700;padding:3px 12px;border-radius:20px;">${r.status}</span>
                    <span style="background:rgba(255,255,255,.14);color:#c8daf4;font-size:11px;font-weight:600;padding:3px 12px;border-radius:20px;">${r.agency}</span>
                    <span style="color:#7fa8d4;font-size:12px;border:1px solid rgba(127,168,212,.35);padding:3px 10px;border-radius:20px;">${r.period}</span>
                </div>
                <h1 style="color:#fff;font-size:24px;font-weight:700;line-height:1.38;margin:0 0 12px;">${r.title}</h1>
                ${r.tagline ? `<p style="color:#93b8e8;font-size:14px;font-style:italic;border-left:3px solid #378ADD;padding-left:12px;margin:0;">${r.tagline}</p>` : ''}
            </div>

            <!-- Teaser image -->
            <div style="width:100%;background:#ffffff;border-radius:12px;margin-bottom:28px;overflow:hidden;border:1.5px solid #1a1a1a;">
                ${teaserHtml}
            </div>

            <!-- Overview + Keywords -->
            <div style="display:grid;grid-template-columns:2fr 1fr;gap:28px;margin-bottom:28px;">
                <div>
                    <p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8a9ab0;margin:0 0 10px;">Research overview</p>
                    <p style="font-size:15px;line-height:1.8;color:#2a3040;margin:0;">${r.overview || r.description || ''}</p>
                </div>
                <div>
                    <p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8a9ab0;margin:0 0 10px;">Keywords</p>
                    <div style="display:flex;flex-wrap:wrap;gap:7px;">${kwHtml}</div>
                </div>
            </div>

            <!-- Divider -->
            <hr style="border:none;border-top:1px solid #dde5f0;margin:0 0 24px;" />

            <!-- Related publications -->
            <p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8a9ab0;margin:0 0 14px;">Related publications</p>
            ${papersHtml}

            <!-- Prev / Next -->
            <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-top:36px;">
                ${prevBtn}
                ${nextBtn}
            </div>
        </div>`;

    window.scrollTo(0, 0);
}
function renderAwardsPage() {
    const container = document.getElementById('award-list-container');
    if (!container || typeof awardData === 'undefined') return;
    container.innerHTML = '';

    const sorted = [...awardData].sort((a, b) => b.year - a.year);
    const byYear = {};
    sorted.forEach(item => {
        if (!byYear[item.year]) byYear[item.year] = [];
        byYear[item.year].push(item);
    });
    const years = Object.keys(byYear).sort((a, b) => parseInt(b) - parseInt(a));

    const typeLabel = { intl: 'International', domestic: 'Domestic', personal: 'Personal / Service' };
    const typeBadgeClass = { intl: 'award-badge-intl', domestic: 'award-badge-domestic', personal: 'award-badge-personal' };

    years.forEach(yr => {
        const group = document.createElement('div');
        group.className = 'award-year-group';
        group.innerHTML = `<div class="award-year-header">${yr}</div>`;

        byYear[yr].forEach(item => {
            const paperHtml    = item.paper    ? `<div class="award-paper">&ldquo;${item.paper}&rdquo;</div>` : '';
            const recipientHtml = item.recipient ? `<div class="award-recipient"><i class="fas fa-user"></i> ${item.recipient}</div>` : '';
            const badge = item.type ? `<span class="award-type-badge ${typeBadgeClass[item.type] || ''}">${typeLabel[item.type] || item.type}</span>` : '';
            group.innerHTML += `
                <div class="award-item">
                    ${badge}
                    <div class="award-item-name">${item.award}</div>
                    <div class="award-item-venue">${item.venue}</div>
                    ${paperHtml}${recipientHtml}
                </div>`;
        });
        container.appendChild(group);
    });
}
function renderPhotosPage() {
    const container = document.getElementById('photos-root') || document.querySelector('.container');
    if (!container) return;
    const albums = typeof photosData !== 'undefined' ? photosData : [];

    const headerHtml = `<div class="page-header"><h1>Lab Photos</h1></div>`;

    if (albums.length === 0) {
        container.innerHTML = headerHtml + `
            <div class="photos-empty">
                <i class="fas fa-camera"></i>
                <p>Photos coming soon.</p>
            </div>`;
        return;
    }

    const byYear = {};
    albums.forEach(p => {
        if (!byYear[p.year]) byYear[p.year] = [];
        byYear[p.year].push(p);
    });
    const years = Object.keys(byYear).sort((a, b) => parseInt(b) - parseInt(a));

    const gridHtml = years.map(yr => `
        <div class="photo-year-group">
            <div class="photo-year-label">${yr}</div>
            <div class="photo-grid">
                ${byYear[yr].map(p => `
                    <div class="photo-card">
                        <img src="${p.src}" alt="${p.title}" onerror="this.parentElement.style.display='none'">
                        <div class="photo-card-title">${p.title}</div>
                        ${p.date ? `<div class="photo-card-date">${p.date}</div>` : ''}
                    </div>`).join('')}
            </div>
        </div>`).join('');

    container.innerHTML = headerHtml + `<div class="photos-content">${gridHtml}</div>`;
}

/* =========================================
   [7] 실행
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    loadLayout();
    const path = window.location.pathname;
    const page = path.split("/").pop().replace(/\.html$/i, '') || 'index';
    if (page === 'index' || page === '') renderHome();
    else if (page === 'news') renderNewsPage();
    else if (page === 'members') renderMembers();
    else if (page === 'research') renderResearchPage();
    else if (page === 'research-detail') renderResearchTopicPage();
    else if (page === 'publications') renderPublications();
    else if (page === 'awards') renderAwardsPage();
    else if (page === 'photos') renderPhotosPage();
});
