import React from 'react';
import Header from '../components/Header/Header';
import '../App.css';
import ResidenciesPune from '../components/Residencies/ResidenciesPune';
import ResidenciesMumbai from'../components/ResidenciesMumbai/ResidenciesMumbai';
import BorderCard from '../components/BorderCard/BorderCard';
import Footer from '../components/Footer/Footer';
import GetStarted from '../components/GetStarted/GetStarted';

const HomePage = () => {

  return (
    <>
    <Header />
    <ResidenciesPune/>
    <ResidenciesMumbai />
    <BorderCard />
    <GetStarted />
    <Footer />
    </>
  );
};

export default HomePage;
