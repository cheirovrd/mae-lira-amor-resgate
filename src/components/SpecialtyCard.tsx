import { Card } from "@/components/ui/card";

interface SpecialtyCardProps {
  icon: string;
  title: string;
  description: string;
}

export const SpecialtyCard = ({ icon, title, description }: SpecialtyCardProps) => {
  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card text-center group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </Card>
  );
};