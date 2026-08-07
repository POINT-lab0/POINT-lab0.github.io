# POSTECH Interaction Lab Website

Interaction Lab 홈페이지 유지보수용 README입니다.

- Website: https://interaction.postech.ac.kr/
- Repository: `POINT-lab0/POINT-lab0.github.io`
- Hosting: GitHub Pages
- Custom domain: `interaction.postech.ac.kr`

---

## 1. 기본 구조

```text
/
├─ index.html
├─ news.html
├─ research.html
├─ members.html
├─ publications.html
├─ awards.html
├─ contact.html
│
├─ data.js
├─ script.js
├─ style.css
├─ clean-urls.js
├─ 404.html
├─ CNAME
│
├─ images/
│  ├─ HomeImages/
│  ├─ news/
│  ├─ selfImage/
│  └─ resesarchImages/
│
└─ homecoming/
```

---

## 2. 가장 자주 수정하는 파일

홈페이지의 일반적인 콘텐츠는 대부분 `data.js`에서 관리합니다.

| 수정 내용 | 파일 |
|---|---|
| News | `data.js` → `newsData` |
| Members | `data.js` → `memberData` |
| Publications | `data.js` → `publicationData` |
| Research Projects | `data.js` → `researchData` |
| Awards | `data.js` → `awardData` |
| YouTube 영상 | `data.js` → `youtubeVideos` |
| 메인 슬라이드 | `index.html` + `images/HomeImages/` |
| Contact 정보 | `contact.html` |
| 디자인 | `style.css` |
| 페이지 동작 | `script.js` |

**콘텐츠만 업데이트하는 경우에는 가급적 `script.js`와 `style.css`를 수정하지 않습니다.**

---

## 3. News 추가

`data.js`의 `newsData`에 항목을 추가합니다.

```javascript
{
    id: 7,
    date: "2026-08-07",
    title: "News title",
    content: "Short description.",
    image: "images/news/example.jpg",
    detailContent: "Detailed news content."
},
```

### 주의

- `id`는 기존 뉴스와 중복되지 않게 사용
- 날짜는 `YYYY-MM-DD` 형식 권장
- News 이미지는 `images/news/`에 업로드

---

## 4. Member 추가

`data.js`의 `memberData`를 수정합니다.

```javascript
{
    name: "Gildong Hong (홍길동)",
    role: "student",
    email: "gildong@postech.ac.kr",
    image: "images/selfImage/gildong.jpg",
    website: "https://example.com",
    desc: "Ph.D. Student (CSE), Haptics",

    detail: {
        introduction: "Introduction text.",
        keyword: [
            "Haptics",
            "Human-Computer Interaction"
        ]
    }
},
```

프로필 이미지는:

```text
images/selfImage/
```

에 넣습니다.

### Member 그룹 분류

현재 `script.js`는 `role` 및 `desc` 문자열을 기준으로 그룹을 자동 분류합니다.

- 교수: `role: "prof"`
- Alumni: `role: "alumni"`
- Postdoc: `desc`에 `post-doc` 또는 `researcher`
- Ph.D.: `desc`에 `ph.d` 또는 `direct`
- Master: `desc`에 `master` 또는 `m.s`

---

## 5. Publication 추가

`data.js`의 `publicationData`에 추가합니다.

```javascript
{
    year: 2026,
    category: "journal",
    venueShort: "ToH",
    title: "Paper title",
    authors: "Author A, Author B, and Seungmoon Choi",
    venue: "IEEE Transactions on Haptics",
    link: "https://doi.org/..."
},
```

사용 중인 주요 `category`:

```text
journal
conference
poster
demo
patent
```

---

## 6. Research Project 추가

`data.js`의 `researchData`를 수정합니다.

```javascript
{
    id: "G10",
    status: "Ongoing",
    title: "Project title",
    agency: "IITP",
    period: "2026-2029",
    description: "Short description",
    tagline: "Short tagline",
    thumbnail: "images/resesarchImages/example.png",
    overview: "Detailed overview",
    keywords: [
        "Haptics",
        "Virtual Reality"
    ],
    papers: []
},
```

현재 연구 이미지 폴더 이름은 실제 저장소 기준으로:

```text
images/resesarchImages/
```

입니다. 철자가 조금 특이하지만 기존 코드와 맞추기 위해 그대로 사용합니다.

---

## 7. Award 추가

`data.js`의 `awardData`에 추가합니다.

```javascript
{
    date: "2026",
    title: "Best Paper Award",
    organization: "Conference Name"
},
```

---

## 8. 메인 슬라이드 변경

메인 화면의 슬라이드 이미지는:

```text
images/HomeImages/
```

에 있습니다.

`index.html`에서 다음 부분을 수정합니다.

```html
<img src="images/HomeImages/example.jpg"
     class="slide"
     alt="Example">
```

첫 번째 슬라이드에만:

```html
class="slide active"
```

를 사용합니다.

---

## 9. URL 구조

사용자에게 보이는 주소는 `.html` 없이 표시되도록 되어 있습니다.

```text
/
 /news
 /research
 /members
 /publications
 /awards
 /contact
```

실제 페이지 파일은 기존처럼:

```text
news.html
research.html
members.html
...
```

을 사용합니다.

`clean-urls.js`는 정상적으로 HTML 페이지가 로드된 뒤 주소창의 `.html`만 제거합니다.

`404.html`은 `/news`, `/research` 등의 주소를 직접 입력하거나 새로고침했을 때 해당 `.html` 파일로 연결합니다.

### 중요

아래와 같은 별도 폴더를 새로 만들 필요가 없습니다.

```text
news/
research/
members/
```

URL 처리를 수정하는 목적이 아니라면 `clean-urls.js`와 `404.html`은 가급적 건드리지 않습니다.

---

## 10. 메인 페이지 첫 로딩 CSS

`index.html`의 `<head>`에서 `style.css`를 직접 불러옵니다.

```html
<link rel="stylesheet" href="style.css">
```

이 코드는 Ctrl+F5 또는 최초 접속 시 HTML이 스타일 없이 잠시 보이는 현상을 줄이기 위한 것입니다.

기존 `script.js`에도 CSS 로딩 코드가 있지만, 이미 `style.css`가 로드되어 있으면 중복 추가하지 않도록 되어 있으므로 함께 사용해도 됩니다.

---

## 11. JavaScript 수정 시 주의

`data.js`도 JavaScript 파일이므로 쉼표나 따옴표 하나가 빠져도 전체 데이터 렌더링이 멈출 수 있습니다.

예:

```javascript
{
    title: "Example",
    year: 2026,
    link: "https://example.com"
},
```

특히 수정 후 내용이 전부 안 뜨면 먼저 확인할 것:

```text
,
"
'
{}
[]
```

그리고 브라우저 개발자 도구의 Console 오류를 확인합니다.

---

## 12. 이미지 파일명

권장:

```text
donggeun.jpg
chi2026.png
research_project_01.jpg
```

가급적 영문/숫자/`_`/`-`를 사용합니다.

GitHub Pages에서는 대소문자를 구분하므로:

```text
Photo.jpg
photo.jpg
```

는 서로 다른 파일입니다.

---

## 13. 수정 후 체크

홈페이지 업데이트 후 아래를 확인합니다.

- Home
- News 목록 및 상세페이지
- Members 목록 및 상세페이지
- Research 목록 및 상세페이지
- Publications 검색/필터
- Awards
- Contact
- 모바일 화면
- Ctrl+F5 후 첫 화면

---

## 14. 역할 요약

```text
data.js
→ 홈페이지 콘텐츠

script.js
→ 콘텐츠를 페이지에 표시하는 동작

style.css
→ 디자인

index.html 및 각 *.html
→ 페이지 기본 구조

clean-urls.js + 404.html
→ .html 없는 URL 표시

CNAME
→ interaction.postech.ac.kr 도메인 연결
```

---

Last updated: 2026-08-07
