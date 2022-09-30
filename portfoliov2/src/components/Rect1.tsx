import React from "react";

interface OwnProps {
  className?: string;
}

const Rect1 = ({ className }: OwnProps) => {
  return (
    <svg
      width="702"
      height="486"
      viewBox="0 0 702 486"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_i_562_5090)">
        <path
          d="M109.876 16.2784L2.00612 460.278C-1.05271 472.869 8.48417 485 21.4408 485H578.377C587.69 485 595.77 478.572 597.865 469.498L700.346 25.498C703.238 12.9655 693.72 1 680.858 1H129.311C120.084 1 112.054 7.31224 109.876 16.2784Z"
          fill="#5552BE"
        />
      </g>
      <path
        d="M109.876 16.2784L2.00612 460.278C-1.05271 472.869 8.48417 485 21.4408 485H578.377C587.69 485 595.77 478.572 597.865 469.498L700.346 25.498C703.238 12.9655 693.72 1 680.858 1H129.311C120.084 1 112.054 7.31224 109.876 16.2784Z"
        stroke="#312E81"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <filter
          id="filter0_i_562_5090"
          x="0.430908"
          y="0"
          width="701.436"
          height="490"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="27" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_562_5090"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Rect1;
