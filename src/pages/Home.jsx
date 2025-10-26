import CommunityHighlights from "../components/CommunityHighlights";
import ContributionForm from "../components/ContributionForm";
import DiscussionFeed from "../components/DiscussionFeed";
import EducationalResources from "../components/EducationalResources";
import Eventos from "../components/Eventos";
import Gamificacao from "../components/Gamificacao";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <CommunityHighlights />
      <DiscussionFeed />
      <EducationalResources />
      <Gamificacao />
      <Eventos />
      <ContributionForm />
    </>
  );
}

export default Home;
