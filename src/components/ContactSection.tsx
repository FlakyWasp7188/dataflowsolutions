import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-primary opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/40 via-transparent to-transparent" />
            
            {/* Content */}
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Ready to transform your data?
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                Join thousands of companies making smarter decisions with DataFlow. 
                Start your free trial today—no credit card required.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="secondary" size="lg" className="group bg-white text-primary hover:bg-white/90">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="ghost" size="lg" className="text-white border-white/30 hover:bg-white/10">
                  Talk to Sales
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact info cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="glass p-6 rounded-2xl text-center group hover:bg-card/80 transition-colors">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">Email Us</h4>
              <p className="text-muted-foreground text-sm">hello@dataflow.io</p>
            </div>
            
            <div className="glass p-6 rounded-2xl text-center group hover:bg-card/80 transition-colors">
              <div className="inline-flex p-3 rounded-xl bg-secondary/10 mb-4 group-hover:bg-secondary/20 transition-colors">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="font-semibold mb-1">Call Us</h4>
              <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
            </div>
            
            <div className="glass p-6 rounded-2xl text-center group hover:bg-card/80 transition-colors">
              <div className="inline-flex p-3 rounded-xl bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-1">Visit Us</h4>
              <p className="text-muted-foreground text-sm">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
