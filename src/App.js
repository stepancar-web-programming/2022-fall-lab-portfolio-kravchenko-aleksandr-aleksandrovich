import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import Project from './Pages/Project/Project';
import BouncyBall from './Sketches/BouncyBall';
import Flocking from './Sketches/Flocking';
import SilovieLinii from './Sketches/SilovieLinii';

function App() {
	return (
		<div className="App">
			<Header />
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/bouncy' element={<Project MyProject={BouncyBall} />} />
					<Route exact path='/flocking' element={<Project MyProject={Flocking} />} />
					<Route exact path='/silovielinii' element={<Project MyProject={SilovieLinii} />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
