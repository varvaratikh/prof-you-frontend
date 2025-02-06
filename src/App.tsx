import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PhotoProvider } from './context/PhotoContext';
import Home from './pages/home/Home';
import { Chat } from "./pages/chat/Chat";
import {QRpage} from "./pages/qr/QRpage";

const App: React.FC = () => {
    return (
        <PhotoProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path='/qr' element={<QRpage />} />
                </Routes>
            </Router>
        </PhotoProvider>
    );
};

export default App;
