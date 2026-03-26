
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { Skills } from '@/components/Skills';
import { AIDescriptionAssistant } from '@/components/AIDescriptionAssistant';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProjectShowcase />
      <Skills />
      <AIDescriptionAssistant />
      <Contact />
    </main>
  );
}
