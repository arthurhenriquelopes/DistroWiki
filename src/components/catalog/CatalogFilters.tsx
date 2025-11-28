import { SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import CatalogViewControls from "./CatalogViewControls";

interface CatalogFiltersProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  filterFamily: string;
  setFilterFamily: (value: string) => void;
  filterDE: string;
  setFilterDE: (value: string) => void;
  families: string[];
  allDEs: string[];
  showSpecs: boolean;
  setShowSpecs: (value: boolean) => void;
  viewMode: "list" | "grid";
  setViewMode: (value: "list" | "grid") => void;
}

const CatalogFilters = ({
  sortBy,
  setSortBy,
  filterFamily,
  setFilterFamily,
  filterDE,
  setFilterDE,
  families,
  allDEs,
  showSpecs,
  setShowSpecs,
  viewMode,
  setViewMode,
}: CatalogFiltersProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8 animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">Filtros e Ordenação</h2>
        </div>

        <CatalogViewControls
          showSpecs={showSpecs}
          setShowSpecs={setShowSpecs}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-medium mb-2 block text-muted-foreground">
            Família/Base
          </label>
          <Select value={filterFamily} onValueChange={setFilterFamily}>
            <SelectTrigger>
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              {families.map((family) => (
                <SelectItem key={family} value={family}>
                  {family}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block text-muted-foreground">
            Ambiente Gráfico
          </label>
          <Select value={filterDE} onValueChange={setFilterDE}>
            <SelectTrigger>
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              {allDEs.map((de) => (
                <SelectItem key={de} value={de}>
                  {de}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block text-muted-foreground">
            Ordenar por
          </label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="score">Score (maior)</SelectItem>
              <SelectItem value="name">Nome (A-Z)</SelectItem>
              <SelectItem value="release">Lançamento (recente)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {(filterFamily !== "all" || filterDE !== "all") && (
        <div className="flex items-center gap-2 mt-4 flex-wrap">
          <span className="text-sm text-muted-foreground">Filtros ativos:</span>
          {filterFamily !== "all" && (
            <Badge variant="secondary" className="gap-1">
              {filterFamily}
              <button
                onClick={() => setFilterFamily("all")}
                className="ml-1 hover:text-destructive"
              >
                ×
              </button>
            </Badge>
          )}
          {filterDE !== "all" && (
            <Badge variant="secondary" className="gap-1">
              {filterDE}
              <button
                onClick={() => setFilterDE("all")}
                className="ml-1 hover:text-destructive"
              >
                ×
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default CatalogFilters;
