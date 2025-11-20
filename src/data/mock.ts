export const profile = {
  name: "Jules",
  title: "Web3 Fullstack Developer",
  subtitle: "Epitech Student | Blockchain & Finance Enthusiast",
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
    tags: ["Next.js", "Solidity", "Ethers.js", "Tailwind"],
    image: "https://placehold.co/600x400/1e1e1e/FFF?text=DeFi+Exchange",
    link: "#",
  },
  {
    id: 2,
    title: "NFT Marketplace",
    description: "A platform for artists to mint and sell their digital art as NFTs. Features auction mechanics and royalty support.",
    tags: ["React", "Hardhat", "IPFS", "Ethereum"],
    image: "https://placehold.co/600x400/1e1e1e/FFF?text=NFT+Marketplace",
    link: "#",
  },
  {
    id: 3,
    title: "Crypto Wallet Tracker",
    description: "A dashboard to track your crypto assets across multiple chains. Real-time price updates and portfolio analysis.",
    tags: ["Vue.js", "Web3.js", "CoinGecko API"],
    image: "https://placehold.co/600x400/1e1e1e/FFF?text=Wallet+Tracker",
    link: "#",
  },
  {
    id: 4,
    title: "DAO Voting System",
    description: "On-chain voting system for decentralized autonomous organizations. Secure and transparent governance.",
    tags: ["Solidity", "Next.js", "Graph Protocol"],
    image: "https://placehold.co/600x400/1e1e1e/FFF?text=DAO+System",
    link: "#",
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
