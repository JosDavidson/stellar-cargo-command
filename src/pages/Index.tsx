
import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import QuickStats from "@/components/Dashboard/QuickStats";
import StorageVisualizer from "@/components/Dashboard/StorageVisualizer";
import CargoList from "@/components/Cargo/CargoList";
import SearchBar from "@/components/Search/SearchBar";
import { AlertTriangle, Clock } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">ISS Expedition 68 • Mission Day 142</p>
        </div>
        
        <div className="flex items-center space-x-2 bg-muted/30 px-3 py-1.5 rounded-md">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">April 4, 2025 • 14:32 UTC</span>
        </div>
      </div>
      
      <QuickStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <StorageVisualizer />
          
          <div className="nasa-container">
            <div className="flex items-center gap-2 text-alert-warning mb-3">
              <AlertTriangle className="h-5 w-5" />
              <h2 className="nasa-title">Alerts & Notifications</h2>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 rounded bg-muted/30 border border-alert-danger/30">
                <div className="h-2 w-2 rounded-full bg-alert-danger animate-pulse-slow" />
                <div>
                  <p className="text-sm font-medium">Medical Kit (M-2023-12) expires in 3 days</p>
                  <p className="text-xs text-muted-foreground">Critical priority • Module A - Rack 1</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded bg-muted/30 border border-alert-warning/30">
                <div className="h-2 w-2 rounded-full bg-alert-warning animate-pulse-slow" />
                <div>
                  <p className="text-sm font-medium">Water Filtration (W-2023-34) expires in 14 days</p>
                  <p className="text-xs text-muted-foreground">Medium priority • Module B - Rack 3</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded bg-muted/30 border border-alert-info/30">
                <div className="h-2 w-2 rounded-full bg-alert-info animate-pulse-slow" />
                <div>
                  <p className="text-sm font-medium">Inventory check scheduled for tomorrow</p>
                  <p className="text-xs text-muted-foreground">System notification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <SearchBar />
          <CargoList />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
