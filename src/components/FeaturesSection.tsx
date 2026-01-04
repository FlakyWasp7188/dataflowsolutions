import { BarChart3, Bot, Zap, Layers, LineChart, MessageSquare } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Interactive Dashboards",
    description: "Visualize trends and KPIs in real time with clean, modern charts that make complex data easy to understand.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: MessageSquare,
    title: "Chatbot Analysis",
    description: "Ask questions in plain language and get instant insights powered by AI — no technical expertise required.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Zap,
    title: "Smart Insights",
    description: "Automatically discover hidden patterns and actionable intelligence from your data.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Layers,
    title: "Unified Dashboard",
    description: "Bring all your data sources together into one cohesive view for clarity and confidence.",
    gradient: "from-primary to-accent",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Stay ahead of the curve with AI‑driven forecasts and trend predictions you can trust.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Bot,
    title: "Custom Reports",
    description: "Generate polished reports with a click and share insights in formats stakeholders love.",
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
            <span className="text-gradient-primary">Data</span> Done{" "}
            <span className="text-gradient-accent">Right</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every feature is designed to transform complexity into clarity, helping you make confident decisions.
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
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
              />
              
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
