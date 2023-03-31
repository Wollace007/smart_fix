import React from 'react'
import './App.css';
import Home from './pages/Home'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Intropage from './tests/Test';
import Homecarousel from './components/homecarousel/Homecarousel';
 
function App() {
  return (
    <>
      <Router>
        <Routes> 
       <Route path="/home"element={<Home/>}/>
       <Route path="/test"element={<Intropage/>}/>
      <Route path="/homecar"element={<Homecarousel/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
