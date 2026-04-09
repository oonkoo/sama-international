import {
  Header,
  Hero,
  About,
  VisionMission,
  Services,
  Projects,
  Clients,
  Certifications,
  Equipment,
  Contact,
  Footer,
} from "./components";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Projects />
      <Clients />
      <Certifications />
      <Equipment />
      <Contact />
      <Footer />
    </main>
  );
}
