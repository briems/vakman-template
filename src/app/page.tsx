import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import Diensten from "@/components/Diensten";
import WaaromWij from "@/components/WaaromWij";
import Projecten from "@/components/Projecten";
import Reviews from "@/components/Reviews";
import Werkgebied from "@/components/Werkgebied";
import Contact from "@/components/Contact";
import SpoedCTA from "@/components/SpoedCTA";
import Footer from "@/components/Footer";
import StickyBelKnop from "@/components/StickyBelKnop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <Diensten />
        <WaaromWij />
        <Projecten />
        <Reviews />
        <Werkgebied />
        <Contact />
        <SpoedCTA />
      </main>
      <Footer />
      <StickyBelKnop />
    </>
  );
}
