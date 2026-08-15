export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export interface ServiceCategory {
  id: string;
  categoryName: string;
  subtitle: string;
  badge: string;
  icon: string;
  services: ServiceItem[];
}

export const ALL_CLINICAL_SERVICES: ServiceCategory[] = [
  {
    id: "neuro-rehab",
    categoryName: "Neuro Rehabilitation & Physical Therapist",
    subtitle: "Brain, spine, and motor nerve recovery physical therapy under Dr. Hemant Singh PT",
    badge: "Neurological Care",
    icon: "🧠",
    services: [
      {
        id: "stroke-rehab",
        title: "Stroke Rehabilitation",
        description: "Stroke के बाद शरीर में weakness, चलने में परेशानी, balance की problem, हाथ-पैर में stiffness या movement कम होना जैसी समस्याओं के लिए physiotherapy.",
        icon: "🧠",
        tag: "Post-Stroke Recovery",
      },
      {
        id: "parkinsons-physio",
        title: "Parkinson's Physiotherapy",
        description: "Parkinson's में mobility, balance, posture, strength और functional movement को support करने के लिए physiotherapy.",
        icon: "🚶",
        tag: "Movement & Balance",
      },
      {
        id: "facial-palsy",
        title: "Facial Palsy Physiotherapy",
        description: "Facial palsy में facial movement और functional recovery को support करने के लिए appropriate physiotherapy techniques.",
        icon: "😊",
        tag: "Facial Nerve Care",
      },
      {
        id: "neuro-rehabilitation",
        title: "Neuro Rehabilitation",
        description: "Neurological conditions में mobility, balance, coordination, strength और daily functional abilities पर focused rehabilitation.",
        icon: "⚡",
        tag: "Motor Recovery",
      },
    ],
  },
  {
    id: "orthopedic-clinic",
    categoryName: "Orthopedic Clinic & Joint Care",
    subtitle: "Bone, joint, spine, and post-surgical physiotherapy care in Thatipur, Gwalior",
    badge: "Orthopedic & Spine",
    icon: "🦴",
    services: [
      {
        id: "general-physio",
        title: "Orthopedic Physiotherapy",
        description: "हड्डियों, जोड़ों और मांसपेशियों से जुड़ी समस्याओं में assessment-based physiotherapy और rehabilitation.",
        icon: "🩺",
        tag: "Clinical Assessment",
      },
      {
        id: "knee-pain-physio",
        title: "Knee Pain Physiotherapy",
        description: "घुटने के दर्द, stiffness और movement difficulty के लिए personalized physiotherapy और exercise-based rehabilitation.",
        icon: "🦵",
        tag: "Knee & Arthritis",
      },
      {
        id: "back-pain-physio",
        title: "Back Pain Physiotherapy",
        description: "कमर दर्द, stiffness और movement-related problems के लिए assessment और individualized physiotherapy treatment.",
        icon: "🦴",
        tag: "Lumbar & Posture",
      },
      {
        id: "sciatica-physio",
        title: "Sciatica Physiotherapy",
        description: "Sciatica और leg-related nerve pain में assessment-based physiotherapy, mobility exercises और functional rehabilitation.",
        icon: "⚡",
        tag: "Nerve Pain Relief",
      },
      {
        id: "neck-pain-physio",
        title: "Neck Pain Physiotherapy",
        description: "गर्दन के दर्द, stiffness और movement problems के लिए physiotherapy और therapeutic exercises.",
        icon: "🧘",
        tag: "Cervical Rehab",
      },
      {
        id: "frozen-shoulder-physio",
        title: "Frozen Shoulder Physiotherapy",
        description: "Frozen shoulder में pain management, mobility improvement और progressive exercise-based rehabilitation.",
        icon: "💪",
        tag: "Shoulder Range of Motion",
      },
      {
        id: "post-surgical-rehab",
        title: "Post Surgical Rehabilitation",
        description: "विभिन्न orthopedic surgeries के बाद safe mobility, strength और functional recovery के लिए individualized physiotherapy.",
        icon: "🏥",
        tag: "Post-Op Recovery",
      },
      {
        id: "knee-replacement-physio",
        title: "Knee Replacement Physiotherapy",
        description: "Knee replacement के बाद walking, knee movement, strength और daily activities को बेहतर करने के लिए structured rehabilitation.",
        icon: "🦵",
        tag: "TKR Rehab",
      },
      {
        id: "hip-replacement-physio",
        title: "Hip Replacement Physiotherapy",
        description: "Hip replacement के बाद mobility, strength, balance और functional activities को improve करने के लिए personalized rehabilitation.",
        icon: "🦴",
        tag: "THR Rehabilitation",
      },
      {
        id: "acl-rehab",
        title: "ACL Rehabilitation",
        description: "ACL reconstruction के बाद strength, mobility, balance और functional recovery के लिए progressive physiotherapy programme.",
        icon: "🏃",
        tag: "Ligament Reconstruction",
      },
      {
        id: "fracture-rehab",
        title: "Fracture Rehabilitation",
        description: "Fracture या surgery के बाद stiffness, weakness और movement limitations को improve करने के लिए physiotherapy rehabilitation.",
        icon: "🩹",
        tag: "Bone Fracture Care",
      },
    ],
  },
  {
    id: "home-physiotherapy",
    categoryName: "Home Physiotherapy (Gwalior Sector Visits)",
    subtitle: "Professional 1-on-1 physiotherapy at your home across Thatipur & Gwalior sectors",
    badge: "At Your Residence",
    icon: "🏠",
    services: [
      {
        id: "home-physio-gwalior",
        title: "Home Physiotherapy Gwalior",
        description: "Gwalior में घर पर personalized physiotherapy treatment. Pain relief, mobility improvement और recovery के लिए professional home visits.",
        icon: "🏠",
        tag: "Gwalior Home Visit",
      },
      {
        id: "home-physio-paralysis",
        title: "Home Physiotherapy After Paralysis",
        description: "Paralysis के बाद movement, strength, balance और daily activities improve करने के लिए personalized home physiotherapy and rehabilitation.",
        icon: "🦽",
        tag: "Paralysis Care",
      },
      {
        id: "home-physio-knee-replacement",
        title: "Home Physiotherapy After Knee Replacement",
        description: "Knee replacement के बाद pain, stiffness और mobility improve करने के लिए guided physiotherapy treatment at home.",
        icon: "🦵",
        tag: "Post TKR Home Care",
      },
      {
        id: "stroke-home-rehab",
        title: "Stroke Home Rehabilitation",
        description: "Stroke recovery के लिए home-based physiotherapy focused on strength, balance, walking, coordination और functional independence.",
        icon: "🧠",
        tag: "Stroke Home Recovery",
      },
      {
        id: "elderly-home-physio",
        title: "Elderly Home Physiotherapy",
        description: "Senior citizens के लिए safe home physiotherapy to improve mobility, balance, strength and reduce difficulty in daily activities.",
        icon: "👴",
        tag: "Senior Citizen Care",
      },
    ],
  },
  {
    id: "sports-geriatric",
    categoryName: "Sports Physiotherapy & Geriatric Care",
    subtitle: "Athletic performance recovery and active senior mobility physical therapy",
    badge: "Active Performance",
    icon: "🏃",
    services: [
      {
        id: "sports-injury-rehab",
        title: "Sports Injury Rehabilitation",
        description: "Sports injuries के बाद pain, strength, flexibility और movement improve करने के लिए structured physiotherapy rehabilitation.",
        icon: "🏃",
        tag: "Tendon & Sprain Care",
      },
      {
        id: "sports-physiotherapy",
        title: "Sports Physiotherapy",
        description: "Athletes और active individuals के लिए injury prevention, pain management, performance improvement और recovery-focused physiotherapy.",
        icon: "🏅",
        tag: "Athletic Performance",
      },
      {
        id: "geriatric-physiotherapy",
        title: "Geriatric Physiotherapy",
        description: "Older adults के लिए personalized physiotherapy to maintain strength, balance, mobility and independence in daily life.",
        icon: "👵",
        tag: "Active Aging",
      },
    ],
  },
];
