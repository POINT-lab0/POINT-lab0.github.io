# Interaction Lab Homecoming 2026

독립 경로 `interaction.postech.ac.kr/homecoming/`에서 열리는 정적 페이지입니다.
기존 메인 화면과 내비게이션은 수정하지 않습니다.

## 저장소에 추가하는 방법

저장소 루트에 이 `homecoming` 폴더 전체를 그대로 업로드합니다.

```text
POINT-lab0.github.io/
├─ index.html
├─ images/
└─ homecoming/
   ├─ index.html
   ├─ style.css
   ├─ script.js
   └─ event-data.js
```

GitHub Pages 배포 후 다음 주소로 접근할 수 있습니다.

```text
https://interaction.postech.ac.kr/homecoming/
```

## 내용 수정

대부분의 내용은 `event-data.js`만 수정하면 됩니다.

- `dateLabel`, `timeLabel`: 일시
- `venueName`, `venueArea`, `venueNote`: 장소
- `schedule`: 세부 일정
- `rsvpUrl`: 참가 신청 링크
- `mapUrl`: 지도 링크
- `contact`: 문의 담당자

`rsvpUrl`과 `mapUrl`이 빈 문자열이면 관련 버튼이 비활성화되거나 숨겨집니다.
