
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search for:", searchQuery);
    // Add search logic here
  };
  
  return (
    <form onSubmit={handleSearch} className="nasa-container flex flex-col">
      <h2 className="nasa-title mb-4">Quick Search</h2>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="w-5 h-5 text-muted-foreground" />
        </div>
        
        <input
          type="search"
          className="block w-full p-3 pl-10 border border-border rounded-md bg-muted/30 focus:ring-primary focus:border-primary outline-none focus:outline-none focus:ring-1"
          placeholder="Search by ID, name, or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <Button 
          type="submit"
          className="absolute right-2 bottom-2.5"
          size="sm"
        >
          Search
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-3">
        <button type="button" className="text-xs border border-border rounded-full px-3 py-1.5 hover:border-primary hover:text-primary transition-colors">
          Medical Supplies
        </button>
        <button type="button" className="text-xs border border-border rounded-full px-3 py-1.5 hover:border-primary hover:text-primary transition-colors">
          Food Storage
        </button>
        <button type="button" className="text-xs border border-border rounded-full px-3 py-1.5 hover:border-primary hover:text-primary transition-colors">
          Science Equipment
        </button>
        <button type="button" className="text-xs border border-border rounded-full px-3 py-1.5 hover:border-primary hover:text-primary transition-colors">
          Tool Kits
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
