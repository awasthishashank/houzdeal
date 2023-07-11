import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import CardDetailsPage from './components/CardDetailsPage';
import HomePage from './components/HomePage';



const App = () => {
  return (
  <>
      <Router>
   
   <Routes>
        <Route path="/" exact Component={HomePage } />
        <Route path="/property/:id"  Component={CardDetailsPage } />
      </Routes>
  
  
    </Router>
    </>
  );
};

export default App;
{/*import Header from './components/Header/Header';
import './App.css';
import ResidenciesPune from './components/Residencies/ResidenciesPune';
import ResidenciesMumbai from'./components/ResidenciesMumbai/ResidenciesMumbai';
import BorderCard from './components/BorderCard/BorderCard';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import Info from './components/Info/Info';
import Pageinfo from './components/Pageinfo/Pageinfo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




function App() { 
  return (
    <> 
    <Router>
      
    </Router>
      <Header />
      <ResidenciesPune/>
      <ResidenciesMumbai />
      <BorderCard />
      <GetStarted />
      <Footer />

      <Info />
      <Pageinfo />
      <Footer />
   </>
 
  
  );
}

export default App;*/}





