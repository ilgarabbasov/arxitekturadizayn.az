import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/i18n";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/haqqimizda" element={<About />} />
            <Route path="/layiheler" element={<Projects />} />
            <Route path="/meqaleler" element={<Articles />} />
            <Route path="/meqaleler/:slug" element={<ArticleDetail />} />
            <Route path="/elaqe" element={<Contact />} />
            <Route path="/sifarisciler" element={<Clients />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
