export const profile = {
  name: "Jules",
  title: "Web3 Fullstack Developer",
  subtitle: "Epitech Student | Blockchain & Finance Enthusiast",
  badge: "Web3/Fullstack Developer & Blockchain Enthusiast",
  description: "Responsable blockchain at PoC Innovation. 3rd year student at Epitech, specializing in fullstack development and blockchain technology. I create decentralized applications that bridge traditional finance with Web3.",
  bio: "I build decentralized applications and financial tools. Passionate about the intersection of finance and technology.",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
  },
};

export const projects = [
  {
    id: 1,
    title: "DeFi Exchange",
    description: "A decentralized exchange allowing users to swap tokens with low fees. Built with Next.js and Solidity.",
    fullDescription: "A fully functional decentralized exchange platform that enables users to swap ERC-20 tokens with minimal fees. Features include liquidity pools, automated market making (AMM), yield farming opportunities, and real-time price feeds from Chainlink oracles.",
    tags: ["Next.js", "Solidity", "Ethers.js", "Tailwind"],
    category: "DeFi",
    image: "https://placehold.co/1200x800/1e1e1e/FFF?text=DeFi+Exchange",
    gallery: [
      "https://placehold.co/400x300/1e1e1e/FFF?text=Swap+Interface",
      "https://placehold.co/400x300/1e1e1e/FFF?text=Liquidity+Pools",
      "https://placehold.co/400x300/1e1e1e/FFF?text=Analytics+Dashboard",
      "https://placehold.co/400x300/1e1e1e/FFF?text=Yield+Farming",
    ],
    links: {
      github: "https://github.com/",
      website: "#",
      demo: "#",
    },
    year: "2024",
    status: "Live",
  },
  {
    id: 2,
    title: "NFT Marketplace",
    description: "A platform for artists to mint and sell their digital art as NFTs. Features auction mechanics and royalty support.",
    fullDescription: "An advanced NFT marketplace built on Ethereum, allowing artists to mint, list, and sell their digital artwork. Includes auction mechanics with English and Dutch auction formats, automatic royalty distribution, IPFS decentralized storage, and a curated gallery system.",
    tags: ["React", "Hardhat", "IPFS", "Ethereum"],
    category: "NFT",
    image: "https://placehold.co/1200x800/1e1e1e/FFF?text=NFT+Marketplace",
    gallery: [
      "https://placehold.co/400x300/1e1e1e/FFF?text=NFT+Gallery",
      "https://placehold.co/400x300/1e1e1e/FFF?text=Minting+Interface",
      "https://placehold.co/400x300/1e1e1e/FFF?text=Auction+System",
      "https://placehold.co/400x300/1e1e1e/FFF?text=Artist+Profile",
    ],
    links: {
      github: "https://github.com/",
      website: "#",
      demo: "#",
    },
    year: "2024",
    status: "Live",
  },
  {
    id: 3,
    title: "Crypto Wallet Tracker",
    description: "A dashboard to track your crypto assets across multiple chains. Real-time price updates and portfolio analysis.",
    fullDescription: "A comprehensive multi-chain portfolio tracker that aggregates your crypto holdings across Ethereum, Polygon, BSC, and other networks. Features real-time price tracking via CoinGecko API, profit/loss calculations, transaction history, and advanced portfolio analytics with interactive charts.",
    tags: ["Vue.js", "Web3.js", "CoinGecko API"],
    category: "Tools",
    image: "https://placehold.co/1200x800/1e1e1e/FFF?text=Wallet+Tracker",
    gallery: [
      "https://placehold.co/400x300/1e1e1e/FFF?text=Portfolio+Dashboard",
      "https://placehold.co/400x300/1e1e1e/FFF?text=Transaction+History",
      "https://placehold.co/400x300/1e1e1e/FFF?text=Price+Charts",
      "https://placehold.co/400x300/1e1e1e/FFF?text=Multi+Chain+View",
    ],
    links: {
      github: "https://github.com/",
      website: "#",
      demo: "#",
    },
    year: "2024",
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
    name: "ETHGlobal Paris",
    date: "July 2023",
    location: "Paris, France",
    description: "Built a decentralized identity verification system using ZK-proofs.",
    award: "Best Privacy Project",
    image: "https://placehold.co/600x400/1e1e1e/FFF?text=ETHGlobal",
  },
  {
    id: 2,
    name: "Solana Hacker House",
    date: "September 2023",
    location: "Berlin, Germany",
    description: "Developed a high-frequency trading bot on Solana.",
    award: "3rd Place DeFi Track",
    image: "https://placehold.co/600x400/1e1e1e/FFF?text=Solana",
  },
  {
    id: 3,
    name: "Chainlink Constellation",
    date: "November 2023",
    location: "Online",
    description: "Created a cross-chain NFT bridge using CCIP.",
    award: "Top 20 Finalist",
    image: "https://placehold.co/600x400/1e1e1e/FFF?text=Chainlink",
  },
];
