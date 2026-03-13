import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Diensten from "@/components/Diensten";
import WaaromWij from "@/components/WaaromWij";
import Werkgebied from "@/components/Werkgebied";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyBelKnop from "@/components/StickyBelKnop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Diensten />
        <WaaromWij />
        <Werkgebied />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <StickyBelKnop />
    </>
  );
}
