import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PhotoProvider } from './context/PhotoContext';
import Home from './pages/home/Home';
import { Chat } from "./pages/chat/Chat";

const App: React.FC = () => {
    return (
        <PhotoProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chat" element={<Chat />} />
                </Routes>
            </Router>
        </PhotoProvider>
    );
};

export default App;
