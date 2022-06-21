import React, {useState} from 'react';
import {auth, provider} from '../firebase-config.jsx';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login({setIsAuth}) {

  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/dashboard");
      console.log('here');
    })
  }
  return(
    <div className="loginPage">
      <div className="Nav-loginForm">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn"
        onClick={signInWithGoogle}>Sign in with Google</button>
      </div>

    </div>
  );
}
export default Login;
// const Login = ({}) => {
  //   const [loginInfo, setLoginInfo] = useState({
  //     'username': '',
  //     'password': ''
  //   });
  //   function handleChange(e){
  //     e.persist();
  //     setLoginInfo({...loginInfo, [e.target.name]:e.target.value});
  //   }
  //   let wrong = '';
  //   function handleSubmit(e){
  //     e.preventDefault();
  //     axios.post('/user/login', {loginInfo})
  //     .then((response)=>{
  //       if (response.data === true) {
  //         setView('login');
  //       } else {
  //         wrong = 'Try again'
  //       }
  //       console.log('data', response.data, 'wrong', wrong);
  //     })
  //   }
  //   return (
  //     <div className = "Login">
  //       <div id ='Nav'>
  //         <div className="Nav-header">
  //           <h2>Joyme</h2>
  //         </div>
  //         <div className="Nav-loginForm">
  //           <form className ='Nav-input' onSubmit={handleSubmit}>
  //             <div className='Nav-inputBox'>
  //               <input name='username' type='text' onChange={handleChange} value={loginInfo.username} placeholder=' USERNAME'></input>
  //             </div>
  //             <div className='Nav-inputBox'>
  //               <input name='password' type='password' onChange={handleChange} value={loginInfo.password} placeholder=' PASSWORD'></input>
  //             </div>
  //             <span>{wrong}</span>
  //             <div className='Nav-inputBox'>
  //               <submit><button>Log In</button></submit>
  //             </div>
  //             <div className='Nav-inputBox'>
  //               Create new account
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //   </div>);
  // }
