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
import HandsOnMePage from './views/Detail/HandsOnMe';
import perfume_gif from './assets/Works/perfume_gif.gif';
import './styles/fonts.css';

export const routes = {
  home: {
    id: 1,
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
    label: 'HandsOnMe',
    preview: perfume_gif,
    media: perfume_gif,
    route: '/HandsOnMe',
  }
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename='/'>
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.home.path} element={<Work />} />
            <Route path={routes.reel.path} element={<Reel />} />
            <Route path={routes.work.path} element={<Work />} />
            <Route path={routes.illustration.path} element={<Illustration />} />
            <Route path={routes.about.path} element={<About />} />
            <Route path="*" element={'404 Page not found'} />
            {/* Detail Pages */}
            {DetailPages.map(({ label, media, route }) => (
              <Route
                path={route}
                element={<HandsOnMePage label={label} media={media} />} />
            ))}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
