import { ThemeProvider } from "../components/theme-provider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
// import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      {/* <Education /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <Portfolio />
    </ThemeProvider>
  );
}
