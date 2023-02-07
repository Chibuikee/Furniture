import HeroSection from "./components/Hero-section";
import InspirationCollection from "./components/InspirationCollection";
import { Navbar } from "./components/navBarComponent/Navbar";
function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <Navbar />
      </header>
      <HeroSection />
      <InspirationCollection />
    </div>
  );
}

export default App;
