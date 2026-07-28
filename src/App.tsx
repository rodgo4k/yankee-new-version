import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Features from "./pages/Recursos";
import Communities from "./pages/Comunidades";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Memory from "./pages/Memory";
import PrivacyFirst from "./pages/PrivacyFirst";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Changelog from "./pages/Changelog";
import Brand from "./pages/Brand";
import Blog from "./pages/Blog";
import ForCreators from "./pages/ForCreators";
import ForFriendsFamily from "./pages/ForFriendsFamily";
import ForSmallTeams from "./pages/ForSmallTeams";
import ForCommunities from "./pages/ForCommunities";
import ForStudents from "./pages/ForStudents";
import Download from "./pages/Download";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
const queryClient = new QueryClient();
const App = () => (<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/features" element={<Features />}/>
          <Route path="/communities" element={<Communities />}/>
          <Route path="/story" element={<Story />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/download" element={<Download />}/>
          <Route path="/terms" element={<Terms />}/>
          <Route path="/privacy" element={<Privacy />}/>
          <Route path="/memory" element={<Memory />}/>
          <Route path="/privacy-first" element={<PrivacyFirst />}/>
          <Route path="/feed" element={<Navigate to="/features" replace />}/>
          <Route path="/reach" element={<Navigate to="/features" replace />}/>
          <Route path="/notifications" element={<Navigate to="/features" replace />}/>
          <Route path="/cross-posting" element={<Navigate to="/features" replace />}/>
          <Route path="/careers" element={<Careers />}/>
          <Route path="/press" element={<Press />}/>
          <Route path="/changelog" element={<Changelog />}/>
          <Route path="/brand" element={<Brand />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/for-creators" element={<ForCreators />}/>
          <Route path="/for-friends-family" element={<ForFriendsFamily />}/>
          <Route path="/intelligence" element={<ForSmallTeams />}/>
          <Route path="/yankee-ai" element={<Navigate to="/intelligence" replace />}/>
          <Route path="/for-small-teams" element={<Navigate to="/intelligence" replace />}/>
          <Route path="/for-communities" element={<ForCommunities />}/>
          <Route path="/for-students" element={<ForStudents />}/>

          <Route path="/recursos" element={<Navigate to="/features" replace/>}/>
          <Route path="/comunidades" element={<Navigate to="/communities" replace/>}/>
          <Route path="/precos" element={<Navigate to="/contact" replace/>}/>
          <Route path="/pricing" element={<Navigate to="/contact" replace/>}/>
          <Route path="/contato" element={<Navigate to="/contact" replace/>}/>
          <Route path="/termos" element={<Navigate to="/terms" replace/>}/>
          <Route path="/privacidade" element={<Navigate to="/privacy" replace/>}/>
          <Route path="/politica-de-privacidade" element={<Navigate to="/privacy" replace/>}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>);
export default App;
