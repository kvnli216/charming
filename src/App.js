import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={'NoMatch'} />
      </Routes>
    </Router>
  );
}

export default App;
