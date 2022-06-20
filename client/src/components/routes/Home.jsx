import React from 'react';
import axios from 'axios';
import MImg from '../../asset/user_male.png';
import FImg from '../../asset/user_female.png';

const Home = () => {
  return (
    <div>
      <img src={MImg}/>
      <img src={FImg}/>
    </div>
  );
}

export default Home;