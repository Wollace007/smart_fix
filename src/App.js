import React from 'react'
import './App.css';
import Home from './pages/Home'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Intropage from './tests/Test';
// import Homecarousel from './components/homecarousel/Homecarousel';
import MultiCarousel from './components/homecarousel/MultiCarousel';
import About from './pages/About';
import LinearWithValueLabel from './components/LinearProgressbar';
import Faq from './components/faq/Faq';
 
 
 
 
function App() {
  return (
    <>
      <Router>
        <Routes> 
       <Route path="/"element={<Home/>}/>
       <Route path="/test"element={<Intropage/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/multi"element={<MultiCarousel/>}/>
      <Route path="/linear"element={<LinearWithValueLabel/>}/>
      <Route path="/faq"element={<Faq/>}/>
       
        </Routes>
      </Router>
    </>
  );
}

export default App;
