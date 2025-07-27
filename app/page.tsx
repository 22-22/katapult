import Header from "./components/Header";
import Dokku from "./components/sections/Dokku";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Dokku />
      </main>
    </>
  );
}
