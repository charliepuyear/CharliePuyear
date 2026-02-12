import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Roster from "@/components/Roster";
import Achievements from "@/components/Achievements";
import News from "@/components/News";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Roster />
        <Achievements />
        <News />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
