import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainCard from "./components/MainCard/MainCard";


const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          {/*<Route path="/" element={<Home />} />*/}
            <Route path="/" element={<MainCard />} />

        </Routes>
      </Router>
  );
};

export default App;
