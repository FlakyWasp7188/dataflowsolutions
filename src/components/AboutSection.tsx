import { CheckCircle2 } from "lucide-react";

const values = [
  "Built by data scientists, for everyone",
  "Privacy-first architecture with enterprise-grade security",
  "Open API for seamless integrations",
  "24/7 support from real humans who care",
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border border-border/50" />
              <div className="absolute inset-8 rounded-full border border-primary/30" />
              <div className="absolute inset-16 rounded-full border border-secondary/30" />
              <div className="absolute inset-24 rounded-full bg-gradient-primary opacity-20 blur-xl" />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gradient-primary mb-2">99%</div>
                  <div className="text-muted-foreground">Customer Satisfaction</div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute top-8 right-0 glass px-4 py-2 rounded-xl animate-float">
                <div className="text-sm text-muted-foreground">Data Points Analyzed</div>
                <div className="text-xl font-bold text-accent">2.5B+</div>
              </div>
              <div className="absolute bottom-16 left-0 glass px-4 py-2 rounded-xl animate-float-delayed">
                <div className="text-sm text-muted-foreground">Active Users</div>
                <div className="text-xl font-bold text-secondary">50K+</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div>
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Our Mission
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Making data accessible to{" "}
              <span className="text-gradient-accent">everyone</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We believe powerful analytics shouldn't require a PhD. DataFlow was born 
              from a simple idea: what if understanding your data was as easy as having 
              a conversation? Our team of data scientists, engineers, and designers 
              work tirelessly to bridge the gap between complex data and clear decisions.
            </p>
            
            {/* Values list */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
