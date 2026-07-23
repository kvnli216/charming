import { HashRouter as Router, Routes, Route, useParams } from "react-router-dom";
import About from "./views/About";
import Layout from "./views/Layout";
import Work from "./views/Work";
import Illustration from "./views/Illustration";
import Reel from "./views/Reel";
import { ThemeProvider } from "@mui/material";
import { theme } from "./components/ThemeProvider";
import Detail from "./views/Detail";
import { useState } from "react";
import { routes } from "./routes";
import { projects } from "./content/projects";
import "./styles/fonts.css";

interface DetailPageProps {
  isMobile: boolean;
}

const DetailPage = ({ isMobile }: DetailPageProps) => {
  const { slug } = useParams();
  const project = projects.find((p) => p.route === `/${slug}`);

  if (!project) {
    return "404 Page not found";
  }

  return <Detail {...project} isMobile={isMobile} />;
};

function App() {
  const [windowWidth] = useState(window.innerWidth);
  const mobileBreakpoint = 430;
  const isMobile = windowWidth <= mobileBreakpoint;

  return (
    <ThemeProvider theme={theme}>
      <Router basename="/">
        <Routes>
          <Route element={<Layout isMobile={isMobile} />}>
            <Route
              path={routes.home.path}
              element={<Reel isMobile={isMobile} />}
            />
            <Route
              path={routes.reel.path}
              element={<Reel isMobile={isMobile} />}
            />
            <Route
              path={routes.work.path}
              element={<Work isMobile={isMobile} />}
            />
            <Route
              path={routes.play.path}
              element={<Illustration isMobile={isMobile} />}
            />
            <Route path={routes.about.path} element={<About />} />
            <Route path="/:slug" element={<DetailPage isMobile={isMobile} />} />
            <Route path="*" element={"404 Page not found"} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
