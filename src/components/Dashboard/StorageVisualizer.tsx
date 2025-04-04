
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Layers, AlertTriangle, Clock } from "lucide-react";

type StorageCell = {
  id: string;
  name: string;
  location: string;
  priority: 'low' | 'medium' | 'high';
  status: 'normal' | 'warning' | 'critical' | 'empty';
  expiryDays?: number;
};

const mockStorageCells: StorageCell[] = [
  { id: 'A1', name: 'Food Package', location: 'Module A', priority: 'high', status: 'normal' },
  { id: 'A2', name: 'Medical Supplies', location: 'Module A', priority: 'high', status: 'critical', expiryDays: 3 },
  { id: 'A3', name: 'Water Filters', location: 'Module A', priority: 'medium', status: 'warning', expiryDays: 14 },
  { id: 'A4', name: 'Empty', location: 'Module A', priority: 'low', status: 'empty' },
  { id: 'B1', name: 'Tools', location: 'Module B', priority: 'medium', status: 'normal' },
  { id: 'B2', name: 'Science Equipment', location: 'Module B', priority: 'high', status: 'normal' },
  { id: 'B3', name: 'Spare Parts', location: 'Module B', priority: 'low', status: 'normal' },
  { id: 'B4', name: 'Empty', location: 'Module B', priority: 'low', status: 'empty' },
  { id: 'C1', name: 'Personal Items', location: 'Module C', priority: 'low', status: 'normal' },
  { id: 'C2', name: 'Empty', location: 'Module C', priority: 'low', status: 'empty' },
  { id: 'C3', name: 'Lab Samples', location: 'Module C', priority: 'high', status: 'warning', expiryDays: 7 },
  { id: 'C4', name: 'Empty', location: 'Module C', priority: 'low', status: 'empty' },
];

interface StorageVisualizerProps {
  className?: string;
}

const StorageVisualizer = ({ className }: StorageVisualizerProps) => {
  const [selectedCell, setSelectedCell] = useState<StorageCell | null>(null);

  const handleCellClick = (cell: StorageCell) => {
    setSelectedCell(cell === selectedCell ? null : cell);
  };

  return (
    <div className={cn("nasa-container", className)}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="nasa-title">Storage Visualization</h2>
        <div className="flex items-center space-x-4">
          <select className="bg-muted text-sm rounded p-1 border border-border">
            <option>All Modules</option>
            <option>Module A</option>
            <option>Module B</option>
            <option>Module C</option>
          </select>
          <button className="text-sm text-primary flex items-center gap-1.5">
            <Layers size={16} />
            <span>3D View</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-6">
        {mockStorageCells.map((cell) => (
          <div 
            key={cell.id}
            className={cn(
              "storage-cell h-24 flex flex-col justify-between p-3",
              cell.status === 'empty' && "storage-cell-empty",
              cell.status === 'normal' && "storage-cell-filled",
              cell.status === 'warning' && "storage-cell-warning",
              cell.status === 'critical' && "storage-cell-critical",
              selectedCell?.id === cell.id && "ring-2 ring-accent"
            )}
            onClick={() => handleCellClick(cell)}
          >
            <div className="flex justify-between items-start">
              <span className="font-mono text-xs">{cell.id}</span>
              {cell.status === 'warning' && <AlertTriangle size={14} className="text-alert-warning animate-pulse-slow" />}
              {cell.status === 'critical' && <AlertTriangle size={14} className="text-alert-danger animate-pulse-slow" />}
            </div>
            <div>
              {cell.status !== 'empty' ? (
                <>
                  <div className="text-sm font-medium truncate">{cell.name}</div>
                  {cell.expiryDays && (
                    <div className="flex items-center text-xs mt-1 gap-1">
                      <Clock size={10} />
                      <span>{cell.expiryDays} days</span>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-xs text-muted-foreground">Empty</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedCell && selectedCell.status !== 'empty' && (
        <div className="bg-muted p-3 rounded border border-border animate-fade-in">
          <div className="flex justify-between">
            <h3 className="font-medium">{selectedCell.name}</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary-foreground">
              {selectedCell.priority.toUpperCase()}
            </span>
          </div>
          <div className="mt-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Location:</span> 
              <span>{selectedCell.location}</span>
            </div>
            {selectedCell.expiryDays && (
              <div className="flex justify-between mt-1">
                <span className="text-muted-foreground">Expires in:</span> 
                <span className={cn(
                  selectedCell.expiryDays <= 3 ? "text-alert-danger" : 
                  selectedCell.expiryDays <= 14 ? "text-alert-warning" : ""
                )}>{selectedCell.expiryDays} days</span>
              </div>
            )}
          </div>
          <div className="mt-3 flex justify-end space-x-2">
            <button className="text-xs px-2 py-1 bg-primary rounded text-primary-foreground">
              Retrieve
            </button>
            <button className="text-xs px-2 py-1 bg-secondary rounded text-secondary-foreground">
              Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorageVisualizer;
