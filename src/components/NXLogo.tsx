export default function NXLogo({ className = "", size = 80 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* N shape - left */}
      <polygon
        points="30,170 30,30 60,30 60,105 90,30 120,30 70,155 60,170"
        fill="url(#nxGrad)"
      />
      {/* X shape - right */}
      <polygon
        points="95,30 120,30 140,80 160,30 185,30 155,100 185,170 160,170 140,120 120,170 95,170 125,100"
        fill="url(#nxGrad)"
      />
      <defs>
        <linearGradient id="nxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EDFF20" />
          <stop offset="100%" stopColor="#C3FF20" />
        </linearGradient>
      </defs>
    </svg>
  );
}
