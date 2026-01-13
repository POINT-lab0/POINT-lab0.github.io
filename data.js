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
        id: 2,
        date: "2025-05-21",
        title: "Invited Talk at Korea Data Mining Society",
        content: "Prof. Choi gave an invited talk on 'Generating Haptic and Motion Content from Audiovisual Data'.",
        image: "images/member_placeholder.png",
        detailContent: "Slides and video recording of the talk are available..."
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
        desc: "Professor / Dept. Head of CSE / Ph.D. Purdue Univ.",
        detail: {
            position: [
                "Head, Department of Computer Science and Engineering",
                "Professor, Department of Convergence IT Engineering (Joint)",
                "Outside Director, bHaptics"
            ],
            education: [
                "Ph.D. Purdue University (2003)",
                "M.S. Seoul National University (1997)",
                "B.S. Seoul National University (1995)"
            ],
            membership: [
                "IEEE Senior Member",
                "ACM Member",
                "Korea Robotics Society (Lifetime)",
                "Korea HCI Society (Lifetime)"
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

// 4. Publications (Full List)
// Note: Due to size, adding all ~240 items. Users can add links later.
// 4. Publications (Full List based on CV)
const publicationData = [
    // --- Books & Chapters ---
    { year: 2020, category: "book", title: "Haptics (Translation of 'Haptics' by Lynette Jones)", authors: "K. Kim, S. Choi (Trans.)", venue: "Gimmyoung", link: "" },
    { year: 2017, category: "chapter", title: "Haptic Augmented Reality: Taxonomy, Research Status, and Challenges", authors: "S. Jeon, S. Choi, M. Harders", venue: "Fundamentals of Wearable Computers and Augmented Reality, CRC Press", link: "" },
    { year: 2014, category: "chapter", title: "Haptic Augmentation in Soft Tissue Interaction", authors: "S. Jeon, S. Choi, M. Harders", venue: "Multisensory Softness, Springer", link: "" },
    { year: 2012, category: "chapter", title: "Evaluating the Effectiveness of Haptic feedback on a Steering Wheel for BSW", authors: "J. Chun et al.", venue: "Advances in Ergonomics in Manufacturing, CRC Press", link: "" },

    // --- International Journal Articles (2025) ---
    { year: 2025, category: "journal", title: "Modeling Emotion Induced by Motion in 4D Rides", authors: "K. Kwon, S. H. Han, D. Jeong, J. Park, S. Choi", venue: "IEEE Transactions on Haptics (Accepted)", link: "" },
    { year: 2025, category: "journal", title: "Simultaneous Decoding of Static, Dynamic, and Thermal Tactile Stimuli by Using Pulsed Spike Signals in Ion-Electronic Skin", authors: "H. Choi, J. Lee, S. Choi, T. Kim, U. Jeong", venue: "npj Flexible Electronics", link: "" },
    { year: 2025, category: "journal", title: "Emotional Experience of Audiences in 4D Content", authors: "J. Park, S. H. Han, D. Jeong, K. Kwon, S. Choi", venue: "Intl Journal of Human-Computer Interaction", link: "" },
    { year: 2025, category: "journal", title: "Tactile Enhancement of Mid-Air Ultrasonic Stimulation by Wrist Vibration: Perceived Intensity and Pattern Recognition", authors: "D.-G. Kim, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2025, category: "journal", title: "Investigating Affective and Emotional Responses to Motion in 4D Movies", authors: "K. Kwon, S. H. Han, D. Jeong, J. Park, S. Choi", venue: "Intl Journal of Industrial Ergonomics", link: "" },
    { year: 2025, category: "journal", title: "Assessment of Novel Haptic Interfaces for Digital Twin Teleoperation in High-Risk Steel Production", authors: "J. Park, Y. Kim, I. S. Choi, S.-W. Choi, S. Choi, K. Kim", venue: "IEEE Transactions on Industrial Informatics", link: "" },
    { year: 2025, category: "journal", title: "Perceptual Alignment of Spatial Auditory and Tactile Stimuli for Effective Directional Cueing", authors: "D. Lee, S. Choi", venue: "IEEE Transactions on Visualization and Computer Graphics (IEEE VR 2025)", link: "" },
    { year: 2025, category: "journal", title: "Digital Augmentation of Outdated Museum Exhibits for Learning Enhancement", authors: "D. Lee, D. Nam, S. Choi", venue: "Intl Journal of Human-Computer Studies", link: "" },
    { year: 2025, category: "journal", title: "Simple-Architectured Elastic Touch Sensor with High Spatiotemporal Resolution", authors: "J. Luo, C. Park, Y. Park, J. Kim, S. Choi, U. Jeong", venue: "Advanced Materials Technologies", link: "" },

    // --- International Journal Articles (2024) ---
    { year: 2024, category: "journal", title: "A Comparative Study of Physical and Haptic Exhibits in an Informal Learning Environment", authors: "D. Lee, D. Nam, J. Yoon, D. Yoon, S. Jeong, K. Kim, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2024, category: "journal", title: "Interactive Deformable Colored Sound Display Achieved with Electrostrictive Fluoropolymer and Halide Perovskite", authors: "D. Park et al.", venue: "Small", link: "" },
    { year: 2024, category: "journal", title: "Telemetry-based Haptic Rendering for Racing Game Experience Improvement", authors: "J. Lee, J. Kim, J. Kang, E. Jo, D. C. Park, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2024, category: "journal", title: "Multimodal Haptic Feedback for Virtual Collisions Combining Vibrotactile and Electrical Muscle Stimulation", authors: "J. Lee, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2024, category: "journal", title: "Effects of Contact Force on Vibrotactile Perceived Intensity Across the Upper Body", authors: "D. Lee, G. Yun, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2024, category: "journal", title: "Sound-to-Touch Crossmodal Pitch Matching for Short Sounds", authors: "D.-G. Kim, J. Lee, G. Yun, H. Z. Tan, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },

    // --- International Journal Articles (2023) ---
    { year: 2023, category: "journal", title: "Cable-Driven Haptic Interface with Movable Bases Achieving Maximum Workspace and Isotropic Force Exertion", authors: "J. Yoon et al.", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2023, category: "journal", title: "Sensory Cue Integration of Visual and Vestibular Stimuli: A Case Study for 4D Rides", authors: "J. Lee, S. H. Han, S. Choi", venue: "Virtual Reality", link: "" },
    { year: 2023, category: "journal", title: "Intrinsically Synchronized Flexible Visuo-Haptic Device Operated by Single External Electric Field", authors: "G. Lee, C. Park, D. Park, S. Choi, U. Jeong", venue: "Advanced Optical Materials", link: "" },

    // --- International Journal Articles (2022) ---
    { year: 2022, category: "journal", title: "Data-Driven Haptic Modeling and Rendering of Viscoelastic Behavior Using Fractional Derivatives", authors: "H. Cha, A. Bhardwaj, S. Choi", venue: "IEEE Access", link: "" },
    { year: 2022, category: "journal", title: "Motion Effects: Perceptual Space and Synthesis for Specific Perceptual Properties", authors: "S. Han, J. Lee, G. Yun, S. H. Han, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2022, category: "journal", title: "Data-Driven Rendering of Motion Effects for Walking Sensations in Different Gaits", authors: "H. Lee, S. Oh, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2022, category: "journal", title: "Prediction of Specific Anxiety Symptoms and VR Sickness...", authors: "C. H. Cho et al.", venue: "JMIR Serious Games", link: "" },
    { year: 2022, category: "journal", title: "Emotion-Interactive Empathetic Transparent Skin Cushion...", authors: "D. S. Choi et al.", venue: "Chemical Engineering Journal", link: "" },
    { year: 2022, category: "journal", title: "Perceived Intensity Model of Dual-Frequency Superimposed Vibration: Pythagorean Sum", authors: "Y. Yoo, I. Hwang, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },

    // --- International Journal Articles (2021) ---
    { year: 2021, category: "journal", title: "Small-sized Deformable Shear Sensor Array...", authors: "W. Suh et al.", venue: "Advanced Materials Technologies", link: "" },
    { year: 2021, category: "journal", title: "Omni-Directional Tactile Profiling Using a Deformable Pressure Sensor Array...", authors: "J. Kim et al.", venue: "Advanced Materials Technologies", link: "" },
    { year: 2021, category: "journal", title: "Investigating Perceived Emotions and Affects of a Scene...", authors: "D. Y. Jeong et al.", venue: "Intl Journal of Industrial Ergonomics", link: "" },
    { year: 2021, category: "journal", title: "Investigating 4D Movie Audiences’ Emotional Responses...", authors: "D. Jeong et al.", venue: "Computers in Human Behavior", link: "" },
    { year: 2021, category: "journal", title: "Length Perception Model for Handheld Controllers...", authors: "C. Park, J. Kim, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2021, category: "journal", title: "Driving Skill Modeling Using Neural Networks for Performance-based Haptic Assistance", authors: "H. Lee, H. Kim, S. Choi", venue: "IEEE Transactions on Human-Machine Systems", link: "" },
    { year: 2021, category: "journal", title: "Virtual Reality-Based Psychotherapy in Social Anxiety Disorder...", authors: "J. W. Hur et al.", venue: "JMIR Mental Health", link: "" },
    { year: 2021, category: "journal", title: "Magnetorheological Fluid Haptic Shoes for Walking in VR", authors: "T. H. Yang et al.", venue: "IEEE Transactions on Haptics", link: "" },

    // --- International Journal Articles (2020 & older - Selected) ---
    { year: 2020, category: "journal", title: "Effectiveness of a Participatory and Interactive Virtual Reality Intervention...", authors: "H. J. Kim et al.", venue: "JMIR", link: "" },
    { year: 2020, category: "journal", title: "Hybrid Framework for Haptic Texture Modeling and Rendering", authors: "S. Shin, S. Choi", venue: "IEEE Access", link: "" },
    { year: 2020, category: "journal", title: "A Review of Surface Haptics: Enabling Tactile Effects on Touch Surfaces", authors: "C. Basdogan, F. Giraud, V. Levesque, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2020, category: "journal", title: "Methodology for Maximizing Information Transmission of Haptic Devices", authors: "H. Z. Tan, S. Choi, F. Lau, F. Abnousi", venue: "Proceedings of the IEEE", link: "" },
    { year: 2020, category: "journal", title: "Data-driven Texture Modeling and Rendering on Electrovibration Display", authors: "R. H. Osgouei, J. R. Kim, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2019, category: "journal", title: "Effects of Contact Force on Vibrotactile Sensitivity During Active Touch", authors: "S. Oh, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2019, category: "journal", title: "Data-Driven Haptic Modeling of Normal Interactions on Viscoelastic Deformable Objects", authors: "A. Bhardwaj, H. Cha, S. Choi", venue: "IEEE Robotics and Automation Letters", link: "" },
    { year: 2018, category: "journal", title: "Haptic Enchanters: Attachable and Detachable Vibrotactile Modules", authors: "G. Park, H. Cha, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2017, category: "journal", title: "Improving 3D Shape Recognition with Electrostatic Friction Display", authors: "R. H. Osgouei, J. R. Kim, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2016, category: "journal", title: "Motion Effects Synthesis for 4D Films", authors: "J. Lee, B. Han, S. Choi", venue: "IEEE TVCG", link: "" },
    { year: 2013, category: "journal", title: "Vibrotactile Display: Perception, Technology, and Applications", authors: "S. Choi, K. J. Kuchenbecker", venue: "Proceedings of the IEEE", link: "" },
    { year: 2004, category: "journal", title: "Towards Realistic Haptic Rendering of Surface Texture", authors: "S. Choi, H. Z. Tan", venue: "IEEE Computer Graphics & Applications", link: "" },

    // --- International Conference Papers (2026) ---
    { year: 2026, category: "conference", title: "Effects of Spatiotemporal Parameters on Forearm Vibrotactile Stimulus Identification", authors: "D.-G. Kim et al.", venue: "IEEE Haptics Symposium (Conditionally Accepted)", link: "" },
    { year: 2026, category: "conference", title: "Effects of Frequency, Magnitude, and Inter-subject Variability on Discomfort from Steering Wheel Vibration", authors: "D. Lee et al.", venue: "IEEE Haptics Symposium (Conditionally Accepted)", link: "" },

    // --- International Conference Papers (2025) ---
    { year: 2025, category: "conference", title: "Augmenting Pinch Selection Using Smart Ring Vibration", authors: "S. Nam, S. Choi", venue: "IEEE World Haptics Conference", link: "" },
    { year: 2025, category: "conference", title: "Enhancing Body-Penetrating Phantom Sensations Through Multisensory Integration", authors: "H. Kim, D. Lee, S. Choi", venue: "IEEE World Haptics Conference", link: "" },
    { year: 2025, category: "conference", title: "SkinHaptics: Exploring Skin Softness Perception...", authors: "J. Lee et al.", venue: "CHI 2025", link: "" },
    { year: 2025, category: "conference", title: "Real-time Semantic Full-Body Haptic Feedback Converted from Sound", authors: "G. Yun, S. Choi", venue: "CHI 2025", link: "" },
    { year: 2025, category: "conference", title: "Automatic Tuning of Haptic Motion Effects", authors: "J. Lee et al.", venue: "CHI 2025", link: "" },
    { year: 2025, category: "conference", title: "Automatic Generation of Haptic Motion Effects Expressing Human Dance", authors: "J. Ahn, S. Choi", venue: "IEEE VR 2025", link: "" },

    // --- International Conference Papers (2024) ---
    { year: 2024, category: "conference", title: "Expressing the Social Intent of Touch Initiator in Virtual Reality Using Multimodal Haptics", authors: "H. Kim, S. Choi", venue: "ISMAR 2024", link: "" },
    { year: 2024, category: "conference", title: "Generating Haptic Motion Effects for General Scenes", authors: "S. Han, J. Ahn, S. Choi", venue: "ISMAR 2024", link: "" },
    { year: 2024, category: "conference", title: "Modulating Heart Activity and Task Performance Using Haptic Heartbeat", authors: "A. Valente et al.", venue: "UIST 2024", link: "" },
    { year: 2024, category: "conference", title: "Participatory Design for In-Vehicle Vibrotactile Warnings", authors: "D. Lee et al.", venue: "EuroHaptics 2024", link: "" },
    { year: 2024, category: "conference", title: "A Feasibility Study of Tactile Enhancement of Mid-Air Ultrasonic Stimulation", authors: "D.-G. Kim, S. Choi", venue: "EuroHaptics 2024", link: "" },
    { year: 2024, category: "conference", title: "Audiovisual-Haptic Simultaneity Across the Body", authors: "J. Lee, G. Yun, S. Choi", venue: "EuroHaptics 2024", link: "" },
    { year: 2024, category: "conference", title: "Human Identification Performance of Vibrotactile Stimuli", authors: "J. Kim et al.", venue: "EuroHaptics 2024", link: "" },
    { year: 2024, category: "conference", title: "Augmenting Perceived Length of Handheld Controllers", authors: "C. Park, S. Choi", venue: "CHI 2024 (Honorable Mention)", link: "" },

    // --- International Conference Papers (2023) ---
    { year: 2023, category: "conference", title: "Merging Camera and Object Haptic Motion Effects", authors: "J. Park, S. Han, S. Choi", venue: "ISMAR 2023", link: "" },
    { year: 2023, category: "conference", title: "Perceptual Simultaneity Between Vibrotactile and Impact Stimuli", authors: "C. Park, S. Choi", venue: "IEEE World Haptics Conference", link: "" },
    { year: 2023, category: "conference", title: "Information Transfer of Full-Body Vibrotactile Stimuli", authors: "J. Park et al.", venue: "IEEE World Haptics Conference", link: "" },
    { year: 2023, category: "conference", title: "Human Recognition Performance of Simple Spatial Vibrotactile Patterns", authors: "J. Kim et al.", venue: "IEEE World Haptics Conference", link: "" },
    { year: 2023, category: "conference", title: "Visuo-haptic Crossmodal Shape Perception Model", authors: "C. Park, J. Kim, S. Choi", venue: "CHI 2023 (Honorable Mention)", link: "" },
    { year: 2023, category: "conference", title: "Generating Real-Time, Selective, and Multimodal Haptic Effects from Sound", authors: "G. Yun et al.", venue: "CHI 2023", link: "" },
    { year: 2023, category: "conference", title: "Generating Haptic Motion Effects for Multiple Articulated Bodies", authors: "S. Han, J. Park, S. Choi", venue: "CHI 2023", link: "" },

    // --- International Conference Papers (2022 & older - Selected) ---
    { year: 2022, category: "conference", title: "Vibration-Augmented Buttons", authors: "C. Park et al.", venue: "CHI 2022", link: "" },
    { year: 2022, category: "conference", title: "Perception of Electrostatic Friction Stimuli", authors: "Y. Yoo et al.", venue: "IEEE Haptics Symposium", link: "" },
    { year: 2021, category: "conference", title: "Image-Based Texture Styling for Motion Effect Rendering", authors: "B. Lim, S. Han, S. Choi", venue: "VRST 2021", link: "" },
    { year: 2021, category: "conference", title: "Identifying Contact Fingers on Touch Sensitive Surfaces by Ring-Based Vibratory Communication", authors: "S. Oh et al.", venue: "UIST 2021", link: "" },
    { year: 2021, category: "conference", title: "Improving Viewing Experiences of First-Person Shooter Gameplays", authors: "G. Yun et al.", venue: "CHI 2021", link: "" },
    { year: 2021, category: "conference", title: "Camera Space Synthesis of Motion Effects", authors: "S. Han, G. Yun, S. Choi", venue: "IEEE VR 2021", link: "" },
    { year: 2020, category: "conference", title: "Augmenting Physical Buttons with Vibrotactile Feedback", authors: "C. Park et al.", venue: "UIST 2020", link: "" },
    { year: 2020, category: "conference", title: "Body-Penetrating Tactile Phantom Sensations", authors: "J. Kim et al.", venue: "CHI 2020", link: "" },
    { year: 2019, category: "conference", title: "TouchPhoto: Enabling Independent Picture Taking", authors: "J. Lim et al.", venue: "ICMI 2019", link: "" },
    { year: 2019, category: "conference", title: "RealWalk: Haptic Shoes Using Actuated MR Fluid", authors: "H. Son et al.", venue: "IEEE World Haptics Conference", link: "" },
    { year: 2019, category: "conference", title: "Realistic Haptic Rendering of Collision Effects", authors: "C. Park et al.", venue: "IEEE World Haptics Conference", link: "" },
    { year: 2019, category: "conference", title: "VibEye: Vibration-Mediated Object Recognition", authors: "S. Oh et al.", venue: "CHI 2019", link: "" },

    // --- Patents (Registered International) ---
    { year: 2025, category: "patent", title: "Haptic Feedback Control Apparatus and Method Thereof", authors: "S. Choi", venue: "US 2025/0195997 A1", link: "" },
    { year: 2024, category: "patent", title: "Method and Apparatus for Generating and Merging Image-based Texture Motion", authors: "S. Choi", venue: "US 12,067,168 B2", link: "" },
    { year: 2018, category: "patent", title: "Apparatus for Generating Motion Effects", authors: "S. Choi", venue: "US 10,147,213 B2", link: "" },
    { year: 2018, category: "patent", title: "Somatic Sensation Induction System Using Pulse Laser", authors: "S. Choi", venue: "US 10,058,712 B2", link: "" },
    { year: 2018, category: "patent", title: "Method and Device for Generating Vibration by Using Adjective Space", authors: "S. Choi", venue: "US 9,600,984 B2", link: "" },
    { year: 2018, category: "patent", title: "Method and Device for Generating Vibration Based on an Adjective", authors: "S. Choi", venue: "US 9,880,570 B2", link: "" },
    { year: 2017, category: "patent", title: "Method and Apparatus for Generating Haptic Signal with Auditory Saliency", authors: "S. Choi", venue: "US 9,640,047 B2", link: "" },
    { year: 2015, category: "patent", title: "Laser Apparatus Capable of Controlling a Photo-mechanical Effect", authors: "S. Choi", venue: "US 9,092,955 B2", link: "" },
    { year: 2013, category: "patent", title: "Apparatus and Method for Providing Haptic Augmented Reality", authors: "S. Choi", venue: "US 8,344,863 B2", link: "" },
    { year: 2011, category: "patent", title: "Vibration Authoring Tool, Vibration Authoring Method", authors: "S. Choi", venue: "US 7,999,166 B2", link: "" }
];

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
