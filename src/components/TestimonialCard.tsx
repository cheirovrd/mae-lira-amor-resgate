import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  hasVideo?: boolean;
}

export const TestimonialCard = ({ name, text, hasVideo = false }: TestimonialCardProps) => {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      
      <blockquote className="text-foreground mb-4 italic">
        "{text}"
      </blockquote>
      
      <div className="flex items-center justify-between">
        <cite className="text-accent font-semibold not-italic">
          {name}
        </cite>
        {hasVideo && (
          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
            Vídeo Disponível
          </span>
        )}
      </div>
    </Card>
  );
};