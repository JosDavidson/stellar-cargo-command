
import { useState } from "react";
import CargoItem, { CargoItemProps } from "./CargoItem";
import { Archive, Filter } from "lucide-react";

const mockCargoItems: CargoItemProps[] = [
  { id: 'F-2023-45', name: 'Food Supply Package A', location: 'Module A - Rack 2', status: 'normal', expiry: '2025-07-12', priority: 'high' },
  { id: 'M-2023-12', name: 'Medical Kit', location: 'Module A - Rack 1', status: 'critical', expiry: '2025-04-07', priority: 'high' },
  { id: 'S-2023-89', name: 'Science Equipment', location: 'Module C - Rack 4', status: 'normal', priority: 'medium' },
  { id: 'W-2023-34', name: 'Water Filtration', location: 'Module B - Rack 3', status: 'warning', expiry: '2025-04-18', priority: 'medium' },
  { id: 'T-2023-56', name: 'Toolkit Alpha', location: 'Module B - Rack 2', status: 'normal', priority: 'low' },
];

const CargoList = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div className="nasa-container">
      <div className="flex items-center justify-between mb-4">
        <h2 className="nasa-title flex items-center gap-2">
          <Archive className="h-5 w-5" />
          <span>Cargo Items</span>
        </h2>
        
        <button className="text-sm flex items-center gap-1.5 hover:text-primary">
          <Filter size={16} />
          <span>Filter</span>
        </button>
      </div>
      
      <div className="space-y-2">
        {mockCargoItems.map(item => (
          <CargoItem 
            key={item.id} 
            {...item}
            onClick={() => setSelectedItem(item.id === selectedItem ? null : item.id)}
            className={selectedItem === item.id ? "ring-1 ring-primary" : ""}
          />
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <button className="text-sm text-primary hover:underline">
          View All Cargo Items
        </button>
      </div>
    </div>
  );
};

export default CargoList;
