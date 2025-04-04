
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Archive, 
  Search, 
  Trash2, 
  Clock, 
  FileArchive, 
  Settings,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  path: string;
  active?: boolean;
}

const NavItem = ({ icon: Icon, label, path, active }: NavItemProps) => {
  return (
    <Link 
      to={path} 
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
        active 
          ? "bg-sidebar-accent text-sidebar-accent-foreground" 
          : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
      {active && <div className="w-1.5 h-1.5 rounded-full bg-sidebar-primary ml-auto" />}
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: Archive, label: "Cargo Placement", path: "/cargo" },
    { icon: Search, label: "Search & Retrieve", path: "/search" },
    { icon: Trash2, label: "Waste Management", path: "/waste" },
    { icon: Clock, label: "Time Simulation", path: "/simulation" },
    { icon: FileArchive, label: "Logs & Reports", path: "/reports" },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="fixed top-3 left-3 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      
      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-sidebar flex flex-col transition-transform duration-300",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "md:relative md:translate-x-0"
      )}>
        <div className="p-4">
          <div className="flex items-center h-12 mb-6">
            <div className="text-xl font-bold tracking-tight flex items-center">
              <span className="text-nasa-red text-2xl">●</span>
              <span className="ml-2">Cargo Command</span>
            </div>
          </div>
          
          <nav className="space-y-1.5">
            {navItems.map((item) => (
              <NavItem
                key={item.path}
                icon={item.icon}
                label={item.label}
                path={item.path}
                active={location.pathname === item.path}
              />
            ))}
          </nav>
        </div>
        
        <div className="mt-auto p-4 border-t border-sidebar-border">
          <NavItem icon={Settings} label="Settings" path="/settings" />
          
          <div className="mt-4 px-3 py-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-sidebar-foreground/70">Storage Status</span>
              <span className="text-xs font-medium">67%</span>
            </div>
            <div className="w-full h-1.5 bg-sidebar-accent rounded-full overflow-hidden">
              <div className="h-full bg-sidebar-primary rounded-full" style={{ width: "67%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
