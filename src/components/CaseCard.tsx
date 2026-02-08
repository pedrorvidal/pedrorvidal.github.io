import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Case } from '@/data/cases';

interface CaseCardProps {
  caseData: Case;
  onSelect: (c: Case) => void;
  style?: React.CSSProperties;
}

export default function CaseCard({ caseData, onSelect, style }: CaseCardProps) {
  return (
    <article
      style={style}
      className="group rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30 focus-within:ring-2 focus-within:ring-ring"
    >
      {/* Cover image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={caseData.coverImage}
          alt={caseData.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {caseData.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="text-lg font-semibold leading-snug">{caseData.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {caseData.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {caseData.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-0.5 rounded-sm bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
          {caseData.stack.length > 4 && (
            <span className="text-xs text-muted-foreground">
              +{caseData.stack.length - 4}
            </span>
          )}
        </div>

        <Button
          variant="ghost"
          className="w-full mt-2 gap-2 text-primary hover:text-primary"
          onClick={() => onSelect(caseData)}
        >
          View Details <ExternalLink size={14} />
        </Button>
      </div>
    </article>
  );
}
