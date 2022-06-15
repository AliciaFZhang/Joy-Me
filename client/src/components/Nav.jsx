import React, { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';
import userImgDefault from '../asset/user_male.png';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

function Nav () {
  const [search, setSearch] = useState();
  const [userLogin, setuserLogin] = useState(0);
  const [userInfo, setUserInfo] = useState({
    name: 'Guest',
    userImg: userImgDefault
  });
  const changeSearch = (e) => {
    setSearch(e.target.value);
  }
  const handleFailure = (result) => {
    alert(result);
  }
  const handleSuccessLogin = (googleData) => {
    const userdata = googleData.profileObj;
    setUserInfo( {...userInfo, name: userdata['givenName'], userImg: userdata['imageUrl']
    })
    setuserLogin(1);
  };
  const handleSuccessLogout= (googleData) => {
    setuserLogin(0);
    setUserInfo( {...userInfo, name: 'Guest', userImg: userImgDefault
  })
  };

  const clientId = "368480161571-fk17ijspvsegbgg2ha3lctit5didugh9.apps.googleusercontent.com";

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "https://www.googleapis.com/auth/userinfo.email"
      })
    };
    gapi.load('client:auth2', start);

  })

  return (
    <div id = 'Nav'>
      <div className="Nav-header">
        <h2>Joyme</h2>
      </div>
      <div className="Nav-search">
        <input value={ search } onChange={ (e) => changeSearch(e)}></input>
        <button>🔍</button>
      </div>
      <div className="Nav-userName"><h4>{userInfo['name']}</h4></div>
      <div className="Nav-userProfile"><img id="userProfile" src={ userInfo['userImg']}></img></div>
      { userLogin === 0 ? (<div className="Nav-loginButton">
        <GoogleLogin
          clientId = {clientId}
          buttonText="Login"
          onSuccess={ handleSuccessLogin}
          onError={ handleFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </div>) : (<div className="Nav-logoutButton">
        <GoogleLogout
          clientId = {clientId}
          buttonText="Logout"
          onLogoutSuccess={ handleSuccessLogout}
          onError={ handleFailure}
        />
      </div>) }

    </div>
  );

}

export default Nav;