import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ComparisonProvider } from "./contexts/ComparisonContext";
import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Catalog from "./pages/catalog/Catalog";
import Comparison from "./pages/comparison/Comparison";
import DistroDetails from "./pages/distro/DistroDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ComparisonProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} /> {/* ← MUDOU AQUI */}
              <Route path="/catalogo" element={<Catalog />} />
              <Route path="/comparacao" element={<Comparison />} />
              <Route path="/distro/:id" element={<DistroDetails />} />
              <Route path="/sobre" element={<About />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ComparisonProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
