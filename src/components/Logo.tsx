const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <svg
        viewBox="0 0 280 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-auto"
      >
        {/* D */}
        <text
          x="0"
          y="38"
          className="fill-foreground"
          style={{ fontSize: "42px", fontWeight: 700, fontFamily: "Inter" }}
        >
          Da
        </text>
        
        {/* Stylized flowing 't' */}
        <g transform="translate(60, 0)">
          {/* Main stem of t */}
          <path
            d="M12 8 L12 38 Q12 44 18 44 Q24 44 30 40"
            stroke="url(#flowGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Crossbar that flows */}
          <path
            d="M2 18 Q12 18 22 16 Q32 14 42 18"
            stroke="url(#flowGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Decorative flow continuation */}
          <path
            d="M30 40 Q38 36 46 38 Q54 40 58 35"
            stroke="hsl(145 63% 49%)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
        </g>
        
        {/* aFlow */}
        <text
          x="118"
          y="38"
          className="fill-foreground"
          style={{ fontSize: "42px", fontWeight: 700, fontFamily: "Inter" }}
        >
          aFlow
        </text>
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(214 87% 50%)" />
            <stop offset="50%" stopColor="hsl(282 56% 55%)" />
            <stop offset="100%" stopColor="hsl(145 63% 55%)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
