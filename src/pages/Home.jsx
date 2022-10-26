import NavBar from '../components/NavBar';
import React from 'react';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
    </div>
  );
};

export default Home;
