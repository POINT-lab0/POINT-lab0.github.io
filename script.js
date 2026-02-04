/* script.js - 통합 전체 코드 (베뉴 필터 연동 업그레이드) */

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
        newToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

function highlightActiveMenu() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const linkPage = item.getAttribute('href');
        if (page === linkPage || (page === '' && linkPage === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function getSortedNews() {
    if (typeof newsData === 'undefined') return [];
    return [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
}


/* =========================================
   [2] 메인 페이지 (Home)
   ========================================= */
function renderHome() {
    const ytContainer = document.getElementById('youtube-gallery');
    if (ytContainer && typeof youtubeVideos !== 'undefined') {
        ytContainer.innerHTML = '';
        youtubeVideos.forEach(v => {
            ytContainer.innerHTML += `
                <div class="video-wrapper">
                    <iframe src="${v.embedUrl}" title="${v.title}" allowfullscreen></iframe>
                </div>`;
        });
    }

    const newsContainer = document.getElementById('home-news');
    if (newsContainer && typeof newsData !== 'undefined') {
        const sorted = getSortedNews();
        const latestNews = sorted.slice(0, 5);

        newsContainer.innerHTML = `
            <div class="news-split-layout">
                <div class="news-list-container" id="home-news-list"></div>
                <div class="news-preview-pane" id="home-news-preview"></div>
            </div>`;

        const listContainer = document.getElementById('home-news-list');
        const previewPane = document.getElementById('home-news-preview');

        latestNews.forEach((item, index) => {
            const originalIndex = newsData.findIndex(n => n.id === item.id);
            const li = document.createElement('div');
            li.className = 'news-list-item';
            li.innerHTML = `
                <span class="news-item-date">${item.date}</span>
                <h3 class="news-item-title">${item.title}</h3>
            `;
            li.addEventListener('mouseenter', () => { updateHomeNewsPreview(previewPane, item); });
            li.addEventListener('click', () => { location.href = `news.html?id=${originalIndex}`; });
            listContainer.appendChild(li);
        });

        if (latestNews.length > 0) {
            updateHomeNewsPreview(previewPane, latestNews[0]);
        }
    }
}

function updateHomeNewsPreview(pane, item) {
    if (item.image) {
        pane.innerHTML = `<img src="${item.image}" class="news-preview-img" alt="Preview">`;
    } else {
        const shortContent = item.content.length > 120 ? item.content.substring(0, 120) + "..." : item.content;
        pane.innerHTML = `
            <div class="news-preview-content">
                <i class="far fa-newspaper" style="font-size:3rem; margin-bottom:15px; opacity:0.8;"></i>
                <h3 style="margin-bottom:10px;">${item.title}</h3>
                <p style="font-size:0.95rem; opacity:0.9;">${shortContent}</p>
            </div>`;
    }
}


/* =========================================
   [3] 뉴스 페이지 (News)
   ========================================= */
function renderNewsPage() {
    const id = getQueryParam('id');
    if (id !== null && newsData[id]) { renderNewsDetail(id); return; }
    const container = document.getElementById('news-grid-full');
    if (!container || typeof newsData === 'undefined') return;
    const sorted = getSortedNews();
    container.innerHTML = '';
    sorted.forEach(item => {
        const originalIndex = newsData.findIndex(n => n.id === item.id);
        const imgHtml = item.image ? `<img src="${item.image}" class="news-thumb" onerror="this.style.display='none'">` : '';
        container.innerHTML += `
            <div class="news-card" onclick="location.href='news.html?id=${originalIndex}'">
                ${imgHtml}
                <div class="news-body">
                    <span class="news-date">${item.date}</span>
                    <h3>${item.title}</h3>
                    <p style="color:#666; font-size:0.95rem;">${item.content}</p>
                    <div class="read-more">Read More &rarr;</div>
                </div>
            </div>`;
    });
}

function renderNewsDetail(index) {
    const item = newsData[index];
    const container = document.querySelector('.container');
    const imgHtml = item.image ? `<img src="${item.image}" style="width:100%; max-height:400px; border-radius:16px; object-fit:cover; margin-bottom:30px;" onerror="this.style.display='none'">` : '';
    container.innerHTML = `
        <div style="max-width:800px; margin:0 auto; padding-top:20px;">
            <a href="news.html" class="back-btn" style="margin-bottom:30px; display:inline-flex; align-items:center; gap:8px; font-weight:700; color:var(--dark); text-decoration:none;">
                <i class="fas fa-arrow-left"></i> Back to News
            </a>
            ${imgHtml}
            <span style="color:var(--primary); font-weight:700; display:block; margin-bottom:10px;">${item.date}</span>
            <h1 style="font-size:2.5rem; margin-bottom:30px; line-height:1.3;">${item.title}</h1>
            <div style="font-size:1.15rem; line-height:1.8; color:#333; background:#fff; padding:40px; border-radius:20px; box-shadow:0 4px 15px rgba(0,0,0,0.05);">
                ${item.detailContent || item.content}
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}


/* =========================================
   [4] 멤버 페이지 (Members)
   ========================================= */
function renderMembers() {
    const id = getQueryParam('id'); if (id !== null && memberData[id]) { renderMemberDetail(id); return; }
    const profList = document.getElementById('prof-list'); const postdocList = document.getElementById('postdoc-list'); const postdocHeader = document.getElementById('postdoc-header'); const phdList = document.getElementById('phd-list'); const msList = document.getElementById('ms-list'); const alumniList = document.getElementById('alumni-list');
    if (!profList) return; profList.innerHTML = ''; if (postdocList) postdocList.innerHTML = ''; phdList.innerHTML = ''; msList.innerHTML = ''; if (alumniList) alumniList.innerHTML = '';
    if (typeof memberData === 'undefined') return;
    let hasPostDoc = false;
    memberData.forEach((m, index) => {
        if (m.role !== 'alumni') {
            const card = createMemberCard(m, index); const descLower = m.desc.toLowerCase();
            if (m.role === 'prof') profList.innerHTML += card;
            else if (descLower.includes('post-doc') || descLower.includes('researcher')) { if (postdocList) { postdocList.innerHTML += card; hasPostDoc = true; } }
            else if (descLower.includes('ph.d') || descLower.includes('direct')) phdList.innerHTML += card;
            else if (descLower.includes('master') || descLower.includes('m.s')) msList.innerHTML += card;
        }
    });
    if (postdocHeader) postdocHeader.style.display = hasPostDoc ? 'block' : 'none';
    if (alumniList) {
        const alumni = memberData.filter(m => m.role === 'alumni');
        alumni.sort((a, b) => { const getYear = (str) => { const match = str.match(/\((19|20)\d{2}\)/); return match ? parseInt(match[0].replace(/[()]/g, '')) : 0; }; return getYear(b.desc) - getYear(a.desc); });
        alumni.forEach(m => { alumniList.innerHTML += `<div class="alumni-item" style="background:#fff; padding:15px; border-radius:10px; box-shadow:0 2px 5px rgba(0,0,0,0.05); border-left:4px solid #ccc;"><strong style="color:var(--dark);">${m.name}</strong><span style="font-size:0.85rem; color:#666; display:block; margin-top:4px;">${m.desc}</span></div>`; });
    }
}
function createMemberCard(m, index) {
    let engName = m.name; let korName = ""; if (m.name.includes('(')) { const parts = m.name.split('('); engName = parts[0].trim(); korName = parts[1].replace(')', '').trim(); }
    const descParts = m.desc.split(','); let keyword = ""; if (descParts.length > 1) { keyword = descParts.slice(1).join(', ').trim(); }
    return `<div class="member-card" onclick="location.href='members.html?id=${index}'"><img src="${m.image}" onerror="this.src='images/member_placeholder.png'" alt="${m.name}">${keyword ? `<span class="member-keyword">${keyword}</span>` : ''}<div class="member-name-group"><div class="name-eng">${engName}</div>${korName ? `<div class="name-kor">${korName}</div>` : ''}</div><p class="member-email">${m.email || ''}</p></div>`;
}
function renderMemberDetail(index) {
    const m = memberData[index]; const container = document.querySelector('.container'); let extraInfo = ''; const imgSrc = m.detailImage || m.image; const websiteLink = m.website ? `<a href="${m.website}" target="_blank" style="display:inline-block; margin-top:15px; color:var(--primary); font-weight:700; text-decoration:none; font-size:1.1rem;"><i class="fas fa-globe"></i> Personal Website</a>` : '';
    if (m.detail) {
        if (m.detail.education) extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary); border-bottom:2px solid #f1f5f9; padding-bottom:10px; font-size:1.3rem;">Education</h4><ul style="padding-left:20px; margin-top:15px; font-size:1.1rem; line-height:1.8;">${m.detail.education.map(e => `<li>${e}</li>`).join('')}</ul></div>`;
        if (m.detail.position) extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary); border-bottom:2px solid #f1f5f9; padding-bottom:10px; font-size:1.3rem;">Positions</h4><ul style="padding-left:20px; margin-top:15px; font-size:1.1rem; line-height:1.8;">${m.detail.position.map(e => `<li>${e}</li>`).join('')}</ul></div>`;
        if (m.detail.membership) extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary); border-bottom:2px solid #f1f5f9; padding-bottom:10px; font-size:1.3rem;">Memberships</h4><ul style="padding-left:20px; margin-top:15px; font-size:1.1rem; line-height:1.8;">${m.detail.membership.map(e => `<li>${e}</li>`).join('')}</ul></div>`;
    } else { extraInfo = `<div class="info-group"><h4>Info</h4><p>${m.desc}</p></div>`; }
    container.innerHTML = `<div style="max-width:900px; margin:0 auto; padding-top:20px;"><a href="members.html" class="back-btn" style="margin-bottom:50px; display:inline-flex; align-items:center; gap:10px; font-weight:700; color:var(--dark); text-decoration:none; font-size:1.1rem;"><i class="fas fa-arrow-left"></i> Back to Members</a><div style="text-align:center; margin-bottom:60px;"><img src="${imgSrc}" class="detail-profile-img" onerror="this.src='images/member_placeholder.png'"><h1 style="font-size:3rem; margin:30px 0 10px; font-weight:800;">${m.name}</h1><p style="color:#64748b; font-size:1.3rem; margin-bottom:15px;">${m.email || ''}</p>${websiteLink}</div><div style="background:#fff; padding:50px; border-radius:30px; box-shadow:0 10px 40px rgba(0,0,0,0.05);">${extraInfo}</div></div>`;
    window.scrollTo(0, 0);
}


/* =========================================
   [5] 논문 페이지 (베뉴 연동 & 페이지네이션)
   ========================================= */
let currentPubList = [];
let currentPage = 1;
const itemsPerPage = 10;

function renderPublications() {
    const container = document.getElementById('pub-list');
    if (!container || typeof publicationData === 'undefined') return;

    // 1. 연도 범위 및 초기값 설정 (최신순)
    const startInput = document.getElementById('year-start');
    const endInput = document.getElementById('year-end');

    let minYear = 2000;
    let maxYear = new Date().getFullYear();

    if (startInput && endInput && publicationData.length > 0) {
        const years = publicationData.map(p => p.year);
        minYear = Math.min(...years);
        maxYear = Math.max(...years);

        startInput.min = minYear;
        startInput.max = maxYear;
        endInput.min = minYear;
        endInput.max = maxYear;

        // 초기값: 전체 기간
        startInput.value = minYear;
        endInput.value = maxYear;

        // [중요] 사용자가 입력창 숫자를 직접 바꿨을 때도 베뉴가 업데이트되도록 리스너 추가
        [startInput, endInput].forEach(input => {
            // 기존 인라인 onchange는 무시하고 새로 등록
            input.onchange = null;
            input.addEventListener('change', () => {
                updateVenueOptions(); // 베뉴 목록 갱신
                applyPubFilter();     // 리스트 갱신
                document.querySelectorAll('.year-chip').forEach(b => b.classList.remove('active')); // 칩 선택 해제
            });
        });
    }

    // 2. 빠른 연도 버튼 생성 (All Time, 2026, 2025...)
    renderQuickYearFilters(minYear, maxYear);

    // 3. 초기 로드 (베뉴 목록 만들기 -> 필터링)
    updateVenueOptions();
    applyPubFilter();

    // 탭 버튼 이벤트
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateVenueOptions(); // 탭 바뀔 때도 베뉴 목록 갱신
            applyPubFilter();
        });
    });
}

// [핵심] 현재 선택된 탭 + 연도 범위에 맞는 베뉴만 보여주는 함수
function updateVenueOptions() {
    const venueSelect = document.getElementById('venue-filter');
    if (!venueSelect) return;

    // 1. 현재 활성 탭 (저널/컨퍼런스 등)
    const activeTab = document.querySelector('.tab-btn.active');
    const category = activeTab ? activeTab.dataset.cat : 'all';

    // 2. 현재 입력된 연도 범위
    const startInput = document.getElementById('year-start');
    const endInput = document.getElementById('year-end');
    const startYear = startInput ? (parseInt(startInput.value) || 0) : 0;
    const endYear = endInput ? (parseInt(endInput.value) || 9999) : 9999;

    // 3. 현재 선택된 베뉴 값 기억 (리스트 갱신 후 복구 위해)
    const currentVenue = venueSelect.value;

    // 4. 데이터 필터링: 해당 카테고리 + 해당 연도에 논문이 있는 베뉴만 찾기
    const targetPubs = publicationData.filter(pub => {
        const catMatch = category === 'all' || pub.category === category;
        const yearMatch = pub.year >= startYear && pub.year <= endYear;
        return catMatch && yearMatch;
    });

    // 5. 베뉴 이름 수집 (중복 제거)
    const venueSet = new Set();
    targetPubs.forEach(pub => {
        if (pub.venueShort) venueSet.add(pub.venueShort);
    });

    // 6. 옵션 다시 그리기
    venueSelect.innerHTML = '<option value="all">All Venues</option>';
    Array.from(venueSet).sort().forEach(shortName => {
        const option = document.createElement('option');
        option.value = shortName;
        option.innerText = shortName;
        venueSelect.appendChild(option);
    });

    // 7. 이전에 선택한 베뉴가 새 목록에도 있으면 유지, 없으면 'all'로 초기화
    if (venueSet.has(currentVenue)) {
        venueSelect.value = currentVenue;
    } else {
        venueSelect.value = 'all';
    }
}

function renderQuickYearFilters(minDataYear, maxDataYear) {
    const controls = document.querySelector('.pub-controls');
    const searchContainer = document.querySelector('.search-container');

    if (!controls || !searchContainer) return;

    const existing = document.querySelector('.quick-year-container');
    if (existing) existing.remove();

    const quickContainer = document.createElement('div');
    quickContainer.className = 'quick-year-container';

    // [All Time]
    const allBtn = document.createElement('button');
    allBtn.className = 'year-chip active';
    allBtn.innerText = 'All Time';
    allBtn.onclick = () => setYearRange(minDataYear, maxDataYear, allBtn);
    quickContainer.appendChild(allBtn);

    // [Recent 5 Years]
    for (let i = 0; i < 5; i++) {
        const year = maxDataYear - i;
        const btn = document.createElement('button');
        btn.className = 'year-chip';
        btn.innerText = year;
        btn.onclick = () => setYearRange(year, year, btn);
        quickContainer.appendChild(btn);
    }

    // [Before ~]
    const cutoffYear = maxDataYear - 5;
    const prevBtn = document.createElement('button');
    prevBtn.className = 'year-chip';
    prevBtn.innerText = `~ ${cutoffYear}`;
    prevBtn.onclick = () => setYearRange(minDataYear, cutoffYear, prevBtn);
    quickContainer.appendChild(prevBtn);

    controls.insertBefore(quickContainer, searchContainer);
}

function setYearRange(start, end, activeBtn) {
    const startInput = document.getElementById('year-start');
    const endInput = document.getElementById('year-end');

    if (startInput && endInput) {
        startInput.value = start;
        endInput.value = end;

        updateVenueOptions(); // [중요] 연도가 바뀌었으니 베뉴 목록도 갱신
        applyPubFilter();

        document.querySelectorAll('.year-chip').forEach(b => b.classList.remove('active'));
        if(activeBtn) activeBtn.classList.add('active');
    }
}

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
        const catMatch = category === 'all' || pub.category === category;
        const yearMatch = pub.year >= startYear && pub.year <= endYear;
        const textMatch = pub.title.toLowerCase().includes(searchKeyword) ||
                          pub.authors.toLowerCase().includes(searchKeyword);
        const venueMatch = selectedVenue === 'all' || pub.venueShort === selectedVenue;
        return catMatch && yearMatch && textMatch && venueMatch;
    });

    currentPubList.sort((a, b) => b.year - a.year);

    currentPage = 1;
    renderPubPage(currentPage);
    renderPagination();
}

function renderPubPage(page) {
    const container = document.getElementById('pub-list');
    container.innerHTML = '';

    if (currentPubList.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding:40px; color:#999;">No publications found.</div>';
        return;
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, currentPubList.length);
    const batch = currentPubList.slice(startIndex, endIndex);

    let lastYear = null;

    batch.forEach(pub => {
        if (pub.year !== lastYear) {
            const yearHeader = document.createElement('div');
            yearHeader.className = 'pub-year-header';
            yearHeader.innerText = pub.year;
            container.appendChild(yearHeader);
            lastYear = pub.year;
        }

        const itemDiv = document.createElement('div');
        itemDiv.className = 'pub-item';

        let linkButtons = '';
        if (pub.link && !pub.link.includes('youtu')) {
            linkButtons += `<a href="${pub.link}" class="pub-link btn-paper" target="_blank"><i class="far fa-file-alt"></i><span>Paper</span></a>`;
        }
        let videoUrl = pub.video || (pub.link && pub.link.includes('youtu') ? pub.link : null);
        if (videoUrl) {
            linkButtons += `<a href="${videoUrl}" class="pub-link btn-video" target="_blank"><i class="fab fa-youtube"></i><span>Video</span></a>`;
        }

        const catBadge = `<span class="pub-badge ${pub.category}">${pub.category}</span>`;
        const venueBadge = (pub.category === 'patent' && pub.venueShort) ? `<span class="pub-badge venue-tag">${pub.venueShort}</span>` : '';
        const awardRegex = /(Best|Award|Honorable|Prize|Choice|Candidate|Finalist|Teaser|Cover)/i;
        let displayTitle = pub.title.replace('👑', '').trim();
        if (pub.venue && awardRegex.test(pub.venue)) displayTitle = "👑 " + displayTitle;
        let highlightedVenue = pub.venue || "";
        if (highlightedVenue) highlightedVenue = highlightedVenue.replace(/(\([^)]*(?:Best|Award|Honorable|Prize|Choice|Candidate|Finalist|Teaser|Cover)[^)]*\))/gi, '<span class="award-text">$1</span>');

        itemDiv.innerHTML = `
            <div class="pub-content">
                <div class="badge-container">${catBadge}${venueBadge}</div>
                <h3>${displayTitle}</h3>
                <div class="pub-authors">${pub.authors}</div>
                <div class="pub-venue">${highlightedVenue}</div>
            </div>
            <div class="pub-actions">${linkButtons}</div>`;
        container.appendChild(itemDiv);
    });
}

function renderPagination() {
    const oldPag = document.getElementById('pub-pagination');
    if (oldPag) oldPag.remove();

    const container = document.getElementById('pub-list');
    if (currentPubList.length <= itemsPerPage) return;

    const totalPages = Math.ceil(currentPubList.length / itemsPerPage);
    const pagDiv = document.createElement('div');
    pagDiv.id = 'pub-pagination';
    pagDiv.className = 'pagination';

    let html = '';
    if (currentPage > 1) html += `<button class="page-btn prev" onclick="changePage(${currentPage - 1})"><i class="fas fa-chevron-left"></i></button>`;

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
        html += `<button class="page-btn" onclick="changePage(1)">1</button>`;
        if (startPage > 2) html += `<span class="dots">...</span>`;
    }

    for (let i = startPage; i <= endPage; i++) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) html += `<span class="dots">...</span>`;
        html += `<button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
    }

    if (currentPage < totalPages) html += `<button class="page-btn next" onclick="changePage(${currentPage + 1})"><i class="fas fa-chevron-right"></i></button>`;

    pagDiv.innerHTML = html;
    container.parentNode.appendChild(pagDiv);
}

function changePage(page) {
    currentPage = page;
    renderPubPage(page);
    renderPagination();
    const pubSection = document.querySelector('.pub-controls');
    if(pubSection) pubSection.scrollIntoView({ behavior: 'smooth' });
}


/* =========================================
   [6] 연구/수상/기타 페이지
   ========================================= */
function renderResearchPage() {
    const areaId = getQueryParam('area'); const projectId = getQueryParam('id');
    if (areaId !== null && researchAreas[areaId]) { renderAreaDetail(areaId); return; }
    if (projectId !== null && researchData[projectId]) { renderProjectDetail(projectId); return; }
    const ongoingContainer = document.getElementById('ongoing-list'); const completedContainer = document.getElementById('completed-list'); const areaContainer = document.getElementById('research-areas');
    if (!ongoingContainer || typeof researchData === 'undefined') return;
    if (areaContainer && typeof researchAreas !== 'undefined') { areaContainer.innerHTML = ''; researchAreas.forEach((area, idx) => { areaContainer.innerHTML += `<div class="area-card" onclick="location.href='research.html?area=${idx}'"><img src="${area.thumbnail}" class="area-img" onerror="this.src='images/lab_intro1.jpg'"><div class="area-content"><h3>${area.title}</h3><p>${area.desc}</p></div></div>`; }); }
    ongoingContainer.innerHTML = ''; completedContainer.innerHTML = '';
    researchData.forEach((r, idx) => { const statusClass = r.status === 'Ongoing' ? 'ongoing' : 'completed'; const html = `<div class="project-card ${statusClass}" onclick="location.href='research.html?id=${idx}'"><div class="proj-info"><h4>${r.title}</h4><div class="proj-meta"><span class="proj-status ${statusClass}">${r.status}</span><span>${r.agency} | ${r.period}</span></div></div><i class="fas fa-chevron-right" style="color:#cbd5e1;"></i></div>`; if (r.status === 'Ongoing') ongoingContainer.innerHTML += html; else completedContainer.innerHTML += html; });
}
function renderAreaDetail(index) {
    const area = researchAreas[index]; const container = document.querySelector('.container');
    container.innerHTML = `<div style="max-width:800px; margin:0 auto; padding-top:20px;"><a href="research.html" class="back-btn" style="margin-bottom:30px; display:inline-flex; align-items:center; gap:8px; font-weight:700; color:var(--dark); text-decoration:none;"><i class="fas fa-arrow-left"></i> Back to Research</a><img src="${area.thumbnail}" style="width:100%; height:300px; object-fit:cover; border-radius:16px; margin-bottom:30px;" onerror="this.src='images/lab_intro1.jpg'"><h1 style="font-size:2.5rem; margin-bottom:20px; line-height:1.3;">${area.title}</h1><div style="background:#fff; padding:40px; border-radius:20px; box-shadow:0 4px 15px rgba(0,0,0,0.05); font-size:1.1rem; line-height:1.8; color:#333;">${area.detail || area.desc}</div></div>`;
    window.scrollTo(0, 0);
}
function renderProjectDetail(index) {
    const r = researchData[index]; const container = document.querySelector('.container'); const statusColor = r.status === 'Ongoing' ? 'var(--primary)' : '#64748b';
    container.innerHTML = `<div style="max-width:800px; margin:0 auto; padding-top:20px;"><a href="research.html" class="back-btn" style="margin-bottom:30px; display:inline-flex; align-items:center; gap:8px; font-weight:700; color:var(--dark); text-decoration:none;"><i class="fas fa-arrow-left"></i> Back to Projects</a><div style="margin-bottom:20px;"><span style="background:${statusColor}; color:white; padding:6px 15px; border-radius:20px; font-size:0.9rem; font-weight:bold;">${r.status}</span></div><h1 style="font-size:2.2rem; margin-bottom:15px; line-height:1.3;">${r.title}</h1><p style="color:#666; font-size:1.1rem; margin-bottom:40px; border-left:4px solid var(--secondary); padding-left:15px;"><strong>${r.agency}</strong> <br> ${r.period}</p><div style="background:#fff; padding:40px; border-radius:20px; box-shadow:0 4px 15px rgba(0,0,0,0.05); font-size:1.1rem; line-height:1.8;">${r.description}</div></div>`;
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
