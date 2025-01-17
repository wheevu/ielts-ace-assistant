import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatButton } from "@/components/chat/ChatButton";
import Index from "./pages/Index";
import GrammarCheck from "./pages/GrammarCheck";
import PracticeTests from "./pages/PracticeTests";
import PracticeTest from "./pages/PracticeTest";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/grammar-check" element={<GrammarCheck />} />
          <Route path="/practice-tests" element={<PracticeTests />} />
          <Route path="/practice-test/:id" element={<PracticeTest />} />
        </Routes>
      </BrowserRouter>
      <ChatButton />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;