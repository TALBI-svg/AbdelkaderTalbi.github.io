
'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Monitor, 
  Layers, 
  Search, 
  Filter,
  Info,
  X,
  Code
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const projects = [
  {
    id: 'project-1',
    title: 'EmploisDash',
    category: 'SaaS / Education',
    description: 'A comprehensive educational management platform built with Next.js and NestJS, featuring real-time scheduling, RBAC, and AI-assisted content generation.',
    longDescription: 'EmploisDash is an enterprise-grade scheduling and management platform for educational institutions. It features a high-performance grid system for course coordination, automated conflict detection, and an AI-powered assistant for generating session descriptions. Built with a modern full-stack architecture, it ensures seamless synchronization between a NestJS backend and a responsive Next.js frontend.',
    tech: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'TanStack Query', 'Tailwind CSS'],
    github: 'https://github.com/TALBI-svg',
    live: 'https://example.com',
    image: { 
      id: 'project-1',
      imageUrl: '/images/EmploisDash1.png', 
      description: 'EmploisDash Dashboard',
      imageHint: 'educational dashboard'
    }
  },
  {
    id: 'project-2',
    title: 'Analytica Pro',
    category: 'AI SaaS',
    description: 'Real-time data visualization platform processing millions of telemetry points using WebSockets and specialized time-series databases.',
    longDescription: 'Analytica Pro leverages GenAI to provide predictive insights for infrastructure monitoring. It processes millions of events per second through a Kafka-based pipeline and visualizes them using D3.js and custom Shaded UI components. The tool helps DevOps teams identify bottlenecks before they impact end-users.',
    tech: ['React', 'Python', 'D3.js', 'InfluxDB', 'FastAPI'],
    github: 'https://github.com/TALBI-svg',
    live: 'https://example.com',
    image: PlaceHolderImages.find(img => img.id === 'project-2')
  },
  {
    id: 'project-3',
    title: 'SyncFlow Teams',
    category: 'Collaboration',
    description: 'Enterprise-grade collaboration workspace with CRDT-based real-time editing and end-to-end encrypted messaging.',
    longDescription: 'SyncFlow is a collaborative workspace that enables global teams to work together in real-time. By implementing Conflict-free Replicated Data Types (CRDTs), it ensures eventual consistency even in high-latency environments. Security is a top priority, with Signal-protocol based E2E encryption for all internal communications.',
    tech: ['TypeScript', 'Node.js', 'Socket.io', 'AWS', 'WebRTC'],
    github: 'https://github.com/TALBI-svg',
    live: 'https://example.com',
    image: PlaceHolderImages.find(img => img.id === 'project-3')
  }
];

const categories = ['All', 'SaaS / Education', 'AI SaaS', 'Collaboration'];

export function ProjectShowcase() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesFilter = filter === 'All' || p.category === filter;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-[0.3em]">
              <Layers className="w-4 h-4" />
              Project Explorer
            </div>
            <h2 className="text-4xl lg:text-6xl font-headline font-bold">
              Engineering <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              Explore a curated selection of systems I've architected, ranging from high-scale commerce to intelligent analytics.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="relative group flex-grow lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-accent transition-colors" />
              <Input 
                placeholder="Search stack or title..." 
                className="pl-10 bg-secondary/20 border-white/10 h-12 rounded-xl focus:ring-accent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={filter === cat ? 'default' : 'outline'}
                  size="sm"
                  className={`h-12 px-6 rounded-xl font-bold transition-all ${filter === cat ? 'bg-accent text-accent-foreground' : 'border-white/10 hover:bg-white/5'}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group flex flex-col h-full bg-card/20 rounded-[2rem] border border-white/5 overflow-hidden hover:border-accent/30 hover:bg-card/40 transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden m-4 rounded-[1.5rem]">
                  {project.image && (
                    <Image
                      src={project.image.imageUrl}
                      alt={project.image.description}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-125 group-hover:scale-135"
                      data-ai-hint={project.image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-4 right-4 flex gap-2">
                     <Dialog>
                        <DialogTrigger asChild>
                          <Button size="icon" variant="secondary" className="bg-background/80 backdrop-blur-md hover:bg-accent hover:text-accent-foreground rounded-lg h-10 w-10 border-none">
                            <Info className="w-5 h-5" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl bg-card border-white/10 p-0 rounded-[2.5rem] overflow-hidden">
                          <div className="relative h-64 w-full overflow-hidden">
                            {project.image && (
                              <Image 
                                src={project.image.imageUrl} 
                                alt={project.title} 
                                fill 
                                className="object-cover object-top scale-110"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                          </div>
                          <div className="p-8 lg:p-12 space-y-6">
                            <DialogHeader>
                              <div className="flex items-center gap-3 mb-2">
                                <Badge className="bg-accent/10 text-accent border-accent/20 uppercase tracking-widest text-[10px] font-black">
                                  {project.category}
                                </Badge>
                                <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Case Study</span>
                              </div>
                              <DialogTitle className="text-4xl font-headline font-bold">{project.title}</DialogTitle>
                            </DialogHeader>
                            <DialogDescription className="text-lg text-muted-foreground leading-relaxed">
                              {project.longDescription}
                            </DialogDescription>
                            
                            <div className="space-y-4">
                              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-accent flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                Technical Stack
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                  <Badge key={t} variant="secondary" className="bg-secondary/50 text-xs px-3 py-1 border-white/5">
                                    {t}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="flex gap-4 pt-6">
                              <Button className="flex-1 bg-accent text-accent-foreground font-bold h-14 rounded-xl" asChild>
                                <a href={project.live} target="_blank">
                                  Live Preview <ExternalLink className="ml-2 w-4 h-4" />
                                </a>
                              </Button>
                              <Button variant="outline" className="flex-1 border-white/10 hover:bg-white/5 font-bold h-14 rounded-xl" asChild>
                                <a href={project.github} target="_blank">
                                  Source Code <Github className="ml-2 w-4 h-4" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                     </Dialog>
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
                      <Badge key={t} variant="secondary" className="bg-secondary/50 text-[10px] font-bold px-2 py-0.5 border-none transition-colors cursor-default">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <a href={project.github} target="_blank" className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground hover:text-accent transition-all tracking-widest uppercase">
                      <Github className="w-4 h-4" />
                      Repo
                    </a>
                    <a href={project.live} target="_blank" className="flex items-center gap-2 text-[10px] font-bold text-accent hover:text-white transition-all tracking-widest uppercase">
                      View Live
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-4">
            <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto text-muted-foreground">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-headline font-bold">No projects found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters to explore more.</p>
            <Button variant="link" className="text-accent" onClick={() => {setFilter('All'); setSearchQuery('');}}>
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
