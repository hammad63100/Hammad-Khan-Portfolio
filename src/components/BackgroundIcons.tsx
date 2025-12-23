import React from 'react';

// TechIcon component with SVG definitions
const TechIcon = ({ name, color }: { name: string; color: string }) => {
  const icons: Record<string, JSX.Element> = {
    ethereum: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 0l-0.2 0.7v21.2l0.2 0.2 9.8-5.8z"/><path d="M16 0l-9.8 16.3 9.8 5.8v-10.5z" opacity="0.6"/><path d="M16 23.8l-0.1 0.1v7.5l0.1 0.3 9.8-13.8z"/><path d="M16 31.7v-7.9l-9.8-5.9z" opacity="0.6"/><path d="M16 22.1l9.8-5.8-9.8-4.5z" opacity="0.2"/><path d="M6.2 16.3l9.8 5.8v-10.3z" opacity="0.6"/>
      </svg>
    ),
    polygon: (
      <svg viewBox="0 0 38 33" className="w-full h-full" fill={color}>
        <path d="M29 10.2c-0.7-0.4-1.6-0.4-2.4 0l-5.6 3.3-3.8 2.1-5.5 3.3c-0.7 0.4-1.6 0.4-2.4 0l-4.3-2.6c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8 0.4-1.6 1.2-2.1l4.3-2.5c0.7-0.4 1.6-0.4 2.4 0l4.3 2.6c0.7 0.4 1.2 1.2 1.2 2.1v3.3l3.8-2.2v-3.4c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4 0l-8.2 4.8c-0.8 0.4-1.2 1.2-1.2 2v9.4c0 0.8 0.4 1.6 1.2 2.1l8.1 4.7c0.7 0.4 1.6 0.4 2.4 0l5.5-3.2 3.8-2.2 5.5-3.2c0.7-0.4 1.6-0.4 2.4 0l4.3 2.5c0.7 0.4 1.2 1.2 1.2 2.1v5c0 0.8-0.4 1.6-1.2 2.1l-4.2 2.5c-0.7 0.4-1.6 0.4-2.4 0l-4.3-2.5"/>
      </svg>
    ),
    solana: (
      <svg viewBox="0 0 397 312" className="w-full h-full" fill={color}>
        <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"/><path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"/><path d="M332.1 120.9c-2.4-2.4-5.7-3.8-9.2-3.8H5.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"/>
      </svg>
    ),
    bsc: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 2l-3 3 3 3 3-3zM8 10l-3 3 3 3 3-3zM16 10l-3 3 3 3 3-3zM24 10l-3 3 3 3 3-3zM16 18l-3 3 3 3 3-3zM8 18l-3 3 3 3 3-3zM24 18l-3 3 3 3 3-3zM16 26l-3 3 3 3z"/>
      </svg>
    ),
    bitcoin: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm4.5 11c.828 0 1.5.672 1.5 1.5v.5h1v1h-1v1h1v1h-1v.5c0 .828-.672 1.5-1.5 1.5h-.5v2h-1v-2h-1v2h-1v-2h-1v2h-1v-2h-.5c-.828 0-1.5-.672-1.5-1.5v-5c0-.828.672-1.5 1.5-1.5h.5V9h1v2h1V9h1v2h1V9h1v2zm-1 6v-4h-5v4z"/>
      </svg>
    ),
    hyperledger: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M4 8h8v2H4zM4 14h8v2H4zM4 20h8v2H4zM20 8h8v2h-8zM20 14h8v2h-8zM20 20h8v2h-8zM14 4h4v24h-4z"/>
      </svg>
    ),
    solidity: (
      <svg viewBox="0 0 520 520" className="w-full h-full" fill={color}>
        <path d="M352.9 96.3l-86.2 149.4h-172.4l86.2-149.4z" opacity="0.45"/><path d="M180.5 245.7h172.4l-86.2 149.4z" opacity="0.6"/><path d="M266.7 245.7l86.2-149.4 86.2 149.4z" opacity="0.8"/><path d="M352.9 245.7H180.5l86.2-149.4z" opacity="0.45"/><path d="M266.7 395.1l-86.2-149.4H352.9z" opacity="0.6"/><path d="M180.5 245.7l-86.2 149.4-86.2-149.4z" opacity="0.8"/>
      </svg>
    ),
    rust: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 2c7.7 0 14 6.3 14 14s-6.3 14-14 14S2 23.7 2 16 8.3 2 16 2zm0 4c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S21.5 6 16 6z" opacity="0.6"/>
        <path d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-1 3h2v3h1.5l1.5 3h-2l-1-2h-2v2h-2v-6z"/>
      </svg>
    ),
    hardhat: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 4c-2.2 0-4 1.8-4 4v2H8c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-4V8c0-2.2-1.8-4-4-4zm-6 14v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8z"/>
      </svg>
    ),
    truffle: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 4c-3 0-6 2-8 5s-3 7-2 10l2-1c-1-3 0-6 2-8s5-4 8-4c4 0 7 3 8 7l2 1c0-5-4-10-10-10zm0 8c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4zm0 12c3 0 6-2 8-5l-2-1c-1 2-3 4-6 4s-5-2-6-4l-2 1c2 3 5 5 8 5z"/>
      </svg>
    ),
    web3: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 2L4 8v8c0 7.7 5.1 14.9 12 16 6.9-1.1 12-8.3 12-16V8zm0 4l8 4v6c0 5.5-3.4 10.4-8 11.5V6z"/>
      </svg>
    ),
    ethersjs: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 2l-0.2 0.7v21.2l0.2 0.2 9.8-5.8z"/><path d="M16 0l-9.8 16.3 9.8 5.8v-10.5z" opacity="0.6"/><path d="M16 23.8l-0.1 0.1v7.5l0.1 0.3 9.8-13.8z"/><path d="M16 31.7v-7.9l-9.8-5.9z" opacity="0.6"/><circle cx="24" cy="8" r="2" fill={color}/><text x="24" y="10" fontSize="3" textAnchor="middle" fill="white" fontWeight="bold">JS</text>
      </svg>
    ),
    metamask: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M27.2 3.6l-9.5 7.1 1.8-4.2z"/><path d="M4.8 3.6l9.4 7.2-1.7-4.3zm18.8 17.1l-2.5 3.9 5.4 1.5 1.5-5.2zm-21 0.2l1.5 5.2 5.4-1.5-2.5-3.9z"/><path d="M9.3 13.4l-1.5 2.3 5.4.2-.2-5.8zm13.4 0l-3.8-3.4-.1 5.9 5.4-.2zm-13.2 9.7l3.2-1.6-2.8-2.2zm7.8-1.6l3.2 1.6-.4-3.8z"/>
      </svg>
    ),
    ipfs: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 2l12 7v14l-12 7-12-7V9zm0 3.5L7.5 9v10l8.5 5 8.5-5V9z"/>
      </svg>
    ),
    chainlink: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 0l-3 1.7v8.6L16 8.6l3 1.7V1.7zM16 32l3-1.7v-8.6L16 23.4l-3-1.7v8.6zM2.3 8l-0.6 3.5 7.4 4.3L11.8 14 9 12.3zM29.7 8l-2.7 4.3 2.7 1.5 7.4-4.3L36.5 6zm-7.9 8l-2.7-1.5-3 1.7 3 1.7 2.7-1.5 7.4 4.3.6-3.5z"/>
      </svg>
    ),
    ganache: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M6 10c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4zm6 2v8h2v-3h2v3h2v-8h-2v3h-2v-3z"/>
      </svg>
    ),
    remix: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 4c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4zm0 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm0 2v6l4 4"/>
      </svg>
    ),
    smartcontract: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M6 2v28h20V10l-8-8H6zM16 16l4 4-4 4-2-2 2-2-4-4 4-4 2 2-2 2z"/>
      </svg>
    ),
    dapp: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 2l-2 6h-6l5 4-2 6 5-4 5 4-2-6 5-4h-6zM8 16l-4 3v8l4 3h16l4-3v-8l-4-3zm4 4h8v4h-8z"/>
      </svg>
    ),
    wallet: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M26 8H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-2 12h-4c-1.1 0-2-.9-2-2s.9-2 2-2h4z"/>
      </svg>
    ),
    nft: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M4 4h24v24H4zM8 8v16h16V8zm4 4h8v2h-6v2h4v2h-4v4h-2z"/>
      </svg>
    ),
    dao: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 4a3 3 0 100 6 3 3 0 000-6zM7 11a3 3 0 100 6 3 3 0 000-6zM25 11a3 3 0 100 6 3 3 0 000-6zM16 22a3 3 0 100 6 3 3 0 000-6zM16 10v4M10.5 13l3 3M21.5 13l-3 3M16 18v4"/>
      </svg>
    ),
    defi: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm0 4c5.5 0 10 4.5 10 10s-4.5 10-10 10S6 21.5 6 16 10.5 6 16 6zm-2 4v2h-2v2h2v4h-2v2h2v2h4v-2h2v-2h-2v-4h2v-2h-2v-2z"/>
      </svg>
    ),
    token: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm1 24h-2v-2h2zm0-4h-2V8h2z"/>
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
      </svg>
    ),
    docker: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M18 9h3v3h-3zM14 9h3v3h-3zM10 9h3v3h-3zM14 5h3v3h-3zM10 5h3v3h-3zM6 9h3v3H6zM6 5h3v3H6zM2 13h3v3H2zM6 13h3v3H6zM10 13h3v3h-3zM14 13h3v3h-3zM18 13h3v3h-3zM22 13h3v3h-3zM28.3 15.1c-1.1-.7-2.6-.9-3.8-.5-.2-1.3-1.2-2.4-2.3-3.2l-.5-.3-.3.4c-.6.8-.8 2-.7 3 .1.6.3 1.3.7 1.8-.5.3-1 .5-1.5.6-.8.2-1.6.3-2.4.3H.1l-.1.5c-.1 1.6.1 3.2.7 4.7.8 1.8 2 3.1 3.7 3.9 1.9.9 4.5 1.1 6.8.9 1.5-.1 3-.4 4.4-1 1.2-.5 2.3-1.1 3.2-2 1.5-1.4 2.4-3 3-4.9h.3c1.2 0 2.5-.3 3.4-1 .4-.3.8-.7 1-1.2l.2-.4z"/>
      </svg>
    ),
    graphql: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 2l12 7v14l-12 7-12-7V9zm0 4.6L8 10.3v7.4l8 3.7 8-3.7v-7.4zm0 12.7l-5-2.3v-5.5l5 2.3 5-2.3V17z"/>
      </svg>
    ),
    nodejs: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill={color}>
        <path d="M16 2.3l12 6.9v13.6l-12 6.9-12-6.9V9.2zm0 2.3L6.4 10.1v11.8L16 27.4l9.6-5.5V10.1zM16 10v12l-6-3.5v-5z"/>
      </svg>
    )
  };

  return icons[name] || null;
};

export const BackgroundIcons = () => {
    // List of all 28 icons
    const allIcons = [
        // Orbit 1 (4 icons)
        { name: "ethereum", color: "#627EEA" },
        { name: "polygon", color: "#8247E5" },
        { name: "solana", color: "#14F195" },
        { name: "bsc", color: "#F3BA2F" },
        
        // Orbit 2 (6 icons)
        { name: "bitcoin", color: "#F7931A" },
        { name: "hyperledger", color: "#2F3134" },
        { name: "solidity", color: "#363636" },
        { name: "rust", color: "#dea584" },
        { name: "hardhat", color: "#FFF100" },
        { name: "truffle", color: "#5E464D" },
        
        // Orbit 3 (8 icons)
        { name: "web3", color: "#F16822" },
        { name: "ethersjs", color: "#2B5797" },
        { name: "metamask", color: "#E2761B" },
        { name: "ipfs", color: "#65C2CB" },
        { name: "chainlink", color: "#375BD2" },
        { name: "ganache", color: "#E4A663" },
        { name: "remix", color: "#0D47A1" },
        { name: "smartcontract", color: "#64748B" },
        
        // Orbit 4 (10 icons)
        { name: "dapp", color: "#E74C3C" },
        { name: "wallet", color: "#3498DB" },
        { name: "nft", color: "#FF6B6B" },
        { name: "dao", color: "#9B59B6" },
        { name: "defi", color: "#00D395" },
        { name: "token", color: "#E74C3C" },
        { name: "github", color: "#ffffff" },
        { name: "docker", color: "#2496ED" },
        { name: "graphql", color: "#E10098" },
        { name: "nodejs", color: "#339933" },
    ];

    const orbit1 = allIcons.slice(0, 4);
    const orbit2 = allIcons.slice(4, 10);
    const orbit3 = allIcons.slice(10, 18);
    const orbit4 = allIcons.slice(18, 28);

    const OrbitRing = ({ icons, size, duration, reverse }: { icons: typeof allIcons, size: string, duration: string, reverse?: boolean }) => (
        <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 pointer-events-none`}
            style={{ 
                width: size, 
                height: size, 
                animation: `spin-slow ${duration} linear infinite` 
            }}
        >
            {icons.map((icon, i) => {
                const angle = (i * 360) / icons.length;
                return (
                    <div 
                        key={i} 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center"
                        style={{ 
                            transform: `rotate(${angle}deg) translate(calc(${size}/2)) rotate(-${angle}deg)` 
                        }}
                    >
                        <div 
                            className="w-full h-full opacity-30 brightness-150 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                            style={{ 
                                animation: `spin-slow ${duration} linear infinite reverse` 
                            }}
                        >
                            <TechIcon name={icon.name} color={icon.color} />
                        </div>
                    </div>
                );
            })}
        </div>
    );

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vmin] h-[100vmin] bg-primary/5 rounded-full blur-[100px] animate-pulse-glow" />
            
            {/* Orbits */}
            <OrbitRing icons={orbit1} size="40vmin" duration="40s" />
            <OrbitRing icons={orbit2} size="80vmin" duration="60s" />
            <OrbitRing icons={orbit3} size="120vmin" duration="80s" />
            <OrbitRing icons={orbit4} size="160vmin" duration="100s" />
        </div>
    );
};
