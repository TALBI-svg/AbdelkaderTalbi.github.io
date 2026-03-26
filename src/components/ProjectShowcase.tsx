
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowUpRight, Monitor, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const projects = [
  {
    id: 'project-1',
    title: 'EcoMarket 2.0',
    category: 'E-Commerce Ecosystem',
    description: 'A robust multi-vendor marketplace built with Next.js 15, featuring a serverless event-driven architecture and real-time synchronization.',
    tech: ['Next.js', 'PostgreSQL', 'Redis', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: PlaceHolderImages.find(img => img.id === 'project-1')
  },
  {
    id: 'project-2',
    title: 'Analytica Pro',
    category: 'AI SaaS Dashboard',
    description: 'Real-time data visualization platform processing millions of telemetry points using WebSockets and specialized time-series databases.',
    tech: ['React', 'Python', 'D3.js', 'InfluxDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: PlaceHolderImages.find(img => img.id === 'project-2')
  },
  {
    id: 'project-3',
    title: 'SyncFlow Teams',
    category: 'Collaboration Engine',
    description: 'Enterprise-grade collaboration workspace with CRDT-based real-time editing and end-to-end encrypted messaging.',
    tech: ['TypeScript', 'Node.js', 'Socket.io', 'AWS'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: PlaceHolderImages.find(img => img.id === 'project-3')
  }
];

export function ProjectShowcase() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-[0.3em]">
              <Layers className="w-4 h-4" />
              Selected Portfolio
            </div>
            <h2 className="text-4xl lg:text-6xl font-headline font-bold">
              Building <span className="text-gradient">Impactful</span> Software
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              From architecting cloud-native backends to pixel-perfect frontends, 
              here's how I solve complex business problems.
            </p>
          </div>
          <Button variant="outline" className="border-border hover:bg-white/5 rounded-xl px-8 h-12 font-bold group">
            View Archive
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col h-full bg-card/20 rounded-[2rem] border border-white/5 overflow-hidden hover:border-accent/30 hover:bg-card/40 transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden m-4 rounded-[1.5rem]">
                {project.image && (
                  <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                    data-ai-hint={project.image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                
                {/* Visual Accent */}
                <div className="absolute top-4 right-4 flex gap-2">
                   <div className="p-2 bg-background/80 backdrop-blur-md rounded-lg text-white/70">
                      <Monitor className="w-4 h-4" />
                   </div>
                </div>
              </div>

              <div className="px-8 pb-8 flex-grow flex flex-col">
                <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-2">{project.category}</p>
                <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <Badge key={t} variant="secondary" className="bg-secondary/50 text-[10px] font-bold px-2 py-0.5 border-none hover:bg-accent hover:text-accent-foreground transition-colors cursor-default">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <a href={project.github} target="_blank" className="flex items-center gap-2 text-[10px] font-bold hover:text-accent transition-all tracking-widest uppercase">
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                  <a href={project.live} target="_blank" className="flex items-center gap-2 text-[10px] font-bold text-accent hover:text-white transition-all tracking-widest uppercase">
                    Preview
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
