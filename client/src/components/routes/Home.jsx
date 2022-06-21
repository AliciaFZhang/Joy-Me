import React from 'react';
import axios from 'axios';
import MImg from '../../asset/user_male.png';
import FImg from '../../asset/user_female.png';
import {auth, provider} from '../firebase-config.jsx';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

const Home = ({isAuth, setIsAuth}) => {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/dashboard");
    })
  }
  return (
    <div>
      <div>
        <img src={MImg}/>
        <img src={FImg}/>
        <h2>Foodie Dating Website</h2>
        <h4>Start by choosing a restaurant at an ideal time to meet the perfect one</h4>
      </div>
      { !isAuth? (<div className="loginPage">
        <div className="Nav-loginForm">
        <p>Join by sign in with Google</p>
        <button className="login-with-google-btn"
          onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
      </div>):(<></>)}
    </div>
  );
}

export default Home;