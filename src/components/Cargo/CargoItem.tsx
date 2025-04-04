
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

export interface CargoItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  name: string;
  location: string;
  status: 'normal' | 'warning' | 'critical';
  expiry?: string;
  priority: 'low' | 'medium' | 'high';
}

const CargoItem = ({ 
  id,
  name,
  location,
  status,
  expiry,
  priority,
  className,
  ...props
}: CargoItemProps) => {
  return (
    <button 
      className={cn(
        "w-full text-left bg-card hover:bg-accent/10 border border-border rounded-md p-3 transition-colors flex justify-between",
        className
      )}
      {...props}
    >
      <div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono">{id}</span>
          <h3 className="font-medium">{name}</h3>
          <span 
            className={cn(
              "text-xs px-2 py-0.5 rounded-full",
              priority === 'high' && "bg-alert-danger/20 text-alert-danger",
              priority === 'medium' && "bg-alert-warning/20 text-alert-warning",
              priority === 'low' && "bg-alert-info/20 text-alert-info",
            )}
          >
            {priority}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">{location}</p>
      </div>
      
      <div className="text-right">
        {status !== 'normal' && (
          <div 
            className={cn(
              "text-xs",
              status === 'warning' && "text-alert-warning",
              status === 'critical' && "text-alert-danger"
            )}
          >
            {status === 'warning' ? 'Warning' : 'Critical'}
          </div>
        )}
        {expiry && <div className="text-xs text-muted-foreground mt-1">Exp: {expiry}</div>}
      </div>
    </button>
  );
};

export default CargoItem;
