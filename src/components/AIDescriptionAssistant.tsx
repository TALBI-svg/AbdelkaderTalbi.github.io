
'use client';

import React, { useState } from 'react';
import { generateProjectDescriptions } from '@/ai/flows/generate-project-descriptions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Wand2, 
  Copy, 
  Check, 
  Sparkles,
  Loader2,
  Terminal,
  ArrowRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';

export function AIDescriptionAssistant() {
  const [loading, setLoading] = useState(false);
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    projectName: '',
    techStack: '',
    features: '',
    targetAudience: 'technical managers',
    tone: 'innovative'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.projectName || !formData.techStack || !formData.features) {
      toast({
        title: "Input Required",
        description: "Please provide all details for a better generation.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const result = await generateProjectDescriptions({
        projectName: formData.projectName,
        techStack: formData.techStack.split(',').map(s => s.trim()),
        features: formData.features.split('\n').map(s => s.trim()),
        targetAudience: formData.targetAudience,
        tone: formData.tone,
        numDescriptions: 3
      });
      setDescriptions(result.descriptions);
    } catch (error) {
      toast({
        title: "API Error",
        description: "Failed to connect to the GenAI model. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
    toast({
      title: "Success",
      description: "Copied to clipboard."
    });
  };

  return (
    <section id="ai-tool" className="py-32 bg-secondary/10 border-y border-white/5 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em]">
            <Sparkles className="w-3 h-3" />
            GenAI Integration Lab
          </div>
          <h2 className="text-4xl lg:text-6xl font-headline font-bold">
            Project <span className="text-accent">Architect</span> AI
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience my AI implementation skills. This tool uses Genkit and Gemini to transform 
            technical specs into professional project summaries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Card className="lg:col-span-5 glass-card p-8 rounded-3xl border-white/5 border shadow-2xl relative">
            <div className="absolute -top-3 left-8 px-3 py-1 bg-secondary border border-border rounded-lg flex items-center gap-2">
              <Terminal className="w-3 h-3 text-accent" />
              <span className="text-[10px] font-bold font-code text-muted-foreground uppercase tracking-widest">Configuration</span>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 pt-2">
              <div className="space-y-2">
                <Label htmlFor="projectName" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Project Name</Label>
                <Input 
                  id="projectName"
                  placeholder="e.g., CloudScale Analytics"
                  className="bg-secondary/40 border-border h-12 focus:ring-accent"
                  value={formData.projectName}
                  onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="techStack" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Tech Stack</Label>
                <Input 
                  id="techStack"
                  placeholder="Next.js, Tailwind, Rust, AWS"
                  className="bg-secondary/40 border-border h-12 focus:ring-accent"
                  value={formData.techStack}
                  onChange={(e) => setFormData({...formData, techStack: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="features" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Core Features (one per line)</Label>
                <Textarea 
                  id="features"
                  placeholder="E2E Encryption&#10;Real-time syncing&#10;Serverless API"
                  className="bg-secondary/40 border-border min-h-[120px] focus:ring-accent resize-none custom-scrollbar"
                  value={formData.features}
                  onChange={(e) => setFormData({...formData, features: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Audience</Label>
                  <Select value={formData.targetAudience} onValueChange={(v) => setFormData({...formData, targetAudience: v})}>
                    <SelectTrigger className="bg-secondary/40 border-border h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical managers">Technical Managers</SelectItem>
                      <SelectItem value="recruiters">Recruiters</SelectItem>
                      <SelectItem value="potential clients">Potential Clients</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Tone</Label>
                  <Select value={formData.tone} onValueChange={(v) => setFormData({...formData, tone: v})}>
                    <SelectTrigger className="bg-secondary/40 border-border h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="engaging">Engaging</SelectItem>
                      <SelectItem value="innovative">Innovative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-black h-14 rounded-xl shadow-lg shadow-accent/20"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    INFERENCE IN PROGRESS...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-5 w-5" />
                    GENERATE SUMMARIES
                  </>
                )}
              </Button>
            </form>
          </Card>

          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {!descriptions.length && !loading && (
              <div className="h-full border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center p-12 text-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-2">Ready for Generation</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Fill in the project details and let the AI assistant craft the perfect copy for you.
                </p>
              </div>
            )}

            {loading && (
              <div className="h-full border border-white/5 rounded-3xl flex flex-col items-center justify-center p-12 space-y-4">
                <div className="relative">
                   <div className="w-20 h-20 rounded-full border-2 border-accent/20 animate-ping absolute inset-0" />
                   <div className="w-20 h-20 rounded-full border-2 border-accent border-t-transparent animate-spin relative flex items-center justify-center">
                      <Terminal className="w-8 h-8 text-accent" />
                   </div>
                </div>
                <p className="text-accent font-code text-sm animate-pulse">Running GenAI Flow...</p>
              </div>
            )}

            {descriptions.map((desc, i) => (
              <div 
                key={i} 
                className="group relative glass-card p-6 rounded-2xl border border-white/10 hover:border-accent/30 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                   <div className="px-2 py-0.5 bg-accent/10 rounded text-[10px] font-black text-accent uppercase tracking-widest">
                      Option {i + 1}
                   </div>
                   <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-accent hover:bg-white/5"
                    onClick={() => copyToClipboard(desc, i)}
                  >
                    {copiedIndex === i ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <p className="text-sm font-body leading-relaxed text-muted-foreground group-hover:text-white transition-colors">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
