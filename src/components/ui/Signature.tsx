import React from 'react';

interface SignatureProps {
  className?: string;
  color?: string;
}

export const Signature: React.FC<SignatureProps> = ({
  className = 'w-64 h-20',
  color = '#B8860B',
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        viewBox="0 0 320 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
        aria-label="Firma autografa Giovanna De Vincentis"
      >
        <defs>
          <linearGradient id="signatureGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" />
            <stop offset="50%" stopColor="#E5C07B" />
            <stop offset="100%" stopColor="#8C6D2D" />
          </linearGradient>
          <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1" stdDeviation="0.8" floodColor="#C5A059" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Calligraphic G Initial Flourish */}
        <path
          d="M 28 58 C 18 48, 12 30, 26 18 C 38 7, 56 12, 54 30 C 52 46, 30 74, 18 82 C 14 85, 20 84, 38 72 C 55 60, 68 45, 78 38"
          stroke="url(#signatureGold)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#subtleGlow)"
        />

        {/* i - o - v - a - n - n - a connecting strokes */}
        <path
          d="M 78 38 L 84 46 M 85 30 L 85 32 M 85 46 C 88 40, 94 38, 99 44 C 103 49, 100 54, 94 54 C 88 54, 88 47, 98 44"
          stroke="url(#signatureGold)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M 101 44 L 107 53 L 115 39 M 115 45 C 112 43, 115 52, 120 52 C 124 52, 126 44, 128 41 L 128 53"
          stroke="url(#signatureGold)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M 129 44 C 131 40, 137 40, 139 52 M 140 44 C 142 39, 148 40, 150 52 M 151 46 C 149 43, 153 52, 157 52 C 160 52, 162 44, 163 41 L 164 52"
          stroke="url(#signatureGold)"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        {/* Capital D and e */}
        <path
          d="M 176 22 L 176 56 M 176 25 C 182 22, 195 24, 196 35 C 197 45, 186 54, 172 54"
          stroke="url(#signatureGold)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M 198 47 C 204 43, 203 52, 198 52"
          stroke="url(#signatureGold)"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        {/* Capital V and Vincentis signature loop */}
        <path
          d="M 212 24 L 219 54 L 230 36 M 231 44 L 234 52 M 235 44 C 238 41, 243 43, 244 52 M 245 44 C 248 41, 252 43, 254 52 M 256 47 C 258 43, 263 43, 262 50 C 261 54, 258 53, 263 52"
          stroke="url(#signatureGold)"
          strokeWidth="2.0"
          strokeLinecap="round"
        />
        <path
          d="M 264 43 C 268 40, 271 43, 273 52 M 274 38 L 274 53 M 269 44 L 278 44 M 278 44 L 281 52 M 283 45 C 286 42, 289 44, 287 49 C 285 53, 280 54, 290 51"
          stroke="url(#signatureGold)"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        {/* Underline flourish paraph */}
        <path
          d="M 60 72 C 110 65, 190 62, 295 60 C 310 59, 270 70, 240 73"
          stroke="url(#signatureGold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    </div>
  );
};

export default Signature;
