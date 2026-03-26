
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Sparkles, Binary } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section id="about" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background decoration - Glowing Orbs */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] -z-10" />
      
      {/* Background Pattern - Dots/Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4" />
            <span>OPEN FOR COLLABORATION</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-headline font-bold leading-[1.1] tracking-tighter">
              Engineering <br />
              <span className="text-gradient">Scalable</span> <br />
              Systems<span className="text-accent">.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-body">
              I'm Abdelkader Talbi, a Full-Stack Developer crafting resilient digital ecosystems with Next.js, Cloud-Native architectures, and Generative AI.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-10 rounded-xl shadow-lg shadow-primary/20 group">
              Explore Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-white/5 font-bold h-14 px-10 rounded-xl">
              Get In Touch
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-10">
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-headline tracking-tighter">06+</span>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.2em]">Years Exp.</span>
            </div>
            <div className="h-10 w-px bg-border/50" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-headline tracking-tighter">50+</span>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.2em]">Live Proj.</span>
            </div>
            <div className="h-10 w-px bg-border/50" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-headline tracking-tighter">15k+</span>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.2em]">GH Commits</span>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_80px_-20px_rgba(102,102,204,0.3)] bg-background">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={800}
                height={1000}
                priority
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                data-ai-hint={heroImage.imageHint}
              />
            )}
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent pointer-events-none" />
          </div>
          
          {/* Floating UI Elements */}
          <div className="absolute -top-10 -right-4 glass-card p-5 rounded-2xl flex items-center gap-4 animate-bounce-slow shadow-2xl border-accent/20">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-0.5">Focus</p>
              <p className="text-sm font-bold font-headline">Architecture & Performance</p>
            </div>
          </div>
          
          <div className="absolute -bottom-12 -left-8 glass-card p-6 rounded-2xl shadow-2xl max-w-[280px] border-primary/20">
            <div className="flex gap-1.5 mb-3">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent/50" />
              ))}
            </div>
            <p className="text-xs leading-relaxed font-body italic text-muted-foreground mb-4">
              "The most impactful engineer we've hired. Alex bridges the gap between complex logic and seamless UX."
            </p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-secondary border border-border flex items-center justify-center">
                <Binary className="w-3 h-3 text-primary" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest">CTO @ FinTech Global</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
