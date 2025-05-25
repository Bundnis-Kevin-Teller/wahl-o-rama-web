import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`relative backdrop-blur-md bg-white/20 rounded-xl border border-white/30 shadow-lg ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-xl opacity-60"></div>
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;