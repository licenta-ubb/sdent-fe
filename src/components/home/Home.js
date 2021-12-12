import React from 'react';
import HeroSectionFirst from './HeroSectionFirst';
import HeroSectionSecond from './HeroSectionSecond';
import './Home.scss';
const Home = () => {
  return (
    <div className="home-main-page">
      <HeroSectionFirst />
      <HeroSectionSecond />
    </div>
  );
};

export default Home;
