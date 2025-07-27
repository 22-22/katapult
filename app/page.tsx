import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/sections/About";
import Dokku from "./components/sections/Dokku";
import Filmi from "./components/sections/Filmi";
import Hero from "./components/sections/Hero";
import Mfd from "./components/sections/Mfd";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Dokku />
        <Mfd />
        <Filmi />
        <About />
      </main>
      <Footer />
    </>
  );
}
