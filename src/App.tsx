import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Hero-section";
import HowItWorks from "./components/HowItWorks/HowItWorks";
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
      <HowItWorks />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
