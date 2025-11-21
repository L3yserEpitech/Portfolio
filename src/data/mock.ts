export const profile = {
  name: "Jules",
  title: "Web3 Fullstack Developer",
  subtitle: "Epitech Student | Blockchain & Finance Enthusiast",
  badge: "Web3/Fullstack Developer & Blockchain Enthusiast",
  description: "Responsable blockchain at PoC Innovation. 3rd year student at Epitech, specializing in fullstack development and blockchain technology. I create decentralized applications that bridge traditional finance with Web3.",
  bio: "I build decentralized applications and financial tools. Passionate about the intersection of finance and technology.",
  socials: {
    github: "https://github.com/L3yserEpitech",
    linkedin: "https://www.linkedin.com/in/jules-lordet-9798a12b3",
    twitter: "https://x.com/DefiAbuser",
  },
};

export const projects = [
  {
    id: 1,
    title: "Esport Oracle",
    description: "Decentralized oracle for CS Go 2 esport tournaments. Bridges esports data with blockchain smart contracts.",
    fullDescription: "Esport Oracle is a decentralized oracle developed by PoC Innovation that bridges Counter-Strike 2 esports data with blockchain smart contracts. It securely and verifiably transfers match results, player statistics, and tournament details onto the blockchain. The system features a Solidity-based smart contract with staking and consensus mechanisms, and a Go-based data provider that fetches real-time data from the PandaScore API.",
    tags: ["Solidity", "Go", "Vue.js", "Foundry", "PandaScore API"],
    category: "Blockchain",
    image: "/esportoracle3.png",
    gallery: [
      "/esportoracle1.png",
      "/esportoracle2.png",
    ],
    links: {
      github: "https://github.com/PoCInnovation/EsportOracle",
      website: "#",
      demo: "#",
    },
    year: "2024",
    status: "Live",
  },
  {
    id: 2,
    title: "Esport News",
    description: "Esports journalism platform aggregating competitive gaming news, tournament coverage, and live match schedules across 10 major titles.",
    fullDescription: "Esport News is a comprehensive esports journalism platform covering over 10 major titles including Valorant, CS2, and LoL. It combines editorial content with real-time tournament data from PandaScore. The platform features a Next.js frontend and a Go service layer for high-performance data syncing, optimized for SEO and offering a centralized hub for news, stats, and match schedules.",
    tags: ["Go", "Next.js", "PostgreSQL", "Redis", "Docker", "PandaScore API", "Journalism", "SEO"],
    category: "Esports Journalism",
    image: "/esportnews1.png",
    gallery: [
      "/esportnews2.png",
      "/esportnews3.png",
      "/esportnews4.png",
    ],
    links: {
      github: "https://github.com/L3yserEpitech/app-esportnews",
      website: "https://www.esportnews.fr",
      demo: "#",
    },
    year: "2025",
    status: "Live",
  },
  {
    id: 3,
    title: "Agent Crypto Flow",
    description: "Agent IA conversationnel permettant d'effectuer des opérations DeFi sur la blockchain Flow via une interface de chat intuitive. L'agent comprend le langage naturel et exécute automatiquement des transactions de staking, swap de tokens, gestion de vaults et vérification de balances.",
    fullDescription: "Agent Crypto Flow est un assistant intelligent qui révolutionne l'interaction avec la blockchain Flow. Grâce à une interface de chat intuitive alimentée par l'IA, il permet d'effectuer des opérations financières complexes comme le staking, les échanges de tokens et la gestion de portefeuille en utilisant simplement le langage naturel. L'agent analyse vos demandes, propose les actions appropriées et sécurise chaque transaction, rendant la DeFi accessible aussi bien aux experts qu'aux débutants.",
    tags: ["Python", "Next.js", "React", "TypeScript", "OpenAI", "uAgents", "Flow Blockchain", "FCL", "DeFi", "AI Agent", "Blockchain", "Web3"],
    category: "DeFi & Blockchain",
    image: "/aiagent1.png",
    gallery: [
    ],
    links: {
      github: "https://github.com/dujardin09/Agent-Crypto-Flow",
      website: "#",
      demo: "#",
    },
    year: "2024",
    status: "Live",
  },
  {
    id: 4,
    title: "JEB Incubator",
    description: "Plateforme digitale complète pour l'incubation et le développement de startups innovantes. Connecte entrepreneurs, investisseurs et partenaires pour faciliter la création, le financement et la croissance des entreprises émergentes.",
    fullDescription: "JEB Incubator est une plateforme digitale complète dédiée à l'incubation et au développement de startups innovantes. C'est un écosystème numérique qui connecte les entrepreneurs, les investisseurs et les partenaires pour faciliter la création, le financement et la croissance des entreprises émergentes. La plateforme offre des outils modernes incluant un système de messagerie intégré, un catalogue de projets avec recherche avancée, des analytics détaillés, une gestion d'événements et des tableaux de bord personnalisés pour startups, investisseurs et administrateurs.",
    tags: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "Tailwind CSS", "JWT", "SQLAlchemy"],
    category: "Platform",
    image: "/jebincubator.png",
    gallery: [],
    links: {
      demo: "#",
    },
    year: "2024",
    status: "Live",
  },
  {
    id: 5,
    title: "VanciArea",
    description: "Plateforme d'automatisation complète de type IFTTT/Zapier permettant de créer des workflows personnalisés reliant différents services externes via une interface visuelle intuitive.",
    fullDescription: "VanciArea est une plateforme d'automatisation visuelle type IFTTT permettant de créer des workflows par glisser-déposer. Elle intègre 9 services majeurs (GitHub, Gmail, OpenAI...) via OAuth2 avec exécution temps réel. L'architecture repose sur une stack moderne : Node.js/Express, PostgreSQL, Next.js 15 et React Native, incluant un moteur de templates et un scheduler performant.",
    tags: ["Node.js", "Next.js", "React", "PostgreSQL", "Prisma", "Socket.IO", "ReactFlow", "Docker", "OAuth2", "Automation", "WebSocket", "TypeScript"],
    category: "Automation Platform",
    image: "/area1.png",
    gallery: [
      "/area2.png",
      "/area3.png",
    ],
    links: {
      demo: "#",
    },
    year: "2025",
    status: "Live",
  },
];

export const skills = [
  {
    category: "Blockchain",
    items: ["Solidity", "Move (SUI)", "Rust (Beginner)"],
  },
  {
    category: "Fullstack",
    items: ["React", "TypeScript", "Tailwind CSS", "Go", "Node.js", "GORM", "Prisma", "PostgreSQL", "Docker", "NestJS"],
  },
];

export const experience = [
  // Current Roles
  {
    id: 1,
    role: "Blockchain Lead",
    company: "PoC Innovation",
    period: "September 2025 - Present",
    description: "Leading blockchain initiatives and organizing workshops and events. Coordinating technical training and community engagement activities.",
  },
  {
    id: 2,
    role: "Fullstack Developer (Part-time)",
    company: "Ramify",
    period: "September 2025 - Present",
    description: "Developing financial products and solutions. Building scalable fullstack applications for the fintech sector.",
  },
  {
    id: 3,
    role: "R&D Developer",
    company: "PoC Innovation",
    period: "April 2025 - Present",
    description: "Developing innovative projects in blockchain, AI, and software engineering. Conducting research and development on cutting-edge technologies.",
  },
  {
    id: 4,
    role: "Freelance Blockchain/Fullstack Developer",
    company: "Self-Employed",
    period: "March 2025 - Present",
    description: "Building custom blockchain solutions and fullstack applications for various clients. Specializing in Web3 integration and decentralized technologies.",
  },
  // Past Experiences
  {
    id: 5,
    role: "Business Developer",
    company: "Junior Conseil Taker",
    period: "January 2025 - April 2025",
    description: "Client relationship management in a junior enterprise environment. Immersed in the entrepreneurial ecosystem and business development.",
  },
  {
    id: 6,
    role: "Fullstack Developer",
    company: "Inetum Business Solution",
    period: "September 2024 - January 2025",
    description: "Developed a mobile adaptation of Oracle software. Worked on enterprise-level application development and transformation projects.",
  },
];

export const services = [
  {
    title: "Smart Contract Development",
    description: "Secure and efficient smart contracts written in Solidity. Audited and optimized for gas usage.",
    icon: "contract",
  },
  {
    title: "DApp Development",
    description: "Full-stack decentralized applications with seamless wallet integration and intuitive UI/UX.",
    icon: "dapp",
  },
  {
    title: "Web3 Integration",
    description: "Integrating blockchain features into existing Web2 applications. Wallets, payments, and token gating.",
    icon: "integration",
  },
];

export const hackathons = [
  {
    id: 1,
    name: "ETH Global Cannes",
    date: "July 2025",
    location: "Cannes, France",
    description: "Developed Agent Crypto Flow, an AI-powered DeFi assistant for the Flow blockchain.",
    image: "/ethglobalcannes2025.png",
    award: "",
  },
  {
    id: 2,
    name: "SUI Hackathon Paris",
    date: "November 2025",
    location: "Paris, France",
    description: "Upcoming participation in the SUI blockchain hackathon.",
    image: "/suilogo.png",
    award: "",
  },
];
