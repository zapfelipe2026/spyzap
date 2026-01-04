import { useEffect, useState } from 'react';
import MatrixRain from '@/components/MatrixRain';

/*
Design Philosophy: Cyberpunk Terminal / Hacker Aesthetic
- Centralized layout with logo, title, and subtitle
- Status indicators in corners
- Scanline effect overlay
- Matrix rain background
- Neon green glow effects
*/

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in animation on mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden scanlines">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-80" 
           style={{ 
             backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, #dc2626 10px, #dc2626 20px)',
           }} 
      />

      {/* Status Indicators */}
      <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
        <div className="w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
        <span className="text-[#00ff00] text-xs uppercase tracking-wider font-mono">ONLINE</span>
      </div>

      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        <span className="text-[#00ff00] text-xs uppercase tracking-wider font-mono">SEGURO</span>
        <div className="w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
      </div>

      {/* Main Content */}
      <div className={`relative z-10 flex flex-col items-center justify-center min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Logo Container */}
        <div className="mb-8 relative">
          {/* Outer rotating circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border-2 border-[#00ffff] opacity-30 rotate-slow" 
                 style={{ 
                   borderStyle: 'dashed',
                   borderSpacing: '10px'
                 }} 
            />
          </div>
          
          {/* Main logo circle */}
          <div className="relative w-32 h-32 rounded-full border-2 border-[#00ffff] flex items-center justify-center pulse-glow"
               style={{
                 boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.2)'
               }}>
            {/* Spy/Bug Icon */}
            <svg 
              viewBox="0 0 100 100" 
              className="w-16 h-16 text-[#00ffff]"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))'
              }}
            >
              {/* Simplified spy bug icon */}
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="6" fill="currentColor" />
              
              {/* Antennae */}
              <line x1="50" y1="30" x2="50" y2="15" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="15" r="3" fill="currentColor" />
              
              {/* Side sensors */}
              <line x1="30" y1="50" x2="15" y2="50" stroke="currentColor" strokeWidth="2" />
              <line x1="70" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="2" />
              <circle cx="15" cy="50" r="3" fill="currentColor" />
              <circle cx="85" cy="50" r="3" fill="currentColor" />
              
              {/* Bottom sensor */}
              <line x1="50" y1="70" x2="50" y2="85" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="85" r="3" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="neon-text text-6xl md:text-7xl font-bold mb-4 tracking-[0.2em] uppercase"
            style={{
              animation: 'fadeInScale 1s ease-out 0.3s both'
            }}>
          ZapSpy
        </h1>

        {/* Subtitle */}
        <p className="text-[#00ff00] text-sm md:text-base tracking-[0.15em] uppercase opacity-80"
           style={{
             textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
             animation: 'fadeInScale 1s ease-out 0.6s both'
           }}>
          [ SISTEMA DE VIGILÂNCIA SECRETA ]
        </p>

        {/* Decorative elements */}
        <div className="absolute bottom-8 left-8 text-[#00ff00] text-xs opacity-40 font-mono">
          <div>SYS_ID: ZS-4472</div>
          <div>STATUS: ACTIVE</div>
        </div>

        <div className="absolute bottom-8 right-8 text-[#00ff00] text-xs opacity-40 font-mono text-right">
          <div>ENCRYPTION: AES-256</div>
          <div>UPTIME: 99.9%</div>
        </div>
      </div>

      {/* Additional CSS animations */}
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
