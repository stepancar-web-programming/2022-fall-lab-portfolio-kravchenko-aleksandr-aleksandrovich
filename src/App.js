import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home';
import Bouncy from './Bouncy';
import Sowwy from './Sowwy';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes> 
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/bouncy' element={<Bouncy/>}/>
          <Route exact path='/sowwy' element={<Sowwy/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
