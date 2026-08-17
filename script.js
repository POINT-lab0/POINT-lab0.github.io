/* script.js */

/* =========================================
   [1] 공통 레이아웃 & 유틸리티
   ========================================= */
function loadCommonHead() {
    const head = document.head;
    if (!document.querySelector('link[href="images/Logo_small.png"]')) {
        const favicon = document.createElement('link'); favicon.rel = 'icon'; favicon.type = 'image/png'; favicon.href = 'images/Logo_small.png'; head.appendChild(favicon);
    }
    if (!document.querySelector('link[href="style.css"]')) {
        const style = document.createElement('link'); style.rel = 'stylesheet'; style.href = 'style.css'; head.appendChild(style);
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
    const path = window.location.pathname; const page = path.split("/").pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const linkPage = item.getAttribute('href');
        if (page === linkPage || (page === '' && linkPage === 'index.html')) item.classList.add('active');
        else item.classList.remove('active');
    });
}
function getQueryParam(param) { const urlParams = new URLSearchParams(window.location.search); return urlParams.get(param); }
function getSortedNews() { if (typeof newsData === 'undefined') return []; return [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date)); }

const NEWS_CATEGORIES = {
    paper:   { label: 'Paper',   color: '#0085CA', bg: '#e8f4fb' },
    award:   { label: 'Award',   color: '#b45309', bg: '#fef3c7' },
    service: { label: 'Service', color: '#047857', bg: '#d1fae5' },
    event:   { label: 'Event',   color: '#7c3aed', bg: '#ede9fe' },
    grant:   { label: 'Grant',   color: '#0e7490', bg: '#cffafe' },
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
const NEWS_ICONS = { paper: '📄', award: '🏆', service: '🏛', event: '📣', grant: '💡' };

function renderNewsPage() {
    const id = getQueryParam('id'); if (id !== null && newsData[id]) { renderNewsDetail(id); return; }
    const container = document.getElementById('news-grid-full'); if (!container || typeof newsData === 'undefined') return;
    const sorted = getSortedNews(); container.innerHTML = '';

    let currentGroup = null;
    let trackEl = null;

    sorted.forEach(item => {
        const originalIndex = newsData.findIndex(n => n.id === item.id);
        const year = item.date ? item.date.split('-')[0] : '';
        const monthDay = item.date ? item.date.slice(5) : '';
        const icon = NEWS_ICONS[item.category] || '📌';
        const imgHtml = item.image
            ? `<img src="${item.image}" class="news-tl-img" onerror="this.style.display='none'">`
            : '';

        if (year !== currentGroup) {
            currentGroup = year;
            const groupDiv = document.createElement('div');
            groupDiv.className = 'news-year-group';
            groupDiv.innerHTML = `<div class="news-tl-track"><div class="news-year-tag">${year}</div></div>`;
            container.appendChild(groupDiv);
            trackEl = groupDiv.querySelector('.news-tl-track');
        }

        const card = document.createElement('div');
        card.className = 'news-tl-item';
        card.onclick = () => location.href = `news.html?id=${originalIndex}`;
        card.innerHTML = `
            <div class="news-tl-icon">${icon}</div>
            <div class="news-tl-body">
                <div class="news-tl-meta">${getCategoryBadge(item.category)}<span class="news-tl-date">${monthDay}</span></div>
                <div class="news-tl-title">${item.title}</div>
                <p class="news-tl-excerpt">${item.content}</p>
            </div>${imgHtml}`;
        trackEl.appendChild(card);
    });
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
            members.forEach(({m}) => { html += `<div class="alumni-item"><strong>${m.name}</strong><span>${m.desc}</span></div>`; });
            html += `</div>`;
        } else {
            const centered = g === 'prof' ? ' style="justify-content:center;"' : '';
            html += `<div class="member-grid"${centered}>`;
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
    let engName = m.name; let korName = ""; if (m.name.includes('(')) { const parts = m.name.split('('); engName = parts[0].trim(); korName = parts[1].replace(')', '').trim(); }
    const descParts = m.desc.split(','); let keyword = ""; if (descParts.length > 1) { keyword = descParts.slice(1).join(', ').trim(); }
    return `<div class="member-card" onclick="location.href='members.html?id=${index}'"><img src="${m.image}" onerror="this.src='images/member_placeholder.png'" alt="${m.name}">${keyword ? `<span class="member-keyword">${keyword}</span>` : ''}<div class="member-name-group"><div class="name-eng">${engName}</div>${korName ? `<div class="name-kor">${korName}</div>` : ''}</div><p class="member-email">${m.email || ''}</p></div>`;
}
function renderMemberDetail(index) {
    const m = memberData[index]; 
    const container = document.querySelector('.container'); 
    let extraInfo = ''; 
    const imgSrc = m.detailImage || m.image; 
    const websiteLink = m.website ? `<a href="${m.website}" target="_blank" style="display:inline-block; margin-top:15px; color:var(--primary); font-weight:700; text-decoration:none; font-size:1.1rem;"><i class="fas fa-globe"></i> Personal Website</a>` : '';
    
    if (m.detail) {
        // --- 줄글 형식 항목들 ---
        // 1. Introduction
        if (m.detail.introduction) {
            extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary); border-bottom:2px solid #f1f5f9; padding-bottom:10px; font-size:1.3rem;">Introduction</h4><p style="margin-top:15px; font-size:1.1rem; line-height:1.8; color:#334155; white-space: pre-wrap;">${m.detail.introduction}</p></div>`;
        }
        // 2. Research (혹시 모를 호환성을 위해 유지)
        if (m.detail.research) {
            extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary); border-bottom:2px solid #f1f5f9; padding-bottom:10px; font-size:1.3rem;">Research</h4><p style="margin-top:15px; font-size:1.1rem; line-height:1.8; color:#334155; white-space: pre-wrap;">${m.detail.research}</p></div>`;
        }

        // --- 리스트 형식 항목들 ---
        // 3. Keywords
        if (m.detail.keyword) {
            extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary); border-bottom:2px solid #f1f5f9; padding-bottom:10px; font-size:1.3rem;">Keywords</h4><ul style="padding-left:20px; margin-top:15px; font-size:1.1rem; line-height:1.8;">${m.detail.keyword.map(k => `<li>${k}</li>`).join('')}</ul></div>`;
        }
        // 4. Interests
        if (m.detail.interest) {
            extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary); border-bottom:2px solid #f1f5f9; padding-bottom:10px; font-size:1.3rem;">Interests</h4><ul style="padding-left:20px; margin-top:15px; font-size:1.1rem; line-height:1.8;">${m.detail.interest.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
        }
        // 5. Education (교수님용)
        if (m.detail.education) {
            extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary); border-bottom:2px solid #f1f5f9; padding-bottom:10px; font-size:1.3rem;">Education</h4><ul style="padding-left:20px; margin-top:15px; font-size:1.1rem; line-height:1.8;">${m.detail.education.map(e => `<li>${e}</li>`).join('')}</ul></div>`;
        }
        // 6. Positions (교수님용)
        if (m.detail.position) {
            extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary); border-bottom:2px solid #f1f5f9; padding-bottom:10px; font-size:1.3rem;">Positions</h4><ul style="padding-left:20px; margin-top:15px; font-size:1.1rem; line-height:1.8;">${m.detail.position.map(p => `<li>${p}</li>`).join('')}</ul></div>`;
        }
    } else { 
        extraInfo = `<div class="info-group"><h4>Info</h4><p>${m.desc}</p></div>`; 
    }

    container.innerHTML = `<div style="max-width:900px; margin:0 auto; padding-top:20px;"><a href="members.html" class="back-btn" style="margin-bottom:50px; display:inline-flex; align-items:center; gap:10px; font-weight:700; color:var(--dark); text-decoration:none; font-size:1.1rem;"><i class="fas fa-arrow-left"></i> Back to Members</a><div style="text-align:center; margin-bottom:60px;"><img src="${imgSrc}" class="detail-profile-img" onerror="this.src='images/member_placeholder.png'"><h1 style="font-size:3rem; margin:30px 0 10px; font-weight:800;">${m.name}</h1><p style="color:#64748b; font-size:1.3rem; margin-bottom:15px;">${m.email || ''}</p>${websiteLink}</div><div style="background:#fff; padding:50px; border-radius:30px; box-shadow:0 10px 40px rgba(0,0,0,0.05);">${extraInfo}</div></div>`;
    window.scrollTo(0, 0);
}

/* =========================================
   [5] 논문 페이지 (베뉴 연동 & 페이지네이션)
   ========================================= */
let currentPubList = []; let currentPage = 1; const itemsPerPage = 10;
function renderPublications() {
    const container = document.getElementById('pub-list'); if (!container || typeof publicationData === 'undefined') return;
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
        let catMatch = category === 'all' || (category === 'poster' ? (pub.category === 'poster' || pub.category === 'demo') : pub.category === category);
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
        let catMatch = category === 'all' || (category === 'poster' ? (pub.category === 'poster' || pub.category === 'demo') : pub.category === category);
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
        const itemDiv = document.createElement('div'); itemDiv.className = 'pub-item';
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
    if (areaId !== null && researchAreas[areaId]) { renderAreaDetail(areaId); return; }
    if (projectId !== null && researchData[projectId]) { renderProjectDetail(projectId); return; }
    const ongoingContainer = document.getElementById('ongoing-list'); const completedContainer = document.getElementById('completed-list');
    if (!ongoingContainer || typeof researchData === 'undefined') return;
    ongoingContainer.innerHTML = ''; completedContainer.innerHTML = '';
    researchData.forEach((r, idx) => {
        const statusClass = r.status === 'Ongoing' ? 'ongoing' : 'completed';
        if (r.status === 'Ongoing') {
            const thumbHtml = r.thumbnail
                ? `<img src="${r.thumbnail}" class="proj-thumb-img" onerror="this.src='images/lab_intro1.jpg'">`
                : `<div class="proj-thumb-placeholder"><i class="fas fa-image"></i></div>`;
            ongoingContainer.innerHTML += `<div class="proj-thumb-card ongoing" onclick="location.href='research.html?id=${idx}'">${thumbHtml}<div class="proj-thumb-info"><span class="proj-status ongoing">${r.status}</span><h4>${r.title}</h4><div class="proj-meta">${r.agency} | ${r.period}</div></div></div>`;
        } else {
            const year = r.period ? r.period.split('~')[0].trim().split('.')[0] + (r.period.includes('~') ? ' ~ ' + r.period.split('~')[1].trim().split('.')[0] : '') : '';
            completedContainer.innerHTML += `<div class="proj-list-item" onclick="location.href='research.html?id=${idx}'"><div class="proj-list-info"><h4>${r.title}</h4><div class="proj-list-meta"><span>${r.agency}</span><span class="proj-list-period">${year}</span></div></div><i class="fas fa-chevron-right"></i></div>`;
        }
    });
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
    const container = document.getElementById('award-list-container'); if (!container || typeof awardData === 'undefined') return;
    container.innerHTML = ''; const sorted = [...awardData].sort((a, b) => parseInt(b.date) - parseInt(a.date));
    sorted.forEach(item => { container.innerHTML += `<div class="pub-item award-item-style"><div class="pub-year" style="min-width:80px;">${item.date}</div><div class="pub-content"><h3>${item.title}</h3><div class="pub-venue" style="color:#666; font-style:normal;">${item.organization}</div></div></div>`; });
}

/* =========================================
   [7] 실행
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    loadLayout();
    const path = window.location.pathname; const page = path.split("/").pop() || 'index.html';
    if (page === 'index.html' || page === '') renderHome();
    else if (page === 'news.html') renderNewsPage();
    else if (page === 'members.html') renderMembers();
    else if (page === 'research.html') renderResearchPage();
    else if (page === 'publications.html') renderPublications();
    else if (page === 'awards.html') renderAwardsPage();
});
