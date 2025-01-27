import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import {Chat} from "./pages/chat/Chat";


const App: React.FC = () => {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
  );
};

export default App;
