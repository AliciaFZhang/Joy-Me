import React from 'react';
import axios from 'axios';
import MImg from '../../../asset/user_male.png';
import FImg from '../../../asset/user_female.png';
import GImg from '../../../asset/google.png';
import {auth, provider} from '../../firebase-config.jsx';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import './home.css';

const Home = ({isAuth, setIsAuth}) => {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      const user = auth.currentUser;
      axios.post('/user/info', {uid: user.uid, displayName: user.displayName, photoURL: user.photoURL, email: user.email});
      navigate("/dashboard");
    })
  }
  return (
    <div className="Home">
      <div className="HomeWelcome">
        <img className="HomeImg" src={MImg}/>
        <img className="HomeImg" src={FImg}/>
        <h2>An app for foodie gatherings</h2>
        <h4>Start by choosing a restaurant at an ideal time to meet the perfect ones</h4>
      </div>
      { !isAuth? (<div className="HomeloginPage">
        <div className="HomeloginForm">
          <span className="label">Sign in with</span>
          <button className="login-with-google-btn" id="customBtn"
            onClick={signInWithGoogle}>
            <span ><img className="icon" src={GImg}/></span>
            <span className="buttonText">Google</span>
          </button>
        </div>
      </div>):(<></>)}
    </div>
  );
}

export default Home;