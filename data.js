// 1. News Data
const newsData = [
    // ── 2026 ──────────────────────────────────────────────
    {
        id: 1,
        date: "2026-08-01",
        category: "paper",
        title: "Two Papers Accepted at ACM UIST 2026",
        content: "CineHaptic and HAPTCHA will be presented at ACM UIST 2026 in October.",
        image: "",
        detailContent: "Two papers from our lab have been accepted at the ACM Symposium on User Interface Software and Technology (UIST 2026).<br><br>1) <strong>'CineHaptic: Context-Aware Real-Time Audiovisual-to-Haptic Rendering System for In-Vehicle 4D Cinematic Experiences'</strong><br>— Junwoo Kim, Hyunuk Kim, Hyun-Bin Oh, Jeonggoo Kang, Tae-Hyun Oh, and Seungmoon Choi<br><br>2) <strong>'HAPTCHA: Eyes-Free Haptic CAPTCHA in Mobile Environments: Design Principle, Security Evaluation, and User Experience'</strong><br>— Duhong Kweon, Dajin Lee, Seulbae Kim, and Seungmoon Choi"
    },
    {
        id: 2,
        date: "2026-07-10",
        category: "award",
        title: "POINT Lab Receives Three Awards at Korea Haptics Conference 2026",
        content: "The Interaction Lab earned an Outstanding Contributing Institution Award and two Honorable Mentions at KHC 2026.",
        image: "",
        detailContent: "The POSTECH Interaction Laboratory received three awards at the Korea Haptics Conference (KHC) 2026:<br><br><strong>Outstanding Contributing Institution Award</strong><br>Interaction Laboratory at POSTECH<br>Korea Haptics Conference<br><br><strong>Best Paper Award (Honorable Mention)</strong><br>Korea Haptics Conference<br>GenTouchVR: An Automatic Generation Pipeline of a Touch-Enabled Virtual Environments from a Single Image<br><br><strong>Best Demonstration Award (Honorable Mention)</strong><br>Korea Haptics Conference<br>GenTouchVR Demo: Experiencing a Touch-Enabled Virtual Environments Automatically Generated from a Single Image"
    },
    {
        id: 3,
        date: "2026-06-10",
        category: "paper",
        title: "Paper Accepted at EuroHaptics 2026",
        content: "Research comparing force feedback strategies for haptic glove design accepted at EuroHaptics 2026.",
        image: "",
        detailContent: "A paper from our lab has been accepted at EuroHaptics 2026 (Lecture Notes in Computer Science, vol. 16593), and received an award.<br><br><strong>A Perceptual Comparison of Unidirectional and Braking Force Feedback for Stiffness Rendering and Its Implications for Haptic Gloves</strong><br>Jeongwoo Kim, Uison Ju, and Seungmoon Choi<br><br><strong>Honorable Mention, Best Student Paper Award</strong><br>EuroHaptics Conference 2026"
    },
    {
        id: 4,
        date: "2026-04-15",
        category: "paper",
        title: "Three Journal Papers Accepted in 2026",
        content: "New papers accepted in IEEE TVCG, Advanced Intelligent Systems, and IJHCI.",
        image: "",
        detailContent: "We are pleased to announce three journal paper acceptances in 2026:<br><br>1) <strong>'HaptiCraft: A Modular Multimodal Haptic Controller for Immersive Virtual Reality Interactions'</strong><br>IEEE Transactions on Visualization and Computer Graphics<br>— Chaeyong Park, Jeongwoo Kim, Yuk-Gwon Song, Sang-Youn Kim, and Seungmoon Choi<br><br>2) <strong>'Proactive Robotic Grasp Stability via Tactile Safety Margin Feedback'</strong><br>Advanced Intelligent Systems<br>— Yebin Park, Jaehyun Kim, Taeyeong Kim, Woosung Cho, Junchen Luo, Myeongryun Seong, Chaeyong Park, Anna Lee, Seungmoon Choi, Insang You, and Unyong Jeong<br><br>3) <strong>'Investigating Luxuriousness of Steering Wheel Vibration Warning'</strong><br>International Journal of Human-Computer Interaction<br>— Kimin Kwon, Sung H. Han, Seungmoon Choi, et al."
    },
    {
        id: 5,
        date: "2026-03-20",
        category: "paper",
        title: "GenTouchVR Presented at IEEE VR 2026",
        content: "GenTouchVR — generating a touchable VR environment from a single image — featured at IEEE VR 2026.",
        image: "",
        detailContent: "<strong>'GenTouchVR: Generating a Touchable Virtual Reality Environment from a Single Image'</strong> has been published in IEEE Transactions on Visualization and Computer Graphics (Special issue of IEEE VR 2026, Acceptance rate 20.6%).<br><br><strong>Authors:</strong> Jaejun Park, Soyeon Nam, Jeongwoo Kim, Uison Ju, and Seungmoon Choi<br><br>GenTouchVR is an end-to-end pipeline that automatically generates interactive, touchable VR environments from a single RGB image using vision-language models and real-time haptic rendering."
    },
    {
        id: 6,
        date: "2026-03-03",
        category: "paper",
        title: "Three Papers and One Poster Accepted at ACM CHI 2026",
        content: "Our lab's research on gaming haptics, haptic ring interfaces, and social touch accepted at ACM CHI 2026.",
        image: "images/news/chi2026.png",
        detailContent: "Three full papers and one poster have been accepted at the ACM CHI Conference on Human Factors in Computing Systems (CHI 2026).<br><br><strong>[Papers]</strong><br>1) <strong>'Effects of Haptic Feedback on Gaming Experiences: A Case Study Comparing Players and Spectators in FPS Games'</strong><br>— Heeji Sohn, Chaeyong Park, and Seungmoon Choi<br><br>2) <strong>'HaRing: A Haptic Ring Interface for One-Handed Interaction with High-Dimensional Spatial Information'</strong><br>— Suheon Nam, Juhyung Son, Seungmoon Choi, and Chaeyong Park<br><br>3) <strong>'Touch with Meaning: A Contextual Analysis of Social Touch'</strong><br>— Ayush Bhardwaj, Ashish Pratap, Abbas Khawaja, Yapeng Tian, Uison Ju, Dajin Lee, Seungmoon Choi, and Jin Ryong Kim<br><br><strong>[Poster]</strong><br>4) <strong>'Spatial Tactile Optimizer: Toward Perceptual Optimization for Multi-Point Vibrotactile Cues on the Torso'</strong><br>— Dajin Lee and Seungmoon Choi"
    },
    {
        id: 7,
        date: "2026-02-15",
        category: "paper",
        title: "Two Papers Accepted at IEEE Haptics Symposium 2026",
        content: "Research on steering wheel vibration discomfort and forearm stimulus identification accepted at HAPTICS 2026.",
        image: "images/news/haptics_symp_2026.png",
        detailContent: "Our lab will be presenting two papers at the IEEE Haptics Symposium (HAPTICS) 2026.<br><br>1) <strong>'Effects of Frequency, Magnitude, and Inter-subject Variability on Discomfort from Steering Wheel Vibration'</strong><br>— Dajin Lee, Soyeon Nam, Minseong Noh, Sunyoung Jang, and Seungmoon Choi<br><br>2) <strong>'Effects of Spatiotemporal Parameters on Forearm Vibrotactile Stimulus Identification'</strong><br>— Dong-Geun Kim, Geunho Lee, Suheon Nam, Chaeyong Park, and Seungmoon Choi"
    },
    {
        id: 8,
        date: "2026-01-15",
        category: "service",
        title: "Prof. Choi Appointed to Presidential Advisory Council on Science & Technology",
        content: "Prof. Seungmoon Choi joins the AI·ICT Committee of Korea's Presidential Advisory Council on Science & Technology.",
        image: "",
        detailContent: "Prof. Seungmoon Choi has been appointed as a member of the <strong>AI·ICT Committee, Presidential Advisory Council on Science and Technology</strong> (2025–2026).<br><br>In addition, Prof. Choi serves as:<br>• <strong>Chair, Steering Committee</strong>, IEEE World Haptics Conference (2025–present)<br>• <strong>Member, Management Committee</strong>, IEEE Transactions on Haptics (2025–present)"
    },
    // ── 2025 ──────────────────────────────────────────────
    {
        id: 9,
        date: "2025-12-20",
        category: "paper",
        title: "Paper Accepted in IEEE Transactions on Haptics (Cover Paper)",
        content: "New research on 4D ride emotion modeling selected as a Cover Paper in IEEE Transactions on Haptics.",
        image: "images/news/toh_cover.jpg",
        detailContent: "<strong>'Modeling Emotion Induced by Motion in 4D Rides'</strong> has been accepted and selected as a <strong>Cover Paper</strong> for IEEE Transactions on Haptics.<br><br><strong>Authors:</strong> Kimin Kwon, Sung H. Han, Dawoon Jeong, Junseong Park, and Seungmoon Choi"
    },
    {
        id: 10,
        date: "2025-07-08",
        category: "event",
        title: "POINT Lab Hosts IEEE World Haptics Conference 2025",
        content: "The Interaction Lab successfully organized WHC 2025 in Seoul, with multiple awards received by lab members.",
        image: "images/HomeImages/WHC_2025.jpg",
        detailContent: "The Interaction Lab, led by General Chair Prof. Seungmoon Choi, successfully hosted the IEEE World Haptics Conference (WHC) 2025 in Seoul.<br><br>Lab members received the following awards at WHC 2025:<br>• <strong>Honorable Mention, Best WIP Paper Award</strong><br>• <strong>People's Choice Award ×2</strong>, Hands-on Demonstration (including 'Automatic Haptic Rendering Pipeline')"
    },
    {
        id: 11,
        date: "2025-03-01",
        category: "paper",
        title: "Paper Accepted at IEEE VR 2025",
        content: "Research on generating haptic motion effects for human dance accepted at IEEE VR 2025.",
        image: "",
        detailContent: "<strong>'Automatic Generation of Haptic Motion Effects Expressing Human Dance'</strong> has been accepted at the IEEE Conference on Virtual Reality and 3D User Interfaces (VR 2025).<br><br><strong>Authors:</strong> Jaehyeok Ahn and Seungmoon Choi"
    },
    // ── 2024 ──────────────────────────────────────────────
    {
        id: 12,
        date: "2024-03-01",
        category: "service",
        title: "Prof. Choi Appointed as Department Head of CSE",
        content: "Prof. Seungmoon Choi has been appointed as the Department Head of Computer Science and Engineering at POSTECH.",
        image: "images/prof.jpg",
        detailContent: "Prof. Seungmoon Choi has been appointed as the <strong>Head of the Department of Computer Science and Engineering</strong> at POSTECH."
    },
    // ── Graduate ──────────────────────────────────────────
    {
        id: 13,
        date: "2026-08-01",
        category: "graduate",
        title: "Soyeon Nam Completes Master's Degree (2026 Summer)",
        content: "Soyeon Nam graduates with an M.S. in Computer Science and Engineering from POSTECH.",
        image: "",
        detailContent: "Congratulations to <strong>Soyeon Nam (남소연)</strong> on completing her Master's degree!<br><br>• <strong>Soyeon Nam</strong> — M.S., Computer Science and Engineering, POSTECH (2026.8)<br><br>Her research focused on multimodal haptic-audio rendering and human-computer interaction in virtual environments."
    },
    {
        id: 14,
        date: "2026-02-01",
        category: "graduate",
        title: "Hyunwook Kim Completes Master's Degree, Continues as Ph.D. Student (2026 Spring)",
        content: "Hyunwook Kim graduates with an M.S. and continues in the Ph.D. program at POSTECH.",
        image: "",
        detailContent: "Congratulations to <strong>Hyunwook Kim (김현욱)</strong> on completing his Master's degree!<br><br>• <strong>Hyunwook Kim</strong> — M.S., Computer Science and Engineering, POSTECH (2026.2)<br>Thesis: <em>Generating Gaze-Adaptive Semantic Cinematic Haptic Effects</em><br>Continuing as Ph.D. student in the Interaction Lab."
    },
    {
        id: 15,
        date: "2025-08-01",
        category: "graduate",
        title: "Lab Graduates in Summer 2025: One Ph.D. and One Master's",
        content: "Jiwan Lee earns his Ph.D. and stays as Post-Doctoral Researcher; Heeji Sohn completes her Master's and continues to Ph.D.",
        image: "",
        detailContent: "Congratulations to our 2025 summer graduates!<br><br><strong>Ph.D. Graduate</strong><br>• <strong>Jiwan Lee (이지완)</strong> — Ph.D., Computer Science and Engineering, POSTECH (2025.8)<br>Thesis: <em>Perceptually-Grounded Motion Effect Generation for Multisensory Experience Design</em><br>Now Post-Doctoral Researcher in the Interaction Lab.<br><br><strong>Master's Graduate</strong><br>• <strong>Heeji Sohn (손희지)</strong> — M.S., Computer Science and Engineering, POSTECH (2025.8)<br>Thesis: <em>Effects of Haptic Feedback on Gaming Experiences: A Case Study for Players and Spectators in FPS Games</em><br>Continuing as Ph.D. student in the Interaction Lab."
    },
    {
        id: 16,
        date: "2024-08-01",
        category: "graduate",
        title: "Four Lab Members Graduate in Summer 2024",
        content: "Two Ph.D. and two Master's graduates in Summer 2024 — two alumni become faculty at Korean universities.",
        image: "",
        detailContent: "Congratulations to our 2024 summer graduates!<br><br><strong>Ph.D. Graduates</strong><br>• <strong>Gyeore Yun (윤겨레)</strong> — Ph.D., Computer Science and Engineering, POSTECH (2024.8)<br>Thesis: <em>Automatic Generation of Sound-Based Haptic Effects for Augmenting Game Experiences</em><br>Now Assistant Professor, Kyungpook National University.<br><br>• <strong>Chaeyong Park (박채용)</strong> — Ph.D., Computer Science and Engineering, POSTECH (2024.8)<br>Thesis: <em>Multimodal Haptic Rendering and Perception for Handheld VR Controllers</em><br>Post-Doctoral Researcher at POSTECH (2024.9–2025.8) → Now Assistant Professor, Korea University.<br><br><strong>Master's Graduates</strong><br>• <strong>Heeyeon Kim (김희연)</strong> — M.S., Convergence IT Engineering, POSTECH (2024.8)<br>Thesis: <em>Expressing the Social Intent of Touch Initiator in Virtual Reality Using Multimodal Haptics</em><br>Now at KT.<br><br>• <strong>Jaehyeok Ahn (안재혁)</strong> — M.S., Computer Science and Engineering, POSTECH (2024.8)<br>Thesis: <em>Automatic Generation of Motion Effect Expressing Human Dancing</em><br>Now at ByondR."
    },
    // ── Grants ────────────────────────────────────────────
    {
        id: 17,
        date: "2025-04-01",
        category: "grant",
        title: "New IITP Grant: Generative Haptics for Flexible Tactile Interfaces (2025–2028)",
        content: "The Interaction Lab receives a major IITP grant on generative haptics and fine response inference for flexible tactile interfaces.",
        image: "",
        detailContent: "The Interaction Lab has been awarded a new research grant from the Institute for Information and Communication Technology Promotion (IITP).<br><br><strong>Project:</strong> Generative Haptics and Fine Response Inference for Flexible Tactile Interfaces<br>유연소재 촉각 인터페이스에 대한 지능적 촉각 생성과 미세 반응 추론 기술<br><br><strong>Agency:</strong> IITP (Hyper-Sense Cognitive Spatial Computing Technology Development)<br><strong>Period:</strong> April 2025 – December 2028<br><strong>Budget:</strong> KRW 4,900M (approx. USD 3.5M)<br><strong>PI:</strong> Sang Ho Yoon (co-PI: Seungmoon Choi, and others)<br><br>This project aims to develop intelligent tactile generation and fine response inference technologies for flexible tactile interfaces, enabling realistic multisensory interaction in next-generation XR environments."
    },
    {
        id: 18,
        date: "2024-07-01",
        category: "grant",
        title: "Two Major Grants Awarded in 2024: IITP ITRC and NRF Pioneer",
        content: "The Interaction Lab receives two landmark grants: a large-scale IITP center grant and a 5-year NRF Pioneer grant.",
        image: "",
        detailContent: "The Interaction Lab has been awarded two significant research grants in 2024.<br><br><strong>[1] IITP University ICT Research Center (ITRC)</strong><br>Project: Augmentation Technologies to Overcome the Limitations and Disabilities of Human Cognition and Intelligence<br>인간 인지-지능 한계 및 장애 극복 증강 기술<br><strong>Agency:</strong> IITP<br><strong>Period:</strong> July 2024 – December 2031<br><strong>Budget:</strong> KRW 9,138M (approx. USD 6.6M)<br><strong>PI:</strong> Seungmoon Choi (with 12 co-PIs)<br><br><strong>[2] NRF Pioneer Program</strong><br>Project: Interaction Framework for Connecting Users to Generative Experiences via Time-Space Expanded Multimedia<br>시공간 확장형 다중매체 기반 생성형 경험 연결 상호작용 프레임워크<br><strong>Agency:</strong> National Research Foundation (NRF)<br><strong>Period:</strong> July 2024 – December 2029<br><strong>Budget:</strong> KRW 9,000M (approx. USD 6.5M)<br><strong>PI:</strong> Seungmoon Choi (with 5 co-PIs)"
    },
    {
        id: 19,
        date: "2023-07-01",
        category: "grant",
        title: "NST Convergence Research Grant: Haptic Standards for Hyper-Realistic Metaverse (2023–2029)",
        content: "A landmark national convergence research grant to develop tactile standards and high-fidelity haptic systems for the metaverse.",
        image: "",
        detailContent: "The POSTECH Interaction Lab is participating in a major national convergence research project funded by the National Research Council of Science and Technology (NST).<br><br><strong>Project:</strong> Development of Tactile Standards and High-Fidelity Integrated Haptic System for the Realization of a Hyper-realistic Metaverse<br>초실감 메타버스 구현을 위한 촉감표준 및 고충실도 통합 햅틱 시스템 개발<br><br><strong>Agency:</strong> NST Convergence Research Center<br><strong>Period:</strong> July 2023 – June 2029<br><strong>Budget:</strong> KRW 39,000M (approx. USD 28M)<br><strong>PI:</strong> Minsuk Kim (co-PI: Seungmoon Choi, and 15 others)<br><br>This large-scale collaborative project focuses on establishing tactile standards and developing high-fidelity integrated haptic systems to realize truly immersive metaverse experiences."
    },
    {
        id: 20,
        date: "2022-09-01",
        category: "grant",
        title: "NRF Mid-Career Grant: Semantic Sound-to-Haptic Automatic Conversion (2022–2026)",
        content: "Prof. Choi receives an NRF Mid-Career Researcher grant on semantic audio-to-haptic conversion covering metaverse, full-body haptics, and accessibility.",
        image: "",
        detailContent: "Prof. Seungmoon Choi has been awarded a new Mid-Career Researcher grant from the National Research Foundation of Korea (NRF).<br><br><strong>Project:</strong> Semantic Sound-to-Haptic Automatic Conversion: Metaverse, Full-body Haptic Effects, and Accessibility<br>의미론적 소리-햅틱 효과 자동 변환: 메타버스, 전신 햅틱 효과, 접근성<br><br><strong>Agency:</strong> NRF (Mid-Career Researcher Program)<br><strong>Period:</strong> September 2022 – February 2026<br><strong>Budget:</strong> KRW 700M (approx. USD 500K)<br><strong>PI:</strong> Seungmoon Choi<br><br>This project investigates automatic methods for converting semantic audio features into haptic effects, with applications spanning metaverse environments, full-body haptic experiences, and accessibility technologies for users with sensory impairments."
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
        name: "Seungmoon Choi (최승문)", role: "prof", email: "choism@postech.ac.kr", image: "images/prof.jpg", detailImage: "images/prof.jpg",
        website:"https://choism.postech.ac.kr/home",
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
    { name: "Jiwan Lee (이지완)", role: "student", email: "jiwan95@postech.ac.kr", image: "images/selfImage/Jiwan.jpg", website:"https://www.jiwanlee.me/", desc: "Post-Doctoral Researcher, Physical Motion",
        detail: {
            // 줄글 형식
            introduction: "I am Jiwan Lee, a postdoctoral researcher in Computer Science and Engineering at POSTECH, working under the supervision of Prof. Seungmoon Choi. I received my Ph.D. in CSE in 2025.\n\nMy research investigates multisensory perception and haptic experience design, focusing on how sensory cues and their combinations are perceived and translated into authoring for improved experience quality.\n\nI am currently extending my recent work and seeking postdoctoral opportunities that align with my expertise in haptics, multisensory perception, and immersive experience design.",

            // 리스트 형식 (Keywords)
            keyword: [
                "Haptics",
                "HCI",
                "VR/AR",
                "Psychophysics"
            ],

            // 리스트 형식 (Interests)
            interest: [
                "Multisensory Perception (Cross-modal Interaction, Multisensory Integration)",
                "Self-motion Perception and Rendering",
                "Haptic Experience Design",
                "Automatic Haptic Rendering"
            ]
        }
    },

    // Ph.D. Students (Current)
    { name: "Jungeun Lee (이정은)", role: "student", email: "jungeunlee@postech.ac.kr", image: "images/selfImage/jeongeun.jpg", website:"https://jungeunlee93.github.io/", desc: "Ph.D. Student, HRI",
        detail: {
            // 줄글 형식 (Introduction)
            introduction: "I am Jungeun Lee, a Ph.D. candidate in the Department of Convergence IT Engineering at POSTECH, advised by Prof. Seungmoon Choi.\n\n My research centers on Human-Robot Interaction (HRI) and motor learning, with a focus on haptic guidance to facilitate effective robot teleoperation. Beyond guidance, I am interested in creating new interaction methods and haptic devices to enhance user experience in Virtual Reality.\n\nAs I approach the final stage of my doctoral journey, I am looking forward to transitioning into new research opportunities starting in 2027. I am open to both academic and industrial roles, so please feel free to reach out to me via email for potential collaborations or opportunities.",

            // 리스트 형식 (Keywords)
            keyword: [
                "Human-Robot Interaction (HRI)",
                "Multimodal Haptic Rendering",
                "Haptic Interaction",
                "Haptic Hardware Design",
                "Virtual Reality"
            ]
        }
    },
    { name: "Dajin Lee (이다진)", role: "student", email: "dj1122@postech.ac.kr", image: "images/selfImage/dajin_image.png", website:"https://leerubi.github.io/", desc: "Direct Ph.D. Student (CiTE), Multisensory",
         detail: {
             introduction: "My research explores the multisensory integration of sound and touch, with a particular focus on developing spatial audio-tactile rendering techniques and full-body haptic systems to enhance immersive experiences. Beyond rendering, I am deeply interested in embodied learning, investigating how sensory feedback can facilitate intuitive skill acquisition and cognitive engagement in extended reality.\n\nFrom June to November 2026, I will be a visiting researcher at the University of Waterloo, collaborating with Prof. Oliver Schneider to further explore human-centered haptic design.\n\nI am currently preparing for the next chapter of my career and am actively seeking new research positions starting in 2027. I am open to both academic and industrial roles, so please feel free to reach out to me via email for potential collaborations or opportunities.",

            // 리스트 형식 (Keywords)
            keyword: [
                "Spatial Audio-Tactile Rendering",
                "Full-body Haptic Perception",
                "Embodied Learning",
                "VR/AR",
                "Driving Simulation",
                "Accessibility"
            ]
        }
    },
    {
        name: "Donggeun Kim (김동근)",
        role: "student",
        email: "dgkim94@postech.ac.kr",
        image: "images/selfImage/donggeun.jpg",
        website:"https://dgkim94.github.io",
        desc: "Direct Ph.D. Student (CiTE), Perception",
        detail: {
            // 줄글 형식 (Introduction)
            introduction: "I am a Ph.D. student in the Interaction Lab at POSTECH, advised by Prof. Seungmoon Choi. My research focuses on the fundamental mechanisms of haptic perception and its application to advanced communication systems.\n\n Through my work, I aim to push the boundaries of how humans perceive and interact with information through the haptic channel.",
            // 리스트 형식 (Keywords)
            keyword: [
                "Haptic Perception",
                "Tactile Communication",
                "Mid-air Haptics",
                "Ultrasonic Stimulation",
                "Multimodal Interaction"
            ]
        }
    },
    { name: "Jeongwoo Kim (김정우)", role: "student", email: "jwkim0417@postech.ac.kr", image: "images/selfImage/jeongwoo.jpg", desc: "Direct Ph.D. Student (CSE), Haptics",
        detail: {
            // 줄글 형식 (Introduction)
            introduction: "I am a Ph.D. student in the Interaction Lab at POSTECH. I am deeply interested in haptics and virtual reality, and I am currently exploring research on intuitive and realistic interactions with virtual objects.",

            // 리스트 형식 (Keywords)
            keyword: [
                "Haptics",
                "Human-Computer Interaction",
                "Virtual Reality"
            ]
        }
    },
    { name: "Jaejun Park (박재준)", role: "student", email: "jjpark17@postech.ac.kr", image: "images/selfImage/jaejun.jpg", desc: "Direct Ph.D. Student (CSE), VR & Haptics" },
    { name: "Junwoo Kim (김준우)", role: "student", email: "kjw8515@postech.ac.kr", image: "images/selfImage/junwoo.jpg", website: "https://junwooweb.github.io/", desc: "Direct Ph.D. Student (CSE), Haptic Rendering & AI",
        detail: {
                // 줄글 형식 (Introduction)
                introduction: "My research interests lie in Haptics/HCI/XR. I mainly focus on Haptic Rendering/Perception and AI-driven Multimodal Interaction in immersive environments. I am particularly interested in building immersive systems that translate multimedia and environmental signals into meaningful tactile experiences.",

                // 리스트 형식 (Keywords)
                keyword: [
                    "Haptic Rendering/Perception",
                    "Automatic Haptic Generation",
                    "Multimodal AI",
                    "XR/VR"
                ]
        }
    },
    { name: "Heeji Sohn (손희지)", role: "student", email: "hsohn@postech.ac.kr", image: "images/selfImage/heeji.jpg", desc: "Ph.D. Student (CSE), Gaming & HCI",
        detail: {
            // 줄글 형식 (Introduction)
            introduction: "I am a Ph.D. student in Computer Science and Engineering, with research interests in Haptics and Human-Computer Interaction (HCI).\n\n My research explores the design and evaluation of interactive systems, with a focus on haptic feedback to enhance user experience in gaming, immersive systems, and virtual environments.",

            // 리스트 형식 (Keywords)
            keyword: [
                "Haptics",
                "HCI",
                "Gaming Experience"
            ]
        }
    },
    { name: "Hyunuk Kim (김현욱)", role: "student", email: "vldrjtmxkdlf@postech.ac.kr", image: "images/selfImage/hyunuk.jpg", desc: "Ph.D. Student (CSE), AI & Haptics",
        detail: {
            // 줄글 형식 (Introduction) - 요청하신 학위 배경 추가
            introduction: "I received my Master's degree from POSTECH and am currently pursuing a Ph.D. in the same institution.\n\n I am a researcher deeply interested in immersive multimedia content technology driven by Artificial Intelligence. My primary goal is to develop advanced haptic rendering systems that enhance realism and content appreciation in next-generation VR and MR systems. I firmly believe in the bright future of AR glasses and am committed to pioneering haptic solutions that will define the next era of wearable interactive media.",

            // 리스트 형식 (Keywords)
            keyword: [
                "AI in Multimedia",
                "Haptic Rendering",
                "VR/MR Systems",
                "AR Glasses Technology",
                "Immersive Experience"
            ]
        }
    },
    { name: "Uison Ju (주의손)", role: "student", email: "uison1229@postech.ac.kr", image: "images/selfImage/uison.jpg", desc: "Direct Ph.D. Student (CSE), Virtual Reality",
        detail: {
            // 줄글 형식 (Introduction)
            introduction: "I received my B.S. degree in Computer Science Engineering from POSTECH and am currently pursuing a Ph.D. in the same department.\n\n My research interests include haptics, virtual reality, and artificial intelligence. Through my research, I aspire to contribute to enabling truly realistic virtual reality experiences in the future.",

            // 리스트 형식 (Keywords)
            keyword: [
                "Haptics",
                "Virtual Reality",
                "Computer Vision"
            ]
        }
    },
    { name: "Minseong Noh (노민성)", role: "student", email: "noms4694@postech.ac.kr", image: "images/selfImage/minseong.jpg", desc: "Direct Ph.D. Student (CSE), Robotics",
        detail: {
            // 줄글 형식 (Introduction)
            introduction: "I am a direct Ph.D. student at the Interaction Lab in the Computer Science Engineering Department at POSTECH.\n\n I’m interested in designing immersive VR-based human–robot interaction systems that leverage multimodal haptic feedback to improve user performance and embodiment. My research focuses on gesture-based teleoperation and shared-control interfaces, aiming to make robot control more intuitive, safe, and reliable.",

            // 리스트 형식 (Keywords)
            keyword: [
                "Haptics",
                "Robotics",
                "Virtual Reality"
            ]
        }
    },
    { name: "Hyunyong Park (박현용)", role: "student", email: "hjjin111@postech.ac.kr", image: "images/selfImage/hyunyong.jpg", desc: "Direct Ph.D. Student (CSE), VR & HCI",
        detail: {
            // 줄글 형식 (Introduction)
            introduction: "I'm Hyunyong Park, a Ph.D. student at Pohang University of Science and Technology (POSTECH).\n\n My goal is to improve user experience and create more enjoyable, immersive, and realistic interactions through haptics and virtual reality. I am interested in Human-Computer Interaction (HCI), Virtual Reality (VR), and Haptics.",

            // 리스트 형식 (Keywords)
            keyword: [
                "Haptic with Virtual Reality",
                "Human-Computer Interaction"
            ]
        }
    },
    { name: "Taehyeong Jeong (정태형)", role: "student", email: "taepovisid1@postech.ac.kr", image: "images/selfImage/taehyeong.jpg", desc: "Direct Ph.D. Student (CiTE), Haptics" },
    { name: "Juhyeop Lee (이주협)", role: "student", email: "hyeop23@postech.ac.kr", image: "images/selfImage/juhyeop.jpg", desc: "Direct Ph.D. Student (CSE), VR/AR",
        detail: {
            // 줄글 형식 (Introduction)
            introduction: "I graduated from Sogang University with a degree in Computer Science and am currently pursuing an integrated Ph.D. program at POSTECH.\n\n I am particularly passionate about VR and aim to contribute to its advancement by integrating haptics to create more immersive experiences through my doctoral research.",

            // 리스트 형식 (Keywords)
            keyword: [
                "VR/AR",
                "Haptics",
                "Perception",
                "AI"
            ]
        }
    },

    // Master Students (Current)
    { name: "Suheon Nam (남수헌)", role: "student", email: "suheon1203@postech.ac.kr", image: "images/selfImage/suheon.jpg", website:"https://suheon-1203.github.io/", desc: "M.S. Student (CSE), Wearable HCI",
         detail: {
            // 줄글 형식 (Introduction)
            introduction: "I'm a graduate student of the Interaction Lab in POSTECH. I constantly challenge myself and do everything with passion. Specifically, my research lies at the intersection of HCI and haptics, with a core focus on designing and evaluating next-generation wearable interfaces. Besides studying, I feel alive when doing sports, especially basketball. I'm really energetic and passionate.",

            // 리스트 형식 (Keywords)
            keyword: [
                "Human-Computer Interaction (HCI)",
                "Wearable Devices",
                "Haptic Perception",
                "Tactile Communication",
                "Multimodal Interaction",
                "Virtual Reality/Augmented Reality"

            ]
        }
    },
    { name: "Geunho Lee (이근호)", role: "student", email: "rootcom4@postech.ac.kr", image: "images/selfImage/geunho.png", desc: "M.S. Student (CSE), Haptic Perception",
        detail: {
            // 줄글 형식 (Introduction)
            introduction: "I am a Master's student in the Interaction Lab at POSTECH, where I explore the intersection of haptics, perception, and human-computer interaction.\n\n I am particularly drawn to questions about how touch can serve as a primary channel for understanding and navigating the world—from constructing spatial mental models through haptic feedback alone, to designing systems where touch plays a central, indispensable role in everyday life. Beyond research, I believe in building a broad foundation of experience across diverse fields and perspectives.",

            // 리스트 형식 (Keywords)
            keyword: [
                "Haptic Perception & Spatial Cognition",
                "Multimodal Interaction Design",
                "Accessible Haptic Technology",
                "Real-time Haptic Rendering",
                "Cross-domain HCI Applications"
            ]
        }
    },
    { name: "Duhong Kweon (권두홍)", role: "student", email: "duhongk27@postech.ac.kr", image: "images/selfImage/duhong.jpg", desc: "M.S. Student (CSE), Haptics" },

    // Alumni (Full list from CV)
    { name: "Soyeon Nam (남소연)", role: "alumni", desc: "Master (2026)" },
    { name: "Seokhee Jeon (전석희)", role: "alumni", desc: "Ph.D. (2010) / Associate Professor at Kyung Hee Univ." },
    { name: "Sungkil Lee (이성길)", role: "alumni", desc: "Ph.D. (2009) / Professor at Sungkyunkwan Univ." },
    { name: "Inwook Hwang (황인욱)", role: "alumni", desc: "Ph.D. (2013) / Researcher at ETRI" },
    { name: "Jaebong Lee (이재봉)", role: "alumni", desc: "Ph.D. (2016) / Meta, USA" },
    { name: "Hojin Lee (이호진)", role: "alumni", desc: "Ph.D. (2019) / ETRI" },
    { name: "Yongjae Yoo (유용재)", role: "alumni", desc: "Ph.D. (2019) / Assistant Professor at Hanyang Univ. ERICA" },
    { name: "Sunghwan Shin (신성환)", role: "alumni", desc: "Ph.D. (2019) / Samsung Research" },
    { name: "Seungjae Oh (오승재)", role: "alumni", desc: "Ph.D. (2020) / Assistant Professor at Kyung Hee Univ." },
    { name: "Hojun Cha (차호준)", role: "alumni", desc: "Ph.D. (2023) / Samsung Electronics" },
    { name: "Sangyoon Han (한상윤)", role: "alumni", desc: "Ph.D. (2023) / Samsung Electronics" },
    { name: "Gyeore Yun (윤겨레)", role: "alumni", desc: "Ph.D. (2024) / Assistant Professor at Kyungpook National Univ." },
    { name: "Chaeyong Park (박채용)", role: "alumni", desc: "Ph.D. (2024) / Assistant Professor at Korea Univ." },
    { name: "Gunhyuk Park (박건혁)", role: "alumni", desc: "Ph.D. (2017) / Assistant Professor at GIST" },
    { name: "In Lee (이인)", role: "alumni", desc: "Ph.D. (2015) / Samsung Heavy Industries" },
    { name: "Jonghyun Ryu (류종현)", role: "alumni", desc: "Ph.D. (2010) / Samsung Electronics" },
    { name: "Gun Lee (이건)", role: "alumni", desc: "Ph.D. (2009) / Senior Lecturer at Univ. of South Australia" },
    { name: "Jain Hwang (황재인)", role: "alumni", desc: "Ph.D. (2007) / KIST" },
    { name: "Reza Haghighi Osgouei", role: "alumni", desc: "Ph.D. (2018) / Imperial College London" },
    { name: "Amit Bhardwaj", role: "alumni", desc: "Post-Doc (2019) / Assistant Professor at IIT Jodhpur" },
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
// ============================================================
// researchData — Expanded for research-detail.html
// 각 Ongoing 과제에 아래 필드를 추가했습니다:
//   tagline   : 한 줄 소개 (60자 이내)
//   thumbnail : 티저 이미지 경로
//   overview  : 연구 개요 (150-200자 영문 권장)
//   keywords  : 핵심 키워드 배열 (3-5개)
//   papers    : 관련 논문 배열 (journalPapers/confPapers 항목 복사)
//
// 담당자가 채워야 할 항목은 TODO 주석으로 표시했습니다.
// ============================================================

const researchData = [

  // ── Ongoing Projects ─────────────────────────────────────

  {
    id: "G1",
    status: "Ongoing",
    title: "Generative Haptics and Fine Response Inference for Flexible Tactile Interfaces",
    agency: "IITP",
    period: "2025-2028",
    description: "유연소재 촉각 인터페이스에 대한 지능적 촉각 생성과 미세 반응 추론 기술",

    // ── 새로 추가된 필드 ──────────────────────────────────
    tagline: "", // TODO: 담당자 수정
    thumbnail: "images/resesarchImages/g1_teaser.png",                             // TODO: 이미지 경로
    overview:
      "This project aims to develop technologies for perceiving and generating high-resolution " +
        "multimodal tactile sensations from physical signals measured by flexible tactile interfaces," +
        "ultimately enabling the seamless integration of real and virtual haptic stimuli. Our lab " +
        "specifically focuses on multimodal generative rendering and contact-aware haptic rendering methods" +
        "for realistic multisensory interaction across visual, auditory, and tactile modalities.",
    keywords: [], // TODO
    papers: [
      // TODO: 해당 과제 관련 논문을 journalPapers / confPapers 에서 복사해 넣으세요
      // 예시 형식:
      // {
      //   venueShort: "ToH",
      //   title: "Paper title here",
      //   authors: "Author A, Author B, and Seungmoon Choi",
      //   venue: "IEEE Transactions on Haptics, vol. X, no. Y, pp. Z",
      //   link: "https://doi.org/..."
      // },
    ]
  },

  {
    id: "G3",
    status: "Ongoing",
    title: "Interaction Framework for Connecting Users to Generative Experiences via Time-Space Expanded Multimedia",
    agency: "NRF (Pioneer)",
    period: "2024-2025",
    description: "시공간 확장형 다중매체 기반 생성형 경험 연결 상호작용 프레임워크",

    tagline: "", // TODO
    thumbnail: "images/resesarchImages/Fund1.png",                                        // TODO
    overview:
      "This project aims to develop Time-Space Expanded Multimedia (TSEM),  " +
      "a novel format that spatiotemporally expands conventional media. TSEM delivers realistic " +
      "multisensory (visual, auditory, and haptic) feedback and affords bidirectional interaction with  " +
      "personalized content. Our lab specifically focuses on developing novel haptic interfaces and rendering " +
      "methods that enable realistic haptic interactions within the generated VR environments. ",        // TODO
    keywords: ["Virtual Reality", "Generative Haptics", "Haptic Interfaces", "Multisensory Interaction"], // TODO
    papers: []
  },

  {
    id: "G4",
    status: "Ongoing",
    title: "Augmentation Technologies to Overcome the Limitations and Disabilities of Human Cognition and Intelligence",
    agency: "IITP (ITRC)",
    period: "2024-2031",
    description: "인간 인지-지능 한계 및 장애 극복 증강 기술",

    tagline: "", // TODO
    thumbnail: "images/resesarchImages/ITRC_teaser.png",                             // TODO
    overview:
    "This project is a long-term research initiative focused on developing core technologies " +
    "for augmenting human cognition and intelligence beyond inherent biological limitations. " +
    "The research spans multimodal domains including superhuman vision, language and affective " +
    "intelligence augmentation, sensory substitution, and wearable AI systems. In particular, " +
    "our lab contributes to the development of haptic-based sensory substitution technologies, " +
    "such as tactile communication systems, enabling intuitive and efficient information delivery " +
    "for users with sensory impairments. The project also aims to bridge fundamental research and " +
    "real-world applications, ultimately improving accessibility, quality of life, and human–AI interaction.",

  keywords: [
    "Human Augmentation",
    "Cognitive Augmentation",
    "Haptics",
    "Sensory Substitution",
    "Accessibility"
  ],// TODO
    papers: []
  },

  {
    id: "G5",
    status: "Ongoing",
    title: "Development of Tactile Standards and High-Fidelity Integrated Haptic System for the Realization of a Hyper-realistic Metaverse",
    agency: "NST",
    period: "2023-2029",
    description: "초실감 메타버스 구현을 위한 촉감표준 및 고충실도 통합 햅틱 시스템 개발",

    tagline: "", // TODO
    thumbnail: "images/resesarchImages/g5_teaser.png",                          // TODO
    overview:
      "This project aims to develop high-fidelity haptic rendering technology based on tactile " +
        "standard models, alongside a haptic interaction software framework for storing, editing, " +
        "authoring, and reproducing haptic data. Our laboratory specifically investigates interactions" +
        "with rigid and deformable objects using haptic gloves and the corresponding haptic rendering " +
        "techniques. Additionally, we conduct research on device-specific compensation methodologies " +
        "for various haptic actuators.",                                // TODO
    keywords: ["High-fidelity", "Haptic Rendering", "Rigid/Deformable Objects", "Metaverse", "Unimodal/Multimodal"], // TODO
    papers: []
  },

  {
    id: "HRI1",
    status: "Ongoing",
    title: "XR-based Human-Robot Interaction Framework with Shared Autonomy and Multisensory Haptic Feedback",
    agency: "",
    period: "",
    description: "공유 자율성과 다감각 햅틱 피드백을 통합한 XR 기반 인간-로봇 상호작용 프레임워크",

    tagline: "",
    thumbnail: "images/resesarchImages/Robot.png",
    overview:
      "This research project aims to develop and validate a comprehensive human-robot interaction (HRI) " +
      "framework that integrates shared autonomy, multisensory haptic feedback, and gesture-based control " +
      "within XR environments. Under this framework, the human operator receives the robot's status and " +
      "remote environmental information through integrated visual, auditory, and tactile cues. Based on " +
      "this feedback, the operator performs assigned tasks by intuitively controlling the robot via " +
      "gesture-based commands. Finally, an XR-based learning system will be developed to evaluate the " +
      "proposed system's performance and validate its overall task effectiveness.",
    keywords: ["Shared Autonomy", "Multisensory Haptic Feedback", "Gesture-based Control", "Robot Teleoperation"],
    papers: []
  },

  // ── Completed Projects ───────────────────────────────────
  // (기존 항목 그대로 유지 — 상세 필드 미추가)
  { id: "G8" , status: "Completed", title: "Development of the Material- and Shape-Changing Haptic Interface using Smart Materials for VR interactions", agency: "NRF", period: "2024-2025", description: "VR 상호작용을 위한 스마트 물질 기반 물성 및 형상 변형 햅틱 인터페이스 개발" },
  { id: "G9" , status: "Completed", title: "Semantic Sound-to-Haptic Automatic Conversion: Metaverse, Full-body Haptic Effects, and Accessibility", agency: "NRF", period: "2022-2026", description: "의미론적 소리-햅틱 효과 자동 변환: 메타버스, 전신 햅틱 효과, 접근성" },
  { id: "G10", status: "Completed", title: "Semantic Audio-to-Haptic Conversion", agency: "Google Research Award", period: "2021-2023", description: "Algorithms and Performance Metrics" },
  { id: "G12", status: "Completed", title: "Real-Virtual Blended Exhibits for Science Culture", agency: "NRF", period: "2020-2022", description: "과학적 원리의 심도 있는 체화 학습을 위한 실제-가상 혼합형 전시물 개발" },
  { id: "G13", status: "Completed", title: "Morphable Haptic Controller for VR/AR", agency: "IITP", period: "2020-2022", description: "다형성 햅틱 컨트롤러" },
  { id: "G14", status: "Completed", title: "Vibration-Mediated Recognition of Hand Contact State", agency: "Microsoft Research Asia", period: "2019-2020", description: "Tangible/Surface Interaction" },
  { id: "G15", status: "Completed", title: "Automatic Authoring of Physical Motion Effects", agency: "Samsung Research Funding", period: "2018-2023", description: "가상현실을 위한 물리적 및 지각/감성적 동작 효과의 자동 저작" },
  { id: "G16", status: "Completed", title: "HD Haptic Technology for Hyper Reality Contents", agency: "IITP", period: "2017-2019", description: "HD 촉감 기술 기반 초실감 콘텐츠 재현 기술" },
  { id: "G20", status: "Completed", title: "Automatic Generation of 4D Haptic Effects", agency: "NRF", period: "2013-2016", description: "몰입형 컨텐츠를 위한 4D 햅틱 효과의 자동 생성 기술" }
];

// ── Research Topics (10 focus areas) ────────────────────────────────────────
const researchTopics = [
  {
    id: 1, num: "01",
    title: "4D Effect Generation from Audiovisual Media",
    tagline: "Automatically synthesizing motion and vibrotactile effects from raw audiovisual streams for cinema, gaming, and in-cabin automotive XR.",
    keywords: ["4D Cinema", "Motion Synthesis", "Audio-Haptic", "VR / XR", "Psychophysics"],
    overview: [
      "Audiovisual media predominantly engage sight and hearing. True physical immersion requires synchronized multisensory experiences through motion chairs, full-body tactile suits, and distributed vibrotactile actuators. Traditionally, creating 4D physical motion and tactile tracks demanded laborious manual authoring by specialized designers.",
      "Our laboratory pioneers end-to-end computational frameworks that automatically synthesize, optimize, and render physically plausible and emotionally engaging 4D motion and vibrotactile effects from raw audiovisual streams — enabling real-time, scalable, context-aware 4D media generation across cinemas, VR environments, gaming platforms, and next-generation in-cabin automotive experiences."
    ],
    thrusts: [
      { badge: "A", name: "Vision-to-Motion Effect Synthesis", items: [
        "<strong>Camera Motion Synthesis</strong> — Extract optical flow, camera trajectories, and ego-motion from video to drive motion simulator chairs across roll, pitch, yaw, heave, surge, and sway.",
        "<strong>Object & Actor Motion Extraction</strong> — Isolate salient object motions and articulated bodies using visual saliency and gaze tracking, prioritizing focal events in camera coordinates.",
        "<strong>Motion Composition & Blending</strong> — Decouple and merge global camera motion with local object dynamics into physical DoF constraints, avoiding motion artifacts and vestibular conflicts."
      ]},
      { badge: "B", name: "Semantic Sound-to-Touch & Crossmodal Audio-Haptic Conversion", items: [
        "<strong>Real-Time Audio Translation</strong> — Apply frequency decomposition and psychoacoustic filters to map acoustic transients to crisp vibrotactile cues in real time.",
        "<strong>Semantic Sound-to-Haptic Mapping</strong> — Classify environmental sounds (gunshots, footsteps, ambient textures) using AI and route feedback to targeted body locations — vests, gloves, seats.",
        "<strong>Crossmodal Pitch & Rhythm Alignment</strong> — Map acoustic dynamics and pitch to perceived vibrotactile frequency and intensity for coherent audiovisual-haptic experiences."
      ]},
      { badge: "C", name: "Perceptual Space, Psychophysics & Affective Modeling of Motion", items: [
        "<strong>Vestibular & Tactile Thresholds</strong> — Rigorously quantify absolute and differential detection thresholds for vestibular self-motion and full-body tactile stimuli.",
        "<strong>Perceptual Motion Spaces</strong> — Construct multidimensional spaces that guide automated waveform modulation to evoke specific emotions — excitement, luxury, suspense.",
        "<strong>Multisensory Simultaneity</strong> — Define temporal binding windows and cue-integration models across visual, auditory, tactile, and vestibular stimuli to maximize immersion and reduce cybersickness."
      ]},
      { badge: "D", name: "Context-Aware In-Vehicle & Interactive Gaming Experiences", items: [
        "<strong>In-Cabin 4D Experiences (CineHaptic)</strong> — Deploy real-time, context-aware audiovisual-to-haptic engines and smart vibration seats for cinematic media consumption in autonomous vehicles.",
        "<strong>FPS & Spectatorship Augmentation</strong> — Synthesize telemetry and audio-driven haptic effects that significantly enhance engagement, presence, and performance for both players and spectators."
      ]}
    ],
    grants: [
      { org: "Samsung Research Funding & Incubation Center", name: "Automatic Authoring of Physical and Perceptual/Affective Motion Effects for Virtual Reality", amount: "KRW 1.7B", years: "2018–2023", role: "PI" },
      { org: "Google Research Awards", name: "Semantic Audio-to-Haptic Conversion: Algorithms and Performance Metrics", amount: "3 Awards", years: "2021–2024", role: "PI" },
      { org: "National Research Foundation — Mid-Career Program", name: "Semantic Sound-to-Haptic Automatic Conversion for Metaverse & Accessibility", amount: "KRW 700M", years: "2022–2026", role: "PI" },
      { org: "Hyundai Motor Company / NGV", name: "Smart Vibrating Seats; Luxury Steering Wheel Haptics; Vehicle Vibration Perception", amount: "Multi-year", years: "2017–2026", role: "PI" },
      { org: "National Research Foundation — Core Research Program", name: "Automatic Generation of 4D Haptic Effects for Immersive Content", amount: "KRW 306M", years: "2013–2016", role: "PI" }
    ],
    journals: [
      { authors: "K. Kwon, S. H. Han, D. Jeong, J. Park, and <strong>S. Choi</strong>", title: "Modeling Emotion Induced by Motion in 4D Rides", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 18, no. 4, pp. 1033–1044, 2025", award: "Cover Paper" },
      { authors: "S. Han, J. Lee, G. Yun, S. H. Han, and <strong>S. Choi</strong>", title: "Motion Effects: Perceptual Space and Synthesis for Specific Perceptual Properties", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 15, no. 3, pp. 626–637, 2022" },
      { authors: "J. Lee, S. H. Han, and <strong>S. Choi</strong>", title: "Sensory Cue Integration of Visual and Vestibular Stimuli: A Case Study for 4D Rides", venue: "Virtual Reality", venueClass: "tvcg", year: "vol. 27, no. 3, pp. 1671–1683, 2023" },
      { authors: "J. Lee, B. Han, and <strong>S. Choi</strong>", title: "Motion Effects Synthesis for 4D Films", venue: "IEEE Trans. TVCG", venueClass: "tvcg", year: "vol. 22, no. 10, pp. 2300–2314, 2016" },
      { authors: "M. Kim, S. Lee, and <strong>S. Choi</strong>", title: "Saliency-Driven Real-Time Video-to-Tactile Translation", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 7, no. 3, pp. 394–404, 2014" },
      { authors: "I. Hwang, H. Lee, and <strong>S. Choi</strong>", title: "Real-time Dual-band Haptic Music Player for Mobile Devices", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 6, no. 3, pp. 340–351, 2013" }
    ],
    conferences: [
      { authors: "J. Kim, H. Kim, H.-B. Oh, J. Kang, T.-H. Oh, and <strong>S. Choi</strong>", title: "CineHaptic: Context-Aware Real-Time Audiovisual-to-Haptic Rendering System for In-Vehicle 4D Cinematic Experiences", venue: "ACM UIST", venueClass: "uist", year: "2026" },
      { authors: "J. Lee, D. Jeong, S. H. Han, and <strong>S. Choi</strong>", title: "Automatic Tuning of Haptic Motion Effects to Evoke Specific Feelings in Multisensory Content", venue: "ACM CHI", venueClass: "chi", year: "2025" },
      { authors: "G. Yun and <strong>S. Choi</strong>", title: "Real-time Semantic Full-Body Haptic Feedback Converted from Sound for Virtual Reality Gameplay", venue: "ACM CHI", venueClass: "chi", year: "2025" },
      { authors: "J. Ahn and <strong>S. Choi</strong>", title: "Automatic Generation of Haptic Motion Effects Expressing Human Dance", venue: "IEEE VR", venueClass: "tvcg", year: "2025" },
      { authors: "S. Han, J. Ahn, and <strong>S. Choi</strong>", title: "Generating Haptic Motion Effects for General Scenes to Improve 4D Experiences", venue: "IEEE ISMAR", venueClass: "ismar", year: "2024" },
      { authors: "S. Han, J. Park, and <strong>S. Choi</strong>", title: "Generating Haptic Motion Effects for Multiple Articulated Bodies for Improved 4D Experiences: A Camera Space Approach", venue: "ACM CHI", venueClass: "chi", year: "2023" },
      { authors: "G. Yun, M. Mun, J. Lee, D.-G. Kim, H. Z. Tan, and <strong>S. Choi</strong>", title: "Generating Real-Time, Selective, and Multimodal Haptic Effects from Sound for Gaming Experience Enhancement", venue: "ACM CHI", venueClass: "chi", year: "2023" },
      { authors: "J. Lee and <strong>S. Choi</strong>", title: "Real-Time Perception-Level Translation from Audio Signals to Vibrotactile Effects", venue: "ACM CHI", venueClass: "chi", year: "2013" }
    ]
  },
  {
    id: 2, num: "02",
    title: "Generative Haptics & AI-Driven Touch Synthesis",
    tagline: "Automatically generating touch-enabled VR environments and force fields from single images and large AI models.",
    keywords: ["Generative AI", "Haptic Synthesis", "VR / XR", "LLM / VLM", "Spatial Computing"],
    overview: [
      "The next frontier in haptics lies in automatically generating touch-enabled virtual experiences from visual content — enabling users to feel objects in VR environments that were previously visual-only. Traditional haptic content requires expert manual programming; our generative haptics framework automates this pipeline using large AI models.",
      "We develop end-to-end systems that infer physical properties from single images, generate collision meshes and tactile material parameters, and render kinesthetic and tactile force feedback through physics simulation — democratizing haptic content creation for XR spatial computing, accessibility, and social interaction applications."
    ],
    thrusts: [
      { badge: "A", name: "Single-Image-to-Touchable-VR Pipelines (GenTouchVR)", items: [
        "<strong>Automated 3D Scene & Collision Generation</strong> — Use vision-language models to infer 3D geometry, segment objects, and generate physics-ready collision meshes from a single RGB image.",
        "<strong>Multimodal Physical Property Inference</strong> — Estimate stiffness, friction, surface texture, and mass distribution from visual appearance, color, and material cues using foundation models.",
        "<strong>Real-Time Haptic Rendering Integration</strong> — Couple the generated scene representation with a real-time physics engine to render kinesthetic and vibrotactile feedback during user interaction."
      ]},
      { badge: "B", name: "LLM/VLM-Grounded Kinesthetic & Tactile Force Fields", items: [
        "<strong>Physics-Grounded AI Reasoning</strong> — Ground large language and vision-language models in physical simulation to infer plausible force interactions beyond visual appearance.",
        "<strong>Automatic Haptic Rendering Pipeline</strong> — Build a generalized pipeline that leverages AI perception to drive haptic rendering across diverse object categories without manual authoring."
      ]},
      { badge: "C", name: "Dynamic Haptic Synthesis for Generative Virtual Environments", items: [
        "<strong>Generative Interaction for Spatial Computing</strong> — Extend generative haptics to dynamic environments in AR headsets and spatial computing platforms, supporting real-time object generation and interaction.",
        "<strong>Generative Haptics for Accessibility & Social Communication</strong> — Apply AI-driven touch synthesis to enable visually impaired users to explore generative visual scenes through tactile feedback."
      ]}
    ],
    grants: [
      { org: "IITP — Hyper-Sense Cognitive Spatial Computing", name: "Convergence Research Center for Cognitive Spatial XR Computing", amount: "KRW 4.9B", years: "2025–2028", role: "Co-PI" },
      { org: "National Research Foundation — Pioneer Program", name: "AI-Augmented Haptic Interaction for Social Communication and Accessibility", amount: "KRW 9.0B", years: "2024–2029", role: "PI" },
      { org: "IITP — University ICT Research Center", name: "Immersive Haptic Interaction Technology for Next-Generation XR", amount: "KRW 9.138B", years: "2024–2031", role: "PI" },
      { org: "Google Research Awards", name: "Semantic Audio-to-Haptic Conversion: Algorithms and Performance Metrics", amount: "3 Awards", years: "2021–2024", role: "PI" }
    ],
    journals: [
      { authors: "J. Park, S. Nam, J. Kim, U. Ju, and <strong>S. Choi</strong>", title: "GenTouchVR: Generating a Touchable Virtual Reality Environment from a Single Image", venue: "IEEE Trans. TVCG", venueClass: "tvcg", year: "Special Issue of IEEE VR, 2026", award: "Acceptance rate 20.6%" }
    ],
    conferences: [
      { authors: "J. Kim, J. Park, S. Nam, U. Ju, and <strong>S. Choi</strong>", title: "Automatic Haptic Rendering Pipeline Using AI Models for Generative Virtual Environments", venue: "IEEE WHC", venueClass: "haptics", year: "2025 (Hands-on Demo)" },
      { authors: "<strong>S. Choi</strong>", title: "Making Generated Scenes Touchable: Generative Haptics for Spatial Computing", venue: "ACM CHI Workshop", venueClass: "chi", year: "2026" }
    ]
  },
  {
    id: 3, num: "03",
    title: "Multisensory XR Perception & Interaction",
    tagline: "Mapping crossmodal visuo-haptic, audio-tactile, and social touch interactions to design immersive and embodied XR experiences.",
    keywords: ["Crossmodal Perception", "Visuo-Haptic", "Audio-Tactile", "Phantom Sensations", "Social Touch"],
    overview: [
      "When humans interact with virtual or augmented environments, perception is inherently multisensory: visual, tactile, proprioceptive, and auditory cues are tightly integrated. Understanding and exploiting crossmodal interactions — how one sensory channel influences another — is fundamental to designing compelling XR systems.",
      "Our research maps the perceptual spaces of visuo-haptic, audio-tactile, and embodied social touch interactions, develops computational models of crossmodal binding, and applies these insights to create immersive phantom sensations, egocentric navigation aids, and authentic social communication through haptic-enabled XR avatars."
    ],
    thrusts: [
      { badge: "A", name: "Crossmodal Visuo-Haptic Perception & Shape Illusions", items: [
        "<strong>Inertial Tensor & Moment of Inertia Modulations</strong> — Exploit how visual mass distribution cues override kinesthetic sensing to create compelling weight and inertia illusions in handheld VR controllers.",
        "<strong>Visuo-Haptic Compliance Weighting</strong> — Model how visual stiffness signals are weighted against tactile and kinesthetic cues across different interaction conditions to design optimal force feedback.",
        "<strong>Pseudo-Haptic Illusions</strong> — Use visually-induced haptic sensations to simulate surface features such as bumps, stiffness variation, and texture in the absence of physical actuators."
      ]},
      { badge: "B", name: "Spatial Audio-Tactile Cueing & Directional Alignment", items: [
        "<strong>Perceptual Alignment of Audio and Touch</strong> — Characterize temporal and spatial binding windows between auditory and tactile stimuli for coherent multisensory rendering on the body surface.",
        "<strong>Egocentric Spatial Navigation</strong> — Represent egocentric directions using torso-applied vibrotactile patterns to support eyes-free spatial awareness in immersive environments.",
        "<strong>Crossmodal Sound-to-Touch Matching</strong> — Map acoustic pitch and timbre to vibrotactile frequency and intensity for perceptually consistent audio-haptic rendering of short contact sounds."
      ]},
      { badge: "C", name: "Tactile Illusions & Body-Penetrating Phantom Sensations", items: [
        "<strong>Moving Phantom Sensations</strong> — Design continuous spatial tactile illusions along the body surface using actuator patterns that exploit cutaneous funneling and motion perception mechanisms.",
        "<strong>Body-Penetrating Phantom Sensations (SkinHaptics)</strong> — Create the perceptual illusion that tactile stimuli pass through the body, enabling novel interaction paradigms for XR embodiment and social touch."
      ]},
      { badge: "D", name: "Embodied Social Touch & Self-Haptics in XR", items: [
        "<strong>Social Intent Communication</strong> — Analyze the contextual meaning of social touch gestures and design haptic avatars that convey affect, intent, and social signals through body-worn actuators.",
        "<strong>Self-Haptic Perception & Virtual Embodiment</strong> — Study how self-generated touch (SkinHaptics) differs from externally applied touch and leverage these differences for immersive virtual body ownership."
      ]}
    ],
    grants: [
      { org: "NST — Convergence Research Center", name: "Future Human-Environment Interface Technology", amount: "KRW 39.0B", years: "2023–2029", role: "Co-PI" },
      { org: "National Research Foundation — Pioneer Program", name: "AI-Augmented Haptic Interaction for Social Communication and Accessibility", amount: "KRW 9.0B", years: "2024–2029", role: "PI" },
      { org: "IITP", name: "5G & XR-based Remote Haptic Interaction Technology", amount: "KRW 7.98B", years: "2022–2026", role: "Co-PI" },
      { org: "Korea Creative Content Agency (KOCCA)", name: "Immersive XR Content Technology", amount: "KRW 3.0B", years: "2021–2023", role: "Co-PI" }
    ],
    journals: [
      { authors: "T. Jung, C. Park, J. Kim, and <strong>S. Choi</strong>", title: "Perceiving Compliance in Virtual Reality: Crossmodal Visuo-Haptic Cue Integration", venue: "IEEE Trans. TVCG", venueClass: "tvcg", year: "2026" },
      { authors: "D. Lee and <strong>S. Choi</strong>", title: "Perceptual Alignment of Spatial Auditory and Tactile Stimuli Presented on the Body Surface", venue: "IEEE Trans. TVCG", venueClass: "tvcg", year: "vol. 31, 2025" },
      { authors: "J. Kim, D. Lee, and <strong>S. Choi</strong>", title: "Representing Egocentric Directions with Torso-Applied Vibrotactile Stimuli", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "2026" },
      { authors: "D.-G. Kim, G. Yun, and <strong>S. Choi</strong>", title: "Sound-to-Touch Crossmodal Pitch Matching for Short Sounds", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 17, no. 3, 2024" },
      { authors: "C. Park, J. Kim, and <strong>S. Choi</strong>", title: "Length Perception Model for Handheld Controllers in Virtual Reality", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 14, no. 3, pp. 576–587, 2021" },
      { authors: "Y. Yoo, I. Hwang, and <strong>S. Choi</strong>", title: "Perceived Intensity Model of Dual-Frequency Superimposed Vibration for Vibrotactile Rendering", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 15, no. 1, pp. 98–108, 2022" }
    ],
    conferences: [
      { authors: "C. Park, J. Kim, and <strong>S. Choi</strong>", title: "Visuo-haptic Crossmodal Shape Perception Model for Handheld Controllers in VR", venue: "ACM CHI", venueClass: "chi", year: "2023" },
      { authors: "C. Park and <strong>S. Choi</strong>", title: "Augmenting Perceived Length of Handheld Controllers in VR via Visual-Weight Illusion", venue: "ACM CHI", venueClass: "chi", year: "2024" },
      { authors: "J. Lee, D. Lee, U. Ju, and <strong>S. Choi</strong>", title: "SkinHaptics: Creating Body-Penetrating Tactile Phantom Sensations from the Hand", venue: "ACM CHI", venueClass: "chi", year: "2025" },
      { authors: "H. Kim and <strong>S. Choi</strong>", title: "Expressing the Social Intent of Touch Using a Haptic Avatar", venue: "IEEE ISMAR", venueClass: "ismar", year: "2024" },
      { authors: "J. Kim, S. Choi, and <strong>S. Choi</strong>", title: "Body-Penetrating Tactile Phantom Sensations", venue: "ACM CHI", venueClass: "chi", year: "2020" },
      { authors: "H. Kim, D. Lee, and <strong>S. Choi</strong>", title: "Enhancing Body-Penetrating Phantom Sensations via Audio-Tactile Congruence", venue: "IEEE WHC", venueClass: "haptics", year: "2025" }
    ]
  },
  {
    id: 4, num: "04",
    title: "Multimodal Haptics & Actuation Systems",
    tagline: "Designing compound VR controllers, EMS-integrated wearables, smart rings, and flexible sensors to deliver the full spectrum of touch sensations.",
    keywords: ["Haptic Devices", "VR Controllers", "EMS", "Wearables", "Smart Ring"],
    overview: [
      "Effective haptic interfaces require hardware that faithfully delivers the full range of tactile and kinesthetic sensations — from precise vibrotactile textures to strong kinesthetic forces for rigid contact simulation. Novel actuator designs, hybrid sensory combinations, and wearable form factors are key challenges in the field.",
      "Our laboratory designs and evaluates multimodal haptic devices — including compound VR controllers with multiple actuator types, EMS-integrated wearables for neuromuscular guidance, smart ring displays, and flexible sensor arrays — advancing the physical substrate for realistic touch rendering across VR, XR, and everyday interaction contexts."
    ],
    thrusts: [
      { badge: "A", name: "Compound Tactile Actuation & Handheld VR Controllers", items: [
        "<strong>Multimodal Handheld Controllers (HaptiCraft, MMGrip)</strong> — Integrate vibrotactile transducers, pneumatic arrays, and braking mechanisms into ergonomic VR controller designs that deliver concurrent kinesthetic and tactile feedback.",
        "<strong>Braking vs. Active Force Feedback for Haptic Gloves</strong> — Compare unidirectional and braking force feedback strategies for stiffness rendering and derive principled design guidelines for next-generation haptic gloves."
      ]},
      { badge: "B", name: "Hybrid Vibrotactile & Electrical Muscle Stimulation (EMS)", items: [
        "<strong>Neuromuscular Collision Rendering</strong> — Combine surface electromyography with vibrotactile feedback to render virtual collisions with high temporal fidelity and perceptual realism.",
        "<strong>Tactile-EMS Teleoperation Guidance</strong> — Superimpose EMS-based muscle guidance on voluntary motor commands to provide unobtrusive directional assistance during teleoperation tasks."
      ]},
      { badge: "C", name: "Wearable Micro-Haptics & Smart Rings (HaRing, Haptic Enchanters)", items: [
        "<strong>Haptic Smart Ring Displays (HaRing)</strong> — Design a finger-worn haptic ring that delivers spatial and directional vibrotactile cues for one-handed interaction with high-dimensional spatial information.",
        "<strong>Attachable/Detachable Modular Actuators</strong> — Develop modular, magnetic haptic enchanter modules that snap onto standard objects to add vibrotactile feedback without dedicated haptic hardware."
      ]},
      { badge: "D", name: "Thermal-Tactile Integration, Mid-Air & Smart Materials", items: [
        "<strong>Dynamic Heat Transfer Modeling</strong> — Model and predict perceived skin temperature during thermal-tactile interaction using thermodynamic models calibrated on human perception data.",
        "<strong>Mid-Air Non-Contact Tactile Displays</strong> — Enhance the perceived intensity and spatial resolution of mid-air ultrasonic tactile stimulation via perceptual and signal processing strategies.",
        "<strong>Flexible Tactile & Shear Sensor Arrays</strong> — Develop stretchable electronics that simultaneously decode static, dynamic, and thermal stimuli for dexterous robotic grasping and prosthetic feedback."
      ]}
    ],
    grants: [
      { org: "IITP", name: "5G & XR-based Remote Haptic Interaction Technology", amount: "KRW 7.98B", years: "2022–2026", role: "Co-PI" },
      { org: "IITP — Morphable Haptic Controller", name: "Morphable Haptic Controller for VR/AR", amount: "KRW 2.7B", years: "2020–2022", role: "Co-PI" },
      { org: "IITP — HD Haptic Technology", name: "HD Haptic Technology for Hyper-Reality Content", amount: "KRW 2.75B", years: "2017–2019", role: "PI" },
      { org: "National Research Foundation — Pioneer Research Center", name: "Interaction Science and Technology (InSciTe) Center", amount: "KRW 5.47B", years: "2011–2017", role: "Co-PI" },
      { org: "National Research Foundation — Support Program", name: "Multimodal Haptic Device Evaluation Framework", amount: "KRW 200M", years: "2024–2025", role: "PI" }
    ],
    journals: [
      { authors: "C. Park, J. Kim, Y.-G. Song, S.-Y. Kim, and <strong>S. Choi</strong>", title: "HaptiCraft: A Modular Multimodal Haptic Controller for Immersive VR Interactions", venue: "IEEE Trans. TVCG", venueClass: "tvcg", year: "2026" },
      { authors: "J. Lee and <strong>S. Choi</strong>", title: "Multimodal Haptic Feedback for Rendering Virtual Collisions in VR", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 17, no. 2, 2024" },
      { authors: "D.-G. Kim and <strong>S. Choi</strong>", title: "Tactile Enhancement of Mid-Air Ultrasonic Stimulation via Perceptual Upscaling", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "2025" },
      { authors: "H. Choi et al.", title: "Simultaneous Decoding of Static, Dynamic, and Thermal Tactile Stimuli for Intelligent Skin", venue: "npj Flexible Electronics", venueClass: "other", year: "2025" },
      { authors: "G. Park, H. Cha, and <strong>S. Choi</strong>", title: "Haptic Enchanters: Attachable and Detachable Vibrotactile Modules for Augmented Haptic Feedback", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 12, no. 2, pp. 211–221, 2019" },
      { authors: "W.-H. Park et al.", title: "Soft Haptic Actuator Based on Knitted PVC Gel Fabric", venue: "IEEE Trans. Industrial Electronics", venueClass: "other", year: "vol. 67, no. 1, pp. 677–685, 2020" }
    ],
    conferences: [
      { authors: "S. Nam, J. Son, <strong>S. Choi</strong>, and C. Park", title: "HaRing: A Haptic Ring Interface for One-Handed Interaction with High-Dimensional Spatial Information", venue: "ACM CHI", venueClass: "chi", year: "2026" },
      { authors: "J. Kim, U. Ju, and <strong>S. Choi</strong>", title: "A Perceptual Comparison of Unidirectional and Braking Force Feedback for Stiffness Rendering and Its Implications for Haptic Gloves", venue: "EuroHaptics", venueClass: "haptics", year: "2026", award: "Best Student Paper HM" },
      { authors: "C. Park, J. Kim, and <strong>S. Choi</strong>", title: "Realistic Haptic Rendering of Collision Effects Using Multimodal Vibrotactile and Kinesthetic Feedback", venue: "IEEE WHC", venueClass: "haptics", year: "2019" },
      { authors: "S. Nam and <strong>S. Choi</strong>", title: "Augmenting Pinch Selection with Vibrotactile Feedback Using a Haptic Ring", venue: "IEEE WHC", venueClass: "haptics", year: "2025" }
    ]
  },
  {
    id: 5, num: "05",
    title: "Haptic Assistance & Sensorimotor Skill Transfer",
    tagline: "Building computational models of human motor skills and adaptive haptic guidance paradigms to accelerate learning in music, surgery, and industry.",
    keywords: ["Motor Learning", "Haptic Guidance", "Musical Training", "Teleoperation", "Surgical Robotics"],
    overview: [
      "Haptic interfaces offer a unique channel for skill transfer: by guiding or disturbing a trainee's movements through precisely designed force feedback, we can accelerate motor learning for sports, surgery, musical performance, and industrial operation.",
      "Our research builds computational models of human sensorimotor skills, develops adaptive haptic guidance and error-augmentation paradigms, and evaluates their efficacy in longitudinal training studies — with applications spanning rhythm-based musical instrument learning, bilateral surgical teleoperation, and neuromuscular rehabilitation."
    ],
    thrusts: [
      { badge: "A", name: "Computational Modeling of Human Sensorimotor Skills", items: [
        "<strong>Statistical & Deep Learning Skill Modeling</strong> — Capture the kinematics, dynamics, and timing patterns of expert motor performance using neural networks and probabilistic models.",
        "<strong>Skill Level Quantification</strong> — Develop objective metrics that decompose motor performance into interpretable components (timing, force, trajectory) for personalized feedback design."
      ]},
      { badge: "B", name: "Adaptive Haptic Assistance & Guidance Paradigms", items: [
        "<strong>Haptic Guidance vs. Error Augmentation</strong> — Systematically compare guidance forces (correcting errors) against disturbance forces (amplifying errors) across different skill stages and task types.",
        "<strong>Hybrid Haptic Assistance</strong> — Dynamically blend guidance and disturbance as a function of skill level, motor variability, and task phase to maximize long-term retention.",
        "<strong>Human-like Adaptive Force Feedback</strong> — Model how expert teachers physically guide learners and replicate this adaptive, context-sensitive force profile in robotic haptic interfaces."
      ]},
      { badge: "C", name: "Multimodal Motor & Musical Skill Training Systems", items: [
        "<strong>Rhythm & Bimanual Timing Acquisition</strong> — Guide drumming and keyboard timing using vibrotactile cues delivered to the hands, wrists, or feet to convey target rhythm patterns.",
        "<strong>Longitudinal String Instrument Guidance (HapTune)</strong> — Provide continuous pitch-correction guidance for string instrument learners through haptic feedback on the bow arm, enabling ears-free practice.",
        "<strong>Sight Reading & Multimodal Training</strong> — Combine vibrotactile cues with auditory and visual prompts to accelerate the acquisition of simultaneous reading and playing in musicians."
      ]},
      { badge: "D", name: "Bilateral Teleoperation & Shared Autonomy", items: [
        "<strong>Surgical Robotics & Human-Guided Procedures</strong> — Develop bilateral teleoperation systems for minimally invasive and spinal fusion procedures, with haptic force feedback that conveys tissue stiffness and drilling depth.",
        "<strong>Industrial Digital Twin Teleoperation</strong> — Evaluate novel haptic interface designs for high-accuracy remote manipulation of industrial equipment through real-time digital twin coupling."
      ]}
    ],
    grants: [
      { org: "National Research Foundation — NRL Program", name: "Haptics Technology for Modeling and Transfer of Sensorimotor Skills", amount: "KRW 1.1B", years: "2008–2013", role: "PI" },
      { org: "IITP — University ICT Research Center", name: "Immersive Haptic Interaction Technology for Next-Generation XR", amount: "KRW 9.138B", years: "2024–2031", role: "PI" },
      { org: "National Research Foundation — Pioneer Program", name: "Human-Robot Real-Time Remote Control via Haptic Interface", amount: "KRW 5.0B", years: "2022–2026", role: "Co-PI" },
      { org: "POSCO", name: "Haptic Interface for Steel Plant Teleoperation", amount: "KRW 450M", years: "2017–2019", role: "Co-PI" },
      { org: "Ministry of Health & Welfare", name: "Haptic-Guided Rehabilitation for Stroke Patients", amount: "KRW 200M", years: "2005–2007", role: "Co-PI" }
    ],
    journals: [
      { authors: "H. Lee, H. Kim, and <strong>S. Choi</strong>", title: "Driving Skill Modeling Using Neural Networks for Adaptive Haptic Guidance", venue: "IEEE Trans. Human-Machine Systems", venueClass: "other", year: "vol. 51, no. 1, pp. 45–55, 2021" },
      { authors: "J. Park et al.", title: "Assessment of Novel Haptic Interfaces for Digital Twin Teleoperation of Industrial Equipment", venue: "IEEE Trans. Industrial Informatics", venueClass: "other", year: "2025" },
      { authors: "D. Lee, D. Nam, and <strong>S. Choi</strong>", title: "A Comparative Study of Physical and Haptic Interaction in Museum Exhibit Learning", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "2024" },
      { authors: "H. Lee et al.", title: "Haptic Assistance for Memorization of 2D Sequential Motor Patterns", venue: "IEEE Trans. Human-Machine Systems", venueClass: "other", year: "vol. 43, no. 3, pp. 337–347, 2013" },
      { authors: "J. Lee et al.", title: "Cooperative Robotic Assistant with Drill-By-Wire for Spinal Fusion Surgery", venue: "Industrial Robot", venueClass: "other", year: "vol. 36, no. 1, pp. 60–72, 2009" }
    ],
    conferences: [
      { authors: "H. Lee and <strong>S. Choi</strong>", title: "Combining Haptic Guidance and Error Augmentation for Motor Skill Learning", venue: "IEEE Haptics Symposium", venueClass: "haptics", year: "2014" },
      { authors: "I. Lee and <strong>S. Choi</strong>", title: "Vibrotactile Guidance for Learning Drumming Sequences", venue: "IEEE Haptics Symposium", venueClass: "haptics", year: "2014" },
      { authors: "Y. Yoo and <strong>S. Choi</strong>", title: "HapTune: A Longitudinal Study of Haptic Pitch-Correction Guidance for String Instruments", venue: "IEEE WHC", venueClass: "haptics", year: "2017" },
      { authors: "J. Lee and <strong>S. Choi</strong>", title: "Effects of Haptic Guidance and Disturbance on Learning a Timing-Based Motor Task", venue: "IEEE Haptics Symposium", venueClass: "haptics", year: "2010" }
    ]
  },
  {
    id: 6, num: "06",
    title: "Haptic Surface & Texture Rendering",
    tagline: "From psychophysics of texture discrimination to data-driven electrovibration displays and viscoelastic material modeling for realistic surface touch.",
    keywords: ["Surface Haptics", "Electrovibration", "Texture Rendering", "Psychophysics", "Data-Driven"],
    overview: [
      "Haptic texture rendering enables users to feel the surface characteristics of virtual and real objects — from rough stone to smooth glass — through force feedback displays. Bridging the psychophysical foundations of touch perception with data-driven rendering pipelines is central to this research area.",
      "Our work encompasses rigorous perceptual studies of texture discrimination, novel electrovibration displays for touchscreen friction modulation, data-driven viscoelastic material modeling using fractional derivatives and machine learning, and haptic augmented reality systems that superimpose virtual stiffness and friction onto real physical objects."
    ],
    thrusts: [
      { badge: "A", name: "Psychophysics & Perceptual Foundations of Texture Rendering", items: [
        "<strong>Perceptual Instability & Update Rates</strong> — Identify the critical rendering update rates and signal bandwidths required for stable, artifact-free texture perception across different surface geometries.",
        "<strong>Force Constancy & Topography Compensation</strong> — Develop methods to maintain constant perceived normal force while tracking surface topography, eliminating rendering artifacts during lateral finger movement.",
        "<strong>Hardness Perception & Rate-Hardness</strong> — Model how perceived hardness depends on indentation rate and velocity to enable perceptually accurate softness rendering in virtual deformable bodies."
      ]},
      { badge: "B", name: "Electrovibration Displays & Surface Haptics", items: [
        "<strong>Friction Modulation & 3D Curvature on Touch Surfaces</strong> — Modulate touchscreen friction through electrovibration to render virtual surface curvature, edges, and fine texture features on flat displays.",
        "<strong>Data-Driven Inverse Neural Networks</strong> — Train inverse neural network models that map target perceptual texture attributes to electrovibration waveform parameters without manual tuning.",
        "<strong>Perceptual Space of Electrovibration Textures</strong> — Construct the multidimensional perceptual space of electrovibration-rendered textures using psychophysical rating and multidimensional scaling."
      ]},
      { badge: "C", name: "Data-Driven Modeling of Viscoelastic & Deformable Bodies", items: [
        "<strong>Fractional Derivatives & Machine Learning</strong> — Combine fractional calculus force models with neural networks to capture the time-dependent creep and relaxation behavior of soft biological tissues.",
        "<strong>Photometric Stereo Texture Acquisition</strong> — Use photometric stereo imaging to measure the micro-geometry of real textures and construct high-fidelity haptic rendering models from physical samples."
      ]},
      { badge: "D", name: "Haptic Augmented Reality (HAR) & Medical Palpation", items: [
        "<strong>Stiffness & Friction Modulation of Real Objects</strong> — Overlay virtual stiffness and friction profiles onto physical objects through haptic augmented reality, enabling programmable material feel.",
        "<strong>Medical Palpation Simulators</strong> — Render virtual subcutaneous tumors, cysts, and lumps within real tissue mock-ups using HAR, providing realistic palpation training for clinical skills."
      ]}
    ],
    grants: [
      { org: "National Research Foundation — Mid-Career Researcher Program", name: "Data-Driven Surface Haptic Rendering for Touchscreen Devices", amount: "KRW 300M", years: "2017–2019", role: "PI" },
      { org: "ETRI Contracts", name: "Surface Haptic Texture Rendering for Touchscreen Interaction", amount: "Multi-year", years: "2015–2017", role: "PI" },
      { org: "Strategic Korean-Swiss Cooperative Program (NRF)", name: "Breast Cancer Screening via Haptic Augmented Reality Palpation", amount: "Multi-year", years: "2009–2011", role: "PI" },
      { org: "Korea Research Foundation — Young Researcher Programs", name: "Vibrotactile Rendering Based on Multidimensional Perceptual Space", amount: "Multi-year", years: "2007–2009", role: "PI" }
    ],
    journals: [
      { authors: "C. Basdogan et al.", title: "A Review of Surface Haptics: Enabling Tactile Effects on Touch Surfaces", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 13, no. 3, pp. 450–470, 2020" },
      { authors: "R. H. Osgouei et al.", title: "Data-driven Texture Modeling and Rendering on an Electrovibration Display", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 13, no. 4, pp. 786–799, 2020" },
      { authors: "H. Cha et al.", title: "Data-Driven Haptic Modeling of Viscoelastic Behavior Using Fractional Derivatives", venue: "IEEE Access", venueClass: "other", year: "vol. 10, pp. 72315–72326, 2022" },
      { authors: "S. Yim et al.", title: "Data-Driven Haptic Modeling and Rendering of Viscoelastic and Frictional Responses of Deformable Objects", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 9, no. 3, pp. 356–368, 2016" },
      { authors: "S. Jeon and <strong>S. Choi</strong>", title: "Real Stiffness Augmentation of a Virtual Object in Haptic Augmented Reality", venue: "Presence: Teleoperators & Virtual Environments", venueClass: "other", year: "vol. 20, no. 4, pp. 323–340, 2011" },
      { authors: "<strong>S. Choi</strong> and H. Z. Tan", title: "Towards Realistic Haptic Rendering of Surface Texture", venue: "IEEE Computer Graphics & Applications", venueClass: "other", year: "vol. 24, no. 2, pp. 40–47, 2004" }
    ],
    conferences: [
      { authors: "S. Mun et al.", title: "Perceptual Space of Regular Homogeneous Haptic Textures Rendered by Electrovibration", venue: "IEEE WHC", venueClass: "haptics", year: "2019" },
      { authors: "R. H. Osgouei et al.", title: "An Inverse Neural Network Model for Electrovibration Texture Rendering on Touch Surfaces", venue: "IEEE Haptics Symposium", venueClass: "haptics", year: "2018" },
      { authors: "S. Shin and <strong>S. Choi</strong>", title: "Geometry-based Haptic Texture Modeling and Rendering Using a Photometric Stereo Approach", venue: "IEEE Haptics Symposium", venueClass: "haptics", year: "2018" },
      { authors: "A. Bhardwaj et al.", title: "Data-Driven Haptic Modeling and Rendering of Normal Interactions with Deformable Objects", venue: "IEEE RA-L / ICRA", venueClass: "other", year: "2019" },
      { authors: "S. Jeon and <strong>S. Choi</strong>", title: "Stiffness Modulation for Haptic Augmented Reality: Extension to 3D Tool-Based Interaction", venue: "IEEE Haptics Symposium", venueClass: "haptics", year: "2010" }
    ]
  },
  {
    id: 7, num: "07",
    title: "Mobile Haptics & Vibrotactile Interaction Design",
    tagline: "Establishing psychophysical foundations for handheld vibration, developing spatial tactile illusions, and creating graphical authoring tools for vibrotactile UI/UX.",
    keywords: ["Mobile Haptics", "Vibrotactile", "Tactile Flow", "Authoring Tools", "UI/UX Design"],
    overview: [
      "Mobile devices with built-in vibration actuators are ubiquitous, yet their haptic capabilities remain underutilized due to limited understanding of vibrotactile perception and the lack of principled design tools for vibrotactile user interfaces.",
      "Our research establishes psychophysical foundations for handheld vibrotactile perception, develops spatial tactile illusion algorithms (tactile flows), and creates graphical authoring tools enabling designers to create expressive vibrotactile effects for touchscreens, buttons, and wearables without specialized expertise."
    ],
    thrusts: [
      { badge: "A", name: "Psychophysics & Perceptual Models for Handheld Vibration", items: [
        "<strong>Perceived Intensity Across Frequencies & Directions</strong> — Systematically measure vibrotactile intensity perception on mobile devices across frequencies, orientations, and grip conditions, producing calibrated rendering models.",
        "<strong>Perceptual Spaces of Complex Vibration</strong> — Map the multidimensional perceptual space of sinusoidal and composite vibrations using psychophysical scaling and adjective rating studies.",
        "<strong>Perceptually Transparent Rendering & Low-Power Optimization</strong> — Design rendering algorithms that reproduce target vibration percepts with minimal actuator energy consumption for wearable and mobile applications."
      ]},
      { badge: "B", name: "Tactile Flows & Continuous Spatial Illusions on Mobile Devices", items: [
        "<strong>2D Vibrotactile Flow Algorithms</strong> — Create the illusion of continuous tactile motion across the surface of a mobile device by coordinating multiple actuators with psychophysically optimized timing and amplitude profiles.",
        "<strong>Directional Information Transfer (Edge Flows)</strong> — Design edge-constrained vibrotactile flow patterns that convey navigational and directional cues to users with high spatial resolution."
      ]},
      { badge: "C", name: "Vibrotactile UI/UX Design & Authoring Tools", items: [
        "<strong>Graphical Authoring Tools (posVibEditor, Vibrotactile Score)</strong> — Build intuitive graphical tools that allow designers and developers to create, edit, and preview vibrotactile effects using timeline and score metaphors.",
        "<strong>Touchscreen Virtual Buttons & Programmable Feel</strong> — Enable touchscreen surfaces to simulate button presses with distinct mechanical click feelings through precisely timed vibrotactile feedback.",
        "<strong>Vibration-Augmented Physical Buttons</strong> — Augment physical buttons with vibrotactile feedback to expand their information transmission capacity beyond binary click-release signals."
      ]}
    ],
    grants: [
      { org: "Microsoft Research Asia", name: "Haptic Interface for Mobile Touch Devices", amount: "2 Awards", years: "2006–2013", role: "PI" },
      { org: "LG Electronics", name: "Vibrotactile Feedback Design for Mobile Phones", amount: "Multi-year", years: "2008–2011", role: "PI" },
      { org: "Samsung Electronics", name: "Vibrotactile Effect Authoring for Galaxy Devices", amount: "KRW 170M", years: "2012–2013", role: "PI" },
      { org: "ETRI Contracts", name: "Tactile Interface for Mobile and Wearable Devices", amount: "Multi-year", years: "2010–2012", role: "PI" }
    ],
    journals: [
      { authors: "<strong>S. Choi</strong> and K. J. Kuchenbecker", title: "Vibrotactile Display: Perception, Technology, and Applications", venue: "Proceedings of the IEEE", venueClass: "other", year: "vol. 101, no. 9, pp. 2093–2104, 2013" },
      { authors: "H. Z. Tan et al.", title: "Methodology for Maximizing Information Transmission of Haptic Devices: A Survey", venue: "Proceedings of the IEEE", venueClass: "other", year: "vol. 108, no. 6, pp. 945–965, 2020" },
      { authors: "I. Hwang et al.", title: "Vibrotactile Perceived Intensity for Mobile Devices as a Function of Direction, Frequency, and Amplitude", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 6, no. 3, pp. 352–362, 2013" },
      { authors: "J. Seo and <strong>S. Choi</strong>", title: "Perceptual Analysis of Vibrotactile Flows on a Mobile Device", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 6, no. 4, pp. 402–410, 2013" }
    ],
    conferences: [
      { authors: "C. Park et al.", title: "Vibration-Augmented Buttons: Information Transmission Capacity and Perceived Quality of Vibrotactile Clicks", venue: "ACM CHI", venueClass: "chi", year: "2022" },
      { authors: "C. Park et al.", title: "Augmenting Physical Buttons with Vibrotactile Feedback for Programmable Feels", venue: "ACM UIST", venueClass: "uist", year: "2020" },
      { authors: "J. Seo and <strong>S. Choi</strong>", title: "Edge Flows: Improving Information Transmission in Tactile Flows by Controlling Flow Direction", venue: "IEEE WHC", venueClass: "haptics", year: "2015" },
      { authors: "G. Park et al.", title: "Tactile Effect Design and Evaluation for a Haptic Touchscreen-Based Mobile Gaming Environment", venue: "ACM MobileHCI", venueClass: "other", year: "2011" }
    ]
  },
  {
    id: 8, num: "08",
    title: "Haptic Augmented Reality & Medical Palpation",
    tagline: "Developing the taxonomy and technology of HAR — modifying the perceived properties of real objects — with clinical applications in cancer screening and surgical training.",
    keywords: ["Haptic AR", "Stiffness Augmentation", "Medical Simulation", "Palpation", "Contact Force"],
    overview: [
      "Haptic augmented reality (HAR) modifies the perceived properties of real physical objects — such as stiffness, friction, or surface texture — through additional haptic cues while the user simultaneously manipulates the actual object. This creates new interaction possibilities in medical training, rehabilitation, and industrial design.",
      "We developed the foundational taxonomy of HAR interaction paradigms, invented contact centroid-based force decomposition for multi-finger augmentation, and built palpation simulators that render virtual subcutaneous tumors in real tissue mock-ups — with applications in breast cancer screening and surgical skills training."
    ],
    thrusts: [
      { badge: "A", name: "Foundational Taxonomy & Theory of Haptic Augmented Reality", items: [
        "<strong>Stiffness & Compliance Modulation</strong> — Render virtual elastic properties on top of real objects by measuring interaction forces and injecting scaled corrective forces that shift apparent stiffness toward a target value.",
        "<strong>Friction & Weight Augmentation</strong> — Extend HAR beyond stiffness to modulate perceived surface friction and gravitational weight, enabling programmable feel for physical object manipulation."
      ]},
      { badge: "B", name: "Contact Centroid-Based Force Decomposition", items: [
        "<strong>Normal & Tangential Force Separation</strong> — Decompose measured multi-finger contact forces into normal and tangential components using contact pressure distribution, enabling independent augmentation of friction and stiffness.",
        "<strong>Multi-Contact Augmentation</strong> — Support simultaneous two-finger and multi-finger HAR with perceptually consistent force profiles that account for contact geometry changes during manipulation."
      ]},
      { badge: "C", name: "Medical Palpation Simulators & Virtual Tumor Simulation", items: [
        "<strong>Subcutaneous Lump & Tumor Rendering</strong> — Render virtual tumors of controllable size, depth, and stiffness within real silicone tissue phantoms using layered HAR, providing realistic clinical palpation experiences.",
        "<strong>Finite Element Modeling for Palpation</strong> — Couple finite element soft-tissue models with real-time haptic rendering to simulate the mechanical behavior of subcutaneous masses during finger palpation.",
        "<strong>Novel Palpation Indicators</strong> — Develop objective measures of palpation quality that quantify detection sensitivity and specificity, enabling skills assessment for medical training programs."
      ]}
    ],
    chapters: [
      { authors: "S. Jeon, <strong>S. Choi</strong>, and M. Harders", title: "Haptic Augmented Reality: Taxonomy, Research Status, and Challenges", venue: "CRC Press", year: "2017" },
      { authors: "S. Jeon, <strong>S. Choi</strong>, and M. Harders", title: "Haptic Augmentation in Soft Tissue Interaction", venue: "Springer", year: "2014" }
    ],
    grants: [
      { org: "Strategic Korean-Swiss Cooperative Program (NRF)", name: "Breast Cancer Screening via Haptic Augmented Reality Palpation", amount: "Multi-year", years: "2009–2011", role: "PI" },
      { org: "Korea Research Foundation — Young Researcher Program", name: "Modulating Haptic Sensations in Augmented Reality", amount: "Multi-year", years: "2007–2008", role: "PI" },
      { org: "New Professor Program, POSTECH", name: "Haptic Augmented Reality for Medical Simulation", amount: "Multi-year", years: "2005–2007", role: "PI" }
    ],
    journals: [
      { authors: "S. Jeon et al.", title: "Rendering Virtual Tumors in Real Tissue Mock-Ups Using Haptic Augmented Reality", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 5, no. 1, pp. 77–83, 2012" },
      { authors: "S. Jeon and <strong>S. Choi</strong>", title: "Haptic Augmented Reality: Taxonomy and an Example", venue: "Presence: Teleoperators & Virtual Environments", venueClass: "other", year: "vol. 18, no. 5, pp. 387–408, 2009" },
      { authors: "H. Kim et al.", title: "Contact Force Decomposition Using Contact Pressure Distribution for Multi-Finger Haptic Augmented Reality", venue: "IEEE RA-L", venueClass: "other", year: "vol. 2, no. 3, pp. 1624–1631, 2017" },
      { authors: "S. Yim et al.", title: "Topography Compensation for Haptization of Touchscreen Interface", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 8, no. 3, pp. 283–293, 2015" }
    ],
    conferences: [
      { authors: "S. Yim et al.", title: "Multi-Contact Stiffness and Friction Augmentation in Haptic Augmented Reality", venue: "IEEE WHC", venueClass: "haptics", year: "2021" },
      { authors: "S. Jeon et al.", title: "Extensions to Haptic Augmented Reality: Modulating Friction and Weight", venue: "IEEE WHC", venueClass: "haptics", year: "2011" },
      { authors: "S. Jeon and <strong>S. Choi</strong>", title: "Stiffness Modulation for Haptic Augmented Reality: Extension to 3D Tool-Based Interaction", venue: "IEEE Haptics Symposium", venueClass: "haptics", year: "2010" },
      { authors: "S. Jeon and <strong>S. Choi</strong>", title: "Modulating Real Object Stiffness for Haptic Augmented Reality Using Model-Based Control", venue: "EuroHaptics", venueClass: "haptics", year: "2008" }
    ]
  },
  {
    id: 9, num: "09",
    title: "Assistive Haptics & Accessibility Computing",
    tagline: "Designing haptic systems that expand digital access for the visually impaired, hearing impaired, and users with cognitive disabilities.",
    keywords: ["Accessibility", "Visual Impairment", "Sensory Substitution", "Haptic CAPTCHA", "Inclusive Design"],
    overview: [
      "Haptic interfaces can dramatically expand digital access for people with sensory or motor impairments by substituting or augmenting missing sensory modalities. From visually-guided photography aids to tactile music players, accessibility haptics bridges the gap between mainstream digital experiences and users with diverse abilities.",
      "Our laboratory designs and evaluates haptic systems for the visually impaired (tactile navigation, aiming assistance, image exploration), hearing-impaired users (vibrotactile music perception), and broader accessible computing challenges — including haptic CAPTCHAs, therapeutic VR interventions, and museum exhibit augmentation."
    ],
    thrusts: [
      { badge: "A", name: "Accessible Photography & Non-Visual Image Understanding (TouchPhoto)", items: [
        "<strong>2D Haptic Contour Guidance</strong> — Render the dominant contours of a smartphone camera's viewfinder as continuous vibrotactile guidance, enabling visually impaired users to compose well-framed photographs.",
        "<strong>Haptic Image Exploration</strong> — Design interaction techniques for exploring and understanding digital images through vibrotactile feedback on touch-based devices."
      ]},
      { badge: "B", name: "Tactile Navigation & Aiming Aids for the Visually Impaired", items: [
        "<strong>Foot Vibrotactile Navigation (FeetNavi)</strong> — Deliver directional navigation cues through foot-worn vibrotactile actuators, enabling eyes-free spatial guidance in indoor and outdoor environments.",
        "<strong>Target Aiming on Large Displays</strong> — Develop vibrotactile feedback strategies that guide users with visual impairments to accurately locate and select targets on large-format touchscreen displays."
      ]},
      { badge: "C", name: "Sensory Substitution for the Hearing Impaired (TouchMusic)", items: [
        "<strong>Tactile Music Perception</strong> — Design vibrotactile wristband systems that convey the rhythmic and melodic content of music to hearing-impaired users through the skin, enabling non-auditory music appreciation.",
        "<strong>On-Device Environmental Hazard Detection</strong> — Develop real-time sound classification and vibrotactile alerting systems for hearing-impaired users to receive immediate tactile feedback for environmental hazards."
      ]},
      { badge: "D", name: "Eyes-Free Cybersecurity & Interaction (HAPTCHA)", items: [
        "<strong>Haptic CAPTCHA (HAPTCHA)</strong> — Design and evaluate CAPTCHA challenges based entirely on vibrotactile patterns, providing an eyes-free and screen-reader-independent authentication mechanism for users with visual disabilities.",
        "<strong>Therapeutic VR Interventions</strong> — Develop visuo-haptic multimodal VR environments for anxiety and phobia treatment, combining exposure therapy with haptic feedback for enhanced therapeutic outcomes."
      ]}
    ],
    grants: [
      { org: "IITP — University ICT Research Center", name: "Immersive Haptic Interaction Technology for Next-Generation XR", amount: "KRW 9.138B", years: "2024–2031", role: "PI" },
      { org: "National Research Foundation — Pioneer Program", name: "AI-Augmented Haptic Interaction for Social Communication and Accessibility", amount: "KRW 9.0B", years: "2024–2029", role: "PI" },
      { org: "National Research Foundation — X-Project", name: "Touch Photo: Accessible Photography for the Visually Impaired", amount: "KRW 100M", years: "2016–2017", role: "PI" },
      { org: "Samsung Electronics", name: "Touch Music: Vibrotactile Music Appreciation for Hearing-Impaired Users", amount: "Sponsored", years: "2014", role: "PI" },
      { org: "National Research Foundation — Mental Health", name: "VR-based Cognitive Behavioral Therapy for Anxiety Disorders", amount: "KRW 1.58B", years: "2016–2020", role: "Co-PI" }
    ],
    journals: [
      { authors: "D. Lee, D. Nam, and <strong>S. Choi</strong>", title: "Digital Augmentation of Outdated Museum Exhibits with Real-Virtual Blended Interaction", venue: "Int'l Journal of Human-Computer Studies", venueClass: "other", year: "2025" },
      { authors: "K. Kim et al.", title: "Assisting People with Visual Impairments in Aiming at a Target on a Large-Scale Display", venue: "Int'l Journal of Human-Computer Studies", venueClass: "other", year: "vol. 95, pp. 67–79, 2016" },
      { authors: "Y. I. Kim et al.", title: "Visuo-haptic-based Multimodal Feedback VR Solution to Improve Anxiety Symptoms for Patients with Anxiety Disorders", venue: "Psychiatry Investigation", venueClass: "other", year: "vol. 16, no. 7, pp. 540–547, 2019" }
    ],
    conferences: [
      { authors: "D. Kweon, D. Lee, S. Kim, and <strong>S. Choi</strong>", title: "HAPTCHA: Eyes-Free Haptic CAPTCHA in Mobile Environments — Design Principle, Security Evaluation, and User Experience", venue: "ACM UIST", venueClass: "uist", year: "2026" },
      { authors: "J. Lim et al.", title: "TouchPhoto: Accessible Photography for People with Visual Impairments via Vibrotactile Guidance", venue: "ACM ICMI", venueClass: "other", year: "2019" },
      { authors: "J. Lim et al.", title: "Guidance-based Two-Dimensional Haptic Contour Rendering for the TouchPhoto System", venue: "IEEE WHC", venueClass: "haptics", year: "2019" },
      { authors: "H. Cho et al.", title: "Equal-Level Interaction: Using Vibrotactile Feedback to Navigate AR Interfaces for Visually Impaired Users", venue: "IEEE HAVE", venueClass: "other", year: "2018" }
    ]
  },
  {
    id: 10, num: "10",
    title: "Automotive Haptics & In-Cabin User Experience",
    tagline: "Designing haptic safety warnings, luxury steering feedback, driver discomfort models, and smart vibrating seats through sustained industry collaboration.",
    keywords: ["Automotive", "Safety Warnings", "Luxury Haptics", "Driver Experience", "Smart Seats"],
    overview: [
      "Modern vehicles offer a rich sensory environment for haptic interaction — from steering wheel warnings and seatbelt signals to seat vibrations for immersive in-cabin entertainment. Designing effective, comfortable, and emotionally resonant haptic experiences in automotive contexts requires deep understanding of human psychophysics in motion.",
      "Our long-term collaboration with automotive industry partners investigates safety warning design, the psychophysics of perceived luxuriousness, driver comfort and biomechanical vibration discomfort, and smart vibrating seat systems — spanning fundamental psychophysical studies to deployed prototypes in production vehicles."
    ],
    thrusts: [
      { badge: "A", name: "Active In-Vehicle Safety Warnings & Ergonomic Guidelines", items: [
        "<strong>Collision Warnings on Steering Wheels & Seatbelts</strong> — Design and evaluate vibrotactile collision avoidance warnings on steering wheels and seatbelts, measuring detection speed, driver preference, and traffic conflict reduction.",
        "<strong>Human Factors Design Guidelines</strong> — Develop comprehensive design guidelines for automotive vibrotactile interfaces, covering placement, waveform, timing, and driver population considerations."
      ]},
      { badge: "B", name: "Perceived Luxuriousness & Affective Modeling of Steering Wheel Haptics", items: [
        "<strong>Psychophysical Modeling of Tactile Luxury</strong> — Quantify the relationship between vibrotactile waveform parameters and perceived luxuriousness of steering wheel materials, informing premium vehicle haptic design.",
        "<strong>Affective Natural Language Analysis (VOC)</strong> — Analyze large corpora of consumer voices (VOC) using natural language processing to extract affective dimensions of vehicle haptic experience."
      ]},
      { badge: "C", name: "Driver Comfort & Biomechanical Vibration Perception", items: [
        "<strong>Vibration Discomfort Curves</strong> — Measure frequency-dependent whole-body vibration discomfort curves for seated drivers across different vehicle vibration transmission paths.",
        "<strong>Driver Information System (DIS) Optimization</strong> — Evaluate vibrotactile display designs for driver information systems, optimizing information transfer rate within the biomechanical comfort envelope."
      ]},
      { badge: "D", name: "Smart Vibrating Seats for In-Cabin Entertainment & Wellness", items: [
        "<strong>Audiovisual-Haptic Cinematic Synchronization</strong> — Develop smart seat vibration systems that synchronize with audiovisual content in real time, providing enhanced immersive entertainment in autonomous vehicles.",
        "<strong>Healing & Relaxation Seat Patterns</strong> — Design and evaluate vibrotactile seat patterns that induce relaxation, reduce driving fatigue, and improve passenger wellbeing during long journeys."
      ]}
    ],
    grants: [
      { org: "Hyundai Motor Company & NGV", name: "Long-Term Collaborative Research on In-Cabin Haptic Experience (Multiple Projects)", amount: "Multi-year", years: "2008–2026", role: "PI" },
      { org: "SL Corp.", name: "Vibrotactile Turn Signal Indicator Design", amount: "Sponsored", years: "2012–2013", role: "PI" }
    ],
    journals: [
      { authors: "K. Kwon, S. H. Han, and <strong>S. Choi</strong>", title: "Investigating Luxuriousness of Steering Wheel Vibration Warning: Psychophysical Modeling and Consumer Voice Analysis", venue: "Int'l Journal of Human-Computer Interaction", venueClass: "other", year: "2026" },
      { authors: "J. Chun et al.", title: "Efficacy of Haptic Blind Spot Warning in Preventing Unintended Lane Changes", venue: "Transportation Research Part F", venueClass: "other", year: "vol. 22, pp. 161–173, 2013" },
      { authors: "J. Chun et al.", title: "Evaluation of Vibrotactile Feedback for Forward Collision Warning in an Automobile", venue: "Int'l Journal of Industrial Ergonomics", venueClass: "other", year: "vol. 42, no. 6, pp. 521–530, 2012" },
      { authors: "J. Ryu et al.", title: "Vibrotactile Feedback for Information Delivery in the Vehicle", venue: "IEEE Trans. Haptics", venueClass: "toh", year: "vol. 3, no. 2, pp. 138–147, 2010" }
    ],
    conferences: [
      { authors: "J. Kim, H. Kim, H.-B. Oh, J. Kang, T.-H. Oh, and <strong>S. Choi</strong>", title: "CineHaptic: Context-Aware Real-Time Audiovisual-to-Haptic Rendering System for In-Vehicle 4D Cinematic Experiences", venue: "ACM UIST", venueClass: "uist", year: "2026" },
      { authors: "D. Lee et al.", title: "Effects of Frequency, Magnitude, and Inter-subject Variability on Vibrotactile Perceived Discomfort in Vehicle Seats", venue: "IEEE Haptics Symposium", venueClass: "haptics", year: "2026" },
      { authors: "D. Lee et al.", title: "Participatory Design for In-Vehicle Vibrotactile Warnings: User Preferences Across Alert Types", venue: "EuroHaptics", venueClass: "haptics", year: "2024" },
      { authors: "J. Chun et al.", title: "Development of Human Factors Design Guidelines for Automotive Haptic Interfaces", venue: "IIE Asian Conference", venueClass: "other", year: "2011" }
    ]
  }
];

// data.js (수정됨)

// ... [News, Member, Research 데이터는 기존 유지] ...

///* data.js - publicationData 부분 교체 */

const journalPapers = [
    // --- 2026 ---
    {
        year: 2026,
        category: "journal",
        venueShort: "ToH",
        title: "Representing Egocentric Directions with Torso-Applied Vibrotactile Stimuli",
        authors: "Junwoo Kim, Jaejun Park, Chaeyong Park, Junseok Park, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics (Accepted)",
        link: ""
    },
    {
        year: 2026,
        category: "journal",
        venueShort: "IJHCI",
        title: "Investigating Luxuriousness of Steering Wheel Vibration Warning",
        authors: "Kimin Kwon, Sung H. Han, Seungmoon Choi, Beomyoung Jeong, Jeongwoo Kim, Jungeun Lee, Dong-Geun Kim, and Wonseok Lee",
        venue: "International Journal of Human-Computer Interaction, pp. 1-21",
        link: "https://doi.org/10.1080/10447318.2026.2631661"
    },
    {
        year: 2026,
        category: "journal",
        venueShort: "TVCG",
        title: "HaptiCraft: A Modular Multimodal Haptic Controller for Immersive Virtual Reality Interactions",
        authors: "Chaeyong Park, Jeongwoo Kim, Yuk-Gwon Song, Sang-Youn Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Visualization and Computer Graphics (Accepted)",
        link: "https://doi.org/10.1109/TVCG.2026.3683951"
    },
    {
        year: 2026,
        category: "journal",
        venueShort: "Adv. Intell. Syst.",
        title: "Proactive Robotic Grasp Stability via Tactile Safety Margin Feedback",
        authors: "Yebin Park, Jaehyun Kim, Taeyeong Kim, Woosung Cho, Junchen Luo, Myeongryun Seong, Chaeyong Park, Anna Lee, Seungmoon Choi, Insang You, and Unyong Jeong",
        venue: "Advanced Intelligent Systems (Accepted)",
        link: "https://doi.org/10.1002/aisy.202501051"
    },
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
        link: "https://ieeexplore.ieee.org/document/10916976"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "IJHCS",
        title: "Digital Augmentation of Outdated Museum Exhibits for Learning Enhancement",
        authors: "Dajin Lee, Daehyeon Nam, and Seungmoon Choi",
        venue: "International Journal of Human-Computer Studies, vol. 198, article no. 103470",
        link: "https://doi.org/10.1016/j.ijhcs.2025.103470"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "Adv. Mat. Tech.",
        title: "Simple-Architectured Elastic Touch Sensor with High Spatiotemporal Resolution",
        authors: "Junchen Luo, Chaeyong Park, Yebin Park, Jaehyun Kim, Seungmoon Choi, and Unyong Jeong",
        venue: "Advanced Materials Technologies, vol. 10, issue 4, article no. 2401280, pp. 1-12",
        link: "https://doi.org/10.1002/admt.202401280"
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
        link: "https://doi.org/10.1002/smll.202402281"
    },
    {
        year: 2024,
        category: "journal",
        venueShort: "ToH",
        title: "Telemetry-based Haptic Rendering for Racing Game Experience Improvement",
        authors: "Jiwan Lee, Junwoo Kim, Jeonggoo Kang, Eunsoo Jo, Dong Chul Park, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 17, no. 1, pp. 72-79",
        link: "https://doi.org/10.1109/TOH.2024.3357885"
    },
    {
        year: 2024,
        category: "journal",
        venueShort: "ToH",
        title: "Multimodal Haptic Feedback for Virtual Collisions Combining Vibrotactile and Electrical Muscle Stimulation",
        authors: "Jungeun Lee and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 17, no. 1, pp. 33-38",
        link: "https://ieeexplore.ieee.org/document/10400864"
    },
    {
        year: 2024,
        category: "journal",
        venueShort: "ToH",
        title: "👑 Effects of Contact Force on Vibrotactile Perceived Intensity Across the Upper Body",
        authors: "Dajin Lee, Gyeore Yun, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 17, no. 1, pp. 14-19 (Candidate for Best ToH Short Paper Award)",
        link: "https://doi.org/10.1109/TOH.2024.3353761"
    },
    {
        year: 2024,
        category: "journal",
        venueShort: "ToH",
        title: "👑 Sound-to-Touch Crossmodal Pitch Matching for Short Sounds",
        authors: "Dong-Geun Kim, Jungeun Lee, Gyeore Yun, Hong Z. Tan, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 17, no. 1, pp. 2-7 (Candidate for Best ToH Short Paper Award)",
        link: "https://doi.org/10.1109/TOH.2023.3338224"
    },

    // --- 2023 ---
    {
        year: 2023,
        category: "journal",
        venueShort: "ToH",
        title: "Cable-Driven Haptic Interface with Movable Bases Achieving Maximum Workspace and Isotropic Force Exertion",
        authors: "Jinhyuk Yoon, Donghyeon Lee, Junyong Bang, Hyung Gon Shin, Wan Kyun Chung, Seungmoon Choi, and Keehoon Kim",
        venue: "IEEE Transactions on Haptics, vol. 16, no. 3, pp. 376-378",
        link: "https://doi.org/10.1109/TOH.2023.3286353"
    },
    {
        year: 2023,
        category: "journal",
        venueShort: "Virtual Reality",
        title: "Sensory Cue Integration of Visual and Vestibular Stimuli: A Case Study for 4D Rides",
        authors: "Jiwan Lee, Sung H. Han, and Seungmoon Choi",
        venue: "Virtual Reality, vol. 27, no. 3, pp. 1671-1683",
        link: "https://doi.org/10.1007/s10055-023-00762-7"
    },
    {
        year: 2023,
        category: "journal",
        venueShort: "Adv. Opt. Mat.",
        title: "Intrinsically Synchronized Flexible Visuo-Haptic Device Operated by Single External Electric Field",
        authors: "Gilwoon Lee, Chaeyong Park, Doowon Park, Seungmoon Choi, and Unyong Jeong",
        venue: "Advanced Optical Materials, no. 2202515, pp. 1-9",
        link: "https://doi.org/10.1002/adom.202202515"
    },

    // --- 2022 ---
    {
        year: 2022,
        category: "journal",
        venueShort: "IEEE Access",
        title: "Data-Driven Haptic Modeling and Rendering of Viscoelastic Behavior Using Fractional Derivatives",
        authors: "Hojun Cha, Amit Bhardwaj, and Seungmoon Choi",
        venue: "IEEE Access, vol. 10, pp. 130894-130907",
        link: "https://doi.org/10.1109/ACCESS.2022.3230065"
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
        link: "https://doi.org/10.1109/TOH.2022.3176964"
    },
    {
        year: 2022,
        category: "journal",
        venueShort: "JMIR Serious Games",
        title: "Prediction of Specific Anxiety Symptoms and VR Sickness Based on In-Situ Autonomic Physiological Signals during VR Treatment in Patients with Social Anxiety Disorder: Mixed-Methods Study",
        authors: "Chul-Hyun Cho, Joo Young Chun, Hyun-Jin Kim, Ji-Won Hur, Dooyoung Jung, Heon-Jeong Lee, Seung Pil Pack, Sungkil Lee, Gerard J. Kim, Chung-Yean Cho, Seung-Moo Lee, Hyeri Lee, Seungmoon Choi, and Taesu Cheong",
        venue: "JMIR Serious Games, vol. 10, no. 3, e38284",
        link: "https://doi.org/10.2196/38284"
    },
    {
        year: 2022,
        category: "journal",
        venueShort: "Chem. Eng. J.",
        title: "Emotion-Interactive Empathetic Transparent Skin Cushion with Tailored Frequency-Dependent Hydrogel–Plasticized Nonionic Polyvinyl Chloride Interconnections",
        authors: "Dong-Soo Choi, Jin Woo Bae, Seok-Han Lee, Jin Ho Song, Da Wan Kim, Seungmoon Choi, Changhyun Pang, and Sang-Youn Kim",
        venue: "Chemical Engineering Journal, vol. 442, part 1, no. 136142, pp. 1-11",
        link: "https://doi.org/10.1016/j.cej.2022.136142"
    },
    {
        year: 2022,
        category: "journal",
        venueShort: "ToH",
        title: "👑 Perceived Intensity Model of Dual-Frequency Superimposed Vibration: Pythagorean Sum",
        authors: "Yongjae Yoo, Inwook Hwang, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 15, no. 2, pp. 405-415 (Best Paper Award)",
        link: "https://doi.org/10.1109/TOH.2022.3144290"
    },

    // --- 2021 ---
    {
        year: 2021,
        category: "journal",
        venueShort: "Adv. Mat. Tech.",
        title: "Small-sized Deformable Shear Sensor Array for Direct Monitoring of Quantitative Shear Distribution",
        authors: "Wonjeong Suh, Chaeyong Park, Joosung Oh, Sungmin Moon, Seungmoon Choi, Youn Soo Kim, and Unyong Jeong",
        venue: "Advanced Materials Technologies, no. 2101071, pp. 1-10",
        link: "https://doi.org/10.1002/admt.202101071"
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "Adv. Mat. Tech.",
        title: "Omni-Directional Tactile Profiling Using a Deformable Pressure Sensor Array Based on Localized Piezoresistivity",
        authors: "Jaehyun Kim, Doowon Park, Sungmin Moon, Chaeyong Park, Kaliannan Thiyagarajan, Seungmoon Choi, Heeseon Hwang, and Unyong Jeong",
        venue: "Advanced Materials Technologies, no. 2100688, pp. 1-9",
        link: "https://doi.org/10.1002/admt.202100688"
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
        link: "https://doi.org/10.1016/j.chb.2021.106797"
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "ToH",
        title: "Length Perception Model for Handheld Controllers: The Effects of Diameter and Inertia",
        authors: "Chaeyong Park, Jinsoo Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 14, no. 2, pp. 310-315",
        link: "https://doi.org/10.1109/TOH.2021.3077709"
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "IEEE THMS",
        title: "Driving Skill Modeling Using Neural Networks for Performance-based Haptic Assistance",
        authors: "Hojin Lee, Hyoungkyun Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Human-Machine Systems, vol. 51, no. 3, pp. 198-210",
        link: "https://doi.org/10.1109/THMS.2021.3061409"
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "JMIR Mental Health",
        title: "Virtual Reality-Based Psychotherapy in Social Anxiety Disorder: fMRI Study Using a Self-Referential Task",
        authors: "Ji-Won Hur, Hyemin Shin, Dooyoung Jung, Heon-Jeong Lee, Sungkil Lee, Gerard J. Kim, Chung-Yean Cho, Seungmoon Choi, Seung-Moo Lee, and Chul-Hyun Cho",
        venue: "JMIR Mental Health, vol. 8, no. 4, e25731, pp. 1-13",
        link: "https://doi.org/10.2196/25731"
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "ToH",
        title: "Magnetorheological Fluid Haptic Shoes for Walking in VR",
        authors: "Tae-Heon Yang, Hyungki Son, Sangkyu Byeon, Hyunjae Gil, Inwook Hwang, Gwanghyun Jo, Seungmoon Choi, Sang-Youn Kim, and Jin Ryong Kim",
        venue: "IEEE Transactions on Haptics, vol. 14, no. 1, pp. 83-94",
        link: "https://doi.org/10.1109/TOH.2020.3017099"
    },

    // --- 2020 ---
    {
        year: 2020,
        category: "journal",
        venueShort: "JMIR",
        title: "Effectiveness of a Participatory and Interactive Virtual Reality Intervention in Patients with Social Anxiety Disorder: Longitudinal Questionnaire Study",
        authors: "Hyun-Jin Kim, Seulki Lee, Dooyoung Jung, Ji-Won Hur, Heon-Jeong Lee, Sungkil Lee, Gerard J. Kim, Chung-Yean Cho, Seungmoon Choi, Seung-Moo Lee, and Chul-Hyun Cho",
        venue: "Journal of Medical Internet Research, vol. 22, no. 10, e23024, pp. 1-16",
        link: "http://dx.doi.org/10.2196/23024"
    },
    {
        year: 2020,
        category: "journal",
        venueShort: "IEEE Access",
        title: "Hybrid Framework for Haptic Texture Modeling and Rendering",
        authors: "Sunghwan Shin and Seungmoon Choi",
        venue: "IEEE Access, vol. 8, pp. 149825–149840",
        link: "https://doi.org/10.1109/ACCESS.2020.3015861"
    },
    {
        year: 2020,
        category: "journal",
        venueShort: "ToH",
        title: "A Review of Surface Haptics: Enabling Tactile Effects on Touch Surfaces",
        authors: "Cagatay Basdogan, Frederic Giraud, Vincent Levesque, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics (Special Issue on Surface Haptics), vol. 13, no. 3, pp. 450-470",
        link: "https://doi.org/10.1109/TOH.2020.2990712"
    },
    {
        year: 2020,
        category: "journal",
        venueShort: "Proc. IEEE",
        title: "Methodology for Maximizing Information Transmission of Haptic Devices",
        authors: "Hong Z. Tan, Seungmoon Choi, Frances W. Y. Lau, and Freddy Abnousi",
        venue: "Proceedings of the IEEE, vol. 108, no. 6, pp. 945—965",
        link: "https://doi.org/10.1109/JPROC.2020.2992561"
    },
    {
        year: 2020,
        category: "journal",
        venueShort: "ToH",
        title: "Data-driven Texture Modeling and Rendering on Electrovibration Display",
        authors: "Reza Haghighi Osgouei, Jin Ryong Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 13, no. 2, pp. 298-311",
        link: "https://doi.org/10.1109/TOH.2019.2932990"
    },
    {
        year: 2020,
        category: "journal",
        venueShort: "IEEE TIE",
        title: "Soft Haptic Actuator Based on Knitted PVC Gel Fabric",
        authors: "Won-Hyeong Park, Eun-Jae Shin, Yongjae Yoo, Seungmoon Choi, and Sang-Youn Kim",
        venue: "IEEE Transactions on Industrial Electronics, vol. 67, no. 1, pp. 677-685",
        link: "https://doi.org/10.1109/TIE.2019.2918470"
    },

    // --- 2019 ---
    {
        year: 2019,
        category: "journal",
        venueShort: "ToH",
        title: "Effects of Contact Force on Vibrotactile Sensitivity During Active Touch",
        authors: "Seungjae Oh and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 12, no. 4, pp. 645-651",
        link: "https://doi.org/10.1109/TOH.2019.2929521"
    },
    {
        year: 2019,
        category: "journal",
        venueShort: "IEEE ToR",
        title: "Estimating Deformed Surface Displacement from Contact Pressure Distribution",
        authors: "Hyoungkyun Kim, Seungmoon Choi, and Wan Kyun Chung",
        venue: "IEEE Transactions on Robotics, vol 35, no. 5, pp. 1260-1267",
        link: "https://doi.org/10.1109/TRO.2019.2921197"
    },
    {
        year: 2019,
        category: "journal",
        venueShort: "RA-L",
        title: "Data-Driven Haptic Modeling of Normal Interactions on Viscoelastic Deformable Objects Using a Random Forest",
        authors: "Amit Bhardwaj, Hojun Cha, and Seungmoon Choi",
        venue: "IEEE Robotics and Automation Letters, vol. 4, no. 2, pp. 1379-1386",
        link: "https://doi.org/10.1109/LRA.2019.2895838"
    },
    {
        year: 2019,
        category: "journal",
        venueShort: "Psychiatry Inv.",
        title: "Visuo-haptic-based Multimodal Feedback Virtual Reality Solution to Improve Anxiety Symptoms: a Proof-of-Concept Study",
        authors: "Young Im Kim, Seo-Yeon Jung, Seulki Min, Eunbi Seol, Sungho Seo, Ji-Won Hur, Dooyoung Jung, Heon-Jeong Lee, Sungkil Lee, Gerard J. Kim, Chung-Yean Cho, Seungmoon Choi, Seung-Moo Lee, and Chul-Hyun Cho",
        venue: "Psychiatry Investigation, vol. 16, no. 2, pp. 167-171",
        link: "https://doi.org/10.30773/pi.2018.12.25.1"
    },
    {
        year: 2019,
        category: "journal",
        venueShort: "ToH",
        title: "Haptic Enchanters: Attachable and Detachable Vibrotactile Modules and Their Advantages",
        authors: "Gunhyuk Park, Hojun Cha, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 12, no. 1, pp. 43-55",
        link: "https://doi.org/10.1109/TOH.2018.2859955"
    },

    // --- 2017 ---
    {
        year: 2017,
        category: "journal",
        venueShort: "ToH",
        title: "Improving 3D Shape Recognition with Electrostatic Friction Display",
        authors: "Reza Haghighi Osgouei, Jin Ryong Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 10, no. 4, pp. 533-544",
        link: "https://doi.org/10.1109/TOH.2017.2710314"
    },
    {
        year: 2017,
        category: "journal",
        venueShort: "ToH",
        title: "Investigation on Low Voltage Operation of Electrovibration Display",
        authors: "Jeonggoo Kang, Heewon Kim, Seungmoon Choi, Ki-Duk Kim, and Jeha Ryu",
        venue: "IEEE Transactions on Haptics, vol. 10, no. 3, pp. 371-381",
        link: "https://doi.org/10.1109/TOH.2016.2635145"
    },
    {
        year: 2017,
        category: "journal",
        venueShort: "ToH",
        title: "A Physics-Based Vibrotactile Feedback Library for Collision Events",
        authors: "Gunhyuk Park and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 10, no. 3, pp. 325-337",
        link: "https://doi.org/10.1109/TOH.2016.2614804"
    },
    {
        year: 2017,
        category: "journal",
        venueShort: "PLOS ONE",
        title: "Perceptual Space of Superimposed Dual-Frequency Vibrations in the Hands",
        authors: "Inwook Hwang, Jeongil Seo, and Seungmoon Choi",
        venue: "Plos One, vol. 12, no. 1, e01695702016",
        link: "https://doi.org/10.1371/journal.pone.0169570"
    },
    {
        year: 2017,
        category: "journal",
        venueShort: "RA-L",
        title: "Contact Force Decomposition Using Contact Pressure Distribution",
        authors: "Hyoungkyun Kim, Seungmoon Choi, and Wan Kyun Chung",
        venue: "IEEE Robotics and Automation Letters, vol. 2, no. 1, pp. 290-297",
        link: "https://doi.org/10.1109/LRA.2016.2598554"
    },

    // --- 2016 ---
    {
        year: 2016,
        category: "journal",
        venueShort: "ToH",
        title: "Mid-air Tactile Stimulation Using Indirect Laser Radiation",
        authors: "Hojin Lee, Ji-Sun Kim, Jae-Young Kim, Seungmoon Choi, Jae-Hoon Jun, Jong-Rak Park, A-Hee Kim, Han-Byeol Oh, Jun-Hyeok Baek, Seung-Jin Yang, Hyung-Sik Kim, and Soon-Cheol Chung",
        venue: "IEEE Transactions on Haptics, vol. 9, no. 4, pp. 574-585",
        link: "https://doi.org/10.1109/TOH.2016.2569081"
    },
    {
        year: 2016,
        category: "journal",
        venueShort: "ToH",
        title: "Data-Driven Haptic Modeling and Rendering of Viscoelastic and Frictional Responses of Deformable Objects",
        authors: "Sunghoon Yim, Seokhee Jeon, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 9, no. 4, pp. 548-559",
        link: "https://doi.org/10.1109/TOH.2016.2571690"
    },
    {
        year: 2016,
        category: "journal",
        venueShort: "TVCG",
        title: "Motion Effects Synthesis for 4D Films",
        authors: "Jaebong Lee, Bohyung Han, and Seungmoon Choi",
        venue: "IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 10, pp. 2300-2314",
        link: "https://doi.org/10.1109/TVCG.2015.2507591"
    },
    {
        year: 2016,
        category: "journal",
        venueShort: "IJHCS",
        title: "Assisting People with Visual Impairments in Aiming at a Target on a Large Wall-Mounted Display",
        authors: "Kibum Kim, Xiangshi Ren, Seungmoon Choi, and Hong Z. Tan",
        venue: "International Journal of Human-Computer Studies, vol. 86, pp. 109-120",
        link: "https://doi.org/10.1016/j.ijhcs.2015.10.002"
    },

    // --- 2015 ---
    {
        year: 2015,
        category: "journal",
        venueShort: "Neurosci. Lett.",
        title: "Evaluation of the Possibility and Response Characteristics of Laser-induced Tactile Sensation",
        authors: "Hyung-Sik Kim, Ji-Sun Kim, Gu-In Jung, Jae-Hoon Jun, Jong-Rak Park, Sung-Phil Kim, Seungmoon Choi, Sung-Jun Park, Mi-Hyun Choi, and Soon-Cheol Chung",
        venue: "Neuroscience Letters, vol. 602, pp. 68-72",
        link: "https://doi.org/10.1016/j.neulet.2015.06.053"
    },
    {
        year: 2015,
        category: "journal",
        venueShort: "Sci. Rep.",
        title: "Laser-induced Thermoelastic Effects Can Evoke Tactile Sensations",
        authors: "Jae-Hoon Jun, Jong-Rak Park, Sung-Phil Kim, Young Min Bae, Jang-Yeon Park, Hyung-Sik Kim, Seungmoon Choi, Sung Jun Jung, Seung Hwa Park, Dong-Il Yeom, Gu-In Jung, Ji-Sun Kim, and Soon-Cheol Chung",
        venue: "Scientific Reports, vol. 5, no. 11016, pp. 1-16",
        link: "https://doi.org/10.1038/srep11016"
    },
    {
        year: 2015,
        category: "journal",
        venueShort: "ToH",
        title: "Topography Compensation for Haptization of a Mesh Object and Its Stiffness Distribution",
        authors: "Sunghoon Yim, Seokhee Jeon, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 8, no. 1, pp. 90-101",
        link: "https://doi.org/10.1109/TOH.2013.74"
    },

    // --- 2014 ---
    {
        year: 2014,
        category: "journal",
        venueShort: "ToH",
        title: "Saliency-Driven Real-Time Video-to-Tactile Translation",
        authors: "Myongchan Kim, Sungkil Lee, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 7, no. 3, pp. 394-404",
        link: "https://doi.org/10.1109/TOH.2013.58"
    },
    {
        year: 2014,
        category: "journal",
        venueShort: "ToH",
        title: "Consonance of Vibrotactile Chords",
        authors: "Yongjae Yoo, Inwook Hwang, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 7, no. 1, pp. 3-13",
        link: "https://doi.org/10.1109/TOH.2013.57"
    },

    // --- 2013 ---
    {
        year: 2013,
        category: "journal",
        venueShort: "IEEE THMS",
        title: "Haptic Assistance for Memorization of 2D Selection Sequences",
        authors: "Hojin Lee, Gabjong Han, In Lee, Sunghoon Yim, Kyungpyo Hong, Hyeseon Lee, and Seungmoon Choi",
        venue: "IEEE Transactions on Human-Machine Systems, vol. 43, no. 6, pp. 643-649",
        link: "https://doi.org/10.1109/TSMC.2013.2283464"
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "Trans. Res. Part F",
        title: "Efficacy of Haptic Blind Spot Warnings Applied through a Steering Wheel or a Seatbelt",
        authors: "Jaemin Chun, In Lee, Gunhyuk Park, Jongman Seo, Seungmoon Choi, and Sung H. Han",
        venue: "Transportation Research Part F: Traffic Psychology and Behaviour, vol. 21, pp. 231-241",
        link: "https://doi.org/10.1016/j.trf.2013.09.014"
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "ToH",
        title: "Perceptual Analysis of Vibrotactile Flows on a Mobile Device",
        authors: "Jongman Seo and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 6, no. 4, pp. 522-527",
        link: "https://doi.org/10.1109/TOH.2013.24"
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "Intell. Serv. Robot.",
        title: "Comparative Evaluation of Performance Measures for Human Driving Skills",
        authors: "Reza Haghighi Osgouei, Hojin Lee, and Seungmoon Choi",
        venue: "Intelligent Service Robotics, vol. 17, no. 3, pp. 169-180",
        link: "https://doi.org/10.1007/s11370-013-0134-6"
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "Virtual Reality",
        title: "Haptic Discrimination of Virtual Surface Slope",
        authors: "Inwook Hwang, Sunghoon Yim, and Seungmoon Choi",
        venue: "Virtual Reality, vol. 16, no. 3, pp. 205-218",
        link: "https://doi.org/10.1007/s10055-013-0226-9"
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "Proc. IEEE",
        title: "Vibrotactile Display: Perception, Technology, and Applications",
        authors: "Seungmoon Choi and Katherine J. Kuchenbecker",
        venue: "Proceedings of the IEEE, vol. 101, no. 9, pp. 2093-2104",
        link: "https://doi.org/10.1109/JPROC.2012.2221071"
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "ToH",
        title: "Vibrotactile Perceived Intensity for Mobile Devices as a Function of Direction, Amplitude, and Frequency",
        authors: "Inwook Hwang, Jongman Seo, Myongchan Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 6, no. 3, pp. 352-362",
        link: "https://doi.org/10.1109/TOH.2013.2"
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "ToH",
        title: "Real-time Dual-band Haptic Music Player for Mobile Devices",
        authors: "Inwook Hwang, Hyeseon Lee, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 6, no. 3, pp. 340-351",
        link: "https://doi.org/10.1109/TOH.2013.7"
    },

    // --- 2012 ---
    {
        year: 2012,
        category: "journal",
        venueShort: "IJIE",
        title: "Evaluation of Vibrotactile Feedback for Forward Collision Warning on the Steering Wheel and Seatbelt",
        authors: "Jaemin Chun, Sung H. Han, Gunhyuk Park, Jongman Seo, In Lee, and Seungmoon Choi",
        venue: "International Journal of Industrial Ergonomics, vol. 42, no. 5, pp. 443-448",
        link: "https://doi.org/10.1016/j.ergon.2012.07.004"
    },
    {
        year: 2012,
        category: "journal",
        venueShort: "ToH",
        title: "Rendering Virtual Tumors in Real Tissue Mock-Ups Using Haptic Augmented Reality",
        authors: "Seokhee Jeon, Seungmoon Choi, and Matthias Harders",
        venue: "IEEE Transactions on Haptics, vol. 5, no. 1, pp. 77-84",
        link: "https://doi.org/10.1109/TOH.2011.40"
    },

    // --- 2011 ---
    {
        year: 2011,
        category: "journal",
        venueShort: "Presence",
        title: "Real Stiffness Augmentation for Haptic Augmented Reality",
        authors: "Seokhee Jeon and Seungmoon Choi",
        venue: "Presence: Teleoperators and Virtual Environments, vol. 20, no. 4, pp. 337-370",
        link: "https://doi.org/10.1162/PRES_a_00051"
    },
    {
        year: 2011,
        category: "journal",
        venueShort: "IwC",
        title: "Evaluation of Motion-Based Interaction for Mobile Devices: A Case Study on Image Browsing",
        authors: "Sunghoon Yim, Sungkil Lee, and Seungmoon Choi",
        venue: "Interacting with Computers, vol. 23, no 3, pp. 268-278",
        link: "https://doi.org/10.1016/j.intcom.2011.04.001"
    },

    // --- 2010 ---
    {
        year: 2010,
        category: "journal",
        venueShort: "Presence",
        title: "Psychophysical Model for Vibrotactile Rendering in Mobile Devices",
        authors: "Jonghyun Ryu, Jaehoon Jung, Gunhyuk Park, and Seungmoon Choi",
        venue: "Presence: Teleoperators and Virtual Environments, vol. 10, no. 4, pp. 1-24",
        link: "https://doi.org/10.1162/PRES_a_00011"
    },
    {
        year: 2010,
        category: "journal",
        venueShort: "ToH",
        title: "Vibrotactile Feedback for Information Delivery in the Vehicle",
        authors: "Jonghyun Ryu, Jaemin Chun, Gunhyuk Park, Seungmoon Choi, and Sung H. Han",
        venue: "IEEE Transactions on Haptics, vol. 3, no. 2, pp. 138-149",
        link: "https://doi.org/10.1109/TOH.2010.1"
    },

    // --- 2009 ---
    {
        year: 2009,
        category: "journal",
        venueShort: "Presence",
        title: "Haptic Augmented Reality: Taxonomy and an Example of Stiffness Modulation",
        authors: "Seokhee Jeon and Seungmoon Choi",
        venue: "Presence: Teleoperators and Virtual Environments, vol. 18, no. 5, pp. 387-408",
        link: "https://doi.org/10.1162/pres.18.5.387"
    },
    {
        year: 2009,
        category: "journal",
        venueShort: "IEEE TCE",
        title: "Gesture-Recognizing Hand-Held Interface with Vibrotactile Feedback for 3D Interaction",
        authors: "Sangki Kim, Gunhyuk Park, Sunghoon Yim, Gabjong Han, Seokhee Jeon, Seungmoon Choi, and Seungjin Choi",
        venue: "IEEE Transactions on Consumer Electronics, vol. 55, no. 3, pp. 1169-1177",
        link: "https://doi.org/10.1109/TCE.2009.5277972"
    },
    {
        year: 2009,
        category: "journal",
        venueShort: "TVCG",
        title: "Real-Time Depth-of-Field Rendering Using Anisotropically Filtered Mipmap Interpolation",
        authors: "Sungkil Lee, Gerard Jounghyun Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Visualization and Computer Graphics, vol. 15, no. 3, pp. 6-19",
        link: "https://doi.org/10.1109/TVCG.2008.106"
    },
    {
        year: 2009,
        category: "journal",
        venueShort: "IJCAS",
        title: "Discrimination of Visual and Haptic Rendering Delays in Networked Environments",
        authors: "In Lee and Seungmoon Choi",
        venue: "International Journal of Control, Automation, and Systems, vol. 7, no. 1, pp. 25-31",
        link: "https://doi.org/10.1007/s12555-009-0104-0"
    },
    {
        year: 2009,
        category: "journal",
        venueShort: "Industrial Robot",
        title: "Cooperative Robotic Assistant with Drill-By-Wire End-Effector for Spinal Fusion Surgery",
        authors: "Jongwon Lee, Inwook Hwang, Keehoon Kim, Seungmoon Choi, Wan Kyun Chung, and Young Soo Kim",
        venue: "Industrial Robot - An International Journal, vol. 36, no. 1, pp. 60-72",
        link: "https://doi.org/10.1108/01439910910924684"
    },
    {
        year: 2009,
        category: "journal",
        venueShort: "TVCG",
        title: "Real-Time Tracking of Visually Attended Objects in Virtual Environments and Its Application to LOD",
        authors: "Sungkil Lee, Gerard Jounghyun Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Visualization and Computer Graphics, vol. 15, no. 1, pp. 6-19",
        link: "https://doi.org/10.1109/TVCG.2008.82"
    },

    // --- 2008 ---
    {
        year: 2008,
        category: "journal",
        venueShort: "CGF",
        title: "Real-Time Depth-of-Field Rendering Using Point Splatting on Per-Pixel Layers",
        authors: "Sungkil Lee, Gerard Jounghyun Kim, and Seungmoon Choi",
        venue: "Computer Graphics Forum, vol. 27, no. 7, pp. 1955-1962",
        link: "https://doi.org/10.1111/j.1467-8659.2008.01344.x"
    },

    // --- 2007 ---
    {
        year: 2007,
        category: "journal",
        venueShort: "IEEE Multimedia",
        title: "Perceptual Issues in Haptic Digital Watermarking",
        authors: "Domenico Prattichizzo, Mauro Barni, Gloria Menegaz, Alessandro Formaglio, Hong Z. Tan and Seungmoon Choi",
        venue: "IEEE Multimedia, vol. 14, no. 3, pp. 84-91",
        link: "https://doi.org/10.1109/MMUL.2007.58"
    },
    {
        year: 2007,
        category: "journal",
        venueShort: "Presence",
        title: "Perceived Instability of Virtual Haptic Texture. III. Effect of Update Rate",
        authors: "Seungmoon Choi and Hong Z. Tan",
        venue: "Presence: Teleoperators and Virtual Environment, vol. 16, no. 3, pp. 263-278",
        link: "https://doi.org/10.1162/pres.16.3.263"
    },
    {
    year: 2006,
    category: "journal",
    venueShort: "IJVR",
    title: "Requirements, Implementation, and Applications of Hand-held Virtual Reality",
    authors: "Jane Hwang, Jaehoon Jung, Sunghoon Yim, Jaeyoung Cheon, Sungkil Lee, Seungmoon Choi, and Gerard J. Kim",
    venue: "International Journal of Virtual Reality",
    link: "https://doi.org/10.20870/IJVR.2006.5.2.2689"
},
{
    year: 2005,
    category: "journal",
    venueShort: "TAP",
    title: "Force Constancy and its Effect on Haptic Perception of Virtual Surfaces",
    authors: "Seungmoon Choi, Laron Walker, Hong Z. Tan, Scott Crittenden, and Ron Reifenberger",
    venue: "ACM Transactions on Applied Perception",
    link: "https://doi.org/10.1145/1060581.1060584"
},
{
    year: 2005,
    category: "journal",
    venueShort: "Presence",
    title: "Perceived Instability of Virtual Haptic Texture. II. Effect of Collision Detection Algorithm",
    authors: "Seungmoon Choi and Hong Z. Tan",
    venue: "Presence: Teleoperators and Virtual Environment",
    link: "https://doi.org/10.1162/105474605774785271"
},
{
    year: 2004,
    category: "journal",
    venueShort: "Presence",
    title: "Perceived Instability of Virtual Haptic Texture. I. Experimental Studies",
    authors: "Seungmoon Choi and Hong Z. Tan",
    venue: "Presence: Teleoperators and Virtual Environment",
    link: "https://doi.org/10.1162/1054746041944867"
},
{
    year: 2004,
    category: "journal",
    venueShort: "IEEE CG&A",
    title: "Towards Realistic Haptic Rendering of Surface Texture",
    authors: "Seungmoon Choi and Hong Z. Tan",
    venue: "IEEE Computer Graphics & Applications",
    link: "https://doi.org/10.1109/MCG.2004.1274060"
}
    /* data.js - International Conference Papers (2007-2026) */

];
/* data.js - Poster & Demo Papers (Based on CV) */
/* data.js - Poster & Demo Papers (2007-2025) */

const posterDemoPapers = [
    // --- 2026 ---
    {
        year: 2026,
        category: "poster",
        venueShort: "CHI",
        title: "Spatial Tactile Optimizer: Toward Perceptual Optimization for Multi-Point Vibrotactile Cues on the Torso",
        authors: "Dajin Lee and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems (Posters)",
        link: ""
    },
    // --- 2025 ---
    {
        year: 2025,
        category: "demo",
        venueShort: "CHI",
        title: "Demonstrating SkinHaptics: Exploring Skin Softness Perception and Virtual Body Embodiment Techniques to Enhance Self-Haptic Interactions",
        authors: "Jungeun Lee, Minha Jeon, Jinyoung Lee, Seungmoon Choi, and Seungjae Oh",
        venue: "ACM CHI Conference on Human Factors in Computing Systems (Interactivity)",
        link: "https://doi.org/10.1145/3706599.3721275"
    },
    {
        year: 2025,
        category: "demo",
        venueShort: "WHC",
        title: "Demonstrating SkinHaptics: Softness Perception and Virtual Body Embodiment for Self-Haptics",
        authors: "Jungeun Lee, Minha Jeon, Jinyoung Lee, Seungmoon Choi, and Seungjae Oh",
        venue: "IEEE World Haptics Conference (Hands-on Demonstration)",
        link: ""
    },
    {
        year: 2025,
        category: "demo",
        venueShort: "WHC",
        title: "Semantic Full-Body Haptic Effects for Virtual Reality First-Person-Shooter Games",
        authors: "Gyeore Yun and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demonstration)",
        link: ""
    },
    {
        year: 2025,
        category: "demo",
        venueShort: "WHC",
        title: "Automatic Haptic Rendering Pipeline Using AI Models",
        authors: "Jeongwoo Kim, Jaejun Park, Uison Ju, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demonstration; People’s Choice Award)",
        link: ""
    },
    {
        year: 2025,
        category: "demo",
        venueShort: "WHC",
        title: "Body-Penetrating Tactile Phantom Sensations Enhanced by Sound",
        authors: "Hyunuk Kim, Dajin Lee, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demonstration)",
        link: ""
    },
    {
        year: 2025,
        category: "demo",
        venueShort: "WHC",
        title: "Automatic Generation of Haptic Motion Effects from Audiovisual Content",
        authors: "Jiwan Lee, Jaejun Park, Jaehyeok Ahn, Sangyoon Han, Gyeore Yun, Jaebong Lee, Beomsu Lim, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demonstration; People’s Choice Award)",
        link: ""
    },
    {
        year: 2025,
        category: "poster",
        venueShort: "WHC",
        title: "Identification of Spatio-Temporal Vibrotactile Stimuli Across the Torso: Toward Egocentric Haptic Navigation",
        authors: "Junwoo Kim, Jaejun Park, Chaeyong Park, Junseok Park, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Work-in-Progress)",
        link: ""
    },
    {
        year: 2025,
        category: "poster",
        venueShort: "WHC",
        title: "Effects of Haptic Feedback on Gaming Experiences: A Case Study for Players and Spectators in an FPS game",
        authors: "Heeji Sohn, Chaeyong Park, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Work-in-Progress; Honorable Mention)",
        link: ""
    },
    {
        year: 2025,
        category: "poster",
        venueShort: "WHC",
        title: "Tactile Localization in Forearm-Mounted Multi-Tactor Displays: The Effect of Tactor Number and Position",
        authors: "Dong-Geun Kim, Suheon Nam, Chaeyong Park, Geunho Lee, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Work-in-Progress)",
        link: ""
    },

    // --- 2024 ---
    {
        year: 2024,
        category: "poster",
        venueShort: "ICRA W",
        title: "Multimodal Haptic Feedback for Effectively Expressing the Social Intent of Touch Gestures in VR",
        authors: "Heeyeon Kim and Seungmoon Choi",
        venue: "ICRA Workshop on Applications and Future Directions of Affective Technologies (Best Poster Presentation Award)",
        link: ""
    },

    // --- 2023 ---
    {
        year: 2023,
        category: "demo",
        venueShort: "WHC",
        title: "Real-Time, Selective, and Multimodal Haptic Feedback from Gameplay Sound",
        authors: "Gyeore Yun, Jungeun Lee, Dong-Geun Kim, Minjae Mun, Hong Z. Tan, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demonstration)",
        link: "https://youtu.be/mnbLtQvXQGo"
    },
    {
        year: 2023,
        category: "demo",
        venueShort: "WHC",
        title: "Multimodal Haptic Feedback for Virtual Collisions Combining Vibration and Electrical Muscle Stimulation",
        authors: "Jungeun Lee and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demonstration)",
        link: "https://www.youtube.com/watch?v=sQ9E-dFdT08"
    },
    {
        year: 2023,
        category: "poster",
        venueShort: "WHC",
        title: "A Comparative Study of Physical and Haptic Exhibits in Informal Learning Environment",
        authors: "Dajin Lee, Daehyeon Nam, Seokwon Jeong, Keehoon Kim, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Work-in-Progress)",
        link: "https://ieeexplore.ieee.org/document/10224467"
    },

    // --- 2022 ---
    {
        year: 2022,
        category: "poster",
        venueShort: "SIGGRAPH Asia",
        title: "MMGrip: A Handheld Multimodal Haptic Device Combining Vibration, Impact, and Shear for Realistic Expression of Contact",
        authors: "Dong-Geun Kim, Jungeun Lee, and Seungmoon Choi",
        venue: "SIGGRAPH Asia Posters",
        link: "https://doi.org/10.1145/3550082.3564197"
    },

    // --- 2021 ---
    {
        year: 2021,
        category: "poster",
        venueShort: "UR",
        title: "Data-Driven Viscoelasticity Modeling Using Random Forests with Position and Velocity Pair",
        authors: "Hojun Cha, Amit Bhardwaj, and Seungmoon Choi",
        venue: "International Conference on Ubiquitous Robots (UR)",
        link: "https://ieeexplore.ieee.org/document/9494676"
    },

    // --- 2020 ---
    {
        year: 2020,
        category: "poster",
        venueShort: "HAPTICS",
        title: "Perceived Magnitude Function of Friction Rendered by the Dahl Model",
        authors: "Beomsu Lim, Junkyeong Choi, Yongjae Yoo, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Work-in-Progress)",
        link: "https://ieeexplore.ieee.org/document/9082568"
    },
    {
        year: 2020,
        category: "poster",
        venueShort: "HAPTICS",
        title: "Vestibular Detection Thresholds and Psychometric Functions of Motion Effects in Cardinal Directions",
        authors: "Jiwan Lee and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Work-in-Progress)",
        link: "https://ieeexplore.ieee.org/document/9082697"
    },

    // --- 2019 ---
    {
        year: 2019,
        category: "demo",
        venueShort: "WHC",
        title: "VibEye: A System for Identification of Hand-held Object by Visualizing Vibration Propagation Dynamics",
        authors: "Seungjae Oh, Chaeyong Park, Jinsoo Kim, Gyeore Yun, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demo)",
        link: "https://www.youtube.com/watch?v=0QsU1rFs5yY"
    },
    {
        year: 2019,
        category: "demo",
        venueShort: "WHC",
        title: "Realistic Haptic Rendering of Collision Effects Using Multimodal Vibrotactile and Impact Feedback",
        authors: "Chaeyong Park, Jaeyoung Park, Seungjae Oh, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demo)",
        link: "https://www.youtube.com/watch?v=wjVvP031OLE"
    },
    {
        year: 2019,
        category: "demo",
        venueShort: "WHC",
        title: "Seamless Phantom Sensation Moving Across a Wide Range of Body",
        authors: "Gyeore Yun, Seungjae Oh, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demo)",
        link: "https://www.youtube.com/watch?v=PTAj4zyKdYs"
    },
    {
        year: 2019,
        category: "demo",
        venueShort: "ISS",
        title: "Data-driven Texture Modeling and Rendering on Electrovibration Display",
        authors: "Seongwon Cho, Reza Haghighi Osgouei, Jin Ryong Kim, and Seungmoon Choi",
        venue: "ACM International Conference on Interactive Surfaces and Spaces (Demo)",
        link: "https://dl.acm.org/doi/10.1145/3343055.3360743"
    },

    // --- 2018 ---
    {
        year: 2018,
        category: "demo",
        venueShort: "HAPTICS",
        title: "An Inverse Neural Network Model for Data-Driven Texture Rendering on Electrovibration Display",
        authors: "Reza Haghighi Osgouei, Sunghwan Shin, Seongwon Cho, Jin Ryong Kim, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Hands-on Demo)",
        link: ""
    },
    {
        year: 2018,
        category: "demo",
        venueShort: "CHI",
        title: "4D Experiences Enabled by Automatic Synthesis of Motion and Vibrotactile Effects",
        authors: "Sangyoon Han, Sunung Mun, Jongman Seo, Jaebong Lee, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems (Extended Abstracts)",
        link: ""
    },
    {
        year: 2018,
        category: "demo",
        venueShort: "AsiaHaptics",
        title: "TouchPhoto: Enabling Independent Picture-taking and Understanding of Photos for Visually-Impaired Users",
        authors: "Yongjae Yoo, Jongho Lim, Hanseul Cho, and Seungmoon Choi",
        venue: "AsiaHaptics (Hands-on Demo)",
        link: ""
    },
    {
        year: 2018,
        category: "demo",
        venueShort: "AsiaHaptics",
        title: "Random Forest for Modeling and Rendering of Viscoelastic Deformable Objects",
        authors: "Hojun Cha, Amit Bhardwaj, Chaeyong Park, and Seungmoon Choi",
        venue: "AsiaHaptics (Hands-on Demo)",
        link: ""
    },
    {
        year: 2018,
        category: "demo",
        venueShort: "AsiaHaptics",
        title: "Towards Automatic Synthesis of Motion Effects",
        authors: "Sangyoon Han, Jaebong Lee, and Seungmoon Choi",
        venue: "AsiaHaptics (Candidate for Best Demo Award)",
        link: ""
    },
    {
        year: 2018,
        category: "demo",
        venueShort: "AsiaHaptics",
        title: "Data-driven Multi-modal Haptic Rendering Combining Force, Tactile, and Thermal Feedback",
        authors: "Seongwon Cho, Hyejin Choi, Sunghwan Shin, and Seungmoon Choi",
        venue: "AsiaHaptics (Hands-on Demo)",
        link: ""
    },

    // --- 2017 ---
    {
        year: 2017,
        category: "demo",
        venueShort: "WHC",
        title: "Mid-air Tactile Application Using Indirect Laser Radiation for Contour-Following Stimulation",
        authors: "Hojun Cha, Hojin Lee, Junsuk Park, Hyung-Sik Kim, Soon-Cheol Chung, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demo)",
        link: ""
    },
    {
        year: 2017,
        category: "poster",
        venueShort: "URAI",
        title: "Haptic Texture Rendering Using Random Fractal Surface",
        authors: "Seongwon Cho, Sunghwan Shin and Seungmoon Choi",
        venue: "International Conference on Ubiquitous Robots and Ambient Intelligence (URAI)",
        link: ""
    },

    // --- 2016 ---
    {
        year: 2016,
        category: "demo",
        venueShort: "HAPTICS",
        title: "Graphical Authoring Tool of Vibrotactile Stimuli Using Adjectival Space",
        authors: "Yongjae Yoo, Jaebong Lee, Jongman Seo, Eunhwa Lee, Jeongseok Lee, Yudong Bae, Daekwang Jung, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Hands-on Demo)",
        link: ""
    },
    {
        year: 2016,
        category: "demo",
        venueShort: "UIST",
        title: "LaserStroke: Mid-air Tactile Experiences on Contours Using Indirect Laser Radiation",
        authors: "Hojin Lee, Hojun Cha, Junsuk Park, Seungmoon Choi, Hyung-Sik Kim, and Soon-Cheol Chung",
        venue: "ACM UIST (Demo)",
        link: ""
    },
    {
        year: 2016,
        category: "demo",
        venueShort: "UIST",
        title: "MagTacS: Delivering Tactile Sensation over an Object",
        authors: "Hyung-Sik Kim, Seong-Young Gim, Woo-Ram Kim, Mi-Hyun Choi, Seungmoon Choi, and Soon-Cheol Chung",
        venue: "ACM UIST (Demo)",
        link: ""
    },
    {
        year: 2016,
        category: "demo",
        venueShort: "AsiaHaptics",
        title: "Hybrid Haptic Texture Rendering Using Kinesthetic and Vibrotactile Feedback",
        authors: "Sunghwan Shin and Seungmoon Choi",
        venue: "AsiaHaptics (Demo)",
        link: ""
    },
    {
        year: 2016,
        category: "demo",
        venueShort: "AsiaHaptics",
        title: "PhysVib: Physically Plausible Vibrotactile Feedback Library to Collisions on a Mobile Device",
        authors: "Gunhyuk Park and Seungmoon Choi",
        venue: "AsiaHaptics (Demo)",
        link: ""
    },
    {
        year: 2016,
        category: "poster",
        venueShort: "HAPTICS",
        title: "Haptic Texture Modeling Using Photometric Stereo",
        authors: "Sunghwan Shin and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Work-in-Progress)",
        link: ""
    },
    {
        year: 2016,
        category: "poster",
        venueShort: "HAPTICS",
        title: "Vibrotactile Rendering of Gunshot Events for 4D Films",
        authors: "Jongman Seo, Reza Haghighi Osgouei, Soon-Cheol Chung, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Work-in-Progress)",
        link: ""
    },
    {
        year: 2016,
        category: "poster",
        venueShort: "HAPTICS",
        title: "Large-Scale Survey on Adjectival Representation of Vibrotactile Stimuli",
        authors: "Yongjae Yoo, Jaebong Lee, Jongman Seo, Eunhwa Lee, Jeongseok Lee, Yudong Bae, Daekwang Jung, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Work-in-Progress)",
        link: ""
    },

    // --- 2015 ---
    {
        year: 2015,
        category: "demo",
        venueShort: "WHC",
        title: "Mid-Air Tactile Stimulation Using Laser-Induced Thermoelastic Effects",
        authors: "Hojin Lee, Ji-Sun Kim, Seungmoon Choi, et al.",
        venue: "IEEE World Haptics Conference (Hands-on Demo)",
        link: ""
    },
    {
        year: 2015,
        category: "demo",
        venueShort: "WHC",
        title: "TouchMusic: Music Experience System for the Hearing-Impaired",
        authors: "Gunhyuk Park, Yongjae Yoo, Seungmoon Choi, et al.",
        venue: "IEEE World Haptics Conference (Hands-on Demo)",
        link: ""
    },
    {
        year: 2015,
        category: "demo",
        venueShort: "WHC",
        title: "Data-Driven Haptic Modeling and Rendering of Deformable Objects Including Sliding Friction",
        authors: "Sunghoon Yim, Seokhee Jeon, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demo)",
        link: ""
    },
    {
        year: 2015,
        category: "poster",
        venueShort: "WHC",
        title: "Preliminary Study on Perceived Intensity of Electrovibration Using High-Frequency Carrier-Signal Voltage",
        authors: "Jeonggoo Kang, Heewon Kim, Seungmoon Choi, Ki-Duk Kim, and Jeha Ryu",
        venue: "IEEE World Haptics Conference (Work-in-Progress)",
        link:""
    },
    {
        year: 2015,
        category: "poster",
        venueShort: "URAI",
        title: "Decomposition of Contact Force Using Contact Pressure for Haptic Augmented Reality",
        authors: "Hyoungkyun Kim, Seungmoon Choi, and Wan Kyun Chung",
        venue: "International Conference on Ubiquitous Robots and Ambient Intelligence (URAI)",
        link:""
    },

    // --- 2014 ---
    {
        year: 2014,
        category: "demo",
        venueShort: "HAPTICS",
        title: "👑 PreventFHP: Detection and Warning System for Forward Head",
        authors: "Jaebong Lee, Eunji Cho, Minjae Kim, Yongmin Yoon, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Hands-on Demo; Best Teaser Award)",
        link: ""
    },
    {
        year: 2014,
        category: "demo",
        venueShort: "AsiaHaptics",
        title: "Normal and Tangential Force Decomposition and Augmentation Based on Contact Centroid",
        authors: "Sunghoon Yim, Seokhee Jeon, and Seungmoon Choi",
        venue: "AsiaHaptics (Honorable Mention - Final Candidate for Best Demo Award)",
        link: ""
    },
    {
        year: 2014,
        category: "demo",
        venueShort: "AsiaHaptics",
        title: "Haptic-enabled English Education System",
        authors: "Hoang Minh Phuong, Jaebong Lee, Hojin Lee, Kyusong Lee, Gary Geunbae Lee, and Seungmoon Choi",
        venue: "AsiaHaptics (Demo)",
        link:""
    },

    // --- 2013 ---
    {
        year: 2013,
        category: "poster",
        venueShort: "RO-MAN",
        title: "Haptic-Enabled Driving Training System",
        authors: "Reza Haghighi Osgouei, Hojin Lee and Seungmoon Choi",
        venue: "IEEE International Symposium on Robot & Human Interactive Communication (Work-in-Progress)",
        link:""
    },

    // --- 2012 ---
    {
        year: 2012,
        category: "demo",
        venueShort: "HAPTICS",
        title: "Shape Modeling of Soft Real Objects Using Force-Feedback Haptic Interface",
        authors: "Sunghoon Yim and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Hands-on Demo)",
        link: ""
    },

    // --- 2010 ---
    {
        year: 2010,
        category: "demo",
        venueShort: "HAPTICS",
        title: "👑 Stiffness Modulation for Haptic Augmented Reality",
        authors: "Seokhee Jeon and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Best Demo Award)",
        link: ""
    },
    {
        year: 2010,
        category: "demo",
        venueShort: "ISMAR",
        title: "Breast Cancer Palpation System using Haptic Augmented Reality",
        authors: "Seokhee Jeon, Benjamin Knoerlein, Matthias Harders, Gabjong Han, and Seungmoon Choi",
        venue: "IEEE International Symposium on Mixed and Augmented Reality (ISMAR Demo)",
        link: ""
    },
    {
        year: 2010,
        category: "demo",
        venueShort: "EuroHaptics",
        title: "Real-time Dual-band Haptic Music Player for Mobile Devices",
        authors: "Inwook Hwang, Moonchae Joung, Sunwook Kim, Kyunghun Hwang, Jaecheon Sa, and Seungmoon Choi",
        venue: "EuroHaptics (Demo)",
        link: ""
    },
    {
        year: 2010,
        category: "poster",
        venueShort: "ISMAR",
        title: "Haptic Simulation of Breast Cancer Palpation: A Case Study of Haptic Augmented Reality",
        authors: "Seokhee Jeon, Benjamin Knoerlein, Matthias Harders, and Seungmoon Choi",
        venue: "IEEE International Symposium on Mixed and Augmented Reality (Poster)",
        link: ""
    },

    // --- 2008 ---
    {
        year: 2008,
        category: "poster",
        venueShort: "HAPTICS",
        title: "Perceived Magnitudes of Vibrations Transmitted Through Mobile Device",
        authors: "Jonghyun Ryu, Jaehoon Jung, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Poster)",
        link: ""
    },
    {
        year: 2008,
        category: "poster",
        venueShort: "HAPTICS",
        title: "Haptic Weather",
        authors: "Chaehyun Lee, Bernard D. Adelstein, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Poster)",
        link: ""
    }
];

const conferencePapers = [

  {
      year: 2026,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "A Perceptual Comparison of Unidirectional and Braking Force Feedback for Stiffness Rendering and Its Implications for Haptic Gloves",
      authors: "Jeongwoo Kim*, Uison Ju*, and Seungmoon Choi (*Co-first authors)",
      venue: "EuroHaptics 2026 (Oral presentation; Acceptance rate 17%)",
      link: ""
  },
  {
      year: 2026,
      category: "conference",
      venueShort: "TVCG",
      title: "GenTouchVR: Generating a Touchable Virtual Reality Environment from a Single Image",
      authors: "Jaejun Park, Soyeon Nam, Jeongwoo Kim, Uison Ju, and Seungmoon Choi",
      venue: "IEEE Transactions on Visualization and Computer Graphics (Special issue of IEEE VR 2026; Acceptance rate 20.6%)",
      link: "https://doi.org/10.1109/tvcg.2026.3680620"
  },
  {
      year: 2026,
      category: "conference",
      venueShort: "CHI",
      title: "Effects of Haptic Feedback on Gaming Experiences: A Case Study Comparing Players and Spectators in FPS Games",
      authors: "Heeji Sohn, Chaeyong Park, and Seungmoon Choi",
      venue: "ACM CHI Conference on Human Factors in Computing Systems",
      link: "https://doi.org/10.1145/3772318.3791144"
  },
  {
      year: 2026,
      category: "conference",
      venueShort: "CHI",
      title: "HaRing: A Haptic Ring Interface for One-Handed Interaction with High-Dimensional Spatial Information",
      authors: "Suheon Nam, Juhyung Son, Seungmoon Choi, and Chaeyong Park",
      venue: "ACM CHI Conference on Human Factors in Computing Systems",
      link: "https://doi.org/10.1145/3772318.3791663"
  },
  {
      year: 2026,
      category: "conference",
      venueShort: "CHI",
      title: "Touch with Meaning: A Contextual Analysis of Social Touch",
      authors: "Ayush Bhardwaj, Ashish Pratap, Abbas Khawaja, Yapeng Tian, Uison Ju, Dajin Lee, Seungmoon Choi, and Jin Ryong Kim",
      venue: "ACM CHI Conference on Human Factors in Computing Systems",
      link: "https://doi.org/10.1145/3772318.3791605"
  },
    {
        year: 2026,
        category: "conference",
        venueShort: "UIST",
        title: "CineHaptic: Context-Aware Real-Time Audiovisual-to-Haptic Rendering System for In-Vehicle 4D Cinematic Experiences",
        authors: "Junwoo Kim, Hyunuk Kim, Hyun-Bin Oh, Jeonggoo Kang, Tae-Hyun Oh, and Seungmoon Choi",
        venue: "ACM Symposium on User Interface Software and Technology (Acceptance rate 20.1%)",
        link: ""
    },
    {
        year: 2026,
        category: "conference",
        venueShort: "UIST",
        title: "HAPTCHA: Eyes-Free Haptic CAPTCHA in Mobile Environments: Design Principle, Security Evaluation, and User Experience",
        authors: "Duhong Kweon, Dajin Lee, Seulbae Kim, and Seungmoon Choi",
        venue: "ACM Symposium on User Interface Software and Technology (Acceptance rate 20.1%)",
        link: ""
    },
    {
        year: 2026,
        category: "conference",
        venueShort: "HAPTICS",
        title: "Effects of Frequency, Magnitude, and Inter-subject Variability on Discomfort from Steering Wheel Vibration",
        authors: "Dajin Lee, Soyeon Nam, Minseong Noh, Sunyoung Jang, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Conditionally accepted)",
        link: ""
    },
    {
        year: 2026,
        category: "conference",
        venueShort: "HAPTICS",
        title: "Effects of Spatiotemporal Parameters on Forearm Vibrotactile Stimulus Identification",
        authors: "Dong-Geun Kim, Geunho Lee, Suheon Nam, Chaeyong Park, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Conditionally accepted)",
        link: ""
    },

    {
        year: 2026,
        category: "conference",
        venueShort: "ISMAR",
        title: "Perceiving Compliance in Virtual Reality: Effects of Interaction Direction and Sensory Discrepancy on Visuo-Haptic Weighting",
        authors: "Taehyeong Jung, Jiwan Lee, Junwoo Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Visualization and Computer Graphics (Special issue of ISMAR; Acceptance rate 16%)",
        link: ""
    },

    // --- 2025 ---
    {
        year: 2025,
        category: "conference",
        venueShort: "WHC",
        title: "Augmenting Pinch Selection Using Smart Ring Vibration for Extended Reality Interaction: Perceptual Analysis and Guidelines",
        authors: "Soyeon Nam and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Long Paper)",
        link: "https://ieeexplore.ieee.org/document/11123340"
    },
    {
        year: 2025,
        category: "conference",
        venueShort: "WHC",
        title: "Enhancing Body-Penetrating Phantom Sensations Through Multisensory Integration of Sound and Vibration",
        authors: "Hyunuk Kim, Dajin Lee, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Long Paper)",
        link: "https://ieeexplore.ieee.org/document/11123325"
    },
    {
        year: 2025,
        category: "conference",
        venueShort: "CHI",
        title: "SkinHaptics: Exploring Skin Softness Perception and Virtual Body Embodiment Techniques to Enhance Self-Haptic Interactions",
        authors: "Jungeun Lee, Minha Jeon, Jinyoung Lee, Seungmoon Choi, and Seungjae Oh",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://doi.org/10.1145/3706598.3713891"
    },
    {
        year: 2025,
        category: "conference",
        venueShort: "CHI",
        title: "Real-time Semantic Full-Body Haptic Feedback Converted from Sound for Virtual Reality Gameplay",
        authors: "Gyeore Yun and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://doi.org/10.1145/3706598.3713355"
    },
    {
        year: 2025,
        category: "conference",
        venueShort: "CHI",
        title: "Automatic Tuning of Haptic Motion Effects to Evoke Specific Feelings in Multisensory Content",
        authors: "Jiwan Lee, Dawoon Jeong, Sung H. Han, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://dl.acm.org/doi/10.1145/3706598.3713908"
    },
    {
        year: 2025,
        category: "conference",
        venueShort: "IEEE VR",
        title: "Automatic Generation of Haptic Motion Effects Expressing Human Dance",
        authors: "Jaehyeok Ahn and Seungmoon Choi",
        venue: "IEEE Conference on Virtual Reality and 3D User Interfaces",
        link: "https://ieeexplore.ieee.org/document/10937438"
    },

    // --- 2024 ---
    {
        year: 2024,
        category: "conference",
        venueShort: "ISMAR",
        title: "👑 Expressing the Social Intent of Touch Initiator in Virtual Reality Using Multimodal Haptics",
        authors: "Heeyeon Kim and Seungmoon Choi",
        venue: "IEEE International Symposium on Mixed and Augmented Reality (Best Paper Award Nominee)",
        link: "https://ieeexplore.ieee.org/document/10765428"
    },
    {
        year: 2024,
        category: "conference",
        venueShort: "ISMAR",
        title: "Generating Haptic Motion Effects for General Scenes to Improve 4D Experiences",
        authors: "Sangyoon Han, Jaehyeok Ahn, and Seungmoon Choi",
        venue: "IEEE International Symposium on Mixed and Augmented Reality",
        link: "https://ieeexplore.ieee.org/document/10808542"
    },
    {
        year: 2024,
        category: "conference",
        venueShort: "UIST",
        title: "Modulating Heart Activity and Task Performance Using Haptic Heartbeat Feedback: A Study Across Four Body Placements",
        authors: "Andreia Valente, Dajin Lee, Seungmoon Choi, Mark Billinghurst, and Augusto Esteves",
        venue: "ACM Symposium on User Interface Software and Technology",
        link: "https://doi.org/10.1145/3654777.3676435"
    },
    {
        year: 2024,
        category: "conference",
        venueShort: "EuroHaptics",
        title: "Participatory Design for In-Vehicle Vibrotactile Warnings on Driver’s Seat",
        authors: "Dajin Lee, Jaejun Park, Jeonggoo Kang, Taekun Yun, Dong-Chul Park, and Seungmoon Choi",
        venue: "EuroHaptics Conference",
        link: "https://doi.org/10.1007/978-3-031-70061-3_29"
    },
    {
        year: 2024,
        category: "conference",
        venueShort: "EuroHaptics",
        title: "A Feasibility Study of Tactile Enhancement of Mid-Air Ultrasonic Stimulation by Wrist Vibration",
        authors: "Dong-Geun Kim and Seungmoon Choi",
        venue: "EuroHaptics Conference",
        link: "https://doi.org/10.1007/978-3-031-70061-3_1"
    },
    {
        year: 2024,
        category: "conference",
        venueShort: "EuroHaptics",
        title: "Data-driven Haptic Modeling of Inhomogeneous Viscoelastic Deformable Objects",
        authors: "Gautam Kumar, Shashi Prakash, Hojun Cha, Amit Bhardwaj, and Seungmoon Choi",
        venue: "EuroHaptics Conference",
        link: "https://doi.org/10.1007/978-3-031-70058-3_33"
    },
    {
        year: 2024,
        category: "conference",
        venueShort: "EuroHaptics",
        title: "Audiovisual-Haptic Simultaneity Across the Body in Gameplay Viewing Experiences",
        authors: "Jiwan Lee, Gyeore Yun, and Seungmoon Choi",
        venue: "EuroHaptics Conference",
        link: "https://doi.org/10.1007/978-3-031-70058-3_4"
    },
    {
        year: 2024,
        category: "conference",
        venueShort: "EuroHaptics",
        title: "Human Identification Performance of Vibrotactile Stimuli Applied on the Torso along Azimuth or Elevation",
        authors: "Junwoo Kim, Jaejun Park, Chaeyong Park, Junseok Park, and Seungmoon Choi",
        venue: "EuroHaptics Conference",
        link: "https://doi.org/10.1007/978-3-031-70058-3_1"
    },
    {
        year: 2024,
        category: "conference",
        venueShort: "CHI",
        title: "👑 Augmenting Perceived Length of Handheld Controllers: Effects of Object Handle Properties",
        authors: "Chaeyong Park and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems (Honorable Mention)",
        link: "https://doi.org/10.1145/3613904.3642251"
    },

    // --- 2023 ---
    {
        year: 2023,
        category: "conference",
        venueShort: "ISMAR",
        title: "Merging Camera and Object Haptic Motion Effects for Improved 4D Experiences",
        authors: "Jaejun Park, Sangyoon Han, and Seungmoon Choi",
        venue: "IEEE International Symposium on Mixed and Augmented Reality",
        link: "https://ieeexplore.ieee.org/document/10316361"
    },
    {
        year: 2023,
        category: "conference",
        venueShort: "WHC",
        title: "Perceptual Simultaneity Between Vibrotactile and Impact Stimuli",
        authors: "Chaeyong Park and Seungmoon Choi",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/102244592"
    },
    {
        year: 2023,
        category: "conference",
        venueShort: "WHC",
        title: "Information Transfer of Full-Body Vibrotactile Stimuli: An Initial Study with One to Three Sequential Vibrations",
        authors: "Jaejun Park, Junwoo Kim, Chaeyong Park, Sangyoon Han, Junseok Park, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/10224391"
    },
    {
        year: 2023,
        category: "conference",
        venueShort: "WHC",
        title: "Human Recognition Performance of Simple Spatial Vibrotactile Patterns on the Torso",
        authors: "Junwoo Kim, Heeyeon Kim, Chaeyong Park, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/10224430"
    },
    {
        year: 2023,
        category: "conference",
        venueShort: "CHI",
        title: "👑 Visuo-haptic Crossmodal Shape Perception Model for Shape-Changing Handheld Controllers Bridged by Inertial Tensor",
        authors: "Chaeyong Park, Jeongwoo Kim, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems (Honorable Mention)",
        link: "https://dl.acm.org/doi/10.1145/3544548.3580724"
    },
    {
        year: 2023,
        category: "conference",
        venueShort: "CHI",
        title: "Generating Real-Time, Selective, and Multimodal Haptic Effects from Sound for Gaming Experience Enhancement",
        authors: "Gyeore Yun, Minjae Mun, Jungeun Lee, Dong-Geun Kim, Hong Z Tan, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://dl.acm.org/doi/10.1145/3544548.3580787"
    },
    {
        year: 2023,
        category: "conference",
        venueShort: "CHI",
        title: "Generating Haptic Motion Effects for Multiple Articulated Bodies for Improved 4D Experiences: A Camera Space Approach",
        authors: "Sangyoon Han, Jaejun Park, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://dl.acm.org/doi/10.1145/3544548.3580727"
    },

    // --- 2022 ---
    {
        year: 2022,
        category: "conference",
        venueShort: "EuroHaptics",
        title: "A Preliminary Study on the Perceptual Independence Between Vibrotactile and Thermal Senses",
        authors: "Jaejun Park, Jeongwoo Kim, Chaeyong Park, Seungjae Oh, Junseok Park, and Seungmoon Choi",
        venue: "EuroHaptics Conference",
        link: "https://doi.org/10.1007/978-3-031-06249-0_9"
    },
    {
        year: 2022,
        category: "conference",
        venueShort: "CHI",
        title: "Vibration-Augmented Buttons: Information Transmission Capacity and Application to Interaction Design",
        authors: "Chaeyong Park, Jeongwoo Kim, Dong-Geun Kim, Seungjae Oh, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://dl.acm.org/doi/10.1145/3491102.3501849"
    },
    {
        year: 2022,
        category: "conference",
        venueShort: "HAPTICS",
        title: "Perception of Electrostatic Friction Stimuli in Free Surface Exploration",
        authors: "Yongjae Yoo, Jongho Lim, Hanseul Cho, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium",
        link: "https://ieeexplore.ieee.org/document/9765609"
    },

    // --- 2021 ---
    {
        year: 2021,
        category: "conference",
        venueShort: "VRST",
        title: "Absolute and Differential Thresholds of Motion Effects in Cardinal Directions",
        authors: "Jiwan Lee, Jaejun Park, and Seungmoon Choi",
        venue: "ACM Symposium on Virtual Reality Software and Technology",
        link: "https://dl.acm.org/doi/10.1145/3489849.3489870"
    },
    {
        year: 2021,
        category: "conference",
        venueShort: "VRST",
        title: "Image-Based Texture Styling for Motion Effect Rendering",
        authors: "Beomsu Lim, Sangyoon Han, and Seungmoon Choi",
        venue: "ACM Symposium on Virtual Reality Software and Technology",
        link: "https://dl.acm.org/doi/10.1145/3489849.3489854"
    },
    {
        year: 2021,
        category: "conference",
        venueShort: "UIST",
        title: "Identifying Contact Fingers on Touch Sensitive Surfaces by Ring-Based Vibratory Communication",
        authors: "Seungjae Oh, Chaeyong Park, Yo-Seb Jeon, and Seungmoon Choi",
        venue: "ACM Symposium on User Interface Software and Technology",
        link: "https://dl.acm.org/doi/10.1145/3472749.3474745"
    },
    {
        year: 2021,
        category: "conference",
        venueShort: "WHC",
        title: "Perceived Hardness of Virtual Surface: A Function of Stiffness, Damping, and Contact Transient",
        authors: "Hyejin Choi, Amit Bhardwaj, Gyeore Yoon, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/9517263"
    },
    {
        year: 2021,
        category: "conference",
        venueShort: "WHC",
        title: "Multi-Contact Stiffness and Friction Augmentation Using Contact Centroid-Based Normal-Tangential Force Decomposing",
        authors: "Sunghoon Yim, Seungmoon Choi, and Seokhee Jeon",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/9517211"
    },
    {
        year: 2021,
        category: "conference",
        venueShort: "WHC",
        title: "Vibrotactile Metaphor of Physical Interaction Using Body-Penetrating Phantom Sensations: Stepping on a Virtual Object",
        authors: "Dajin Lee, Seungjae Oh, Seungmoon Choi, and Bum-Jae You",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/9517144"
    },
    {
        year: 2021,
        category: "conference",
        venueShort: "WHC",
        title: "Perceived Magnitude Function of Friction Rendered by the Dahl Model",
        authors: "Beomsu Lim, Junkyeong Choi, Yongjae Yoo, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/9517127"
    },
    {
        year: 2021,
        category: "conference",
        venueShort: "CHI",
        title: "Improving Viewing Experiences of First-Person Shooter Gameplays with Automatically-Generated Motion Effects",
        authors: "Gyeore Yun, Hyoseung Lee, Sangyoon Han, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://dl.acm.org/doi/10.1145/3411764.3445358"
    },
    {
        year: 2021,
        category: "conference",
        venueShort: "IEEE VR",
        title: "Camera Space Synthesis of Motion Effects Emphasizing a Moving Object in 4D Films",
        authors: "Sangyoon Han, Gyeore Yun, and Seungmoon Choi",
        venue: "IEEE Conference on Virtual Reality and 3D User Interfaces",
        link: "https://ieeexplore.ieee.org/document/9417709"
    },

    // --- 2020 ---
    {
        year: 2020,
        category: "conference",
        venueShort: "UIST",
        title: "Augmenting Physical Buttons with Vibrotactile Feedback for Programmable Feels",
        authors: "Chaeyong Park, Jinhyuk Yoon, Seungjae Oh, and Seungmoon Choi",
        venue: "ACM Symposium on User Interface Software and Technology",
        link: "https://dl.acm.org/doi/10.1145/3379337.3415837"
    },
    {
        year: 2020,
        category: "conference",
        venueShort: "CHI",
        title: "Body-Penetrating Tactile Phantom Sensations",
        authors: "Jinsoo Kim, Seungjae Oh, Chaeyong Park, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://doi.org/10.1145/3313831.3376619"
    },

    // --- 2019 ---
    {
        year: 2019,
        category: "conference",
        venueShort: "ICMI",
        title: "TouchPhoto: Enabling Independent Picture Taking and Understanding for Visually-Impaired Users",
        authors: "Jongho Lim, Yongjae Yoo, Hanseul Cho, and Seungmoon Choi",
        venue: "ACM International Conference on Multimodal Interaction",
        link: "https://dl.acm.org/doi/fullHtml/10.1145/3340555.3353728"
    },
    {
        year: 2019,
        category: "conference",
        venueShort: "WHC",
        title: "👑 RealWalk: Haptic Shoes Using Actuated MR Fluid for Walking in VR",
        authors: "Hyungki Son, Inwook Hwang, Tae-Heon Yang, Seungmoon Choi, Sang-Youn Kim, and Jin Ryong Kim",
        venue: "IEEE World Haptics Conference (Candidate for Best Paper Award)",
        link: "https://ieeexplore.ieee.org/document/8816165"
    },
    {
        year: 2019,
        category: "conference",
        venueShort: "WHC",
        title: "Seamless Phantom Sensation Moving across a Wide Range of Body",
        authors: "Gyeore Yun, Seungjae Oh, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/8816104"
    },
    {
        year: 2019,
        category: "conference",
        venueShort: "WHC",
        title: "👑 Realistic Haptic Rendering of Collision Effects Using Multimodal Vibrotactile and Impact Feedback",
        authors: "Chaeyong Park, Jaeyoung Park, Seungjae Oh, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Candidate for Best Paper Award)",
        link: "https://ieeexplore.ieee.org/document/88161167"
    },
    {
        year: 2019,
        category: "conference",
        venueShort: "WHC",
        title: "Guidance-based Two-Dimensional Haptic Contour Rendering for Accessible Photography",
        authors: "Jongho Lim, Yongjae Yoo, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/8816151"
    },
    {
        year: 2019,
        category: "conference",
        venueShort: "WHC",
        title: "👑 Perceptual Space of Regular Homogeneous Haptic Textures Rendered Using Electrovibration",
        authors: "Sunung Mun, Hojin Lee, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Finalist for Best Paper Award)",
        link: "https://ieeexplore.ieee.org/document/8816143"
    },
    {
        year: 2019,
        category: "conference",
        venueShort: "CHI",
        title: "VibEye: Vibration-Mediated Object Recognition for Tangible Interactive Applications",
        authors: "Seungjae Oh, Gyeore Yun, Chaeyong Park, Jinsoo Kim, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://dl.acm.org/doi/10.1145/3290605.3300906"
    },

    // --- 2018 ---
  {
      year: 2018,
      category: "conference",
      venueShort: "VRST",
      title: "Automatic Transfer of Musical Mood into Virtual Environments",
      authors: "Sangyoon Han, Amit Bhardwaj, and Seungmoon Choi",
      venue: "ACM Symposium on Virtual Reality Software and Technology",
      link: "https://dl.acm.org/doi/10.1145/3281505.3281534"
  },
  {
      year: 2018,
      category: "conference",
      venueShort: "VRST",
      title: "Effects of Haptic Texture Rendering Modalities on Realism",
      authors: "Sunghwan Shin and Seungmoon Choi",
      venue: "ACM Symposium on Virtual Reality Software and Technology",
      link: "https://dl.acm.org/doi/10.1145/3281505.3281520"
  },
  {
      year: 2018,
      category: "conference",
      venueShort: "HAVE",
      title: "Equal-Level Interaction: A Case Study for Improving User Experiences of Visually-Impaired and Sighted People in Group Activities",
      authors: "Hanseul Cho, Kyudong Park, and Seungmoon Choi",
      venue: "IEEE International Symposium on Haptic Audio-Visual Environments and Games",
      link: "https://ieeexplore.ieee.org/document/8547502"
  },
  {
      year: 2018,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "A Soft Vibrotactile Actuator with Knitted PVC Gel Fabric",
      authors: "Won-Hyeong Park, Yongjae Yoo, Gobong Choi, Seungmoon Choi, and Sang-Youn Kim",
      venue: "EuroHaptics Conference",
      link: "https://doi.org/10.1007/978-3-319-93399-3_14"
  },
  {
      year: 2018,
      category: "conference",
      venueShort: "CHI",
      title: "Substituting Motion Effects with Vibrotactile Effects for 4D Experiences",
      authors: "Jongman Seo, Sunung Mun, Jaebong Lee, and Seungmoon Choi",
      venue: "ACM CHI Conference on Human Factors in Computing Systems",
      link: "https://doi.org/10.1145/3173574.3174002"
  },
  {
      year: 2018,
      category: "conference",
      venueShort: "CHI",
      title: "Tactile Information Transmission by 2D Stationary Phantom Sensations",
      authors: "Gunhyuk Park and Seungmoon Choi",
      venue: "ACM CHI Conference on Human Factors in Computing Systems",
      link: "https://doi.org/10.1145/3173574.3173832"
  },
  {
      year: 2018,
      category: "conference",
      venueShort: "HAPTICS",
      title: "Data-Driven Thermal Rendering: An Initial Study",
      authors: "Hyejin Choi, Seongwon Cho, Sunghwan Shin, Hojin Lee, and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://ieeexplore.ieee.org/document/8357199"
  },
  {
      year: 2018,
      category: "conference",
      venueShort: "HAPTICS",
      title: "An Inverse Neural Network Model for Data-driven Texture Rendering on Electrovibration Display",
      authors: "Reza Haghighi Osgouei, Sunghwan Shin, Jin Ryong Kim, and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://ieeexplore.ieee.org/document/8357187"
  },
  {
      year: 2018,
      category: "conference",
      venueShort: "HAPTICS",
      title: "Geometry-based Haptic Texture Modeling and Rendering Using Photometric Stereo",
      authors: "Sunghwan Shin and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://ieeexplore.ieee.org/document/8357186"
  },

  // --- 2017 ---
  {
      year: 2017,
      category: "conference",
      venueShort: "ACII",
      title: "Emotional Responses of Vibrotactile-Thermal Stimuli: Effects of Constant-Temperature Thermal Stimuli",
      authors: "Yongjae Yoo, Hojin Lee, Hyejin Choi, and Seungmoon Choi",
      venue: "International Conference on Affective Computing and Intelligent Interaction",
      link: "https://ieeexplore.ieee.org/document/8272602"
  },
  {
      year: 2017,
      category: "conference",
      venueShort: "WHC",
      title: "Effects of Visual and Haptic Latency on Touchscreen Interaction: A Case Study Using Painting Task",
      authors: "Jin Ryong Kim, Reza Haghighi Osgouei, and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/7989894"
  },
  {
      year: 2017,
      category: "conference",
      venueShort: "WHC",
      title: "👑 Perceiving Texture Gradients on an Electrostatic Friction Display",
      authors: "Roberta L. Klatzky, Sara Adkins, Prachi Bodas, Reza Haghighi Osgouei, Seungmoon Choi, and Hong Z. Tan",
      venue: "IEEE World Haptics Conference (Candidate for Best Poster Paper Award)",
      link: "https://ieeexplore.ieee.org/document/7989893"
  },
  {
      year: 2017,
      category: "conference",
      venueShort: "WHC",
      title: "👑 A Longitudinal Study for Haptic Pitch Correction Guidance for String Instrument Players",
      authors: "Yongjae Yoo and Seungmoon Choi",
      venue: "IEEE World Haptics Conference (Best Poster Paper Award)",
      link: "https://ieeexplore.ieee.org/document/7989897"
  },
  {
      year: 2017,
      category: "conference",
      venueShort: "WHC",
      title: "Mid-air Tactile Display Using Indirect Laser Radiation for Contour-Following Stimulation and Assessment of Its Spatial Acuity",
      authors: "Hojun Cha, Hojin Lee, Junsuk Park, Hyung-Sik Kim, Soon-Cheol Chung, and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/7989890"
  },
  {
      year: 2017,
      category: "conference",
      venueShort: "WHC",
      title: "👑 Attachable and Detachable Vibrotactile Feedback Modules and Their Information Capacity for Spatiotemporal Patterns",
      authors: "Gunhyuk Park, Hojun Cha, and Seungmoon Choi",
      venue: "IEEE World Haptics Conference (Candidate for Best Paper Award)",
      link: "https://ieeexplore.ieee.org/document/7989880"
  },

  // --- 2016 ---
  {
      year: 2016,
      category: "conference",
      venueShort: "VRST",
      title: "Interactive Motion Effects Design for a Moving Object in 4D Films",
      authors: "Jaebong Lee, Bohyung Han, and Seungmoon Choi",
      venue: "ACM Symposium on Virtual Reality Software and Technology",
      link: "https://dl.acm.org/doi/10.1145/2993369.2993389"
  },
  {
      year: 2016,
      category: "conference",
      venueShort: "HAPTICS",
      title: "Identification of Primitive Geometrical Shapes Rendered Using Electrostatic Friction Display",
      authors: "Reza Haghighi Osgouei, Jin Ryong Kim, and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://ieeexplore.ieee.org/document/7463177"
  },

  // --- 2015 ---
  {
      year: 2015,
      category: "conference",
      venueShort: "IROS",
      title: "Feasibility of a Novel Indicator for Lump Detection Using Contact Pressure Distribution",
      authors: "Hyoungkyun Kim, Seungmoon Choi, and Wan Kyun Chung",
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
      link: "https://ieeexplore.ieee.org/document/7353658"
  },
  {
      year: 2015,
      category: "conference",
      venueShort: "WHC",
      title: "Data-Driven Modeling of Isotropic Haptic Textures Using Frequency-Decomposed Neural Networks",
      authors: "Sunghwan Shin, Reza Haghighi Osgouei, Ki-Duk Kim, and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/7177703"
  },
  {
      year: 2015,
      category: "conference",
      venueShort: "WHC",
      title: "Flexible and Bendable Vibrotactile Actuator Using Electro-conductive Polyurethane",
      authors: "Won-Hyeong Park, Tae-Heon Yang, Yongjae Yoo, Seungmoon Choi, and Sang-Youn Kim",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/7177708"
  },
  {
      year: 2015,
      category: "conference",
      venueShort: "WHC",
      title: "Emotional Responses of Tactile Icons: Effects of Amplitude, Frequency, Duration, and Envelope",
      authors: "Yongjae Yoo, Taekbeom Yoo, Jihyun Kong, and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/7177719"
  },
  {
      year: 2015,
      category: "conference",
      venueShort: "WHC",
      title: "Data-Driven Haptic Modeling and Rendering of Deformable Objects Including Sliding Friction",
      authors: "Sunghoon Yim, Seokhee Jeon, and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/7177730"
  },
  {
      year: 2015,
      category: "conference",
      venueShort: "WHC",
      title: "Mid-air Tactile Stimulation Using Laser-Induced Thermoelastic Effects: The First Study for Indirect Radiation",
      authors: "Hojin Lee, Ji-Sun Kim, Seungmoon Choi, Jae-Hoon Jun, Jong-Rak Park, A-Hee Kim, Han-Byeol Oh, Hyung-Sik Kim, and Soon-Cheol Chung",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/7177741"
  },
  {
      year: 2015,
      category: "conference",
      venueShort: "WHC",
      title: "Edge Flows: Improving Information Transmission in Mobile Devices Using Two-Dimensional Vibrotactile Flows",
      authors: "Jongman Seo and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/7177686"
  },
  {
      year: 2015,
      category: "conference",
      venueShort: "ICASSP",
      title: "Objective Quality Prediction for Haptic Texture Signal",
      authors: "Rahul Chaudhari, Yongjae Yoo, Clemens Schuwerk, Seungmoon Choi, and Eckehard Steinbach",
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing",
      link: "https://ieeexplore.ieee.org/document/7178366"
  },

  // --- 2014 ---
  {
      year: 2014,
      category: "conference",
      venueShort: "URAI",
      title: "Modeling of the Influence of Tumor on Contact Pressure in Medical Palpation for the Palpation Training System Using FEM Simulation",
      authors: "Hyoungkyun Kim, Seungmoon Choi, and Wan Kyun Chung",
      venue: "International Conference on Ubiquitous Robots and Ambient Intelligence",
      link: "https://ieeexplore.ieee.org/abstract/document/7057397"
  },
  {
      year: 2014,
      category: "conference",
      venueShort: "ICMI",
      title: "An Explorative Study on Crossmodal Congruence Between Visual and Tactile Icons Based on Emotional Responses",
      authors: "Taekbeom Yoo, Yongjae Yoo, and Seungmoon Choi",
      venue: "ACM International Conference on Multimodal Interaction",
      link: "https://dl.acm.org/doi/10.1145/2663204.2663231"
  },
  {
      year: 2014,
      category: "conference",
      venueShort: "IROS",
      title: "Contact Force Decomposition Using Tactile Information for Haptic Augmented Reality",
      authors: "Hyoungkyun Kim, Seungmoon Choi, and Wan Kyun Chung",
      venue: "IEEE/RSJ International Conference on Robots and Systems",
      link: "https://ieeexplore.ieee.org/document/6942716"
  },
  {
      year: 2014,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "Improved Haptic Music Player with Auditory Saliency Estimation",
      authors: "Inwook Hwang and Seungmoon Choi",
      venue: "EuroHaptics Conference",
      link: "https://doi.org/10.1007/978-3-662-44193-0_30"
  },
  {
      year: 2014,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "An Initial Study on Pitch Correction Guidance for String Instruments Using Haptic Feedback",
      authors: "Yongjae Yoo and Seungmoon Choi",
      venue: "EuroHaptics Conference",
      link: "https://doi.org/10.1007/978-3-662-44193-0_31"
  },
  {
      year: 2014,
      category: "conference",
      venueShort: "HAPTICS",
      title: "👑 PreventFHP: Detection and Warning System for Forward Head Posture",
      authors: "Jaebong Lee, Eunji Cho, Minjae Kim, Yongmin Yoon, and Seungmoon Choi",
      venue: "IEEE Haptics Symposium (Best Teaser Award)",
      link: "https://ieeexplore.ieee.org/document/6775470"
  },
  {
      year: 2014,
      category: "conference",
      venueShort: "HAPTICS",
      title: "👑 Vibrotactile Guidance for Drumming Learning: Method and Perceptual Assessment",
      authors: "In Lee and Seungmoon Choi",
      venue: "IEEE Haptics Symposium (Candidate for Best Paper Award)",
      link: "https://ieeexplore.ieee.org/document/6775447"
  },
  {
      year: 2014,
      category: "conference",
      venueShort: "HAPTICS",
      title: "👑 Combining Haptic Guidance and Haptic Disturbance: An Initial Study of Hybrid Haptic Assistance for Virtual Steering Task",
      authors: "Hojin Lee and Seungmoon Choi",
      venue: "IEEE Haptics Symposium (Candidate for Best Paper Award)",
      link: "https://ieeexplore.ieee.org/document/6775449"
  },

  // --- 2013 ---
  {
      year: 2013,
      category: "conference",
      venueShort: "WHC",
      title: "Effects of Multi-modal Guidance for the Acquisition of Sight Reading Skills: A Case Study with Simple Drum Sequences",
      authors: "In Lee and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/6548471"
  },
  {
      year: 2013,
      category: "conference",
      venueShort: "CHI",
      title: "Real-Time Perception-Level Translation from Audio Signals to Vibrotactile Effects",
      authors: "Jaebong Lee and Seungmoon Choi",
      venue: "ACM CHI Conference on Human Factors in Computing Systems",
      link: "https://dl.acm.org/doi/10.1145/2470654.2481354"
  },
  {
      year: 2013,
      category: "conference",
      venueShort: "TEI",
      title: "Demonstration-Based Vibrotactile Pattern Authoring",
      authors: "Kyungpyo Hong, Jaebong Lee, and Seungmoon Choi",
      venue: "International Conference on Tangible, Embedded and Embodied Interaction",
      link: "https://dl.acm.org/doi/10.1145/2460625.2460660"
  },

  // --- 2012 ---
  {
      year: 2012,
      category: "conference",
      venueShort: "AHFE",
      title: "Evaluating the Effectiveness of Haptic Feedback on a Steering Wheel for BSW",
      authors: "Jaemin Chun, Gunhyuk Park, Seungwhan Oh, Jongman Seo, in Lee, Seungmoon Choi, and Sung H. Han",
      venue: "International Conference on Applied Human Factors and Ergonomics",
      link: "https://www.taylorfrancis.com/chapters/edit/10.1201/b12322-48/evaluating-effectiveness-haptic-feedback-steering-wheel-bsw-jaemin-chun-gunhyuk-park-seunghwan-oh-jongman-seo-lee-seungmoon-choi-sung-han"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "HAVE",
      title: "Perceived Intensity of Tool-Transmitted Vibration: Effects of Amplitude and Frequency",
      authors: "Inwook Hwang, Jongman Seo, Myongchan Kim, and Seungmoon Choi",
      venue: "IEEE International Symposium on Haptic Visual-Audio Environments and Games",
      link: "https://ieeexplore.ieee.org/document/6374438/"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "HAVE",
      title: "Evaluation of Driving Skills Using an HMM-based Distance Measure",
      authors: "Reza Haghighi Osgouei and Seungmoon Choi",
      venue: "IEEE International Symposium on Haptic Visual-Audio Environments and Games",
      link: "https://ieeexplore.ieee.org/document/6374445"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "ACM MM",
      title: "Low Bitrate Source-filter Model Based Compression of Vibrotactile Texture Signals in Haptic Teleoperation",
      authors: "Rahul Chaudhari, Burak Çizmeci, Katherine J. Kuchenbecker, Seungmoon Choi, and Eckehard Steinbach",
      venue: "ACM International Conference on Multimedia",
      link: "https://dl.acm.org/doi/10.1145/2393347.2393407"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "Effect of Mechanical Ground on the Vibrotactile Perceived Intensity of a Handheld Object",
      authors: "Inwook Hwang, and Seungmoon Choi",
      venue: "EuroHaptics Conference",
      link: "https://doi.org/10.1007/978-3-642-31404-9_11"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "Saliency-driven Tactile Effect Authoring for Real-time Visuotactile Feedback",
      authors: "Myongchan Kim, Sungkil Lee, and Seungmoon Choi",
      venue: "EuroHaptics Conference",
      link: "https://doi.org/10.1007/978-3-642-31401-8_24"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "HAPTICS",
      title: "Shape Modeling of Soft Real Objects Using Force-Feedback Haptic Interface",
      authors: "Sunghoon Yim and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://ieeexplore.ieee.org/document/6183834"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "HAPTICS",
      title: "Guidance Methods for Bimanual Timing Tasks",
      authors: "In Lee, Kyungpyo Hong, and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://ieeexplore.ieee.org/document/6183805"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "HAPTICS",
      title: "Evaluation of Vibrotactile Pattern Design Using Vibrotactile Score",
      authors: "Jaebong Lee and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://ieeexplore.ieee.org/document/6183796"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "HAPTICS",
      title: "👑 Haptic Simulation of Refrigerator Door",
      authors: "Sunghwan Shin, in Lee, Hojin Lee, Gabjong Han, Kyungpyo Hong, Sunghoon Yim, Jongwon Lee, Young Jin Park, Byeong Ki Kang, Dae Ho Ryoo, Dae Whan Kim, Seungmoon Choi, and Wan Kyun Chung",
      venue: "IEEE Haptics Symposium (Candidate for Best Paper Award)",
      link: "https://ieeexplore.ieee.org/document/6183783"
  },

  // --- 2011 ---
  {
      year: 2011,
      category: "conference",
      venueShort: "ISUVR",
      title: "Effect of Active and Passive Haptic Sensory Information on Memory for 2D Sequential Selection Task",
      authors: "Hojin Lee, Gabjong Han, in Lee, Sunghoon Yim, Kyungpyo Hong, and Seungmoon Choi",
      venue: "International Symposium on Ubiquitous Virtual Reality",
      link: "https://ieeexplore.ieee.org/abstract/document/6068306"
  },
  {
      year: 2011,
      category: "conference",
      venueShort: "HAID",
      title: "Consonance Perception of Vibrotactile Chords: A Feasibility Study",
      authors: "Yongjae Yoo, Inwook Hwang, and Seungmoon Choi",
      venue: "International Workshop on Haptic and Audio Interaction Design",
      link: "https://doi.org/10.1007/978-3-642-22950-3_5"
  },
  {
      year: 2011,
      category: "conference",
      venueShort: "MobileHCI",
      title: "Tactile Effect Design and Evaluation for Virtual Buttons on a Mobile Device Touchscreen",
      authors: "Gunhyuk Park, Seungmoon Choi, Kyunghun Hwang, Sunwook Kim, Jaecheon Sa, and Moonchae Joung",
      venue: "International Conference on Human-Computer Interaction with Mobile Devices and Services",
      link: "https://dl.acm.org/doi/10.1145/2037373.2037376"
  },
  {
      year: 2011,
      category: "conference",
      venueShort: "WHC",
      title: "Extensions to Haptic Augmented Reality: Modulating Friction and Weight",
      authors: "Seokhee Jeon, Jean-Claude Metzger, Seungmoon Choi, and Matthias Harders",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/5945490"
  },
  {
      year: 2011,
      category: "conference",
      venueShort: "WHC",
      title: "TAXEL: Initial Progress Toward Self-Morphing Visio-Haptic Interface",
      authors: "Ki-Uk Kyung, Jeong Mook Lim, Yo-An Lim, Suntak Park, Seung Koo Park, Inwook Hwang, Seungmoon Choi, Jongman Seo, Sang-Youn Kim, Tae-Heon Yang, and Dong-Soo Kwon",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/5945458"
  },
  {
      year: 2011,
      category: "conference",
      venueShort: "WHC",
      title: "The Haptic Crayola Effect: Exploring the Role of Naming in Learning Haptic Stimuli",
      authors: "Inwook Hwang, Karon E. MacLean, Matthew Brehmer, Jeff Hendy, Andreas Sotirakopoulos, and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/5945517"
  },
  {
      year: 2011,
      category: "conference",
      venueShort: "WHC",
      title: "👑 Perceptual Space of Amplitude-Modulated Vibrotactile Stimuli",
      authors: "Gunhyuk Park and Seungmoon Choi",
      venue: "IEEE World Haptics Conference (Candidate for Best Student Paper Award)",
      link: "https://ieeexplore.ieee.org/document/5945462"
  },

  // --- 2010 ---
  {
      year: 2010,
      category: "conference",
      venueShort: "MobileHCI",
      title: "Improving Vibrotactile Pattern Identification for Mobile Devices Using Perceptually Transparent Rendering",
      authors: "Jonghyun Ryu, Chil-Woo Lee, and Seungmoon Choi",
      venue: "International Conference on Human-Computer Interaction with Mobile Devices and Services",
      link: "https://dl.acm.org/doi/10.1145/1851600.1851643"
  },
  {
      year: 2010,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "Extended Rate-Hardness: A Measure for Perceived Hardness",
      authors: "Gabjong Han and Seungmoon Choi",
      venue: "EuroHaptics Conference",
      link: "https://doi.org/10.1007/978-3-642-14064-8_18"
  },
  {
      year: 2010,
      category: "conference",
      venueShort: "HAPTICS",
      title: "👑 Initial Study of Creating Linearly Moving Vibrotactile Sensation on Mobile Device",
      authors: "Jongman Seo and Seungmoon Choi",
      venue: "IEEE Haptics Symposium (Candidate for Best Poster Award)",
      link: ""
  },
  {
      year: 2010,
      category: "conference",
      venueShort: "HAPTICS",
      title: "Effects of Kinesthetic Information on Memory Chunking in 2D Sequential Selection Task",
      authors: "Gabjong Han, Jaebong Lee, in Lee, Seokhee Jeon, and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://www.researchgate.net/publication/224129908_Effects_of_kinesthetic_information_on_working_memory_for_2D_sequential_selection_task"
  },
  {
      year: 2010,
      category: "conference",
      venueShort: "HAPTICS",
      title: "👑 Stiffness Modulation for Haptic Augmented Reality: Extension to 3D Interaction",
      authors: "Seokhee Jeon and Seungmoon Choi",
      venue: "IEEE Haptics Symposium (Best Demo Award)",
      link: "https://ieeexplore.ieee.org/document/5444645/"
  },
  {
      year: 2010,
      category: "conference",
      venueShort: "HAPTICS",
      title: "👑 Effects of Haptic Guidance and Disturbance on Motor Learning: Potential Advantage of Haptic Disturbance",
      authors: "Jaebong Lee and Seungmoon Choi",
      venue: "IEEE Haptics Symposium (Candidate for Best Paper Award)",
      link: "https://ieeexplore.ieee.org/document/5444635"
  },
  {
      year: 2010,
      category: "conference",
      venueShort: "HAPTICS",
      title: "👑 Perceptual Space and Adjective Rating of Sinusoidal Vibration Perceived via Mobile Device",
      authors: "Inwook Hwang and Seungmoon Choi",
      venue: "IEEE Haptics Symposium (Candidate for Best Student Paper Award)",
      link: "https://ieeexplore.ieee.org/document/5444692"
  },

  // --- 2009 ---
  {
      year: 2009,
      category: "conference",
      venueShort: "VRST",
      title: "Improving Perceived Hardness of Haptic Rendering via Stiffness Shifting: An Initial Study",
      authors: "Gabjong Han, Seokhee Jeon, and Seungmoon Choi",
      venue: "ACM Symposium on Virtual Reality Software and Technology",
      link: "https://dl.acm.org/doi/10.1145/1643928.1643949"
  },
  {
      year: 2009,
      category: "conference",
      venueShort: "WHC",
      title: "Vibrotactile Score: A Score Metaphor for Designing Vibrotactile Patterns",
      authors: "Jaebong Lee, Jonghyun Ryu, and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://dl.acm.org/doi/10.1109/WHC.2009.4810816"
  },
  {
      year: 2009,
      category: "conference",
      venueShort: "WHC",
      title: "👑 System Improvements in Mobile Haptic Interface",
      authors: "In Lee, Inwook Hwang, Kyung-Lyong Han, Oh Kyu Choi, Seungmoon Choi, and Jin S. Lee",
      venue: "IEEE World Haptics Conference (Best Student Paper Award)",
      link: "https://ieeexplore.ieee.org/document/4810834"
  },

  // --- 2008 ---
  {
      year: 2008,
      category: "conference",
      venueShort: "HAVE",
      title: "posVibEditor: Graphical Authoring Tool of Vibrotactile Patterns",
      authors: "Jonghyun Ryu and Seungmoon Choi",
      venue: "IEEE International Workshop on Haptic Audio Visual Environments and Games",
      link: "https://ieeexplore.ieee.org/document/4685310"
  },
  {
      year: 2008,
      category: "conference",
      venueShort: "ICCAS",
      title: "Design and Control of Omni-Directional Mobile Robot for Mobile Haptic Interface",
      authors: "Kyung-Lyong Han, Oh Kyu Choi, in Lee, Inwook Hwang, Jin S. Lee, and Seungmoon Choi",
      venue: "International Conference on Control, Automation, and Systems",
      link: "https://ieeexplore.ieee.org/document/4694349"
  },
  {
      year: 2008,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "Benefits of Perceptually Transparent Vibration Rendering in Mobile Device",
      authors: "Jonghyun Ryu and Seungmoon Choi",
      venue: "EuroHaptics Conference",
      link: "https://doi.org/10.1007/978-3-540-69057-3_90"
  },
  {
      year: 2008,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "Haptic Pottery Modeling Using Circular Sector Element Method",
      authors: "Jaebong Lee, Gabjong Han, and Seungmoon Choi",
      venue: "EuroHaptics Conference",
      link: "https://doi.org/10.1007/978-3-540-69057-3_84"
  },
  {
      year: 2008,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "Modulating Real Object Stiffness for Haptic Augmented Reality",
      authors: "Seokhee Jeon and Seungmoon Choi",
      venue: "EuroHaptics Conference",
      link: "https://doi.org/10.1007/978-3-540-69057-3_78"
  },
  {
      year: 2008,
      category: "conference",
      venueShort: "ICRA",
      title: "Human Guided Surgical Robot System for Spinal Fusion Surgery: CoRASS",
      authors: "Jongwon Lee, Keehoon Kim, Wan Kyun Chung, Seungmoon Choi, and Young Soo Kim",
      venue: "IEEE International Conference on Robotics and Automation",
      link: "https://ieeexplore.ieee.org/document/4543807"
  },
  {
      year: 2008,
      category: "conference",
      venueShort: "HAPTICS",
      title: "Haptizing Surface Topography with Varying Stiffness Based on Force Constancy: Extended Algorithm",
      authors: "Jaeyoung Cheon, Inwook Hwang, Gabjong Han, and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://ieeexplore.ieee.org/document/4479942"
  },

  // --- 2007 ---
  {
      year: 2007,
      category: "conference",
      venueShort: "VRST",
      title: "👑 Real-Time Tracking of Visually Attended Objects in Interactive Virtual Environments",
      authors: "Sungkil Lee, Gerard J. Kim, and Seungmoon Choi",
      venue: "ACM Symposium on Virtual Reality Software and Technology (Candidate for Best Paper Award)",
      link: "https://ieeexplore.ieee.org/document/4531740"
  },
  {
      year: 2007,
      category: "conference",
      venueShort: "FBIT",
      title: "Discrimination of Virtual Environments Under Visual and Haptic Rendering Delays",
      authors: "In Lee and Seungmoon Choi",
      venue: "International Conference on Frontiers in the Convergence of Bioscience and Information Technologies",
      link: "https://ieeexplore.ieee.org/document/4524165"
  },
  {
      year: 2007,
      category: "conference",
      venueShort: "RO-MAN",
      title: "Perceptually Transparent Vibration Rendering Using a Vibration Motor for Haptic Interaction",
      authors: "Jonghyun Ryu, Jaehoon Jung, Seojoon Kim, and Seungmoon Choi",
      venue: "IEEE International Symposium on Robot & Human Interactive Communication",
      link: "https://ieeexplore.ieee.org/document/4415100/"
  },
  {
      year: 2007,
      category: "conference",
      venueShort: "HCII",
      title: "AR Pottery: Experiencing Pottery Making in the Augmented Space",
      authors: "Gabjong Han, Jane Hwang, Seungmoon Choi, and Gerard J. Kim",
      venue: "Human-Computer Interaction International",
      link: "https://dl.acm.org/doi/10.5555/1770090.17701630"
  },
  {
      year: 2007,
      category: "conference",
      venueShort: "HCII",
      title: "Power Consumption and Perceived Magnitude of Vibration Feedback in Mobile Devices",
      authors: "Jaehoon Jung and Seungmoon Choi",
      venue: "Human-Computer Interaction International",
      link: "https://doi.org/10.1007/978-3-540-73107-8_40"
  },
  {
      year: 2007,
      category: "conference",
      venueShort: "ICRA",
      title: "A Noble Bilateral Teleoperation System for Human Guided Spinal Fusion",
      authors: "Keehoon Kim, Jongwon Lee, Wan Kyun Chung, Seungmoon Choi, Young Soo Kim, and Il Hong Suh",
      venue: "IEEE International Conference on Robotics and Automation",
      link: "https://ieeexplore.ieee.org/document/4209210"
  },
  {
      year: 2007,
      category: "conference",
      venueShort: "WHC",
      title: "Mechanical Impedance of the Hand Holding a Spherical Tool at Threshold and Suprathreshold Stimulation Levels",
      authors: "Ali Israr, Seungmoon Choi, and Hong Z. Tan",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/4145151/"
  },
  {
      year: 2007,
      category: "conference",
      venueShort: "WHC",
      title: "Haptizing a Surface Height Change with Varying Stiffness Based on Force Constancy: Effect of Surface Normal Rendering",
      authors: "Jaeyoung Cheon and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/4145156"
  },
  {
    year: 2006,
    category: "conference",
    venueShort: "ICAT",
    title: "Perceptualizing a “Haptic Edge” with Varying Stiffness Based on Force Constancy",
    authors: "Jaeyoung Cheon and Seungmoon Choi",
    venue: "International Conference on Artificial Reality and Telexistence",
    link: "https://doi.org/10.1007/11941354_40"
},
{
    year: 2006,
    category: "conference",
    venueShort: "IROS",
    title: "Detection Threshold and Mechanical Impedance of the Hand in a Pen-Hold Posture",
    authors: "Ali Israr, Seungmoon Choi, and Hong Z. Tan",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
    link: "https://doi.org/10.1109/IROS.2006.282353"
},
{
    year: 2006,
    category: "conference",
    venueShort: "HAPTICS",
    title: "Portable Haptic Display for Large Immersive Virtual Environments",
    authors: "Enkhtuvshin Dorjgotov, Seungmoon Choi, Steven R. Dunlop, and Gary R. Bertoline",
    venue: "International Symposium on Haptic Interfaces for Virtual Environment and Teleoperator Systems",
    link: "https://doi.org/10.1109/HAPTIC.2006.1627102"
},

// --- 2005 ---
{
    year: 2005,
    category: "conference",
    venueShort: "WHC",
    title: "Multi-modal Perceptualization of Volumetric Data and its Application to Molecular Docking",
    authors: "Ross Maciejewski, Seungmoon Choi, David S. Ebert, and Hong Z. Tan",
    venue: "IEEE World Haptics Conference",
    link: "https://doi.org/10.1109/WHC.2005.97"
},
{
    year: 2005,
    category: "conference",
    venueShort: "WHC",
    title: "👑 Perceptibility of Haptic Digital Watermarking of Virtual Textures",
    authors: "Domenico Prattichizzo, Mauro Barni, Hong Z. Tan, and Seungmoon Choi",
    venue: "IEEE World Haptics Conference (Candidate for Best Paper Award)",
    link: "https://doi.org/10.1109/WHC.2005.102"
},
{
    year: 2005,
    category: "conference",
    venueShort: "WHC",
    title: "Discrimination of Virtual Haptic Textures Rendered with Different Update Rates",
    authors: "Seungmoon Choi and Hong Z. Tan",
    venue: "IEEE World Haptics Conference",
    link: "https://doi.org/10.1109/WHC.2005.41"
},

// --- 2004 ---
{
    year: 2004,
    category: "conference",
    venueShort: "IROS",
    title: "👑 Effect of Update Rate on Perceived Instability of Virtual Haptic Texture",
    authors: "Seungmoon Choi and Hong Z. Tan",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (Candidate for Best Paper Award)",
    link: "https://doi.org/10.1109/IROS.2004.1389970"
},

// --- 2003 ---
{
    year: 2003,
    category: "conference",
    venueShort: "IROS",
    title: "Aliveness: Perceived Instability from a Passive Haptic Texture Rendering System",
    authors: "Seungmoon Choi and Hong Z. Tan",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
    link: "https://doi.org/10.1109/IROS.2003.1249275"
},
{
    year: 2003,
    category: "conference",
    venueShort: "HAPTICS",
    title: "An Experimental Study of Perceived Instability During Haptic Texture Rendering: Effects of Collision Detection Algorithm",
    authors: "Seungmoon Choi and Hong Z. Tan",
    venue: "International Symposium on Haptic Interfaces for Virtual Environment and Teleoperator Systems",
    link: "https://doi.org/10.1109/HAPTIC.2003.1191276"
},

// --- 2002 ---
{
    year: 2002,
    category: "conference",
    venueShort: "ICRA",
    title: "A Study on the Sources of Perceptual Instability During Haptic Texture Rendering",
    authors: "Seungmoon Choi and Hong Z. Tan",
    venue: "IEEE International Conference on Robotics and Automation",
    link: "https://doi.org/10.1109/ROBOT.2002.1014716"
},
{
    year: 2002,
    category: "conference",
    venueShort: "HAPTICS",
    title: "An Analysis of Perceptual Instability During Haptic Texture Rendering",
    authors: "Seungmoon Choi and Hong Z. Tan",
    venue: "International Symposium on Haptic Interfaces for Virtual Environment and Teleoperator Systems",
    link: "https://doi.org/10.1109/HAPTIC.2002.998950"
},

// --- 2000 ---
{
    year: 2000,
    category: "conference",
    venueShort: "PUG",
    title: "A Parameter Space for Perceptually Stable Haptic Texture Rendering",
    authors: "Seungmoon Choi and Hong Z. Tan",
    venue: "PHANToM Users Group Workshop",
    link: ""
}
];
/* data.js - Patent Data */

const patentData = [
    // --- Registered International Patents ---
    {
        year: 2025,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Haptic Feedback Control Apparatus and Method Thereof",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 2025/0195997 A1)",
        link: "https://patents.google.com/patent/US20250195997A1"
    },
    {
        year: 2024,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Method and Apparatus for Generating and Merging Image-based Texture Motion",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 12,067,168 B2)",
        link: "https://patents.google.com/patent/US12067168B2"
    },
    {
        year: 2018,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Apparatus for Generating Motion Effects and Computer Readable Medium for the Same",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 10,147,213 B2)",
        link: "https://patents.google.com/patent/US10147213B2"
    },
    {
        year: 2018,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Somatic Sensation Induction System Using Pulse Laser and Medium of High Absorption Coefficient",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 10,058,712 B2)",
        link: "https://patents.google.com/patent/US10058712B2"
    },
    {
        year: 2018,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Method and Device for Generating Vibration Based on an Adjective",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 9,880,570 B2)",
        link: "https://patents.google.com/patent/US9880570B2"
    },
    {
        year: 2017,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Method and Device for Generating Vibration by Using Adjective Space on a Timeline",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 9,600,984 B2)",
        link: "https://patents.google.com/patent/US9600984B2"
    },
    {
        year: 2017,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Method and Apparatus for Generating Haptic Signal with Auditory Saliency Estimation",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 9,640,047 B2)",
        link: "https://patents.google.com/patent/US9640047B2"
    },
    {
        year: 2015,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Laser Apparatus Capable of Controlling a Photo−mechanical Effect and Method Using the Same",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 9,092,955 B2)",
        link: "https://patents.google.com/patent/US9092955B2"
    },
    {
        year: 2011,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Vibration Authoring Tool, Vibration Authoring Method, and Storage Medium Recorded with the Same",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 7,999,166 B2)",
        link: "https://patents.google.com/patent/US7999166B2"
    },

    // --- Applied International Patents ---
    {
        year: 2019,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Apparatus and Method for Providing Virtual Texture",
        authors: "Seungmoon Choi",
        venue: "Applied International Patent (US 14/962,055)",
        link: ""
    },

    // --- Registered Domestic Patents (Korea) ---
    {
        year: 2025,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Method and Device for Transforming DoF in Mulse-media System (다중감각미디어시스템에서 자유도변환방법 및 장치)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-2806247)",
        link: ""
    },
    {
        year: 2023,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Method and Device for Providing Motion Effect (모션효과제공장치 및 방법)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-2575318)",
        link: ""
    },
    {
        year: 2021,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Object Identification Apparatus and Method, System Comprising the Same (물체 인식 장치 및 방법 그리고 이를 포함하는 물체 인식 시스템)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-2272641)",
        link: ""
    },
    {
        year: 2021,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Apparatus and Method for Providing a Texture Signal (질감 신호 제공 장치 및 방법)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-2247521)",
        link: ""
    },
    {
        year: 2020,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Method and Device for Generating Vibration Using Adjective (형용사를 이용한 진동 생성 방법 및 디바이스)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-2191968)",
        link: ""
    },
    {
        year: 2019,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Apparatus and Method for Providing a Virtual Texture (재질감 제공 장치 및 방법)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-2045891)",
        link: ""
    },
    {
        year: 2018,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Navigating Apparatus and System by Inducing Tactile Sense (체감각 유도 방식의 길 안내 장치 및 시스템)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1825674)",
        link: ""
    },
    {
        year: 2017,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "The Method of Decompositioning Contact Force and the Haptic Apparatus Thereof (접촉힘을 분해하는 방법 및 이를 적용한 햅틱 장치)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1728733)",
        link: ""
    },
    {
        year: 2016,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Apparatus and Method for Generating Motion Effects by Analyzing Motion of Object (객체의 움직임 분석을 이용한 모션 효과 생성 장치 및 방법)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1642200)",
        link: ""
    },
    {
        year: 2016,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Apparatus for Generating Motion Effects and Computer Readable Medium for the Same (모션 효과 생성 장치 및 이를 위한 컴퓨터로 읽을 수 있는 기록매체)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1642198)",
        link: ""
    },
    {
        year: 2016,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Method for Haptic Signal Generation Based on Auditory Saliency and Apparatus Therefor (청각 주목도에 기반한 햅틱 신호 생성 방법 및 이를 위한 장치)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1641418)",
        link: ""
    },
    {
        year: 2015,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "System for Inducing Tactile Sense Using Pulse Laser and Medium with High Absorption Coefficient (펄스 레이저 및 흡수계수가 높은 매질을 이용한 체성감각 유도 시스템)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1581763)",
        link: ""
    },
    {
        year: 2015,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Apparatus and Method for Outputting Braille Using Laser Beam (레이저 빔을 이용한 점자 출력 장치 및 방법)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1523619)",
        link: ""
    },
    {
        year: 2015,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Apparatus and Method for Providing Motion Haptic Effect Using Video Analysis (영상 분석을 통하여 모션 햅틱 효과를 제공하는 장치 및 방법)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1507242)",
        link: ""
    },
    {
        year: 2015,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Surgical Robot Capable of Providing Tactile Sense Using Laser Beam (레이저 빔을 이용하여 촉감을 제공할 수 있는 수술용 로봇 장치)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1483428)",
        link: ""
    },
    {
        year: 2014,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Method for Converting Audio Signal to Haptic Signal and Apparatus for Performing the Same (오디오 신호의 햅틱 신호 변환 방법 및 이를 수행하는 장치)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1427993)",
        link: ""
    },
    {
        year: 2014,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Electronic Device for Providing Tactile Sense Using Laser and Method Using the Same (레이저를 이용하여 촉감을 제공하는 전자 장치 및 이를 이용한 방법)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1375613)",
        link: ""
    },
    {
        year: 2013,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Apparatus and Method for Guiding State Information of Vehicle (운송 장치의 상태 정보를 안내하는 안내 장치 및 방법)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1345310)",
        link: ""
    },
    {
        year: 2013,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Laser Apparatus Capable of Pulsed Laser Beam Diameter for Regulation of Tactile Sense and Method Using the Same",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1340359)",
        link: ""
    },
    {
        year: 2013,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Laser Apparatus Capable of Regulating Photo-Mechanical Effect and Method Using the Same",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1340361)",
        link: ""
    },
    {
        year: 2013,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Method and Apparatus for Providing Tactile Effect (촉각 효과의 제공 방법 및 장치)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1305735)",
        link: ""
    },
    {
        year: 2011,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Vibration Authoring Tool (진동 저작 도구)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1080989)",
        link: ""
    },
    {
        year: 2008,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Device and Method for Controlling an Electric Device Using an Inertial Sensor and a Camera",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-0837819)",
        link: ""
    }
];
// ... [Awards 데이터 등 나머지는 기존 유지] ...

// 5. Awards Data
// type: "intl" = international, "domestic" = domestic, "personal" = personal/service
// recipient: null = unknown (first author of paper not recorded in CV)
const awardData = [
    // ── 2026 ──────────────────────────────────────────
    { year: 2026, type: "intl",     award: "Honorable Mention, Best Student Paper Award",                 venue: "EuroHaptics Conference",                 paper: "A Perceptual Comparison of Unidirectional and Braking Force Feedback for Stiffness Rendering and Its Implications for Haptic Gloves", recipient: "Jeongwoo Kim" },
    { year: 2026, type: "intl",     award: "Honorable Mention, Best WIP Paper Award",                     venue: "IEEE World Haptics Conference",           paper: "Effects of Haptic Feedback on Gaming Experiences: A Case Study for Players and Spectators in an FPS Game",                          recipient: "Heeji Sohn" },
    { year: 2026, type: "domestic", award: "Outstanding Contributing Institution Award",                   venue: "Korea Haptics Conference",               paper: null,                                                                                                                               recipient: "Interaction Laboratory at POSTECH" },
    { year: 2026, type: "domestic", award: "Best Paper Award (Honorable Mention)",                         venue: "Korea Haptics Conference",               paper: "GenTouchVR: An Automatic Generation Pipeline of Touch-Enabled Virtual Environments from a Single Image",                           recipient: "Jaejun Park" },
    { year: 2026, type: "domestic", award: "Best Demonstration Award (Honorable Mention)",                 venue: "Korea Haptics Conference",               paper: "GenTouchVR Demo: Experiencing a Touch-Enabled Environment Automatically Generated from a Single Image",                           recipient: "Jaejun Park" },
    // ── 2025 ──────────────────────────────────────────
    { year: 2025, type: "intl",     award: "People’s Choice Award, Hands-on Demonstration",               venue: "IEEE World Haptics Conference",           paper: "Automatic Haptic Rendering Pipeline Using AI Models for Generative Virtual Environments",                                         recipient: "Junwoo Kim" },
    { year: 2025, type: "intl",     award: "People’s Choice Award, Hands-on Demonstration",               venue: "IEEE World Haptics Conference",           paper: "Automatic Generation of Haptic Motion Effects from Audiovisual Content",                                                          recipient: null },
    { year: 2025, type: "intl",     award: "Honorable Mention, Best WIP Paper Award",                     venue: "IEEE World Haptics Conference",           paper: "Effects of Haptic Feedback on Gaming Experiences: A Case Study for Players and Spectators in an FPS Game",                          recipient: "Heeji Sohn" },
    // ── 2024 ──────────────────────────────────────────
    { year: 2024, type: "intl",     award: "Nominee, Best Paper Award",                                   venue: "IEEE ISMAR",                             paper: "Expressing the Social Intent of Touch Initiator in Virtual Reality Using Multimodal Haptics",                                     recipient: null },
    { year: 2024, type: "intl",     award: "Honorable Mention",                                           venue: "ACM CHI",                                paper: "Augmenting Perceived Length of Handheld Controllers: Effects of Object Handle Properties",                                         recipient: "Chaeyong Park" },
    { year: 2024, type: "intl",     award: "Candidate, Best ToH Short Paper Award",                       venue: "IEEE Haptics Symposium",                 paper: "Sound-to-Touch Crossmodal Pitch Matching for Short Sounds",                                                                        recipient: "Dong-Geun Kim" },
    { year: 2024, type: "intl",     award: "Candidate, Best ToH Short Paper Award",                       venue: "IEEE Haptics Symposium",                 paper: "Effects of Contact Force on Vibrotactile Perceived Intensity Across the Upper Body",                                              recipient: null },
    { year: 2024, type: "domestic", award: "Best Paper Award",                                            venue: "Computer Graphics and Interaction Society, KISSE", paper: "Real-time Multimodal Audio-to-Tactile Conversion System for Playing or Watching Mobile Shooting Games",                recipient: null },
    { year: 2024, type: "domestic", award: "Best Paper Award (Honorable Mention)",                         venue: "Korea Haptics Conference",               paper: "Differential Thresholds of Azimuth between Auditory and Tactile Stimuli",                                                          recipient: null },
    { year: 2024, type: "domestic", award: "Best Demonstration Award",                                    venue: "Korea Haptics Conference",               paper: "Automatic Authoring of Physical and Perceptual Motion Effects for Virtual Reality",                                                recipient: null },
    // ── 2023 ──────────────────────────────────────────
    { year: 2023, type: "intl",     award: "Best Paper Award",                                            venue: "IEEE Transactions on Haptics",           paper: "Perceived Intensity Model of Dual-Frequency Superimposed Vibration: Pythagorean Sum",                                              recipient: "Yongjae Yoo" },
    { year: 2023, type: "intl",     award: "Honorable Mention",                                           venue: "ACM CHI",                                paper: "Visuo-haptic Crossmodal Shape Perception Model for Shape-Changing Handheld Controllers Bridged by Inertial Tensor",                 recipient: "Chaeyong Park" },
    { year: 2023, type: "personal", award: "POSTECHian Award – Education",                                venue: "POSTECH",                                paper: null,                                                                                                                               recipient: "Seungmoon Choi" },
    { year: 2023, type: "domestic", award: "Best Paper Award",                                            venue: "Korea Haptics Conference",               paper: "Merging Camera and Motion Haptic Effects for Improved 4D Experiences",                                                             recipient: null },
    { year: 2023, type: "domestic", award: "Best Paper Award",                                            venue: "HCI Korea",                              paper: "Heat Transfer Calculation Model and Thermal Rendering Using Wearable Device",                                                      recipient: null },
    { year: 2023, type: "domestic", award: "Best Paper Award",                                            venue: "HCI Korea",                              paper: "Estimating Information Transfer for Sequential Full Body Vibrotactile Stimuli",                                                    recipient: null },
    // ── 2022 ──────────────────────────────────────────
    { year: 2022, type: "domestic", award: "Best Paper Presentation Award",                               venue: "Korea Software Congress",                paper: "MMGrip: A Multimodal Haptic Device Combining Vibration, Impact, and Shear for Realistic Haptic Feedback",                         recipient: null },
    { year: 2022, type: "domestic", award: "Best Paper Award",                                            venue: "Korea Software Congress",                paper: "A Multimodal Wearable Haptic Interaction System Combining EMS and Vibration for VR Sports",                                       recipient: null },
    // ── 2021 ──────────────────────────────────────────
    { year: 2021, type: "domestic", award: "Best Paper Award",                                            venue: "Korea Computer Congress",                paper: "Multimodal Haptic Rendering for Interactive VR Sports Applications",                                                               recipient: null },
    // ── 2019 ──────────────────────────────────────────
    { year: 2019, type: "intl",     award: "Finalist, Best Paper Award",                                  venue: "IEEE World Haptics Conference",           paper: "Perceptual Space of Regular Homogeneous Haptic Textures Rendered by Electrovibration",                                            recipient: null },
    { year: 2019, type: "intl",     award: "Candidate, Best Paper Award",                                 venue: "IEEE World Haptics Conference",           paper: "Realistic Haptic Rendering of Collision Effects Using Multimodal Vibrotactile and Impact Feedback",                               recipient: "Chaeyong Park" },
    { year: 2019, type: "intl",     award: "Candidate, Best Paper Award",                                 venue: "IEEE World Haptics Conference",           paper: "RealWalk: Haptic Shoes Using Actuated Magneto-Rheological Fluid for Walking in Virtual Reality",                                 recipient: null },
    { year: 2019, type: "domestic", award: "Best Demo Award",                                             venue: "Korea Haptics Community Workshop",        paper: "Data-Driven Haptic Modeling of Normal Interactions on Viscoelastic Deformable Objects Using a Random Forest",                     recipient: "Hojun Cha" },
    { year: 2019, type: "domestic", award: "Best Paper Award",                                            venue: "Korea Computer Congress",                paper: "A Method to Generate Motion Effects of 4D Films Automatically by Using Human Gaze Data",                                         recipient: null },
    // ── 2017 ──────────────────────────────────────────
    { year: 2017, type: "intl",     award: "Candidate, Best Paper Award; Finalist, Best Paper Presentation Award", venue: "IEEE World Haptics Conference", paper: "Attachable and Detachable Vibrotactile Feedback Modules and Their Information Capacity for Spatiotemporal Patterns",           recipient: null },
    { year: 2017, type: "intl",     award: "Candidate, Best Poster Paper Award",                          venue: "IEEE World Haptics Conference",           paper: "Perceiving Texture Gradients on an Electrostatic Friction Display",                                                               recipient: null },
    { year: 2017, type: "intl",     award: "Best Poster Paper Award",                                     venue: "IEEE World Haptics Conference",           paper: "A Longitudinal Study for Haptic Pitch Correction Guidance for String Instrument Players (HapTune)",                              recipient: "Yongjae Yoo" },
    // ── 2016 ──────────────────────────────────────────
    { year: 2016, type: "intl",     award: "Honorable Mention, Student Innovation Challenge (as Advisor)", venue: "IEEE Haptics Symposium",                 paper: "MOVieVib: Vibrotactile Cues of Camera Movement in 4D Films",                                                                       recipient: null },
    { year: 2016, type: "domestic", award: "Best Paper Presentation Award",                               venue: "Korea Computer Congress",                paper: "Drag and Roll: Gesture Interaction for Fine-Tuning Task on Touchscreen",                                                          recipient: null },
    // ── 2015 ──────────────────────────────────────────
    { year: 2015, type: "domestic", award: "Best Paper Presentation Award",                               venue: "KISE Winter Conference",                 paper: "Bare-Hand Haptic Rendering System Using Image-Based Method",                                                                       recipient: null },
    // ── 2014 ──────────────────────────────────────────
    { year: 2014, type: "intl",     award: "Honorable Mention, Best Demo Award",                          venue: "Asia Haptics",                           paper: "Normal and Tangential Force Decomposition and Augmentation Based on Contact Centroid",                                             recipient: null },
    { year: 2014, type: "intl",     award: "Candidate, Best Paper Award",                                 venue: "IEEE Haptics Symposium",                 paper: "Vibrotactile Guidance for Drumming Learning: Method and Perceptual Assessment",                                                   recipient: null },
    { year: 2014, type: "intl",     award: "Candidate, Best Paper Award",                                 venue: "IEEE Haptics Symposium",                 paper: "Combining Haptic Guidance and Haptic Disturbance: An Initial Study of Hybrid Haptic Assistance for Virtual Steering Task",        recipient: null },
    { year: 2014, type: "intl",     award: "Best Teaser Award",                                           venue: "IEEE Haptics Symposium",                 paper: "PreventFHP: Detection and Warning System for Forward Head Posture",                                                               recipient: null },
    { year: 2014, type: "personal", award: "Citation for Meritorious Service (Associate Editor)",         venue: "IEEE Transactions on Haptics",           paper: null,                                                                                                                               recipient: "Seungmoon Choi" },
    { year: 2014, type: "domestic", award: "Best Paper Award",                                            venue: "Korea Computer Congress",                paper: "An Initial Study on Congruence between Visual and Haptic Icons Based on Emotional Responses",                                      recipient: null },
    { year: 2014, type: "domestic", award: "Best Paper Award",                                            venue: "HCI Korea",                              paper: "Automatic Generation of 4D Motion Effects",                                                                                       recipient: null },
    // ── 2012 ──────────────────────────────────────────
    { year: 2012, type: "intl",     award: "Candidate, Best Paper Award",                                 venue: "IEEE Haptics Symposium",                 paper: "Haptic Simulation of Refrigerator Door",                                                                                           recipient: null },
    // ── 2011 ──────────────────────────────────────────
    { year: 2011, type: "intl",     award: "Candidate, Best Student Paper Award",                         venue: "IEEE World Haptics Conference",           paper: "Perceptual Space of Amplitude-Modulated Vibrotactile Stimuli: Similarity Ratings and Adjective Ratings",                         recipient: null },
    { year: 2011, type: "intl",     award: "Best Poster Award",                                           venue: "International Symposium on Ubiquitous Virtual Reality", paper: "The Dynamic Haptics Library: Real-Time Vibrotactile Rendering Library Using Dynamics Engine",                    recipient: null },
    { year: 2011, type: "personal", award: "Early Career Award",                                          venue: "IEEE Technical Committee on Haptics",    paper: null,                                                                                                                               recipient: "Seungmoon Choi" },
    { year: 2011, type: "domestic", award: "Best Paper Award",                                            venue: "KISE Fall Conference",                   paper: "Modeling and Recognition of Human Driving Behavior Using Hidden Markov Models",                                                   recipient: null },
    // ── 2010 ──────────────────────────────────────────
    { year: 2010, type: "intl",     award: "Best Demonstration Award",                                    venue: "IEEE Haptics Symposium",                 paper: "Stiffness Modulation for Haptic Augmented Reality: Extension to 3D Interaction",                                                  recipient: null },
    { year: 2010, type: "intl",     award: "Candidate, Best Paper Award",                                 venue: "IEEE Haptics Symposium",                 paper: "Effects of Haptic Guidance and Disturbance on Motor Learning: Potential Advantage of Haptic Disturbance",                        recipient: null },
    { year: 2010, type: "intl",     award: "Candidate, Best Student Paper Award",                         venue: "IEEE Haptics Symposium",                 paper: "Perceptual Space and Adjective Rating of Sinusoidal Vibration Perceived via Mobile Device",                                       recipient: null },
    { year: 2010, type: "intl",     award: "Candidate, Best Poster Paper Award",                          venue: "IEEE Haptics Symposium",                 paper: "Initial Study of Creating Linearly Moving Vibrotactile Sensation on Mobile Device",                                              recipient: null },
    // ── 2009 ──────────────────────────────────────────
    { year: 2009, type: "intl",     award: "Best Student Paper Award",                                    venue: "IEEE World Haptics Conference",           paper: "System Improvements in Mobile Haptic Interface",                                                                                   recipient: null },
    { year: 2009, type: "domestic", award: "Candidate, Best Paper Award",                                 venue: "HCI Korea",                              paper: "Design and Evaluation of Motion-based Interface for Image Browsing in Mobile Devices",                                            recipient: null },
    // ── 2008 ──────────────────────────────────────────
    { year: 2008, type: "personal", award: "Citation for Meritorious Service (Reviewer)",                 venue: "IEEE Transactions on Haptics",           paper: null,                                                                                                                               recipient: "Seungmoon Choi" },
    { year: 2008, type: "domestic", award: "Best Paper Award",                                            venue: "KISE Fall Conference",                   paper: "HMM-based Motion Recognition with 3-D Acceleration Signal",                                                                        recipient: null },
    { year: 2008, type: "domestic", award: "Best Paper Award",                                            venue: "HCI Korea",                              paper: "Real-Time Depth of Field Rendering Using Anisotropically Filtered Mipmap",                                                        recipient: null },
    // ── 2007 ──────────────────────────────────────────
    { year: 2007, type: "intl",     award: "Best Paper Award",                                            venue: "ICOIN-C",                                paper: "Virtual Pottery Modeling with Force Feedback Using Cylindrical Element Method",                                                    recipient: null },
    { year: 2007, type: "intl",     award: "Candidate, Best Paper Award",                                 venue: "ACM VRST",                               paper: "Real-Time Tracking of Visually Attended Objects in Interactive Virtual Environments",                                              recipient: null },
    { year: 2007, type: "domestic", award: "Candidate, Best Paper Award",                                 venue: "HCI Korea",                              paper: "Motion-Recognizing Remote Controller with Tactile Feedback",                                                                       recipient: null },
    { year: 2007, type: "domestic", award: "Best Paper Award",                                            venue: "International Conference on Next-Generation Computing", paper: "Virtual Pottery Modeling with Force Feedback Using Cylindrical Element Method",                                  recipient: null },
    // ── 2005 ──────────────────────────────────────────
    { year: 2005, type: "intl",     award: "Candidate, Best Paper Award",                                 venue: "World Haptics Conference",               paper: "Perceptibility of Haptic Digital Watermarking of Virtual Textures",                                                               recipient: null },
    // ── 2004 ──────────────────────────────────────────
    { year: 2004, type: "intl",     award: "Candidate, Best Paper Award",                                 venue: "IEEE/RSJ IROS",                          paper: "Effect of Update Rate on Perceived Instability of Virtual Haptic Texture",                                                        recipient: null },
];

// 6. Photos Data
const photosData = [
    // Add photo entries here: { year: 2025, title: "Lab Year-End Gathering", date: "2025-12", src: "images/photos/filename.jpg" }
];

// 국내 논문 (Korean domestic papers — add entries here)
const koreanPapers = [
    // Example entry format:
    // { year: 2024, category: "korean", venueShort: "KHC", title: "...", authors: "...", venue: "한국햅틱스학술대회" }
];

const publicationData = [
    ...journalPapers,
    ...conferencePapers,
    ...posterDemoPapers,
    ...koreanPapers,
    ...patentData
];
