/* script.js - 페이지 이동(Routing) 방식 적용 */

/* =========================================
   1. 유틸리티 (URL 파라미터 확인)
   ========================================= */
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function getSortedNews() {
    if (typeof newsData === 'undefined') return [];
    return [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
}

/* =========================================
   2. 메인 페이지 (Home)
   ========================================= */
function renderHome() {
    // 1. YouTube
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

    // 2. News (최신 3개)
    const newsContainer = document.getElementById('home-news');
    if (newsContainer && typeof newsData !== 'undefined') {
        const sorted = getSortedNews();
        newsContainer.innerHTML = '';

        sorted.slice(0, 3).forEach(item => {
            // 원본 데이터에서의 인덱스 찾기 (ID 역할)
            const originalIndex = newsData.findIndex(n => n.id === item.id);
            const imgHtml = item.image ? `<img src="${item.image}" class="news-thumb" alt="${item.title}" onerror="this.style.display='none'">` : '';

            // [수정] 클릭 시 news.html?id=... 로 이동
            newsContainer.innerHTML += `
                <div class="news-card" onclick="location.href='news.html?id=${originalIndex}'">
                    ${imgHtml}
                    <div class="news-body">
                        <span class="news-date">${item.date}</span>
                        <h3>${item.title}</h3>
                        <p style="color:#666; font-size:0.9rem; overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical;">${item.content}</p>
                        <div class="read-more">Read More &rarr;</div>
                    </div>
                </div>`;
        });
    }

    // 3. Research Highlights (Ongoing 중 4개)
    const resContainer = document.getElementById('home-research');
    if (resContainer && typeof researchData !== 'undefined') {
        resContainer.innerHTML = '';
        // Ongoing 프로젝트 찾기
        const ongoingProjects = researchData.map((r, idx) => ({ ...r, originalIndex: idx }))
                                            .filter(r => r.status === 'Ongoing')
                                            .slice(0, 4);

        ongoingProjects.forEach(item => {
            // [수정] 클릭 시 research.html?id=... 로 이동
            resContainer.innerHTML += `
                <div class="member-card" onclick="location.href='research.html?id=${item.originalIndex}'">
                    <div style="background:var(--primary); height:4px; width:100%; position:absolute; top:0; left:0;"></div>
                    <div style="padding-top:15px;">
                        <h3 style="margin-bottom:10px;">${item.title}</h3>
                        <p style="font-size:0.9rem; color:#666;">${item.description.substring(0, 80)}...</p>
                        <div style="margin-top:15px; color:var(--primary); font-size:0.85rem; font-weight:bold;">View Research &rarr;</div>
                    </div>
                </div>`;
        });
    }
}

/* =========================================
   3. 뉴스 페이지 (News) - 상세 보기 포함
   ========================================= */
function renderNewsPage() {
    // 1. URL에 id가 있는지 확인
    const id = getQueryParam('id');

    // 2. id가 있으면 -> 상세 페이지 렌더링
    if (id !== null && newsData[id]) {
        renderNewsDetail(id);
        return;
    }

    // 3. id가 없으면 -> 목록 렌더링
    const container = document.getElementById('news-grid-full');
    if (!container || typeof newsData === 'undefined') return;

    const sorted = getSortedNews();
    container.innerHTML = '';

    sorted.forEach(item => {
        const originalIndex = newsData.findIndex(n => n.id === item.id);
        const imgHtml = item.image ? `<img src="${item.image}" class="news-thumb" onerror="this.style.display='none'">` : '';

        // [수정] 클릭 시 해당 페이지 리로드하며 쿼리스트링 추가
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
    const container = document.querySelector('.container'); // 전체 컨테이너 교체
    const imgHtml = item.image ? `<img src="${item.image}" style="width:100%; max-height:400px; border-radius:16px; object-fit:cover; margin-bottom:30px;" onerror="this.style.display='none'">` : '';

    // 상세 페이지 HTML 주입
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
    window.scrollTo(0, 0); // 맨 위로 스크롤
}

/* =========================================
   4. 멤버 페이지 (Members) - 상세 보기 포함
   ========================================= */
function renderMembers() {
    // 1. URL에 id가 있는지 확인
    const id = getQueryParam('id');

    // 2. id가 있으면 -> 상세 페이지 렌더링
    if (id !== null && memberData[id]) {
        renderMemberDetail(id);
        return;
    }

    // 3. id가 없으면 -> 목록 렌더링
    const profList = document.getElementById('prof-list');
    const postdocList = document.getElementById('postdoc-list');
    const postdocHeader = document.getElementById('postdoc-header');
    const phdList = document.getElementById('phd-list');
    const msList = document.getElementById('ms-list');
    const alumniList = document.getElementById('alumni-list');

    if (!profList) return;

    profList.innerHTML = '';
    if (postdocList) postdocList.innerHTML = '';
    phdList.innerHTML = '';
    msList.innerHTML = '';
    if (alumniList) alumniList.innerHTML = '';

    if (typeof memberData === 'undefined') return;

    let hasPostDoc = false;

    memberData.forEach((m, index) => {
        if (m.role !== 'alumni') {
            // [수정] 카드 생성 시 링크 추가
            const card = `
                <div class="member-card" onclick="location.href='members.html?id=${index}'">
                    <img src="${m.image}" onerror="this.src='images/member_placeholder.png'" alt="${m.name}">
                    <span class="role-text">${m.desc.split(',')[0]}</span>
                    <h3>${m.name}</h3>
                    <p style="font-size:0.85rem; color:#888;">${m.email || ''}</p>
                </div>`;

            const descLower = m.desc.toLowerCase();

            if (m.role === 'prof') {
                profList.innerHTML += card;
            }
            else if (descLower.includes('post-doc') || descLower.includes('researcher')) {
                if (postdocList) {
                    postdocList.innerHTML += card;
                    hasPostDoc = true;
                }
            }
            else if (descLower.includes('ph.d') || descLower.includes('direct')) {
                phdList.innerHTML += card;
            }
            else if (descLower.includes('master') || descLower.includes('m.s')) {
                msList.innerHTML += card;
            }
        }
    });

    if (postdocHeader) postdocHeader.style.display = hasPostDoc ? 'block' : 'none';

    if (alumniList) {
        const alumni = memberData.filter(m => m.role === 'alumni');
        alumni.sort((a, b) => {
            const getYear = (str) => {
                const match = str.match(/\((19|20)\d{2}\)/);
                return match ? parseInt(match[0].replace(/[()]/g, '')) : 0;
            };
            return getYear(b.desc) - getYear(a.desc);
        });

        alumni.forEach(m => {
            alumniList.innerHTML += `
                <div class="alumni-item" style="background:#fff; padding:15px; border-radius:10px; box-shadow:0 2px 5px rgba(0,0,0,0.05); border-left:4px solid #ccc;">
                    <strong style="color:var(--dark);">${m.name}</strong>
                    <span style="font-size:0.85rem; color:#666; display:block; margin-top:4px;">${m.desc}</span>
                </div>`;
        });
    }
}

function renderMemberDetail(index) {
    const m = memberData[index];
    const container = document.querySelector('.container');
    let extraInfo = '';

    const websiteLink = m.website
        ? `<a href="${m.website}" target="_blank" style="display:inline-block; margin-top:10px; color:var(--primary); font-weight:700; text-decoration:none;">
             <i class="fas fa-globe"></i> Website
           </a>` : '';

    if (m.detail) {
        if (m.detail.education) extraInfo += `<div class="info-group" style="margin-bottom:20px;"><h4 style="color:var(--primary); border-bottom:1px solid #eee; padding-bottom:5px;">Education</h4><ul style="padding-left:20px; margin-top:10px;">${m.detail.education.map(e => `<li>${e}</li>`).join('')}</ul></div>`;
        if (m.detail.position) extraInfo += `<div class="info-group" style="margin-bottom:20px;"><h4 style="color:var(--primary); border-bottom:1px solid #eee; padding-bottom:5px;">Positions</h4><ul style="padding-left:20px; margin-top:10px;">${m.detail.position.map(e => `<li>${e}</li>`).join('')}</ul></div>`;
        if (m.detail.membership) extraInfo += `<div class="info-group" style="margin-bottom:20px;"><h4 style="color:var(--primary); border-bottom:1px solid #eee; padding-bottom:5px;">Memberships</h4><ul style="padding-left:20px; margin-top:10px;">${m.detail.membership.map(e => `<li>${e}</li>`).join('')}</ul></div>`;
    } else {
        extraInfo = `<div class="info-group"><h4>Info</h4><p>${m.desc}</p></div>`;
    }

    container.innerHTML = `
        <div style="max-width:800px; margin:0 auto; padding-top:20px;">
            <a href="members.html" class="back-btn" style="margin-bottom:40px; display:inline-flex; align-items:center; gap:8px; font-weight:700; color:var(--dark); text-decoration:none;">
                <i class="fas fa-arrow-left"></i> Back to Members
            </a>

            <div style="text-align:center; margin-bottom:40px;">
                <img src="${m.image}" style="width:200px; height:200px; border-radius:50%; object-fit:cover; border:5px solid #fff; box-shadow:0 10px 30px rgba(0,0,0,0.1);" onerror="this.src='images/member_placeholder.png'">
                <h1 style="font-size:2.5rem; margin:20px 0 5px;">${m.name}</h1>
                <p style="color:#666; font-size:1.1rem; margin-bottom:10px;">${m.email || ''}</p>
                ${websiteLink}
            </div>

            <div style="background:#fff; padding:40px; border-radius:20px; box-shadow:0 4px 20px rgba(0,0,0,0.05);">
                ${extraInfo}
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

/* =========================================
   5. 연구 페이지 (Research) - 상세 보기 포함
   ========================================= */
function renderResearchPage() {
    // 1. URL 확인
    const id = getQueryParam('id');

    // 2. 상세 페이지
    if (id !== null && researchData[id]) {
        renderProjectDetail(id);
        return;
    }

    // 3. 목록 페이지
    const ongoingContainer = document.getElementById('ongoing-list');
    const completedContainer = document.getElementById('completed-list');
    const areaContainer = document.getElementById('research-areas');

    if (!ongoingContainer || typeof researchData === 'undefined') return;

    // Research Areas 렌더링
    if (areaContainer && typeof researchAreas !== 'undefined') {
        areaContainer.innerHTML = '';
        researchAreas.forEach((area, idx) => {
            // Areas는 별도 상세 페이지보다는 일단 팝업 유지 혹은 텍스트만 표시 (여기서는 유지)
            areaContainer.innerHTML += `
                <div class="area-card" style="cursor:default;">
                    <img src="${area.thumbnail}" class="area-img" onerror="this.src='images/lab_intro1.jpg'">
                    <div class="area-content">
                        <h3>${area.title}</h3>
                        <p>${area.desc}</p>
                    </div>
                </div>`;
        });
    }

    ongoingContainer.innerHTML = '';
    completedContainer.innerHTML = '';

    researchData.forEach((r, idx) => {
        const statusClass = r.status === 'Ongoing' ? 'ongoing' : 'completed';
        const html = `
            <div class="project-card ${statusClass}" onclick="location.href='research.html?id=${idx}'">
                <div class="proj-info">
                    <h4>${r.title}</h4>
                    <div class="proj-meta">
                        <span class="proj-status ${statusClass}">${r.status}</span>
                        <span>${r.agency} | ${r.period}</span>
                    </div>
                </div>
                <i class="fas fa-chevron-right" style="color:#cbd5e1;"></i>
            </div>`;

        if (r.status === 'Ongoing') ongoingContainer.innerHTML += html;
        else completedContainer.innerHTML += html;
    });
}

function renderProjectDetail(index) {
    const r = researchData[index];
    const container = document.querySelector('.container');
    const statusColor = r.status === 'Ongoing' ? 'var(--primary)' : '#64748b';

    container.innerHTML = `
        <div style="max-width:800px; margin:0 auto; padding-top:20px;">
            <a href="research.html" class="back-btn" style="margin-bottom:30px; display:inline-flex; align-items:center; gap:8px; font-weight:700; color:var(--dark); text-decoration:none;">
                <i class="fas fa-arrow-left"></i> Back to Projects
            </a>

            <div style="margin-bottom:20px;">
                <span style="background:${statusColor}; color:white; padding:6px 15px; border-radius:20px; font-size:0.9rem; font-weight:bold;">${r.status}</span>
            </div>

            <h1 style="font-size:2.2rem; margin-bottom:15px; line-height:1.3;">${r.title}</h1>
            <p style="color:#666; font-size:1.1rem; margin-bottom:40px; border-left:4px solid var(--secondary); padding-left:15px;">
                <strong>${r.agency}</strong> <br> ${r.period}
            </p>

            <div style="background:#fff; padding:40px; border-radius:20px; box-shadow:0 4px 15px rgba(0,0,0,0.05); font-size:1.1rem; line-height:1.8;">
                ${r.description}
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

/* =========================================
   6. 논문 페이지 (Publications) - 수정됨
   ========================================= */
function renderPublications() {
    const container = document.getElementById('pub-list');
    if (!container || typeof publicationData === 'undefined') return;

    // 연도 필터 자동 설정
    const startInput = document.getElementById('year-start');
    const endInput = document.getElementById('year-end');

    if (startInput && endInput && publicationData.length > 0) {
        const years = publicationData.map(p => p.year);
        const minYear = Math.min(...years);
        const maxYear = Math.max(...years);

        startInput.min = minYear;
        startInput.max = maxYear;
        endInput.min = minYear;
        endInput.max = maxYear;

        startInput.placeholder = minYear;
        endInput.placeholder = maxYear;
    }

    updateVenueOptions('all');
    applyPubFilter();

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.cat;
            updateVenueOptions(category);
            applyPubFilter();
        });
    });
}

function updateVenueOptions(category) {
    const venueSelect = document.getElementById('venue-filter');
    if (!venueSelect) return;

    let targetPubs = publicationData;
    if (category !== 'all') {
        targetPubs = publicationData.filter(pub => pub.category === category);
    }

    const venueSet = new Set();
    targetPubs.forEach(pub => {
        if (pub.venueShort) venueSet.add(pub.venueShort);
    });

    const sortedVenues = Array.from(venueSet).sort();
    venueSelect.innerHTML = '<option value="all">All Venues</option>';
    sortedVenues.forEach(shortName => {
        venueSelect.innerHTML += `<option value="${shortName}">${shortName}</option>`;
    });
    venueSelect.value = 'all';
}

function applyPubFilter() {
    const container = document.getElementById('pub-list');
    if (!container) return;

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

    let filtered = publicationData.filter(pub => {
        const catMatch = category === 'all' || pub.category === category;
        const yearMatch = pub.year >= startYear && pub.year <= endYear;
        const textMatch = pub.title.toLowerCase().includes(searchKeyword) ||
                          pub.authors.toLowerCase().includes(searchKeyword);
        const venueMatch = selectedVenue === 'all' || pub.venueShort === selectedVenue;
        return catMatch && yearMatch && textMatch && venueMatch;
    });

    filtered.sort((a, b) => b.year - a.year);

    container.innerHTML = '';

    if (filtered.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding:40px; color:#999;">No publications found.</div>';
        return;
    }

    // 수상 키워드 (정규식)
    const awardRegex = /(Best|Award|Honorable|Prize|Choice|Candidate|Finalist|Teaser|Cover)/i;

    filtered.forEach(pub => {
        // 1. 링크 버튼
        const linkHtml = pub.link ?
            `<a href="${pub.link}" class="pub-link" target="_blank">
                <span>View</span> <i class="fas fa-external-link-alt"></i>
             </a>` : '';

        // 2. 카테고리 뱃지
        const catBadge = `<span class="pub-badge ${pub.category}">${pub.category}</span>`;

        // 3. 베뉴 뱃지 (Patent만 표시)
        const venueBadge = (pub.category === 'patent' && pub.venueShort)
            ? `<span class="pub-badge venue-tag">${pub.venueShort}</span>`
            : '';

        // 4. [왕관 자동 추가]
        let displayTitle = pub.title.replace('👑', '').trim();
        if (pub.venue && awardRegex.test(pub.venue)) {
            displayTitle = "👑 " + displayTitle;
        }

        // 5. [문구 하이라이트]
        let highlightedVenue = pub.venue || "";
        if (highlightedVenue) {
            highlightedVenue = highlightedVenue.replace(
                /(\([^)]*(?:Best|Award|Honorable|Prize|Choice|Candidate|Finalist|Teaser|Cover)[^)]*\))/gi,
                '<span class="award-text">$1</span>'
            );
        }

        container.innerHTML += `
            <div class="pub-item">
                <div class="pub-left-col">
                    <div class="pub-year">${pub.year}</div>
                    ${linkHtml}
                </div>
                <div class="pub-content">
                    <div class="badge-container">
                        ${catBadge}
                        ${venueBadge}
                    </div>
                    <h3>${displayTitle}</h3>
                    <div class="pub-authors">${pub.authors}</div>
                    <div class="pub-venue">${highlightedVenue}</div>
                </div>
            </div>`;
    });
}

/* =========================================
   7. 수상 페이지 (Awards)
   ========================================= */
function renderAwardsPage() {
    const container = document.getElementById('award-list-container');
    if (!container || typeof awardData === 'undefined') return;
    container.innerHTML = '';
    const sorted = [...awardData].sort((a, b) => parseInt(b.date) - parseInt(a.date));
    sorted.forEach(item => {
        container.innerHTML += `
            <div class="pub-item award-item-style">
                <div class="pub-year" style="min-width:80px;">${item.date}</div>
                <div class="pub-content">
                    <h3>${item.title}</h3>
                    <div class="pub-venue" style="color:#666; font-style:normal;">${item.organization}</div>
                </div>
            </div>`;
    });
}

/* =========================================
   8. 페이지 로드 및 네비게이션 설정
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    // 현재 페이지 파악
    const path = window.location.pathname;
    const page = path.split("/").pop() || 'index.html';

    // 네비게이션 활성화
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const linkPage = item.getAttribute('href');
        if (page === linkPage || (page === '' && linkPage === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // 모바일 메뉴 토글
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 페이지별 렌더링 함수 호출
    if (page === 'index.html' || page === '') renderHome();
    else if (page === 'news.html') renderNewsPage();
    else if (page === 'members.html') renderMembers();
    else if (page === 'research.html') renderResearchPage();
    else if (page === 'publications.html') renderPublications();
    else if (page === 'awards.html') renderAwardsPage();
});
