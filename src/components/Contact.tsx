
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send,
  MessageSquare,
  Globe,
  Terminal
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Handshake Complete",
      description: "Message transmitted successfully. I'll get back to you within 24 hours.",
    });
  };

  return (
    <section id="contact" className="py-32 relative bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-[0.3em]">
                <MessageSquare className="w-4 h-4" />
                Connection
              </div>
              <h2 className="text-5xl lg:text-7xl font-headline font-bold tracking-tighter leading-none">
                Let's Build <br />
                <span className="text-gradient">Something Great</span>
              </h2>
              <p className="text-muted-foreground text-xl max-w-md leading-relaxed">
                Whether it's a new enterprise platform or an innovative AI tool, I'm ready to bring your vision to life.
              </p>
            </div>

            <div className="grid gap-6 max-w-sm">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-secondary/20 border border-white/5 group hover:border-accent/30 transition-all">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em] mb-1">Direct Line</p>
                  <p className="text-lg font-headline font-bold">alex@devsphere.io</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-2xl bg-secondary/20 border border-white/5 group hover:border-primary/30 transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em] mb-1">HQ Location</p>
                  <p className="text-lg font-headline font-bold">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-6">
              <p className="text-xs font-black text-muted-foreground uppercase tracking-[0.3em]">Social Networks</p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Terminal, href: '#', label: 'Dev.to' }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    className="w-12 h-12 rounded-xl bg-secondary/40 border border-white/5 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all transform hover:-translate-y-1 shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-10 lg:p-14 rounded-[3rem] border border-white/10 relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
                 <Send className="w-32 h-32 rotate-12" />
              </div>
              
              <form onSubmit={handleSendMessage} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Full Name</label>
                    <Input placeholder="John Doe" className="bg-secondary/40 border-white/10 h-14 rounded-xl focus:ring-accent" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="bg-secondary/40 border-white/10 h-14 rounded-xl focus:ring-accent" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Inquiry Subject</label>
                  <Input placeholder="Enterprise Platform Architecture" className="bg-secondary/40 border-white/10 h-14 rounded-xl focus:ring-accent" required />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Detailed Brief</label>
                  <Textarea placeholder="Describe your vision or technical challenges..." className="bg-secondary/40 border-white/10 min-h-[180px] rounded-xl focus:ring-accent custom-scrollbar" required />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black h-16 text-lg rounded-2xl shadow-xl shadow-primary/20 transition-all group">
                  Transmit Message
                  <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
            
            {/* Status Indicator */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full shadow-xl">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Ready for transmission</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-40 pt-16 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center text-primary font-headline font-bold">DS</div>
            <span className="text-sm font-headline font-bold tracking-tight">DevSphere Portfolio</span>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.3em]">
              &copy; {new Date().getFullYear()} Alex Rivera. Architected with Precision.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] font-black text-muted-foreground hover:text-accent transition-colors tracking-widest uppercase">Privacy Policy</a>
              <a href="#" className="text-[10px] font-black text-muted-foreground hover:text-accent transition-colors tracking-widest uppercase">Terms of Service</a>
            </div>
          </div>

          <div className="text-[10px] font-code text-muted-foreground bg-white/5 px-3 py-1 rounded-md border border-white/5">
             v2.5.0-stable
          </div>
        </div>
      </footer>
    </section>
  );
}
