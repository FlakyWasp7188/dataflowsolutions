import { ArrowRight, BarChart3, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./Logo";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Launching Q1 2026</span>
          </div>
          
          {/* Logo large */}
          <div className="flex justify-center mb-6">
            <Logo className="scale-150 origin-center" />
          </div>
          
          {/* Slogan */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gradient-primary mb-6">
            Data Done Right
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Transform complex data into crystal-clear insights. Our AI-powered dashboard 
            and intelligent chatbot make analytics accessible, actionable, and beautiful.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="glow" size="lg" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost" size="lg">
              Watch Demo
            </Button>
          </div>
          
          {/* Feature pills */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50">
              <BarChart3 className="h-4 w-4 text-primary" />
              <span className="text-sm">Real-time Analytics</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50">
              <MessageSquare className="h-4 w-4 text-secondary" />
              <span className="text-sm">AI Chatbot</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50">
              <div className="h-4 w-4 rounded-full bg-gradient-accent" />
              <span className="text-sm">Smart Insights</span>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/3 left-10 hidden lg:block animate-float">
          <div className="w-16 h-16 rounded-2xl bg-gradient-primary opacity-20 blur-sm" />
        </div>
        <div className="absolute bottom-1/3 right-10 hidden lg:block animate-float-delayed">
          <div className="w-20 h-20 rounded-full bg-gradient-accent opacity-15 blur-sm" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
