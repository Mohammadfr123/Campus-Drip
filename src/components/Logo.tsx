import React from 'react';

export default function Logo({ className = "" }: { className?: string }) {
  // To use your actual logo:
  // 1. Rename your logo file to 'logo.png'
  // 2. Upload it to the 'public/' folder in the file explorer on the left.
  const logoSrc = "/logo.png";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-12 h-12">
        <img
          src={logoSrc}
          alt="Campus Drip"
          className="w-full h-full object-contain transform hover:scale-110 transition-transform relative z-10"
          onError={(e) => {
            // Fallback if the logo hasn't been uploaded yet
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement?.classList.add('bg-[var(--brand-primary)]', 'rounded-sm', 'flex', 'items-center', 'justify-center');
            const span = document.createElement('span');
            span.className = 'text-black font-black italic text-xl';
            span.innerText = 'Campus Drip';
            e.currentTarget.parentElement?.appendChild(span);
          }}
        />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#EBFF00] blur-xl opacity-20 hover:opacity-50 transition-opacity pointer-events-none" />
      </div>
    </div>
  );
}
