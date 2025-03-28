import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PhotoProvider } from '../context/PhotoContext';
import {QRpage} from "../pages/qr/QRpage";
import {Home} from "../pages/home/Home";
import {Load} from "../pages/load/Load";

const App: React.FC = () => {
    return (
        <PhotoProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/load' element={<Load />} />
                    <Route path='/qr' element={<QRpage />} />
                </Routes>
            </Router>
        </PhotoProvider>
    );
};

export default App;
