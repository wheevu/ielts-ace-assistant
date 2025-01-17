import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import GrammarCheck from "./pages/GrammarCheck";
import PracticeTests from "./pages/PracticeTests";
import PracticeTest from "./pages/PracticeTest";
import Reading from "./pages/Reading";
import Writing from "./pages/Writing";
import Speaking from "./pages/Speaking";
import Listening from "./pages/Listening";
import Vocabulary from "./pages/Vocabulary";
import VocabularyTopic from "./pages/VocabularyTopic";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/grammar-check" element={<GrammarCheck />} />
            <Route path="/practice-tests" element={<PracticeTests />} />
            <Route path="/practice-test/:id" element={<PracticeTest />} />
            <Route path="/ielts/reading" element={<Reading />} />
            <Route path="/ielts/writing" element={<Writing />} />
            <Route path="/ielts/speaking" element={<Speaking />} />
            <Route path="/ielts/listening" element={<Listening />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
            <Route path="/vocabulary/:topic" element={<VocabularyTopic />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;