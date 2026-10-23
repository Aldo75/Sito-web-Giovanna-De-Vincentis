import React from 'react';

interface OfficialLogoProps {
  className?: string;
  height?: number | string;
  width?: number | string;
}

/**
 * Official vector replica of "logo_oro_page-0001 (1)-Photoroom.png"
 * Golden monogram G with 4 organic olive/leaf lobes on the left, central +,
 * and 'GIO EVENTS AND MORE' typography beneath.
 */
export const OfficialLogo: React.FC<OfficialLogoProps> = ({
  className = 'h-16 md:h-20 w-auto',
  height,
  width,
}) => {
  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 280 295"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-h-[85px] drop-shadow-xs"
        aria-label="GIO EVENTS AND MORE - Chef Giovanna De Vincentis"
        style={{ height, width }}
      >
        {/* GOLD COLOR GRADIENT */}
        <defs>
          <linearGradient id="gioGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C49B4E" />
            <stop offset="50%" stopColor="#A8813B" />
            <stop offset="100%" stopColor="#8E6A29" />
          </linearGradient>
          <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#8E6A29" floodOpacity="0.2" />
          </filter>
        </defs>

        <g filter="url(#logoShadow)">
          {/* 1. RIGHT SIDE: Solid Golden Arc of 'G' */}
          {/* Starts around top (145, 25), sweeps clockwise to bottom (145, 235), and has the horizontal crossbar */}
          <path
            d="M 148 24
               C 185 24, 218 45, 235 76
               C 246 95, 252 118, 252 142
               C 252 165, 245 188, 234 207
               C 216 238, 184 259, 146 259
               C 126 259, 108 254, 92 244
               C 114 238, 134 227, 148 211
               C 172 211, 204 195, 217 172
               C 224 160, 227 146, 227 130
               L 172 130
               L 172 154
               L 204 154
               C 201 168, 185 186, 160 192
               C 142 196, 115 190, 103 175
               C 112 160, 126 148, 142 140
               C 144 115, 155 92, 172 74
               C 165 72, 157 71, 148 71
               C 140 71, 132 72, 125 75
               C 118 56, 107 40, 94 28
               C 110 25, 129 24, 148 24 Z"
            fill="url(#gioGold)"
          />

          {/* Clean 'G' Body Outer Stroke to ensure exact geometric curvature */}
          <path
            d="M 136 28 C 190 28, 248 65, 248 140 C 248 215, 190 255, 136 255 C 112 255, 90 246, 74 233 C 86 216, 96 195, 102 172 C 112 186, 128 196, 150 196 C 185 196, 212 170, 212 138 L 165 138 L 165 158 L 188 158 C 182 172, 168 180, 150 180 C 128 180, 114 165, 114 140 C 114 115, 130 98, 152 98 C 166 98, 178 105, 185 116 L 204 98 C 191 80, 172 72, 150 72 C 144 72, 138 73, 132 75 C 122 55, 108 39, 92 28 C 105 28, 120 28, 136 28 Z"
            fill="url(#gioGold)"
          />

          {/* 2. CENTRAL CROSS '+' with rounded caps */}
          <rect x="146" y="132" width="16" height="30" rx="8" fill="url(#gioGold)" />
          <rect x="139" y="139" width="30" height="16" rx="8" fill="url(#gioGold)" />

          {/* 3. LEFT 4 ORGANIC LOBES (Olive Leaves / Floral Petals Contour) */}
          {/* Lobe 1: Top Lobe */}
          <path
            d="M 94 28
               C 85 14, 70 8, 54 18
               C 42 26, 44 45, 54 56
               C 62 65, 78 72, 88 88
               C 98 75, 112 60, 108 42
               C 105 32, 100 28, 94 28 Z"
            stroke="url(#gioGold)"
            strokeWidth="7"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />

          {/* Lobe 2: Upper Middle Lobe */}
          <path
            d="M 52 64
               C 35 56, 18 68, 14 86
               C 10 102, 25 115, 42 118
               C 58 120, 75 110, 92 118
               C 88 100, 85 85, 72 74
               C 64 66, 58 64, 52 64 Z"
            stroke="url(#gioGold)"
            strokeWidth="7"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />

          {/* Lobe 3: Lower Middle Lobe */}
          <path
            d="M 44 135
               C 22 135, 12 152, 14 172
               C 16 190, 32 202, 52 200
               C 68 198, 78 184, 94 186
               C 95 168, 88 152, 74 142
               C 64 135, 54 135, 44 135 Z"
            stroke="url(#gioGold)"
            strokeWidth="7"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />

          {/* Lobe 4: Bottom Lobe */}
          <path
            d="M 72 216
               C 56 225, 54 246, 68 260
               C 82 274, 102 270, 114 252
               C 122 240, 120 220, 122 202
               C 105 204, 90 208, 80 214
               L 72 216 Z"
            stroke="url(#gioGold)"
            strokeWidth="7"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* 4. TEXT BENEATH: GIO EVENTS AND MORE */}
        <text
          x="10"
          y="288"
          fill="#A8813B"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="22"
          fontWeight="800"
          letterSpacing="0.08em"
        >
          GIO
        </text>
        <text
          x="62"
          y="288"
          fill="#A8813B"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="22"
          fontWeight="300"
          letterSpacing="0.24em"
        >
          EVENTS AND MORE
        </text>
      </svg>
    </div>
  );
};

export default OfficialLogo;
