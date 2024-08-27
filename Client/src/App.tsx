import Testimonies from "./Components/Testimonies/Testimonies";
import Education from "./Components/Education/Education";
import Service from "./Components/myServices/Service";
import Projects from "./Components/Projects/Projects";
import TheameContex from "./Components/Theame/Theame";
import Vidoes from "./Components/ProjectVideos/Videos";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./App.css";

export default function App() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <TheameContex.Provider value={{ lightMode, setLightMode }}>
      <div className={lightMode ? "light-mode" : "dark-mode"}>
        <Header />
        <Hero id="hero" />
        <About id="about" />
        <Service id="service" />
        <Projects id="projects" />
        <Vidoes />
        <Education id="education" />
        <Testimonies id="testimonies" />
        <Contact id="contact" />
        <Footer id="footer" />
      </div>
    </TheameContex.Provider>
  );
}
