import AboutAndServices from "./components/AboutAndServices";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import PlanSliders from "./components/PlanSliders";
import Plans from "./components/Plans";
import Services from "./components/Services";
import Works from "./components/Works";

export default function Home() {
  return (
    <main className=" bg-[#fafafa] flex flex-col items-center justify-center overflow-hidden">
      <Hero />
      <AboutAndServices />

      {/* mobile */}
      <Services />

      <Works />
      {/* <Plans /> */}
      <Contact />
    </main>
  );
}
