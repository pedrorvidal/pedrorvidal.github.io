import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ExternalLink, Calendar, User } from 'lucide-react';
import type { Case } from '@/data/cases';

interface CaseModalProps {
  caseData: Case | null;
  open: boolean;
  onClose: () => void;
}

export default function CaseModal({ caseData, open, onClose }: CaseModalProps) {
  if (!caseData) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{caseData.title}</DialogTitle>
          <DialogDescription className="flex flex-wrap items-center gap-3 pt-1">
            <span className="inline-flex items-center gap-1 text-sm">
              <User size={14} /> {caseData.role}
            </span>
            <span className="inline-flex items-center gap-1 text-sm">
              <Calendar size={14} /> {caseData.period}
            </span>
          </DialogDescription>
        </DialogHeader>

        {/* Cover */}
        <img
          src={caseData.coverImage}
          alt={caseData.title}
          className="w-full rounded-md aspect-video object-cover"
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {caseData.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Problem & Solution */}
        <div className="space-y-4 text-sm leading-relaxed mt-4">
          <div>
            <h4 className="font-semibold text-base mb-1">The Problem</h4>
            <p className="text-muted-foreground">{caseData.problem}</p>
          </div>
          <div>
            <h4 className="font-semibold text-base mb-1">The Solution</h4>
            <p className="text-muted-foreground">{caseData.solution}</p>
          </div>
        </div>

        {/* Highlights */}
        {caseData.highlights.length > 0 && (
          <div>
            <h4 className="font-semibold text-base mb-2">Highlights</h4>
            <ul className="space-y-1">
              {caseData.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Stack */}
        <div>
          <h4 className="font-semibold text-base mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {caseData.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {caseData.links && caseData.links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4">
            {caseData.links.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="sm"
                asChild
                className="gap-1.5"
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label} <ExternalLink size={12} />
                </a>
              </Button>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
