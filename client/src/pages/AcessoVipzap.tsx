import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

/*
Design Philosophy: Cyberpunk Terminal / Hacker Aesthetic
- Fake VIP access panel simulation
- Terminal-style interface with data streams
- Neon green text on black background
- Animated data loading effect
*/

export default function AcessoVipzap() {
  const [isVisible, setIsVisible] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  useEffect(() => {
    if (!dataLoaded) {
      const interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            setDataLoaded(true);
            return 100;
          }
          return prev + Math.random() * 30;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [dataLoaded]);

  const targetDevices = [
    { id: 'DEV-001', status: 'ATIVO', signal: '98%', location: 'São Paulo, BR' },
    { id: 'DEV-002', status: 'ATIVO', signal: '87%', location: 'Rio de Janeiro, BR' },
    { id: 'DEV-003', status: 'INATIVO', signal: '0%', location: 'Belo Horizonte, BR' },
    { id: 'DEV-004', status: 'ATIVO', signal: '92%', location: 'Brasília, BR' },
    { id: 'DEV-005', status: 'ATIVO', signal: '76%', location: 'Salvador, BR' },
  ];

  const interceptedData = [
    '> CONEXÃO ESTABELECIDA',
    '> CRIPTOGRAFIA: AES-256',
    '> PROTOCOLO: ZAPSPY-V2',
    '> AUTENTICAÇÃO: CONCLUÍDA',
    '> ACESSO VIP: LIBERADO',
  ];

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden scanlines">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, 0.05) 25%, rgba(0, 255, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, 0.05) 75%, rgba(0, 255, 0, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, 0.05) 25%, rgba(0, 255, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, 0.05) 75%, rgba(0, 255, 0, 0.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-80" 
           style={{ 
             backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, #dc2626 10px, #dc2626 20px)',
           }} 
      />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 border-b border-[#00ff00] border-opacity-30">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto w-full">
          <button
            onClick={() => setLocation('/')}
            className="text-[#00ff00] hover:text-[#00ff88] text-sm uppercase tracking-wider font-mono transition-colors"
            style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.5)' }}
          >
            ← VOLTAR
          </button>
          <h1 className="text-[#00ff00] text-lg uppercase tracking-[0.2em] font-mono"
              style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.5)' }}>
            ACESSO VIP ZAP
          </h1>
          <div className="w-20" />
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 pt-24 pb-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Status Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Status Card 1 */}
            <div className="border border-[#00ff00] border-opacity-50 p-4 bg-black bg-opacity-50 backdrop-blur"
                 style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.1)' }}>
              <div className="text-[#00ff00] text-xs uppercase tracking-wider mb-2 font-mono">Dispositivos Ativos</div>
              <div className="text-[#00ff00] text-3xl font-mono" style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.5)' }}>
                4/5
              </div>
              <div className="text-[#00ff00] text-xs opacity-60 mt-2 font-mono">Taxa de Sucesso: 80%</div>
            </div>

            {/* Status Card 2 */}
            <div className="border border-[#00ff00] border-opacity-50 p-4 bg-black bg-opacity-50 backdrop-blur"
                 style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.1)' }}>
              <div className="text-[#00ff00] text-xs uppercase tracking-wider mb-2 font-mono">Dados Interceptados</div>
              <div className="text-[#00ff00] text-3xl font-mono" style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.5)' }}>
                {Math.floor(scanProgress * 1.5)} MB
              </div>
              <div className="text-[#00ff00] text-xs opacity-60 mt-2 font-mono">Velocidade: 2.4 Mbps</div>
            </div>

            {/* Status Card 3 */}
            <div className="border border-[#00ff00] border-opacity-50 p-4 bg-black bg-opacity-50 backdrop-blur"
                 style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.1)' }}>
              <div className="text-[#00ff00] text-xs uppercase tracking-wider mb-2 font-mono">Segurança</div>
              <div className="text-[#00ff00] text-3xl font-mono" style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.5)' }}>
                100%
              </div>
              <div className="text-[#00ff00] text-xs opacity-60 mt-2 font-mono">Criptografia: AES-256</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 border border-[#00ff00] border-opacity-50 p-4 bg-black bg-opacity-50 backdrop-blur"
               style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.1)' }}>
            <div className="text-[#00ff00] text-xs uppercase tracking-wider mb-3 font-mono">Escaneamento de Dados</div>
            <div className="w-full bg-black border border-[#00ff00] border-opacity-30 h-8 relative overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#00ff00] to-[#00ff88] transition-all duration-300"
                style={{
                  width: `${Math.min(scanProgress, 100)}%`,
                  boxShadow: '0 0 20px rgba(0, 255, 0, 0.8)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-black text-xs font-mono font-bold">{Math.floor(Math.min(scanProgress, 100))}%</span>
              </div>
            </div>
          </div>

          {/* Intercepted Data */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Terminal Output */}
            <div className="border border-[#00ff00] border-opacity-50 p-4 bg-black bg-opacity-50 backdrop-blur font-mono"
                 style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.1)' }}>
              <div className="text-[#00ff00] text-xs uppercase tracking-wider mb-4">Saída do Terminal</div>
              <div className="space-y-2 text-[#00ff00] text-xs">
                {interceptedData.map((line, idx) => (
                  <div 
                    key={idx}
                    style={{
                      animation: `fadeInLine 0.5s ease-out ${idx * 0.2}s both`,
                      textShadow: '0 0 5px rgba(0, 255, 0, 0.5)',
                    }}
                  >
                    {line}
                  </div>
                ))}
                {dataLoaded && (
                  <div style={{ animation: 'fadeInLine 0.5s ease-out 1s both', textShadow: '0 0 5px rgba(0, 255, 0, 0.5)' }}>
                    &gt; SISTEMA PRONTO
                  </div>
                )}
              </div>
            </div>

            {/* Device List */}
            <div className="border border-[#00ff00] border-opacity-50 p-4 bg-black bg-opacity-50 backdrop-blur"
                 style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.1)' }}>
              <div className="text-[#00ff00] text-xs uppercase tracking-wider mb-4 font-mono">Dispositivos Detectados</div>
              <div className="space-y-3">
                {targetDevices.map((device, idx) => (
                  <div 
                    key={device.id}
                    className="border-l-2 border-[#00ff00] border-opacity-50 pl-3 py-2"
                    style={{
                      animation: `slideInLeft 0.5s ease-out ${idx * 0.1}s both`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#00ff00] text-xs font-mono" style={{ textShadow: '0 0 5px rgba(0, 255, 0, 0.5)' }}>
                        {device.id}
                      </span>
                      <span className={`text-xs font-mono ${device.status === 'ATIVO' ? 'text-[#00ff00]' : 'text-[#ff0000]'}`}
                            style={{ textShadow: `0 0 5px rgba(${device.status === 'ATIVO' ? '0, 255, 0' : '255, 0, 0'}, 0.5)` }}>
                        {device.status}
                      </span>
                    </div>
                    <div className="text-[#00ff00] text-xs opacity-60 font-mono">{device.location}</div>
                    <div className="text-[#00ff00] text-xs opacity-60 font-mono">Sinal: {device.signal}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Warning Message */}
          <div className="mt-8 border-2 border-[#ff0000] border-opacity-50 p-4 bg-black bg-opacity-50 backdrop-blur"
               style={{ boxShadow: '0 0 20px rgba(255, 0, 0, 0.2)' }}>
            <div className="text-[#ff0000] text-xs uppercase tracking-wider font-mono" style={{ textShadow: '0 0 10px rgba(255, 0, 0, 0.5)' }}>
              ⚠ AVISO DE SEGURANÇA
            </div>
            <div className="text-[#ff0000] text-xs mt-2 opacity-80 font-mono">
              Este é um simulador de demonstração. Nenhum dispositivo real foi acessado. Sistema de vigilância fictício para fins educacionais.
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#00ff00] border-opacity-30 p-4 z-20">
        <div className="flex items-center justify-between text-[#00ff00] text-xs opacity-60 font-mono max-w-7xl mx-auto w-full">
          <div>ZAPSPY v2.0 | VIP ACCESS PANEL</div>
          <div>STATUS: {dataLoaded ? 'OPERACIONAL' : 'INICIALIZANDO'}</div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInLine {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
