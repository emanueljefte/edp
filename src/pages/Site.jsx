import CommunityHighlights from "../components/CommunityHighlights";
import ContributionForm from "../components/ContributionForm";
import DiscussionFeed from "../components/DiscussionFeed";
import EducationalResources from "../components/EducationalResources";
import Eventos from "../components/Eventos";
import Gamificacao from "../components/Gamificacao";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Rodape from "../components/Rodape";

function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Header />
      <HeroSection />
      <CommunityHighlights />
      <DiscussionFeed />
      <EducationalResources />
      <Gamificacao />
      <Eventos />
      <ContributionForm />
      <Rodape />
    </div>
);
}

export default App;