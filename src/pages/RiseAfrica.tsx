import Header from "@/components/Header";
import HeroSection from "@/components/rise-africa/HeroSection";
import MarketSnapshot from "@/components/rise-africa/MarketSnapshot";
import TalentGap from "@/components/rise-africa/TalentGap";
import EMSAdvantage from "@/components/rise-africa/EMSAdvantage";
import Courses from "@/components/rise-africa/Courses";
import Mentors from "@/components/rise-africa/Mentors";
import LocalConnect from "@/components/rise-africa/LocalConnect";
import Partnerships from "@/components/rise-africa/Partnerships";
import QuickConnect from "@/components/rise-africa/QuickConnect";
import RiseAfricaFooter from "@/components/rise-africa/RiseAfricaFooter";

const RiseAfrica = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <HeroSection />
      <MarketSnapshot />
      <TalentGap />
      <EMSAdvantage />
      <Courses />
      <Mentors />
      <LocalConnect />
      <Partnerships />
      <QuickConnect />
    </main>
    <RiseAfricaFooter />
  </div>
);

export default RiseAfrica;
