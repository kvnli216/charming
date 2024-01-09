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

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Work />} />
          <Route path="/reel" element={<Reel />} />
          <Route path="/illustration" element={<Illustration />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={'404 Page not found'} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
