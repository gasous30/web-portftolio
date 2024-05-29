import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import WorkExp from "./components/WorkExp";
import ScrollToTop from "./components/ScrollToTop";
import OrgExp from "./components/OrgExp";
import Education from "./components/Education";

function App() {
  return (
    <ChakraProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <About />
        <Projects />
        <Education />
        <WorkExp />
        <OrgExp />
      </main>
      <ScrollToTop />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
