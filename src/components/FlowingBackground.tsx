const FlowingBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-secondary/20 blur-3xl animate-pulse-glow" style={{ animationDelay: '-2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '-4s' }} />
      
      {/* Flowing SVG lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(214 87% 50%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(214 87% 50%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(282 56% 55%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(282 56% 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(282 56% 55%)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(145 63% 55%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(145 63% 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(145 63% 55%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(214 87% 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Flowing curves */}
        <path
          d="M-100 300 Q200 200, 500 350 T900 280 T1300 400 T1600 300"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          fill="none"
          className="flow-line"
        />
        <path
          d="M-100 500 Q300 400, 600 550 T1000 450 T1400 580 T1600 500"
          stroke="url(#lineGradient2)"
          strokeWidth="1.5"
          fill="none"
          className="flow-line"
          style={{ animationDelay: '-1s' }}
        />
        <path
          d="M-100 700 Q250 600, 550 720 T950 650 T1350 750 T1600 680"
          stroke="url(#lineGradient3)"
          strokeWidth="1"
          fill="none"
          className="flow-line"
          style={{ animationDelay: '-2s' }}
        />
      </svg>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
};

export default FlowingBackground;
