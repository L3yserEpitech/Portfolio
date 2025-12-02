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
    title: "SAIL - Sui Automated Investment Lab",
    description: "No-code builder for automated flashloans and DeFi strategies on Sui blockchain with integrated marketplace.",
    fullDescription: "SAIL is a no-code DeFi strategy builder on Sui that enables anyone to create, simulate, and execute flashloans and complex strategies without writing Move code. Flashloans are now accessible to everyone. The platform features multi-protocol support (Navi, Cetus, Turbos), automatic Hot Potato pattern handling, and a marketplace where creators can encrypt and sell strategies using Seal and Walrus.",
    tags: ["Move", "Sui Blockchain", "TypeScript", "React", "Next.js", "PTB", "Flashloans", "DeFi", "No-Code", "Marketplace", "Seal", "Walrus", "Navi Protocol", "Cetus", "Web3"],
    category: "DeFi & Blockchain",
    image: "/sail1.png",
    gallery: [
      "/sail1.png",
      "/sail0.mov",
      "/sail2.png",
      "/sail3.png",
      "/sail4.png",
    ],
    links: {
      github: "https://github.com/L3yserEpitech/Sail-hackaton-SUI-",
      website: "#",
      demo: "#",
    },
    year: "2025",
    status: "Live",
  },
  {
    id: 2,
    title: "Esport Oracle",
    description: "Decentralized oracle for CS Go 2 esport tournaments. Bridges esports data with blockchain smart contracts.",
    fullDescription: "Esport Oracle is a decentralized oracle developed by PoC Innovation that bridges Counter-Strike 2 esports data with blockchain smart contracts. It securely and verifiably transfers match results, player statistics, and tournament details onto the blockchain. The system features a Solidity-based smart contract with staking and consensus mechanisms, and a Go-based data provider that fetches real-time data from the PandaScore API.",
    tags: ["Solidity", "Go", "Vue.js", "Foundry", "PandaScore API"],
    category: "Blockchain",
    image: "/esportoracle3.png",
    gallery: [
      "/esportoracle3.png",
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
    id: 3,
    title: "Esport News",
    description: "Esports journalism platform aggregating competitive gaming news, tournament coverage, and live match schedules across 10 major titles.",
    fullDescription: "Esport News is a comprehensive esports journalism platform covering over 10 major titles including Valorant, CS2, and LoL. It combines editorial content with real-time tournament data from PandaScore. The platform features a Next.js frontend and a Go service layer for high-performance data syncing, optimized for SEO and offering a centralized hub for news, stats, and match schedules.",
    tags: ["Go", "Next.js", "PostgreSQL", "Redis", "Docker", "PandaScore API", "Journalism", "SEO"],
    category: "Esports Journalism",
    image: "/esportnews1.png",
    gallery: [
      "/esportnews1.png",
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
    id: 4,
    title: "Agent Crypto Flow",
    description: "Conversational AI agent enabling DeFi operations on the Flow blockchain through an intuitive chat interface. The agent understands natural language and automatically executes staking transactions, token swaps, vault management, and balance checks.",
    fullDescription: "Agent Crypto Flow is an intelligent assistant that revolutionizes interaction with the Flow blockchain. Through an intuitive AI-powered chat interface, it enables complex financial operations like staking, token exchanges, and portfolio management using simple natural language. The agent analyzes your requests, suggests appropriate actions, and secures each transaction, making DeFi accessible to both experts and beginners.",
    tags: ["Python", "Next.js", "React", "TypeScript", "OpenAI", "uAgents", "Flow Blockchain", "FCL", "DeFi", "AI Agent", "Blockchain", "Web3"],
    category: "DeFi & Blockchain",
    image: "/aiagent1.png",
    gallery: [
      "/aiagent1.png"
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
    id: 5,
    title: "JEB Incubator",
    description: "Complete digital platform for incubating and developing innovative startups. Connects entrepreneurs, investors, and partners to facilitate the creation, funding, and growth of emerging companies.",
    fullDescription: "JEB Incubator is a complete digital platform dedicated to incubating and developing innovative startups. It's a digital ecosystem that connects entrepreneurs, investors, and partners to facilitate the creation, funding, and growth of emerging companies. The platform offers modern tools including an integrated messaging system, a project catalog with advanced search, detailed analytics, event management, and customized dashboards for startups, investors, and administrators.",
    tags: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "Tailwind CSS", "JWT", "SQLAlchemy"],
    category: "Platform",
    image: "/jebincubator.png",
    gallery: [
      "/jebincubator.png"
    ],
    links: {
      demo: "#",
    },
    year: "2024",
    status: "Live",
  },
  {
    id: 6,
    title: "VanciArea",
    description: "Complete IFTTT/Zapier-style automation platform enabling the creation of custom workflows connecting different external services through an intuitive visual interface.",
    fullDescription: "VanciArea is an IFTTT-style visual automation platform that enables drag-and-drop workflow creation. It integrates 9 major services (GitHub, Gmail, OpenAI...) via OAuth2 with real-time execution. The architecture is built on a modern stack: Node.js/Express, PostgreSQL, Next.js 15, and React Native, including a template engine and a high-performance scheduler.",
    tags: ["Node.js", "Next.js", "React", "PostgreSQL", "Prisma", "Socket.IO", "ReactFlow", "Docker", "OAuth2", "Automation", "WebSocket", "TypeScript"],
    category: "Automation Platform",
    image: "/area1.png",
    gallery: [
      "/area1.png",
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
    items: ["Solidity", "Move (SUI)", "Rust-Beginner", "Cairo-Beginner"],
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
    name: "SUI Hackathon Paris",
    date: "November 2025",
    location: "Paris, France",
    description: "Developed SAIL, a no-code flashloan builder with integrated marketplace. Finished 3rd place.",
    image: "/suilogo.png",
    award: "3rd Place",
  },
  {
    id: 2,
    name: "ETH Global Cannes",
    date: "July 2025",
    location: "Cannes, France",
    description: "Developed Agent Crypto Flow, an AI-powered DeFi assistant for the Flow blockchain.",
    image: "/ethglobalcannes2025.png",
    award: "",
  },
];
