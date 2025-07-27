import Header from "./components/Header";
import Dokku from "./components/sections/Dokku";
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
      </main>
    </>
  );
}
