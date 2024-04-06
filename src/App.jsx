import "./App.css";
import BestEQSection from "./components/BestEQSection/BestEQSection";
import EQBeatsSection from "./components/EQBeatsSection/EQBeatsSection";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import HeroSection from "./components/HeroSection/HeroSection";
import MeetTheAppSection from "./components/MeetTheAppSection/MeetTheAppSection";
import Navbar from "./components/Navbar/Navbar";
import OpenVacancies from "./components/OpenVacancies/OpenVacancies";
import SelfImprovementSection from "./components/SelfImprovementSection/SelfImprovementSection";
import SoundFamiliarSection from "./components/SoundFamiliarSection/SoundFamiliarSection";
import WhatOthersThink from "./components/WhatOthersThink/WhatOthersThink";
import WorkWithUs from "./components/WorkWithUs/WorkWithUs";

function App({ isAdmin }) {
  return (
    <main className="max-w-[1200px] mx-auto ">
      <Navbar />
      <HeroSection />
      <EQBeatsSection />
      <SoundFamiliarSection />
      <MeetTheAppSection />
      <SelfImprovementSection />
      <BestEQSection />
      <WhatOthersThink />
      <GetStarted />
      <WorkWithUs />
      <OpenVacancies isAdmin={isAdmin} />
      <Footer />
    </main>
  );
}

export default App;
