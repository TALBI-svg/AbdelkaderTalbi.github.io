
'use client';

import React from 'react';
import { 
  Database, 
  Layout, 
  Server, 
  Cloud,
  Cpu,
  Layers,
  ShieldCheck,
  Terminal,
  Activity,
  Zap
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Architecture',
    icon: Layout,
    skills: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Query'],
    color: 'text-accent',
    bg: 'bg-accent/10'
  },
  {
    title: 'Backend Systems',
    icon: Server,
    skills: ['Node.js', 'Go (Golang)', 'Python/FastAPI', 'GraphQL', 'gRPC'],
    color: 'text-primary',
    bg: 'bg-primary/10'
  },
  {
    title: 'Data Solutions',
    icon: Database,
    skills: ['PostgreSQL', 'Redis', 'ElasticSearch', 'MongoDB', 'ClickHouse'],
    color: 'text-green-400',
    bg: 'bg-green-400/10'
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    skills: ['AWS / GCP', 'Kubernetes', 'Terraform', 'CI/CD Pipelines', 'Docker'],
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  }
];

const smallSkills = [
  { name: 'Git Flow', icon: Terminal },
  { name: 'Unit Testing', icon: ShieldCheck },
  { name: 'Microservices', icon: Layers },
  { name: 'System Performance', icon: Activity },
  { name: 'Scalability', icon: Zap }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.3em]">
              <Cpu className="w-4 h-4" />
              Technical Stack
            </div>
            <h2 className="text-4xl lg:text-6xl font-headline font-bold">
              Engineering <span className="text-gradient">Arsenal</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
              A comprehensive toolset refined through years of building enterprise-grade 
              applications and solving complex engineering challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 lg:w-1/3">
             <div className="p-6 glass-card rounded-2xl border-white/5">
                <p className="text-3xl font-headline font-bold text-accent">99.9%</p>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mt-1">Uptime Focused</p>
             </div>
             <div className="p-6 glass-card rounded-2xl border-white/5">
                <p className="text-3xl font-headline font-bold text-primary">Zero</p>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mt-1">Tech Debt Goal</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category) => (
            <div key={category.title} className="group relative glass-card p-10 rounded-3xl hover:bg-card/60 hover:scale-[1.02]">
              <div className={`w-14 h-14 rounded-2xl ${category.bg} flex items-center justify-center mb-8 group-hover:rotate-12 transition-all duration-500`}>
                <category.icon className={`w-7 h-7 ${category.color}`} />
              </div>
              <h3 className="text-xl font-headline font-bold mb-6 group-hover:text-white transition-colors">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm text-muted-foreground font-body">
                    <div className="w-1 h-1 rounded-full bg-border group-hover:bg-accent transition-colors" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 pt-10 border-t border-white/5">
          {smallSkills.map((skill) => (
            <div key={skill.name} className="flex items-center gap-3 px-5 py-3 rounded-full bg-secondary/30 border border-white/5 text-xs font-bold text-muted-foreground hover:text-white hover:bg-secondary/50 hover:border-accent/30 transition-all cursor-default">
              <skill.icon className="w-4 h-4 text-accent" />
              <span className="tracking-widest uppercase">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
