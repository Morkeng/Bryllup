
import React from 'react';
import './wedding_styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import RSVP from './pages/RSVP';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';


function App() {

    return (
        <Router basename="/Bryllup">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/details" element={<Details/>}/>
                <Route path="/rsvp" element={<RSVP/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}

export default App;
