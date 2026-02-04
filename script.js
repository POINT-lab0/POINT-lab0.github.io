/* script.js */

/* =========================================
   [1] 공통 레이아웃 & 유틸리티
   ========================================= */
function loadCommonHead() {
    const head = document.head;
    const favicon = document.createElement('link'); favicon.rel = 'icon'; favicon.type = 'image/png'; favicon.href = 'images/Logo_small.png'; head.appendChild(favicon);
    const style = document.createElement('link'); style.rel = 'stylesheet'; style.href = 'style.css'; head.appendChild(style);
    const fa = document.createElement('link'); fa.rel = 'stylesheet'; fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'; head.appendChild(fa);
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
        menuToggle.addEventListener('click', () => { navLinks.classList.toggle('active'); });
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

/* =========================================
   [2] 메인 페이지 (Home) - [수정됨: 뉴스 디자인 변경]
   ========================================= */
   /* script.js - renderHome 함수 수정 */

   function renderHome() {
       // 1. YouTube
       const ytContainer = document.getElementById('youtube-gallery');
       if (ytContainer && typeof youtubeVideos !== 'undefined') {
           ytContainer.innerHTML = '';
           youtubeVideos.forEach(v => {
               ytContainer.innerHTML += `<div class="video-wrapper"><iframe src="${v.embedUrl}" title="${v.title}" allowfullscreen></iframe></div>`;
           });
       }

       // 2. Latest News - [수정됨: 5개 표시]
       const newsContainer = document.getElementById('home-news');
       if (newsContainer && typeof newsData !== 'undefined') {
           const sorted = getSortedNews();

           // [여기 수정] 3 -> 5로 변경하여 5개까지 표시
           const latestNews = sorted.slice(0, 5);

           // 레이아웃 뼈대 생성
           newsContainer.innerHTML = `
               <div class="news-split-layout">
                   <div class="news-list-container" id="home-news-list"></div>
                   <div class="news-preview-pane" id="home-news-preview"></div>
               </div>`;

           const listContainer = document.getElementById('home-news-list');
           const previewPane = document.getElementById('home-news-preview');

           // 리스트 아이템 생성
           latestNews.forEach((item, index) => {
               const originalIndex = newsData.findIndex(n => n.id === item.id);

               const li = document.createElement('div');
               li.className = 'news-list-item';
               li.innerHTML = `
                   <span class="news-item-date">${item.date}</span>
                   <h3 class="news-item-title">${item.title}</h3>
               `;

               // 마우스 올리면(Hover) 프리뷰 변경
               li.addEventListener('mouseenter', () => {
                   updateHomeNewsPreview(previewPane, item);
               });

               // 클릭하면 상세 페이지 이동
               li.addEventListener('click', () => {
                   location.href = `news.html?id=${originalIndex}`;
               });

               listContainer.appendChild(li);
           });

           // 초기 화면: 첫 번째 뉴스 프리뷰 보여주기
           if (latestNews.length > 0) {
               updateHomeNewsPreview(previewPane, latestNews[0]);
           }
       }
   }

   // (나머지 함수들은 그대로 두시면 됩니다)
// 홈 뉴스 프리뷰 업데이트 헬퍼 함수
function updateHomeNewsPreview(pane, item) {
    if (item.image) {
        pane.innerHTML = `<img src="${item.image}" class="news-preview-img" alt="Preview">`;
    } else {
        // 이미지가 없을 때 내용 일부 보여주기
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
   [3] 뉴스 페이지 (News) - [기존 카드 그리드 복구]
   ========================================= */
function renderNewsPage() {
    const id = getQueryParam('id');
    if (id !== null && newsData[id]) {
        renderNewsDetail(id);
        return;
    }

    const container = document.getElementById('news-grid-full');
    if (!container || typeof newsData === 'undefined') return;

    const sorted = getSortedNews();
    container.innerHTML = '';

    // 원래의 카드 그리드 방식 유지
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
        </div>`;
    window.scrollTo(0, 0);
}

/* =========================================
   [4] 나머지 페이지 (Members, Research, etc) - 기존 유지
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
        const alumni = memberData.filter(m => m.role === 'alumni'); alumni.sort((a, b) => { const getYear = (str) => { const match = str.match(/\((19|20)\d{2}\)/); return match ? parseInt(match[0].replace(/[()]/g, '')) : 0; }; return getYear(b.desc) - getYear(a.desc); });
        alumni.forEach(m => { alumniList.innerHTML += `<div class="alumni-item" style="background:#fff; padding:15px; border-radius:10px; box-shadow:0 2px 5px rgba(0,0,0,0.05); border-left:4px solid #ccc;"><strong style="color:var(--dark);">${m.name}</strong><span style="font-size:0.85rem; color:#666; display:block; margin-top:4px;">${m.desc}</span></div>`; });
    }
}
/* script.js - 수정된 함수들 */

// [수정됨] 멤버 카드 생성 함수
function createMemberCard(m, index) {
    let engName = m.name;
    let korName = "";

    // 1. 이름 분리 (영어/한글)
    if (m.name.includes('(')) {
        const parts = m.name.split('(');
        engName = parts[0].trim();
        korName = parts[1].replace(')', '').trim();
    }

    // 2. 키워드 추출 로직
    // data.js의 desc가 "Ph.D. Student, Haptics, VR" 형태라고 가정
    // 쉼표(,)를 기준으로 잘라서 첫 번째(직책)는 버리고, 나머지를 키워드로 씀
    const descParts = m.desc.split(',');
    let keyword = "";

    if (descParts.length > 1) {
        // 쉼표 뒤에 내용이 있으면 그걸 키워드로 사용 (예: "Haptics, VR")
        keyword = descParts.slice(1).join(', ').trim();
    } else {
        // 쉼표가 없으면 그냥 원래 desc 사용하거나, 비워둠 (여기선 비워둠)
        // keyword = "Haptics"; // 임시 기본값
    }

    return `
        <div class="member-card" onclick="location.href='members.html?id=${index}'">
            <img src="${m.image}" onerror="this.src='images/member_placeholder.png'" alt="${m.name}">

            ${keyword ? `<span class="member-keyword">${keyword}</span>` : ''}

            <div class="member-name-group">
                <div class="name-eng">${engName}</div>
                ${korName ? `<div class="name-kor">${korName}</div>` : ''}
            </div>

            <p class="member-email">${m.email || ''}</p>
        </div>`;
}

// [수정됨] 멤버 상세 페이지 렌더링 함수
function renderMemberDetail(index) {
    const m = memberData[index];
    const container = document.querySelector('.container');
    let extraInfo = '';

    const websiteLink = m.website
        ? `<a href="${m.website}" target="_blank" style="display:inline-block; margin-top:15px; color:var(--primary); font-weight:700; text-decoration:none; font-size:1.1rem;">
             <i class="fas fa-globe"></i> Personal Website
           </a>` : '';

    if (m.detail) {
        if (m.detail.education) extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary); border-bottom:2px solid #f1f5f9; padding-bottom:10px; font-size:1.3rem;">Education</h4><ul style="padding-left:20px; margin-top:15px; font-size:1.1rem; line-height:1.8;">${m.detail.education.map(e => `<li>${e}</li>`).join('')}</ul></div>`;
        if (m.detail.position) extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary); border-bottom:2px solid #f1f5f9; padding-bottom:10px; font-size:1.3rem;">Positions</h4><ul style="padding-left:20px; margin-top:15px; font-size:1.1rem; line-height:1.8;">${m.detail.position.map(e => `<li>${e}</li>`).join('')}</ul></div>`;
        if (m.detail.membership) extraInfo += `<div class="info-group" style="margin-bottom:30px;"><h4 style="color:var(--primary); border-bottom:2px solid #f1f5f9; padding-bottom:10px; font-size:1.3rem;">Memberships</h4><ul style="padding-left:20px; margin-top:15px; font-size:1.1rem; line-height:1.8;">${m.detail.membership.map(e => `<li>${e}</li>`).join('')}</ul></div>`;
    } else {
        extraInfo = `<div class="info-group"><h4>Info</h4><p>${m.desc}</p></div>`;
    }

    // [수정됨] 상세 페이지 사진 크기 350px로 확대
    container.innerHTML = `
        <div style="max-width:900px; margin:0 auto; padding-top:20px;">
            <a href="members.html" class="back-btn" style="margin-bottom:50px; display:inline-flex; align-items:center; gap:10px; font-weight:700; color:var(--dark); text-decoration:none; font-size:1.1rem;">
                <i class="fas fa-arrow-left"></i> Back to Members
            </a>

            <div style="text-align:center; margin-bottom:60px;">
                <img src="${m.image}" style="width:350px; height:350px; border-radius:50%; object-fit:cover; border:8px solid #fff; box-shadow:0 15px 40px rgba(0,0,0,0.15);" onerror="this.src='images/member_placeholder.png'">

                <h1 style="font-size:3rem; margin:30px 0 10px; font-weight:800;">${m.name}</h1>
                <p style="color:#64748b; font-size:1.3rem; margin-bottom:15px;">${m.email || ''}</p>
                ${websiteLink}
            </div>

            <div style="background:#fff; padding:50px; border-radius:30px; box-shadow:0 10px 40px rgba(0,0,0,0.05);">
                ${extraInfo}
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

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

function renderPublications() {
    const container = document.getElementById('pub-list'); if (!container || typeof publicationData === 'undefined') return;
    const startInput = document.getElementById('year-start'); const endInput = document.getElementById('year-end');
    if (startInput && endInput && publicationData.length > 0) { const years = publicationData.map(p => p.year); const minYear = Math.min(...years); const maxYear = Math.max(...years); startInput.min = minYear; startInput.max = maxYear; endInput.min = minYear; endInput.max = maxYear; startInput.placeholder = minYear; endInput.placeholder = maxYear; }
    updateVenueOptions('all'); applyPubFilter();
    const buttons = document.querySelectorAll('.tab-btn'); buttons.forEach(btn => { btn.addEventListener('click', () => { buttons.forEach(b => b.classList.remove('active')); btn.classList.add('active'); const category = btn.dataset.cat; updateVenueOptions(category); applyPubFilter(); }); });
}
function updateVenueOptions(category) {
    const venueSelect = document.getElementById('venue-filter'); if (!venueSelect) return;
    let targetPubs = publicationData; if (category !== 'all') targetPubs = publicationData.filter(pub => pub.category === category);
    const venueSet = new Set(); targetPubs.forEach(pub => { if (pub.venueShort) venueSet.add(pub.venueShort); });
    const sortedVenues = Array.from(venueSet).sort(); venueSelect.innerHTML = '<option value="all">All Venues</option>'; sortedVenues.forEach(shortName => { venueSelect.innerHTML += `<option value="${shortName}">${shortName}</option>`; }); venueSelect.value = 'all';
}
function applyPubFilter() {
    const container = document.getElementById('pub-list'); if (!container) return;
    const activeTab = document.querySelector('.tab-btn.active'); const category = activeTab ? activeTab.dataset.cat : 'all';
    const startInput = document.getElementById('year-start'); const endInput = document.getElementById('year-end'); const searchInput = document.getElementById('search-keyword'); const venueSelect = document.getElementById('venue-filter');
    const startYear = startInput ? (parseInt(startInput.value) || 0) : 0; const endYear = endInput ? (parseInt(endInput.value) || 9999) : 9999; const searchKeyword = searchInput ? searchInput.value.toLowerCase() : ""; const selectedVenue = venueSelect ? venueSelect.value : 'all';
    let filtered = publicationData.filter(pub => { const catMatch = category === 'all' || pub.category === category; const yearMatch = pub.year >= startYear && pub.year <= endYear; const textMatch = pub.title.toLowerCase().includes(searchKeyword) || pub.authors.toLowerCase().includes(searchKeyword); const venueMatch = selectedVenue === 'all' || pub.venueShort === selectedVenue; return catMatch && yearMatch && textMatch && venueMatch; });
    filtered.sort((a, b) => b.year - a.year); container.innerHTML = '';
    if (filtered.length === 0) { container.innerHTML = '<div style="text-align:center; padding:40px; color:#999;">No publications found.</div>'; return; }
    const awardRegex = /(Best|Award|Honorable|Prize|Choice|Candidate|Finalist|Teaser|Cover)/i;
    filtered.forEach(pub => {
        const linkHtml = pub.link ? `<a href="${pub.link}" class="pub-link" target="_blank"><span>View</span> <i class="fas fa-external-link-alt"></i></a>` : ''; const catBadge = `<span class="pub-badge ${pub.category}">${pub.category}</span>`; const venueBadge = (pub.category === 'patent' && pub.venueShort) ? `<span class="pub-badge venue-tag">${pub.venueShort}</span>` : ''; let displayTitle = pub.title.replace('👑', '').trim(); if (pub.venue && awardRegex.test(pub.venue)) displayTitle = "👑 " + displayTitle; let highlightedVenue = pub.venue || ""; if (highlightedVenue) highlightedVenue = highlightedVenue.replace(/(\([^)]*(?:Best|Award|Honorable|Prize|Choice|Candidate|Finalist|Teaser|Cover)[^)]*\))/gi, '<span class="award-text">$1</span>');
        container.innerHTML += `<div class="pub-item"><div class="pub-left-col"><div class="pub-year">${pub.year}</div>${linkHtml}</div><div class="pub-content"><div class="badge-container">${catBadge}${venueBadge}</div><h3>${displayTitle}</h3><div class="pub-authors">${pub.authors}</div><div class="pub-venue">${highlightedVenue}</div></div></div>`;
    });
}
function renderAwardsPage() {
    const container = document.getElementById('award-list-container'); if (!container || typeof awardData === 'undefined') return;
    container.innerHTML = ''; const sorted = [...awardData].sort((a, b) => parseInt(b.date) - parseInt(a.date));
    sorted.forEach(item => { container.innerHTML += `<div class="pub-item award-item-style"><div class="pub-year" style="min-width:80px;">${item.date}</div><div class="pub-content"><h3>${item.title}</h3><div class="pub-venue" style="color:#666; font-style:normal;">${item.organization}</div></div></div>`; });
}

/* =========================================
   [6] 페이지 로드 시 실행
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
