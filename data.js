// 1. News Data (이미지 및 상세 내용 추가)
const newsData = [
    {
        id: 1,
        date: "2025-07-08",
        title: "IEEE World Haptics Conference 2025 Held in Seoul",
        content: "We successfully hosted the IEEE World Haptics Conference 2025. Over 500 researchers gathered to discuss the future of haptic technologies.",
        image: "images/lab_intro1.jpg", // 뉴스 썸네일 (폴더에 있는 이미지 사용)
        detailContent: "Detailed report about WHC 2025. Keynote speakers included... (Long text)"
    },

    {
        id: 3,
        date: "2025-03-01",
        title: "Paper Accepted at IEEE VR 2025",
        content: "Our research on 'Human Dance Haptic Motion Effects' has been accepted for presentation at IEEE VR 2025.",
        image: "", // 이미지가 없으면 기본 디자인
        detailContent: "Abstract of the paper: This paper proposes a novel method..."
    },
    {
        id: 4,
        date: "2024-03-01",
        title: "Prof. Choi Appointed as Dept. Head",
        content: "Prof. Seungmoon Choi has been appointed as the Department Head of Computer Science and Engineering at POSTECH.",
        image: "images/prof.jpg",
        detailContent: "He will serve as the department head for two years..."
    }
];

// 2. Research Areas (NEW: 대주제 4개 - 업로드 이미지 기반)
const researchAreas = [
    {
        id: "area1",
        title: "Haptic Rendering & Perception",
        desc: "Designing high-fidelity haptic stimuli and exploring perceptual mechanisms by integrating touch with vision and sound.",
        thumbnail: "images/lab_intro1.jpg", // 실제 연구 썸네일로 교체 필요
        detail: "Full description about Haptic Rendering & Perception research..."
    },
    {
        id: "area2",
        title: "Multisensory Interaction in XR",
        desc: "Creating immersive experiences in XR through real-time fusion and automatic conversion of visual, auditory, and haptic cues.",
        thumbnail: "images/lab_intro1.jpg",
        detail: "Full description about Multisensory Interaction in XR..."
    },
    {
        id: "area3",
        title: "Wearable & Assistive Haptics",
        desc: "Developing wearable tactile systems and accessibility technologies to support diverse users, including people with disabilities.",
        thumbnail: "images/lab_intro1.jpg",
        detail: "Full description about Wearable & Assistive Haptics..."
    },
    {
        id: "area4",
        title: "Novel Haptic Devices",
        desc: "Designing innovative haptic devices such as smart rings and skin-based interfaces to expand the boundaries of HCI.",
        thumbnail: "images/lab_intro1.jpg",
        detail: "Full description about Novel Haptic Devices..."
    }
];
// 5. YouTube Data (수정됨: embed 링크로 변경)
const youtubeVideos = [
    {
        id: "video1",
        title: "Lab Introduction",
        // 원본: https://youtu.be/8CfCvSeBKAA
        embedUrl: "https://www.youtube.com/embed/8CfCvSeBKAA"
    },
    {
        id: "video2",
        title: "Haptic Rendering Demo",
        // 원본: https://youtu.be/UeT9--by-eQ
        embedUrl: "https://www.youtube.com/embed/UeT9--by-eQ"
    },
    {
        id: "video3",
        title: "VR Interaction",
        // 원본: https://youtu.be/h7YkW53siNs
        embedUrl: "https://www.youtube.com/embed/h7YkW53siNs"
    },
    {
        id: "video4",
        title: "Research Highlights",
        // 원본: https://youtu.be/edUCvel4Ijc
        embedUrl: "https://www.youtube.com/embed/edUCvel4Ijc"
    }
];
// 2. Member Data (CV: Advising + Current Members)
const memberData = [
    // Professor
    {
        name: "Seungmoon Choi (최승문)", role: "prof", email: "choism@postech.ac.kr", image: "images/prof.jpg",
        website:"https://docs.google.com/document/d/1Oa5GYXQ0V9c-TGxECMVl85A-pCn3ugMY/edit",
        desc: "Professor / Dept. Head of CSE / Ph.D. Purdue Univ.",
        detail: {
            position: [
                "Head, Department of Computer Science and Engineering",
                "Professor, Department of Convergence IT Engineering (Joint appointment)",
                "Pohang University of Science and Technology (POSTECH)"
            ],
            education: [
                "Ph.D. Electrical and Computer Engineering, Purdue University (2003)",
                "M.S. Control and Instrumentation Engineering, Seoul National University (1997)",
                "B.S. Control and Instrumentation Engineering, Seoul National University (1995)"
            ]
        }
    },
    // Researchers
    { name: "Jiwan Lee (이지완)", role: "student", email: "jiwan@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Post-Doctoral Researcher" },

    // Ph.D. Students (Current)
    { name: "Jungeun Lee (이정은)", role: "student", email: "jungeun@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Ph.D. Student (CiTE)" },
    { name: "Dajin Lee (이다진)", role: "student", email: "dajin@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CiTE)" },
    { name: "Donggeun Kim (김동근)", role: "student", email: "dgkim@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CiTE)" },
    { name: "Jeongwoo Kim (김정우)", role: "student", email: "jwkim@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CSE)" },
    { name: "Jaejun Park (박재준)", role: "student", email: "jaejun@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CSE)" },
    { name: "Junwoo Kim (김준우)", role: "student", email: "junwoo@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CSE)" },
    { name: "Heeji Son (손희지)", role: "student", email: "heeji@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Ph.D. Student (CSE)" },
    { name: "Hyunwook Kim (김현욱)", role: "student", email: "hwkim@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Ph.D. Student (CSE)" },
    { name: "Uison Ju (주의손)", role: "student", email: "uison@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CSE)" },
    { name: "Minsung Noh (노민성)", role: "student", email: "msnoh@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CSE)" },
    { name: "Hyunyong Park (박현용)", role: "student", email: "hypark@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CSE)" },
    { name: "Taehyeong Jeong (정태형)", role: "student", email: "thjeong@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CiTE)" },
    { name: "Juhyeop Lee (이주협)", role: "student", email: "jhlee@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CSE)" },

    // Master Students (Current)
    { name: "Soyeon Nam (남소연)", role: "student", email: "synam@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "M.S. Student (CSE)" },
    { name: "Suheon Nam (남수헌)", role: "student", email: "shnam@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "M.S. Student (CSE)" },
    { name: "Geunho Lee (이근호)", role: "student", email: "ghlee@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "M.S. Student (CSE)" },
    { name: "Doohong Kwon (권두홍)", role: "student", email: "dhkwon@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "M.S. Student (CSE)" },

    // Alumni (Full list from CV)
    { name: "Seokhee Jeon (전석희)", role: "alumni", desc: "Ph.D. (2010) / Assoc. Prof. at Kyung Hee Univ." },
    { name: "Sungkil Lee (이성길)", role: "alumni", desc: "Ph.D. (2009) / Professor at Sungkyunkwan Univ." },
    { name: "Inwook Hwang (황인욱)", role: "alumni", desc: "Ph.D. (2013) / Researcher at ETRI" },
    { name: "Jaebong Lee (이재봉)", role: "alumni", desc: "Ph.D. (2016) / Meta, USA" },
    { name: "Hojin Lee (이호진)", role: "alumni", desc: "Ph.D. (2019) / ETRI" },
    { name: "Yongjae Yoo (유용재)", role: "alumni", desc: "Ph.D. (2019) / Assist. Prof. at Hanyang Univ. ERICA" },
    { name: "Sunghwan Shin (신성환)", role: "alumni", desc: "Ph.D. (2019) / Samsung Research" },
    { name: "Seungjae Oh (오승재)", role: "alumni", desc: "Ph.D. (2020) / Assist. Prof. at Kyung Hee Univ." },
    { name: "Hojun Cha (차호준)", role: "alumni", desc: "Ph.D. (2023) / Samsung Electronics" },
    { name: "Sangyoon Han (한상윤)", role: "alumni", desc: "Ph.D. (2023) / Samsung Electronics" },
    { name: "Gyeore Yun (윤겨레)", role: "alumni", desc: "Ph.D. (2024) / Assist. Prof. at Kyungpook National Univ." },
    { name: "Chaeyong Park (박채용)", role: "alumni", desc: "Ph.D. (2024) / Assist. Prof. at Korea Univ." },
    { name: "Gunhyuk Park (박건혁)", role: "alumni", desc: "Ph.D. (2017) / Assist. Prof. at GIST" },
    { name: "In Lee (이인)", role: "alumni", desc: "Ph.D. (2015) / Samsung Heavy Industries" },
    { name: "Jonghyun Ryu (류종현)", role: "alumni", desc: "Ph.D. (2010) / Samsung Electronics" },
    { name: "Gun Lee (이건)", role: "alumni", desc: "Ph.D. (2009) / Senior Lecturer at Univ. of South Australia" },
    { name: "Jain Hwang (황재인)", role: "alumni", desc: "Ph.D. (2007) / KIST" },
    { name: "Reza Haghighi Osgouei", role: "alumni", desc: "Ph.D. (2018) / Imperial College London" },
    { name: "Amit Bhardwaj", role: "alumni", desc: "Post-Doc (2019) / Assist. Prof. at IIT Jodhpur" },
    // 석사 졸업생들
    { name: "Jaehyeok Ahn (안재혁)", role: "alumni", desc: "Master (2024)" },
    { name: "Heeyeon Kim (김희연)", role: "alumni", desc: "Master (2024) / KT" },
    { name: "Hoseok Jung (정호석)", role: "alumni", desc: "Master (2023) / SCIGC" },
    { name: "Daehyun Nam (남대현)", role: "alumni", desc: "Master (2023) / Cupix" },
    { name: "Jinsoo Kim (김진수)", role: "alumni", desc: "Master (2022) / Peoplefund" },
    { name: "Minjae Moon (문민재)", role: "alumni", desc: "Master (2022) / KOG" },
    { name: "Beomsu Lim (임범수)", role: "alumni", desc: "Master (2021) / KOG" },
    { name: "Hyoseung Lee (이효승)", role: "alumni", desc: "Master (2021) / TmaxSoft" },
    { name: "Hyejin Choi (최혜진)", role: "alumni", desc: "Master (2019) / Samsung Electronics" },
    { name: "Sunung Mun (문선웅)", role: "alumni", desc: "Master (2019) / TmaxSoft" },
    { name: "Jongho Lim (임종호)", role: "alumni", desc: "Master (2018) / ADD" },
    { name: "Jongman Seo (서종만)", role: "alumni", desc: "Master (2018) / Dable" },
    { name: "Inseok Koh (고인석)", role: "alumni", desc: "Master (2018)" },
    { name: "Hanseul Cho (조한슬)", role: "alumni", desc: "Master (2017) / Kyung-Hee Univ. Medical School" },
    { name: "Phuong Hoang Minh", role: "alumni", desc: "Master (2015) / GraphicsMiner Lab" },
    { name: "Jaemin Chun (천재민)", role: "alumni", desc: "Post-Doc (2014) / Samsung Electronics" },
    { name: "Kyungpyo Hong (홍경표)", role: "alumni", desc: "Master (2012) / Toshiba" },
    { name: "Myongchan Kim (김명찬)", role: "alumni", desc: "Master (2012) / LG U+" },
    { name: "Chaehyun Lee (이채현)", role: "alumni", desc: "Master (2008) / Dable" },
    { name: "Sunghoon Yim (임성훈)", role: "alumni", desc: "Master (2007) / Samsung Electronics" },
    { name: "Jaeyoung Cheon (천재영)", role: "alumni", desc: "Master (2007) / ADD" },
    { name: "Jaehoon Jung (정재훈)", role: "alumni", desc: "Master (2007) / Yanolja" }
];

// 3. Research Projects (Grants & Contracts)
const researchData = [
    // Ongoing Projects (2024년 이후 종료 예정인 것들)
    { id: "G1", status: "Ongoing", title: "Generative Haptics for Flexible Tactile Interfaces", agency: "IITP", period: "2025-2028", description: "유연소재 촉각 인터페이스에 대한 지능적 촉각 생성과 미세 반응 추론 기술" },
    { id: "G2", status: "Ongoing", title: "Material- and Shape-Changing Haptic Interface", agency: "NRF", period: "2024-2025", description: "VR 상호작용을 위한 스마트 물질 기반 물성 및 형상 변형 햅틱 인터페이스 개발" },
    { id: "G3", status: "Ongoing", title: "Interaction Framework for Generative Experiences", agency: "NRF (Pioneer)", period: "2024-2025", description: "시공간 확장형 다중매체 기반 생성형 경험 연결 상호작용 프레임워크" },
    { id: "G4", status: "Ongoing", title: "Human Cognition-Intelligence Augmentation", agency: "IITP (ITRC)", period: "2024-2031", description: "인간 인지-지능 한계 및 장애 극복 증강 기술" },
    { id: "G5", status: "Ongoing", title: "Hyper-realistic Metaverse Haptics", agency: "NST", period: "2023-2029", description: "초실감 메타버스 구현을 위한 촉감표준 및 고충실도 통합 햅틱 시스템 개발" },
    { id: "G6", status: "Ongoing", title: "Semantic Sound-to-Haptic Automatic Conversion", agency: "NRF", period: "2022-2026", description: "의미론적 소리-햅틱 효과 자동 변환: 메타버스, 전신 햅틱 효과, 접근성" },

    // Completed Projects (2023년 이전 종료)
    { id: "G10", status: "Completed", title: "Semantic Audio-to-Haptic Conversion", agency: "Google Research Award", period: "2021-2023", description: "Algorithms and Performance Metrics" },
    { id: "G12", status: "Completed", title: "Real-Virtual Blended Exhibits for Science Culture", agency: "NRF", period: "2020-2022", description: "과학적 원리의 심도 있는 체화 학습을 위한 실제-가상 혼합형 전시물 개발" },
    { id: "G13", status: "Completed", title: "Morphable Haptic Controller for VR/AR", agency: "IITP", period: "2020-2022", description: "다형성 햅틱 컨트롤러" },
    { id: "G14", status: "Completed", title: "Vibration-Mediated Recognition of Hand Contact State", agency: "Microsoft Research Asia", period: "2019-2020", description: "Tangible/Surface Interaction" },
    { id: "G15", status: "Completed", title: "Automatic Authoring of Physical Motion Effects", agency: "Samsung Research Funding", period: "2018-2023", description: "가상현실을 위한 물리적 및 지각/감성적 동작 효과의 자동 저작" },
    { id: "G16", status: "Completed", title: "HD Haptic Technology for Hyper Reality Contents", agency: "IITP", period: "2017-2019", description: "HD 촉감 기술 기반 초실감 콘텐츠 재현 기술" },
    { id: "G20", status: "Completed", title: "Automatic Generation of 4D Haptic Effects", agency: "NRF", period: "2013-2016", description: "몰입형 컨텐츠를 위한 4D 햅틱 효과의 자동 생성 기술" }
];

// data.js (수정됨)

// ... [News, Member, Research 데이터는 기존 유지] ...

///* data.js - publicationData 부분 교체 */

const publicationData = [
    // --- 2025 ---
    {
        year: 2025,
        category: "journal",
        venueShort: "ToH",
        title: "👑 Modeling Emotion Induced by Motion in 4D Rides",
        authors: "Kimin Kwon, Sung H. Han, Dawoon Jeong, Junseong Park, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics (Accepted, Cover Paper)",
        link: "https://doi.org/10.1109/TOH.2025.3630042"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "npj Flex. Elec.",
        title: "Simultaneous Decoding of Static, Dynamic, and Thermal Tactile Stimuli by Using Pulsed Spike Signals in Ion-Electronic Skin",
        authors: "Hyeongseok Choi, Jungeun Lee, Seungmoon Choi, Taeyeong Kim, and Unyong Jeong",
        venue: "npj Flexible Electronics, vol. 9, article no. 115, pp. 1-10",
        link: "https://doi.org/10.1038/s41528-025-00490-9"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "IJHCI",
        title: "Emotional Experience of Audiences in 4D Content",
        authors: "Junseong Park, Sung H. Han, Dawoon Jeong, Kimin Kwon, and Seungmoon Choi",
        venue: "International Journal of Human-Computer Interaction, vol. 41, no. 19, pp. 12535-12550",
        link: "https://doi.org/10.1080/10447318.2025.2462751"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "ToH",
        title: "Tactile Enhancement of Mid-Air Ultrasonic Stimulation by Wrist Vibration: Perceived Intensity and Pattern Recognition",
        authors: "Dong-Geun Kim and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 18, no. 3, pp. 603-614",
        link: "https://doi.org/10.1109/TOH.2025.3581196"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "IJIE",
        title: "Investigating Affective and Emotional Responses to Motion in 4D Movies",
        authors: "Kimin Kwon, Sung H. Han, Dawoon Jeong, Junseong Park, and Seungmoon Choi",
        venue: "International Journal of Industrial Ergonomics, vol. 110, article no. 103810, pp. 1-11",
        link: "https://doi.org/10.1016/j.ergon.2025.103810"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "IEEE TII",
        title: "Assessment of Novel Haptic Interfaces for Digital Twin Teleoperation in High-Risk Steel Production",
        authors: "Jaehyun Park, Yeoeun Kim, Il Seop Choi, Sang-Woo Choi, Seungmoon Choi, and Keehoon Kim",
        venue: "IEEE Transactions on Industrial Informatics, vol. 21, no. 8, pp. 5954-5964",
        link: "https://doi.org/10.1109/TII.2025.3556077"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "TVCG",
        title: "Perceptual Alignment of Spatial Auditory and Tactile Stimuli for Effective Directional Cueing",
        authors: "Dajin Lee and Seungmoon Choi",
        venue: "IEEE Transactions on Visualization and Computer Graphics, vol. 31, no. 5, pp. 2589-2599",
        link: "https://ieeexplore.ieee.org/document/10916976/"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "IJHCS",
        title: "Digital Augmentation of Outdated Museum Exhibits for Learning Enhancement",
        authors: "Dajin Lee, Daehyeon Nam, and Seungmoon Choi",
        venue: "International Journal of Human-Computer Studies, vol. 198, article no. 103470",
        link: ""
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "Adv. Mat. Tech.",
        title: "Simple-Architectured Elastic Touch Sensor with High Spatiotemporal Resolution",
        authors: "Junchen Luo, Chaeyong Park, Yebin Park, Jaehyun Kim, Seungmoon Choi, and Unyong Jeong",
        venue: "Advanced Materials Technologies, vol. 10, issue 4, article no. 2401280, pp. 1-12",
        link: ""
    },

    // --- 2024 ---
    {
        year: 2024,
        category: "journal",
        venueShort: "ToH",
        title: "A Comparative Study of Physical and Haptic Exhibits in an Informal Learning Environment",
        authors: "Dajin Lee, Daehyeon Nam, Jinhyuk Yoon, Dukchan Yoon, Seokwon Jeong, Keehoon Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 17, no. 4, pp. 557-566",
        link: "https://doi.org/10.1109/TOH.2024.3368429"
    },
    {
        year: 2024,
        category: "journal",
        venueShort: "Small",
        title: "Interactive Deformable Colored Sound Display Achieved with Electrostrictive Fluoropolymer and Halide Perovskite",
        authors: "Doowon Park, Woongji Kim, Chaeyong Park, Jun Choi, Arup Ghorai, Gilwoon Lee, Seungmoon Choi, Wonkyu Moon, and Unyong Jeong",
        venue: "Small, vol. 20, issue 43, Article No. 2402281, p. 1-11",
        link: ""
    },
    {
        year: 2024,
        category: "journal",
        venueShort: "ToH",
        title: "Telemetry-based Haptic Rendering for Racing Game Experience Improvement",
        authors: "Jiwan Lee, Junwoo Kim, Jeonggoo Kang, Eunsoo Jo, Dong Chul Park, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 17, no. 1, pp. 72-79",
        link: ""
    },
    {
        year: 2024,
        category: "journal",
        venueShort: "ToH",
        title: "Multimodal Haptic Feedback for Virtual Collisions Combining Vibrotactile and Electrical Muscle Stimulation",
        authors: "Jungeun Lee and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 17, no. 1, pp. 33-38",
        link: ""
    },
    {
        year: 2024,
        category: "journal",
        venueShort: "ToH",
        title: "👑 Effects of Contact Force on Vibrotactile Perceived Intensity Across the Upper Body",
        authors: "Dajin Lee, Gyeore Yun, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 17, no. 1, pp. 14-19 (Candidate for Best ToH Short Paper Award)",
        link: ""
    },
    {
        year: 2024,
        category: "journal",
        venueShort: "ToH",
        title: "👑 Sound-to-Touch Crossmodal Pitch Matching for Short Sounds",
        authors: "Dong-Geun Kim, Jungeun Lee, Gyeore Yun, Hong Z. Tan, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 17, no. 1, pp. 2-7 (Candidate for Best ToH Short Paper Award)",
        link: ""
    },

    // --- 2023 ---
    {
        year: 2023,
        category: "journal",
        venueShort: "ToH",
        title: "Cable-Driven Haptic Interface with Movable Bases Achieving Maximum Workspace and Isotropic Force Exertion",
        authors: "Jinhyuk Yoon, Donghyeon Lee, Junyong Bang, Hyung Gon Shin, Wan Kyun Chung, Seungmoon Choi, and Keehoon Kim",
        venue: "IEEE Transactions on Haptics, vol. 16, no. 3, pp. 376-378",
        link: ""
    },
    {
        year: 2023,
        category: "journal",
        venueShort: "Virtual Reality",
        title: "Sensory Cue Integration of Visual and Vestibular Stimuli: A Case Study for 4D Rides",
        authors: "Jiwan Lee, Sung H. Han, and Seungmoon Choi",
        venue: "Virtual Reality, vol. 27, no. 3, pp. 1671-1683",
        link: ""
    },
    {
        year: 2023,
        category: "journal",
        venueShort: "Adv. Opt. Mat.",
        title: "Intrinsically Synchronized Flexible Visuo-Haptic Device Operated by Single External Electric Field",
        authors: "Gilwoon Lee, Chaeyong Park, Doowon Park, Seungmoon Choi, and Unyong Jeong",
        venue: "Advanced Optical Materials, no. 2202515, pp. 1-9",
        link: ""
    },

    // --- 2022 ---
    {
        year: 2022,
        category: "journal",
        venueShort: "IEEE Access",
        title: "Data-Driven Haptic Modeling and Rendering of Viscoelastic Behavior Using Fractional Derivatives",
        authors: "Hojun Cha, Amit Bhardwaj, and Seungmoon Choi",
        venue: "IEEE Access, vol. 10, pp. 130894-130907",
        link: ""
    },
    {
        year: 2022,
        category: "journal",
        venueShort: "ToH",
        title: "Motion Effects: Perceptual Space and Synthesis for Specific Perceptual Properties",
        authors: "Sangyoon Han, Jiwan Lee, Gyeore Yun, Sung. H. Han, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 15, no. 3, pp. 626-637",
        link: "https://doi.org/10.1109/TOH.2022.3196950"
    },
    {
        year: 2022,
        category: "journal",
        venueShort: "ToH",
        title: "Data-Driven Rendering of Motion Effects for Walking Sensations in Different Gaits",
        authors: "Hyoseung Lee, Seungjae Oh, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 15, no. 3, pp. 547-559",
        link: "https://doi.org/10.1109/TOH.2022.3176974"
    },
    {
        year: 2022,
        category: "journal",
        venueShort: "JMIR",
        title: "Prediction of Specific Anxiety Symptoms and VR Sickness Based on In-Situ Autonomic Physiological Signals during VR Treatment in Patients with Social Anxiety Disorder: Mixed-Methods Study",
        authors: "Chul-Hyun Cho, Joo Young Chun, Hyun-Jin Kim, Ji-Won Hur, Dooyoung Jung, Heon-Jeong Lee, Seung Pil Pack, Sungkil Lee, Gerard J. Kim, Chung-Yean Cho, Seung-Moo Lee, Hyeri Lee, Seungmoon Choi, and Taesu Cheong",
        venue: "JMIR Serious Games, vol. 10, no. 3, e38284",
        link: ""
    },
    {
        year: 2022,
        category: "journal",
        venueShort: "Chem. Eng. J.",
        title: "Emotion-Interactive Empathetic Transparent Skin Cushion with Tailored Frequency-Dependent Hydrogel–Plasticized Nonionic Polyvinyl Chloride Interconnections",
        authors: "Dong-Soo Choi, Jin Woo Bae, Seok-Han Lee, Jin Ho Song, Da Wan Kim, Seungmoon Choi, Changhyun Pang, and Sang-Youn Kim",
        venue: "Chemical Engineering Journal, vol. 442, part 1, no. 136142, pp. 1-11",
        link: ""
    },
    {
        year: 2022,
        category: "journal",
        venueShort: "ToH",
        title: "👑 Perceived Intensity Model of Dual-Frequency Superimposed Vibration: Pythagorean Sum",
        authors: "Yongjae Yoo, Inwook Hwang, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 15, no. 2, pp. 405-415 (Best Paper Award)",
        link: ""
    },

    // --- 2021 ---
    {
        year: 2021,
        category: "journal",
        venueShort: "Adv. Mat. Tech.",
        title: "Small-sized Deformable Shear Sensor Array for Direct Monitoring of Quantitative Shear Distribution",
        authors: "Wonjeong Suh, Chaeyong Park, Joosung Oh, Sungmin Moon, Seungmoon Choi, Youn Soo Kim, and Unyong Jeong",
        venue: "Advanced Materials Technologies, no. 2101071, pp. 1-10",
        link: ""
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "Adv. Mat. Tech.",
        title: "Omni-Directional Tactile Profiling Using a Deformable Pressure Sensor Array Based on Localized Piezoresistivity",
        authors: "Jaehyun Kim, Doowon Park, Sungmin Moon, Chaeyong Park, Kaliannan Thiyagarajan, Seungmoon Choi, Heeseon Hwang, and Unyong Jeong",
        venue: "Advanced Materials Technologies, no. 2100688, pp. 1-9",
        link: ""
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "IJIE",
        title: "Investigating Perceived Emotions and Affects of a Scene, and the User Satisfaction with Motion Effects in 4D Movies",
        authors: "Dong Yeong Jeong, Sung H. Han, Seungmoon Choi, Dawoon Jeong, and Kimin Kwon",
        venue: "International Journal of Industrial Ergonomics, vol. 85, no. 103173, pp. 1-8",
        link: "https://doi.org/10.1016/j.ergon.2021.103173"
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "CHB",
        title: "Investigating 4D Movie Audiences’ Emotional Responses to Motion Effects and Empathy",
        authors: "Dawoon Jeong, Sung H. Han, Dong Yeong Jeong, Kimin Kwon, and Seungmoon Choi",
        venue: "Computers in Human Behavior, vol. 121, no. 106797, pp. 1-14",
        link: ""
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "ToH",
        title: "Length Perception Model for Handheld Controllers: The Effects of Diameter and Inertia",
        authors: "Chaeyong Park, Jinsoo Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 14, no. 2, pp. 310-315",
        link: ""
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "IEEE THMS",
        title: "Driving Skill Modeling Using Neural Networks for Performance-based Haptic Assistance",
        authors: "Hojin Lee, Hyoungkyun Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Human-Machine Systems, vol. 51, no. 3, pp. 198-210",
        link: ""
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "JMIR",
        title: "Virtual Reality-Based Psychotherapy in Social Anxiety Disorder: fMRI Study Using a Self-Referential Task",
        authors: "Ji-Won Hur, Hyemin Shin, Dooyoung Jung, Heon-Jeong Lee, Sungkil Lee, Gerard J. Kim, Chung-Yean Cho, Seungmoon Choi, Seung-Moo Lee, and Chul-Hyun Cho",
        venue: "JMIR Mental Health, vol. 8, no. 4, e25731, pp. 1-13",
        link: ""
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "ToH",
        title: "Magnetorheological Fluid Haptic Shoes for Walking in VR",
        authors: "Tae-Heon Yang, Hyungki Son, Sangkyu Byeon, Hyunjae Gil, Inwook Hwang, Gwanghyun Jo, Seungmoon Choi, Sang-Youn Kim, and Jin Ryong Kim",
        venue: "IEEE Transactions on Haptics, vol. 14, no. 1, pp. 83-94",
        link: ""
    },

    // --- 2020 ---
    {
        year: 2020,
        category: "journal",
        venueShort: "JMIR",
        title: "Effectiveness of a Participatory and Interactive Virtual Reality Intervention in Patients with Social Anxiety Disorder: Longitudinal Questionnaire Study",
        authors: "Hyun-Jin Kim, Seulki Lee, Dooyoung Jung, Ji-Won Hur, Heon-Jeong Lee, Sungkil Lee, Gerard J. Kim, Chung-Yean Cho, Seungmoon Choi, Seung-Moo Lee, and Chul-Hyun Cho",
        venue: "Journal of Medical Internet Research, vol. 22, no. 10, e23024, pp. 1-16",
        link: ""
    },
    {
        year: 2020,
        category: "journal",
        venueShort: "IEEE Access",
        title: "Hybrid Framework for Haptic Texture Modeling and Rendering",
        authors: "Sunghwan Shin and Seungmoon Choi",
        venue: "IEEE Access, vol. 8, pp. 149825–149840",
        link: ""
    },
    {
        year: 2020,
        category: "journal",
        venueShort: "ToH",
        title: "A Review of Surface Haptics: Enabling Tactile Effects on Touch Surfaces",
        authors: "Cagatay Basdogan, Frederic Giraud, Vincent Levesque, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics (Special Issue on Surface Haptics), vol. 13, no. 3, pp. 450-470",
        link: ""
    },
    {
        year: 2020,
        category: "journal",
        venueShort: "Proc. IEEE",
        title: "Methodology for Maximizing Information Transmission of Haptic Devices",
        authors: "Hong Z. Tan, Seungmoon Choi, Frances W. Y. Lau, and Freddy Abnousi",
        venue: "Proceedings of the IEEE, vol. 108, no. 6, pp. 945—965",
        link: ""
    },
    {
        year: 2020,
        category: "journal",
        venueShort: "ToH",
        title: "Data-driven Texture Modeling and Rendering on Electrovibration Display",
        authors: "Reza Haghighi Osgouei, Jin Ryong Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 13, no. 2, pp. 298-311",
        link: ""
    },
    {
        year: 2020,
        category: "journal",
        venueShort: "IEEE TIE",
        title: "Soft Haptic Actuator Based on Knitted PVC Gel Fabric",
        authors: "Won-Hyeong Park, Eun-Jae Shin, Yongjae Yoo, Seungmoon Choi, and Sang-Youn Kim",
        venue: "IEEE Transactions on Industrial Electronics, vol. 67, no. 1, pp. 677-685",
        link: ""
    },

    // --- 2019 ---
    {
        year: 2019,
        category: "journal",
        venueShort: "ToH",
        title: "Effects of Contact Force on Vibrotactile Sensitivity During Active Touch",
        authors: "Seungjae Oh and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 12, no. 4, pp. 645-651",
        link: ""
    },
    {
        year: 2019,
        category: "journal",
        venueShort: "IEEE ToR",
        title: "Estimating Deformed Surface Displacement from Contact Pressure Distribution",
        authors: "Hyoungkyun Kim, Seungmoon Choi, and Wan Kyun Chung",
        venue: "IEEE Transactions on Robotics, vol 35, no. 5, pp. 1260-1267",
        link: ""
    },
    {
        year: 2019,
        category: "journal",
        venueShort: "RA-L",
        title: "Data-Driven Haptic Modeling of Normal Interactions on Viscoelastic Deformable Objects Using a Random Forest",
        authors: "Amit Bhardwaj, Hojun Cha, and Seungmoon Choi",
        venue: "IEEE Robotics and Automation Letters, vol. 4, no. 2, pp. 1379-1386",
        link: ""
    },
    {
        year: 2019,
        category: "journal",
        venueShort: "Psychiatry Inv.",
        title: "Visuo-haptic-based Multimodal Feedback Virtual Reality Solution to Improve Anxiety Symptoms: a Proof-of-Concept Study",
        authors: "Young Im Kim, Seo-Yeon Jung, Seulki Min, Eunbi Seol, Sungho Seo, Ji-Won Hur, Dooyoung Jung, Heon-Jeong Lee, Sungkil Lee, Gerard J. Kim, Chung-Yean Cho, Seungmoon Choi, Seung-Moo Lee, and Chul-Hyun Cho",
        venue: "Psychiatry Investigation, vol. 16, no. 2, pp. 167-171",
        link: ""
    },
    {
        year: 2019,
        category: "journal",
        venueShort: "ToH",
        title: "Haptic Enchanters: Attachable and Detachable Vibrotactile Modules and Their Advantages",
        authors: "Gunhyuk Park, Hojun Cha, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 12, no. 1, pp. 43-55",
        link: ""
    },

    // --- 2017 ---
    {
        year: 2017,
        category: "journal",
        venueShort: "ToH",
        title: "Improving 3D Shape Recognition with Electrostatic Friction Display",
        authors: "Reza Haghighi Osgouei, Jin Ryong Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 10, no. 4, pp. 533-544",
        link: ""
    },
    {
        year: 2017,
        category: "journal",
        venueShort: "ToH",
        title: "Investigation on Low Voltage Operation of Electrovibration Display",
        authors: "Jeonggoo Kang, Heewon Kim, Seungmoon Choi, Ki-Duk Kim, and Jeha Ryu",
        venue: "IEEE Transactions on Haptics, vol. 10, no. 3, pp. 371-381",
        link: ""
    },
    {
        year: 2017,
        category: "journal",
        venueShort: "ToH",
        title: "A Physics-Based Vibrotactile Feedback Library for Collision Events",
        authors: "Gunhyuk Park and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 10, no. 3, pp. 325-337",
        link: ""
    },
    {
        year: 2017,
        category: "journal",
        venueShort: "PLOS ONE",
        title: "Perceptual Space of Superimposed Dual-Frequency Vibrations in the Hands",
        authors: "Inwook Hwang, Jeongil Seo, and Seungmoon Choi",
        venue: "Plos One, vol. 12, no. 1, e01695702016",
        link: ""
    },
    {
        year: 2017,
        category: "journal",
        venueShort: "RA-L",
        title: "Contact Force Decomposition Using Contact Pressure Distribution",
        authors: "Hyoungkyun Kim, Seungmoon Choi, and Wan Kyun Chung",
        venue: "IEEE Robotics and Automation Letters, vol. 2, no. 1, pp. 290-297",
        link: ""
    },

    // --- 2016 ---
    {
        year: 2016,
        category: "journal",
        venueShort: "ToH",
        title: "Mid-air Tactile Stimulation Using Indirect Laser Radiation",
        authors: "Hojin Lee, Ji-Sun Kim, Jae-Young Kim, Seungmoon Choi, Jae-Hoon Jun, Jong-Rak Park, A-Hee Kim, Han-Byeol Oh, Jun-Hyeok Baek, Seung-Jin Yang, Hyung-Sik Kim, and Soon-Cheol Chung",
        venue: "IEEE Transactions on Haptics, vol. 9, no. 4, pp. 574-585",
        link: ""
    },
    {
        year: 2016,
        category: "journal",
        venueShort: "ToH",
        title: "Data-Driven Haptic Modeling and Rendering of Viscoelastic and Frictional Responses of Deformable Objects",
        authors: "Sunghoon Yim, Seokhee Jeon, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 9, no. 4, pp. 548-559",
        link: ""
    },
    {
        year: 2016,
        category: "journal",
        venueShort: "TVCG",
        title: "Motion Effects Synthesis for 4D Films",
        authors: "Jaebong Lee, Bohyung Han, and Seungmoon Choi",
        venue: "IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 10, pp. 2300-2314",
        link: ""
    },
    {
        year: 2016,
        category: "journal",
        venueShort: "IJHCS",
        title: "Assisting People with Visual Impairments in Aiming at a Target on a Large Wall-Mounted Display",
        authors: "Kibum Kim, Xiangshi Ren, Seungmoon Choi, and Hong Z. Tan",
        venue: "International Journal of Human-Computer Studies, vol. 86, pp. 109-120",
        link: ""
    },

    // --- 2015 ---
    {
        year: 2015,
        category: "journal",
        venueShort: "Neurosci. Lett.",
        title: "Evaluation of the Possibility and Response Characteristics of Laser-induced Tactile Sensation",
        authors: "Hyung-Sik Kim, Ji-Sun Kim, Gu-In Jung, Jae-Hoon Jun, Jong-Rak Park, Sung-Phil Kim, Seungmoon Choi, Sung-Jun Park, Mi-Hyun Choi, and Soon-Cheol Chung",
        venue: "Neuroscience Letters, vol. 602, pp. 68-72",
        link: ""
    },
    {
        year: 2015,
        category: "journal",
        venueShort: "Sci. Rep.",
        title: "Laser-induced Thermoelastic Effects Can Evoke Tactile Sensations",
        authors: "Jae-Hoon Jun, Jong-Rak Park, Sung-Phil Kim, Young Min Bae, Jang-Yeon Park, Hyung-Sik Kim, Seungmoon Choi, Sung Jun Jung, Seung Hwa Park, Dong-Il Yeom, Gu-In Jung, Ji-Sun Kim, and Soon-Cheol Chung",
        venue: "Scientific Reports, vol. 5, no. 11016, pp. 1-16",
        link: ""
    },
    {
        year: 2015,
        category: "journal",
        venueShort: "ToH",
        title: "Topography Compensation for Haptization of a Mesh Object and Its Stiffness Distribution",
        authors: "Sunghoon Yim, Seokhee Jeon, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 8, no. 1, pp. 90-101",
        link: ""
    },

    // --- 2014 ---
    {
        year: 2014,
        category: "journal",
        venueShort: "ToH",
        title: "Saliency-Driven Real-Time Video-to-Tactile Translation",
        authors: "Myongchan Kim, Sungkil Lee, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 7, no. 3, pp. 394-404",
        link: ""
    },
    {
        year: 2014,
        category: "journal",
        venueShort: "ToH",
        title: "Consonance of Vibrotactile Chords",
        authors: "Yongjae Yoo, Inwook Hwang, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 7, no. 1, pp. 3-13",
        link: ""
    },

    // --- 2013 ---
    {
        year: 2013,
        category: "journal",
        venueShort: "IEEE THMS",
        title: "Haptic Assistance for Memorization of 2D Selection Sequences",
        authors: "Hojin Lee, Gabjong Han, In Lee, Sunghoon Yim, Kyungpyo Hong, Hyeseon Lee, and Seungmoon Choi",
        venue: "IEEE Transactions on Human-Machine Systems, vol. 43, no. 6, pp. 643-649",
        link: ""
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "Trans. Res. Part F",
        title: "Efficacy of Haptic Blind Spot Warnings Applied through a Steering Wheel or a Seatbelt",
        authors: "Jaemin Chun, In Lee, Gunhyuk Park, Jongman Seo, Seungmoon Choi, and Sung H. Han",
        venue: "Transportation Research Part F: Traffic Psychology and Behaviour, vol. 21, pp. 231-241",
        link: ""
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "ToH",
        title: "Perceptual Analysis of Vibrotactile Flows on a Mobile Device",
        authors: "Jongman Seo and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 6, no. 4, pp. 522-527",
        link: ""
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "Intell. Serv. Robot.",
        title: "Comparative Evaluation of Performance Measures for Human Driving Skills",
        authors: "Reza Haghighi Osgouei, Hojin Lee, and Seungmoon Choi",
        venue: "Intelligent Service Robotics, vol. 17, no. 3, pp. 169-180",
        link: ""
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "Virtual Reality",
        title: "Haptic Discrimination of Virtual Surface Slope",
        authors: "Inwook Hwang, Sunghoon Yim, and Seungmoon Choi",
        venue: "Virtual Reality, vol. 16, no. 3, pp. 205-218",
        link: ""
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "Proc. IEEE",
        title: "Vibrotactile Display: Perception, Technology, and Applications",
        authors: "Seungmoon Choi and Katherine J. Kuchenbecker",
        venue: "Proceedings of the IEEE, vol. 101, no. 9, pp. 2093-2104",
        link: ""
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "ToH",
        title: "Vibrotactile Perceived Intensity for Mobile Devices as a Function of Direction, Amplitude, and Frequency",
        authors: "Inwook Hwang, Jongman Seo, Myongchan Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 6, no. 3, pp. 352-362",
        link: ""
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "ToH",
        title: "Real-time Dual-band Haptic Music Player for Mobile Devices",
        authors: "Inwook Hwang, Hyeseon Lee, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 6, no. 3, pp. 340-351",
        link: ""
    },

    // --- 2012 ---
    {
        year: 2012,
        category: "journal",
        venueShort: "IJIE",
        title: "Evaluation of Vibrotactile Feedback for Forward Collision Warning on the Steering Wheel and Seatbelt",
        authors: "Jaemin Chun, Sung H. Han, Gunhyuk Park, Jongman Seo, In Lee, and Seungmoon Choi",
        venue: "International Journal of Industrial Ergonomics, vol. 42, no. 5, pp. 443-448",
        link: ""
    },
    {
        year: 2012,
        category: "journal",
        venueShort: "ToH",
        title: "Rendering Virtual Tumors in Real Tissue Mock-Ups Using Haptic Augmented Reality",
        authors: "Seokhee Jeon, Seungmoon Choi, and Matthias Harders",
        venue: "IEEE Transactions on Haptics, vol. 5, no. 1, pp. 77-84",
        link: ""
    },

    // --- 2011 ---
    {
        year: 2011,
        category: "journal",
        venueShort: "Presence",
        title: "Real Stiffness Augmentation for Haptic Augmented Reality",
        authors: "Seokhee Jeon and Seungmoon Choi",
        venue: "Presence: Teleoperators and Virtual Environments, vol. 20, no. 4, pp. 337-370",
        link: ""
    },
    {
        year: 2011,
        category: "journal",
        venueShort: "IwC",
        title: "Evaluation of Motion-Based Interaction for Mobile Devices: A Case Study on Image Browsing",
        authors: "Sunghoon Yim, Sungkil Lee, and Seungmoon Choi",
        venue: "Interacting with Computers, vol. 23, no 3, pp. 268-278",
        link: ""
    },

    // --- 2010 ---
    {
        year: 2010,
        category: "journal",
        venueShort: "Presence",
        title: "Psychophysical Model for Vibrotactile Rendering in Mobile Devices",
        authors: "Jonghyun Ryu, Jaehoon Jung, Gunhyuk Park, and Seungmoon Choi",
        venue: "Presence: Teleoperators and Virtual Environments, vol. 10, no. 4, pp. 1-24",
        link: ""
    },
    {
        year: 2010,
        category: "journal",
        venueShort: "ToH",
        title: "Vibrotactile Feedback for Information Delivery in the Vehicle",
        authors: "Jonghyun Ryu, Jaemin Chun, Gunhyuk Park, Seungmoon Choi, and Sung H. Han",
        venue: "IEEE Transactions on Haptics, vol. 3, no. 2, pp. 138-149",
        link: ""
    },

    // --- 2009 ---
    {
        year: 2009,
        category: "journal",
        venueShort: "Presence",
        title: "Haptic Augmented Reality: Taxonomy and an Example of Stiffness Modulation",
        authors: "Seokhee Jeon and Seungmoon Choi",
        venue: "Presence: Teleoperators and Virtual Environments, vol. 18, no. 5, pp. 387-408",
        link: ""
    },
    {
        year: 2009,
        category: "journal",
        venueShort: "IEEE TCE",
        title: "Gesture-Recognizing Hand-Held Interface with Vibrotactile Feedback for 3D Interaction",
        authors: "Sangki Kim, Gunhyuk Park, Sunghoon Yim, Gabjong Han, Seokhee Jeon, Seungmoon Choi, and Seungjin Choi",
        venue: "IEEE Transactions on Consumer Electronics, vol. 55, no. 3, pp. 1169-1177",
        link: ""
    },
    {
        year: 2009,
        category: "journal",
        venueShort: "TVCG",
        title: "Real-Time Depth-of-Field Rendering Using Anisotropically Filtered Mipmap Interpolation",
        authors: "Sungkil Lee, Gerard Jounghyun Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Visualization and Computer Graphics, vol. 15, no. 3, pp. 6-19",
        link: ""
    },
    {
        year: 2009,
        category: "journal",
        venueShort: "IJCAS",
        title: "Discrimination of Visual and Haptic Rendering Delays in Networked Environments",
        authors: "In Lee and Seungmoon Choi",
        venue: "International Journal of Control, Automation, and Systems, vol. 7, no. 1, pp. 25-31",
        link: ""
    },
    {
        year: 2009,
        category: "journal",
        venueShort: "Industrial Robot",
        title: "Cooperative Robotic Assistant with Drill-By-Wire End-Effector for Spinal Fusion Surgery",
        authors: "Jongwon Lee, Inwook Hwang, Keehoon Kim, Seungmoon Choi, Wan Kyun Chung, and Young Soo Kim",
        venue: "Industrial Robot - An International Journal, vol. 36, no. 1, pp. 60-72",
        link: ""
    },
    {
        year: 2009,
        category: "journal",
        venueShort: "TVCG",
        title: "Real-Time Tracking of Visually Attended Objects in Virtual Environments and Its Application to LOD",
        authors: "Sungkil Lee, Gerard Jounghyun Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Visualization and Computer Graphics, vol. 15, no. 1, pp. 6-19",
        link: ""
    },

    // --- 2008 ---
    {
        year: 2008,
        category: "journal",
        venueShort: "CGF",
        title: "Real-Time Depth-of-Field Rendering Using Point Splatting on Per-Pixel Layers",
        authors: "Sungkil Lee, Gerard Jounghyun Kim, and Seungmoon Choi",
        venue: "Computer Graphics Forum, vol. 27, no. 7, pp. 1955-1962",
        link: ""
    },

    // --- 2007 ---
    {
        year: 2007,
        category: "journal",
        venueShort: "IEEE Multimedia",
        title: "Perceptual Issues in Haptic Digital Watermarking",
        authors: "Domenico Prattichizzo, Mauro Barni, Gloria Menegaz, Alessandro Formaglio, Hong Z. Tan and Seungmoon Choi",
        venue: "IEEE Multimedia, vol. 14, no. 3, pp. 84-91",
        link: ""
    },
    {
        year: 2007,
        category: "journal",
        venueShort: "Presence",
        title: "Perceived Instability of Virtual Haptic Texture. III. Effect of Update Rate",
        authors: "Seungmoon Choi and Hong Z. Tan",
        venue: "Presence: Teleoperators and Virtual Environment, vol. 16, no. 3, pp. 263-278",
        link: ""
    }

];

// ... [Awards 데이터 등 나머지는 기존 유지] ...

// 5. Awards Data (Selected)
const awardData = [
    { date: "2025", title: "People’s Choice Award (Hands-on Demo)", organization: "IEEE World Haptics Conference (Automatic Haptic Rendering)" },
    { date: "2025", title: "People’s Choice Award (Hands-on Demo)", organization: "IEEE World Haptics Conference (Haptic Motion Effects)" },
    { date: "2024", title: "Best Paper Award Nominee", organization: "IEEE ISMAR" },
    { date: "2024", title: "Honorable Mention", organization: "ACM CHI" },
    { date: "2024", title: "Best Paper Award", organization: "Computer Graphics and Interaction Society" },
    { date: "2024", title: "Best Paper Award (2nd Place)", organization: "Korea Haptics Conference" },
    { date: "2024", title: "Best Demonstration Award", organization: "Korea Haptics Conference" },
    { date: "2023", title: "Best Paper Award", organization: "IEEE Transactions on Haptics" },
    { date: "2023", title: "POSTECHian Award – Education", organization: "POSTECH" },
    { date: "2011", title: "Early Career Award", organization: "IEEE Technical Committee on Haptics" }
];
