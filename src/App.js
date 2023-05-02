import React from 'react'
import './App.css';
import Home from './pages/Home'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Intropage from './tests/Test';
// import Homecarousel from './components/homecarousel/Homecarousel';
import MultiCarousel from './components/homecarousel/MultiCarousel';
import About from './pages/About';
 
 
 
 
function App() {
  return (
    <>
      <Router>
        <Routes> 
       <Route path="/"element={<Home/>}/>
       <Route path="/test"element={<Intropage/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/multi"element={<MultiCarousel/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
