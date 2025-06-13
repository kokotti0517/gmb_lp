import Header from "../components/Header";
import FeatureList from "../components/FeatureList";
import TroubleSection from "../components/TroubleSection";
import SolutionSection from "../components/SolutionSection";
import AboutMeoSection from "../components/AboutMeoSection";
import SuccessPoints from "../components/SuccessPoints";
import FormSection from "../components/FormSection";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <FeatureList />
      <TroubleSection />
      <SolutionSection />
      <AboutMeoSection />
      <SuccessPoints />
      <FormSection />
    </div>
  );
}
