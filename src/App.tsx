import Menu from "./components/sections/menu";
import Hero from "./components/sections/hero";
import Benefits from "./components/sections/benefits";

export function App() {
  return (
    <div className="font-sans mx-auto">
      <header>
        <Menu />
        <Hero />
      </header>

      <main className="container mx-auto px-6">
        <Benefits />
        {/* <Tours /> */}
        {/* <Hotels /> */}
        {/* <Blog /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}