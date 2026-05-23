import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Tools } from "./components/Tools";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="flex-1 w-full">
      <Nav />
      <Hero />
      <Work />
      <Services />
      <Process />
      <Tools />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
