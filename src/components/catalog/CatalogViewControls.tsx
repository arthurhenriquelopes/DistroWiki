import { Button } from "@/components/ui/button";
import { Eye, EyeOff, LayoutGrid, LayoutList } from "lucide-react";

interface CatalogViewControlsProps {
  showSpecs: boolean;
  setShowSpecs: (value: boolean) => void;
  viewMode: "list" | "grid";
  setViewMode: (value: "list" | "grid") => void;
}

const CatalogViewControls = ({
  showSpecs,
  setShowSpecs,
  viewMode,
  setViewMode,
}: CatalogViewControlsProps) => {
  return (
    <div className="flex items-center gap-2">
      {/* Toggle Specs */}
      <Button
        variant={showSpecs ? "default" : "outline"}
        size="sm"
        onClick={() => setShowSpecs(!showSpecs)}
        className="gap-2"
      >
        {showSpecs ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        <span className="hidden sm:inline">
          {showSpecs ? "Ocultar Specs" : "Mostrar Specs"}
        </span>
      </Button>

      {/* Toggle View Mode */}
      <div className="flex border border-border rounded-lg overflow-hidden">
        <Button
          variant={viewMode === "list" ? "default" : "ghost"}
          size="sm"
          onClick={() => setViewMode("list")}
          className="rounded-none border-0"
        >
          <LayoutList className="w-4 h-4" />
        </Button>
        <Button
          variant={viewMode === "grid" ? "default" : "ghost"}
          size="sm"
          onClick={() => setViewMode("grid")}
          className="rounded-none border-0"
        >
          <LayoutGrid className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default CatalogViewControls;
