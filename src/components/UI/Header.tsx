
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="flex h-16 items-center px-6 border-b border-border bg-card">
      <div className="flex items-center gap-2 mr-4">
        <div className="font-bold text-xl tracking-tight flex items-center">
          <span className="text-nasa-blue">ISS</span>
          <span className="text-nasa-red mx-1">•</span>
          <span>Cargo Command</span>
        </div>
      </div>
      
      <div className="flex-1 flex items-center px-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search cargo items, locations..."
            className="w-full bg-background pl-8 focus-visible:ring-accent"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-alert-danger rounded-full"></span>
        </Button>
        
        <div className="flex items-center gap-2">
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium">Astronaut</p>
            <p className="text-xs text-muted-foreground">Mission Specialist</p>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
