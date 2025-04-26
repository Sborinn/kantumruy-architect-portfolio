
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="mb-4 p-3 bg-secondary inline-block rounded-lg">
        <Icon className="w-8 h-8 text-accent" />
      </div>
      <h3 className="heading-sm mb-2">{title}</h3>
      <p className="text-body text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
