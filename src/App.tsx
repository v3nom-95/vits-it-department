
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Clubs from "./pages/Clubs";
import Faculty from "./pages/Faculty";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import IndustryInteraction from "./pages/IndustryInteraction";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="transform-gpu will-change-auto">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/iii" element={<IndustryInteraction />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
