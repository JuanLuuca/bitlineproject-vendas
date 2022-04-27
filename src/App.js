import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound'
import Header from './components/Header/Header.js';
import Home from './components/HomePage/Home';
import Sweets from './components/HomePage/Sweets';
import Eggs from './components/HomePage/Eggs';
import AboutUs from './components/HomePage/AboutUs';
import ContactUs from './components/HomePage/ContactUs';


function App() {
    return (
        <div className="App">
            <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/sweets" element={<Sweets />}></Route>
                    <Route path="/eggs" element={<Eggs />}></Route>
                    <Route path="/aboutus" element={<AboutUs />}></Route>
                    <Route path="/contactus" element={<ContactUs />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;


/* Estudar Radix, parece ser uma coisa muito boa que vai te ajudar
React Query, estudar tbm
GraphQL, estudar tbm
Next.js, estudar tbm

*/