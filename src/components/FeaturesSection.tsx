import { BarChart2, Bot, Eye, Layers, LineChart, Zap } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Crystal Clarity",
    description: "See your data like never before with intuitive visualizations that reveal hidden patterns and trends.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Bot,
    title: "AI-Powered Chat",
    description: "Ask questions in plain English. Our intelligent chatbot translates your queries into actionable insights.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Lightning-fast analytics that keep pace with your business. No lag, no delays, just instant answers.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Layers,
    title: "Unified Dashboard",
    description: "Connect all your data sources into one beautiful, cohesive view. Simplicity meets power.",
    gradient: "from-primary to-accent",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Stay ahead of the curve with AI-driven forecasts and trend predictions you can trust.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: BarChart2,
    title: "Custom Reports",
    description: "Generate stunning reports with a click. Share insights with stakeholders in formats they love.",
    gradient: "from-accent to-secondary",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Features
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Clarity</span> meets{" "}
            <span className="text-gradient-accent">Insight</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every feature is designed to transform complexity into understanding, 
            helping you make decisions with confidence.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl glass hover:bg-card/80 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              {/* Content */}
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
