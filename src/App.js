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
import perfume_gif from './assets/Works/handsonme/perfume_gif.gif';
import ZAS_logo from './assets/Works/ZAS_logo.gif';
import vacationtime from './assets/Works/vacationtime.gif';
import HorizontalShape from './assets/Works/HorizontalShape.gif';
import EmbraceTheChill from './assets/Works/EmbraceTheChill.gif';
import Sabrinatitle from './assets/Works/Sabrinatitle.gif';
import Fall_winter from './assets/Works/fallwinter/Fall_winter.gif';
import fallWinterLogo from './assets/Works/fallwinter/logo.png';
import fallWinterSF1 from './assets/Works/fallwinter/SF1.png';
import fallWinterSF3 from './assets/Works/fallwinter/SF3.png';
import fallWinterSF5 from './assets/Works/fallwinter/SF5.png';
import fallWinterSF6 from './assets/Works/fallwinter/SF6.png';
import fallWinterSF7 from './assets/Works/fallwinter/SF7.JPG';
import fallWinterSF9 from './assets/Works/fallwinter/SF9.JPG';
import fallWinterSF10 from './assets/Works/fallwinter/SF10.JPG';
import fallWinterSF11 from './assets/Works/fallwinter/SF11.JPG';
import fallWinterSF12 from './assets/Works/fallwinter/SF12.JPG';
import fallWinterSF13 from './assets/Works/fallwinter/SF13.png';
import handsStyleFrame1 from './assets/Works/handsonme/1.png';
import handsStyleFrame2 from './assets/Works/handsonme/2.png';
import handsStyleFrame3 from './assets/Works/handsonme/3.png';
import handsStyleFrame4 from './assets/Works/handsonme/4.png';
import handsStyleFrame5 from './assets/Works/handsonme/5.png';
import handsStyleFrame6 from './assets/Works/handsonme/6.png';
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
  play: {
    id: 2,
    path: '/play',
  },
  about: {
    id: 3,
    path: '/about',
  },
};

const pressBookUrl = "https://docs.google.com/presentation/d/1MLBfRmZjtOZ2vScuFCLieEWk0mbVGDE2sEv-_9101FE/edit#slide=id.p";

export const DetailPages = [
  {
    label: 'ZAS Logo',
    preview: ZAS_logo,
    mediaUrl: 'https://player.vimeo.com/video/925201010?h=f1ced0e468',
    route: '/ZASLogo',
  },
  {
    label: 'Hearts in Harmony',
    preview: perfume_gif,
    mediaUrl: 'https://player.vimeo.com/video/900298628?h=7d99a41d2c&byline=0',
    route: '/HeartsInHarmony',
    title: (
      <h2>
        Hands On Me | 2023
      </h2>
    ),
    description: (
      <>
        “Hands On Me” is an imaginary perfume brand I created for my personal project.
        It is crafted for the enchanting moments of romance. With a heart-shaped glass bottle, each fragrance embodies elegance, allure, and a touch of loveliness. It is perfect for women seeking to captivate and charm on their special dates.
        <br />
        <br />
        In the “Hearts in Harmony" commercial campaign, Red and Blue come together to showcase how "Hands On Me" perfume creates a perfect blend of passion and elegance, making every romantic encounter unforgettable.
      </>
    ),
    credits: (
      <>
        Role : Design, Animation
        <br />
        Software Used : After Effect, Cinema 4D
      </>
    ),
    styleframes: [
      handsStyleFrame1,
      handsStyleFrame2,
      handsStyleFrame3,
      handsStyleFrame4,
      handsStyleFrame5,
      handsStyleFrame6,
    ]
  },
  {
    label: 'EmbraceTheChill',
    preview: EmbraceTheChill,
    mediaUrl: 'https://player.vimeo.com/video/924889613?h=6185829e8c',
    route: '/EmbraceTheChill',
    title: (
      <h2>
        Embrace the Chill | 2024
      </h2>
    ),
    description: (
      <>
        "Embrace the Chill" is a personal motion project that follows the journey of three characters
        who are worn out from their hectic work lives. Seeking relief and balance, they decide to go on a vacation.
        <br />
        <br />
        In this project, I learned to design in both collage and vector styles,
        using gradients along with paper and brush textures to make the colors more vibrant and dynamic.
      </>
    ),
    credits: (
      <>
        Role : Design, Animation
        <br />
        Software Used : After Effect, Cinema 4D
      </>
    ),
  },
  {
    label: 'Stepping Through the Seasons',
    preview: Fall_winter,
    title: (
      <h2>
        Stepping Through the Seasons | 2024
      </h2>
    ),
    credits: (
      <>
        Role : Design, Animation
        <br />
        Software Used : After Effect, Procreate, Cinema 4D
      </>
    ),
    description: (
      <>
        "Stepping through the Seasons" is my thesis project at SVA
        Computer Arts. It is a two person team project that combines 2D
        and 3D motion design. We created a shoe apparel line called ZAS.
        This film promotes ZAS sports apparel through a commercial. It
        showcases four season-specific shoes, each featured in distinct
        settings and sports events. The season segments end with a
        close-up of the product and a dynamic color and texture change
        to highlight differences in each shoe’s design.
        Check out our <a style={{ cursor: 'pointer', color: 'orange', textDecoration: 'underline ' }} href={pressBookUrl} target='_blank' rel="noreferrer">Process Book</a>!
      </>
    ),
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
    title: (
      <h2>
        Shape Animation | 2023
      </h2>
    ),
    credits: (
      <>
        Role : Design, Animation
        <br />
        Software Used : After Effects
      </>
    ),
    description: (
      <>
        This is a personal project. I used shape layers to explore designs and animations.
        The project dives into various techniques such
        as keyframing, path animations, stroke and fill to craft smooth visuals.
      </>
    ),
    mediaUrl: 'https://player.vimeo.com/video/925197021?h=49d60494ba',
    route: '/ShapeAnimation',
  },
  {
    label: 'Stepping Through the Seasons',
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
  const [windowWidth,] = useState(window.innerWidth);
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
            <Route path={routes.play.path} element={<Illustration isMobile={isMobile} />} />
            <Route path={routes.about.path} element={<About />} />
            <Route path="*" element={'404 Page not found'} />
            {/* Detail Pages */}
            {DetailPages.map(({ label, mediaUrl, route, logo, styleframes, enableDetails, title, description, credits }) => (
              <Route
                path={route}
                element={<Detail
                  label={label}
                  mediaUrl={mediaUrl}
                  logo={logo}
                  styleframes={styleframes}
                  enableDetails={enableDetails}
                  title={title}
                  description={description}
                  credits={credits}
                />} />
            ))}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
