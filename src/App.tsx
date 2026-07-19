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
import Feed from "./pages/Feed";
import Memory from "./pages/Memory";
import Reach from "./pages/Reach";
import PrivacyFirst from "./pages/PrivacyFirst";
import Notifications from "./pages/Notifications";
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
const queryClient = new QueryClient();
const App = () => (<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/features" element={<Features />}/>
          <Route path="/communities" element={<Communities />}/>
          <Route path="/story" element={<Story />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/download" element={<Download />}/>
          <Route path="/terms" element={<Terms />}/>
          <Route path="/privacy" element={<Privacy />}/>
          <Route path="/feed" element={<Feed />}/>
          <Route path="/memory" element={<Memory />}/>
          <Route path="/reach" element={<Reach />}/>
          <Route path="/cross-posting" element={<Navigate to="/reach" replace />}/>
          <Route path="/privacy-first" element={<PrivacyFirst />}/>
          <Route path="/notifications" element={<Notifications />}/>
          <Route path="/careers" element={<Careers />}/>
          <Route path="/press" element={<Press />}/>
          <Route path="/changelog" element={<Changelog />}/>
          <Route path="/brand" element={<Brand />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/for-creators" element={<ForCreators />}/>
          <Route path="/for-friends-family" element={<ForFriendsFamily />}/>
          <Route path="/for-small-teams" element={<ForSmallTeams />}/>
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
