import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import About from './views/About';
import Layout from './views/Layout';
import Work from './views/Work';
import Illustration from './views/Illustration';
import Reel from './views/Reel';
import { ThemeProvider } from '@mui/material';
import { theme } from './components/ThemeProvider';
import Detail from './views/Detail';
import perfume_gif from './assets/Works/perfume_gif.gif';
import ZAS_logo from './assets/Works/ZAS_logo.gif';
import vacationtime from './assets/Works/vacationtime.gif';
import HorizontalShape from './assets/Works/HorizontalShape.gif';
import EmbraceTheChill from './assets/Works/EmbraceTheChill.gif';
import Sabrinatitle from './assets/Works/Sabrinatitle.gif';
import Fall_winter from './assets/Works/fallwinter/Fall_winter.gif';
import fallWinterLogo from './assets/Works/fallwinter/logo.png';
import fallWinterSF1 from './assets/Works/fallwinter/SF1.png';
import fallWinterSF2 from './assets/Works/fallwinter/SF2.png';
import fallWinterSF3 from './assets/Works/fallwinter/SF3.png';
import fallWinterSF35 from './assets/Works/fallwinter/SF3-5.png';
import fallWinterSF4 from './assets/Works/fallwinter/SF4.png';
import fallWinterSF5 from './assets/Works/fallwinter/SF5.png';
import fallWinterSF6 from './assets/Works/fallwinter/SF6.png';
import fallWinterSF7 from './assets/Works/fallwinter/SF7.JPG';
import fallWinterSF8 from './assets/Works/fallwinter/SF8.JPG';
import fallWinterSF9 from './assets/Works/fallwinter/SF9.JPG';
import fallWinterSF10 from './assets/Works/fallwinter/SF10.JPG';
import fallWinterSF11 from './assets/Works/fallwinter/SF11.JPG';
import fallWinterSF12 from './assets/Works/fallwinter/SF12.JPG';
import fallWinterSF13 from './assets/Works/fallwinter/SF13.png';
import Endshot from './assets/Works/Endshot.gif';
import './styles/fonts.css';
import { useState } from 'react';

export const routes = {
  home: {
    id: 0, // id should match the desired route id (e.g. reel = 0)
    path: '/',
  },
  reel: {
    id: 0,
    path: '/reel',
  },
  work: {
    id: 1,
    path: '/work',
  },
  illustration: {
    id: 2,
    path: '/illustration',
  },
  about: {
    id: 3,
    path: '/about',
  },
};

export const DetailPages = [
  {
    label: 'ZAS Logo',
    preview: ZAS_logo,
    mediaUrl: 'https://player.vimeo.com/video/925201010?h=f1ced0e468',
    route: '/ZASLogo',
  },
  {
    label: 'HandsOnMe',
    preview: perfume_gif,
    mediaUrl: 'https://player.vimeo.com/video/900298628?h=7d99a41d2c&byline=0',
    route: '/HandsOnMe',
  },
  {
    label: 'EmbraceTheChill',
    preview: EmbraceTheChill,
    mediaUrl: 'https://player.vimeo.com/video/924889613?h=6185829e8c',
    route: '/EmbraceTheChill',
  },
  {
    label: 'Thesis - Stepping Through the Seasons',
    preview: Fall_winter,
    mediaUrl: 'https://player.vimeo.com/video/945037865',
    enableDetails: true,
    route: '/FallWinter',
    logo: fallWinterLogo,
    styleframes: [
      fallWinterSF1,
      fallWinterSF3,
      fallWinterSF5,
      fallWinterSF6,
      fallWinterSF7,
      fallWinterSF9,
      fallWinterSF10,
      fallWinterSF11,
      fallWinterSF12,
      fallWinterSF13,
    ],
  },
  {
    label: 'Shape Animation',
    preview: HorizontalShape,
    mediaUrl: 'https://player.vimeo.com/video/925197021?h=49d60494ba',
    route: '/ShapeAnimation',
  },
  {
    label: 'Thesis - Stepping Through the Seasons',
    preview: Endshot,
    mediaUrl: 'https://player.vimeo.com/video/945037865',
    route: '/Endshot',
    enableDetails: true,
    logo: fallWinterLogo,
    styleframes: [
      fallWinterSF1,
      fallWinterSF3,
      fallWinterSF5,
      fallWinterSF6,
      fallWinterSF7,
      fallWinterSF9,
      fallWinterSF10,
      fallWinterSF11,
      fallWinterSF12,
      fallWinterSF13,
    ],
  },
  {
    label: 'Vacation Time',
    preview: vacationtime,
    mediaUrl: 'https://player.vimeo.com/video/928122548?h=943f4ba461',
    route: '/VacationTime',
  },
  {
    label: '3D Title',
    preview: Sabrinatitle,
    mediaUrl: 'https://player.vimeo.com/video/925192188?h=389edb2b85',
    route: '/3DTitle',
  },
  {
    // Stub to keep grid even
  }
];

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const mobileBreakpoint = 430;
  const isMobile = windowWidth <= mobileBreakpoint;

  return (
    <ThemeProvider theme={theme}>
      <Router basename='/'>
        <Routes>
          <Route element={<Layout isMobile={isMobile} />}>
            <Route path={routes.home.path} element={<Reel isMobile={isMobile} />} />
            <Route path={routes.reel.path} element={<Reel isMobile={isMobile} />} />
            <Route path={routes.work.path} element={<Work isMobile={isMobile} />} />
            <Route path={routes.illustration.path} element={<Illustration isMobile={isMobile} />} />
            <Route path={routes.about.path} element={<About />} />
            <Route path="*" element={'404 Page not found'} />
            {/* Detail Pages */}
            {DetailPages.map(({ label, mediaUrl, route, logo, styleframes, enableDetails }) => (
              <Route
                path={route}
                element={<Detail label={label} mediaUrl={mediaUrl} logo={logo} styleframes={styleframes} enableDetails={enableDetails} />} />
            ))}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
