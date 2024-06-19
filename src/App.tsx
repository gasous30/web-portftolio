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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectPage from "./components/ProjectsPage";
import Achievement from "./components/Achievement";
import Certification from "./components/Certification";
import Teladan from "./components/TELADAN";
import PPProg from "./components/PPProg";

const Root = () => {
  return (
    <>
      <About />
      <Projects />
      <Certification />
      <Education />
      <WorkExp />
      <OrgExp />
      <Achievement />
    </>
  );
};

const router = createBrowserRouter(
  [
    // {
    //   path: "*",
    //   element: <Navigate to="/" />,
    // },
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/projects/:projectId",
      element: <ProjectPage />,
    },
    {
      path: "/TELADAN/About",
      element: <Teladan />,
    },
    {
      path: "/TELADAN/PP",
      element: <PPProg />,
    },
  ]
  // {
  //   basename: "/app",
  // }
);

function App() {
  return (
    <ChakraProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
      <ScrollToTop />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
