import React, { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';


function Nav () {
  const [search, setSearch] = useState();
  const [userLogin, setuserLogin] = useState(0);
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: ''
  });
  const changeSearch = (e) => {
    setSearch(e.target.value);
  }
  const handleFailure = (result) => {
    alert(result);
  }
  const handleSuccessLogin = (Data) => {
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



  useEffect(() => {


  })

  return (
    <div id = 'Nav'>
      <div className="Nav-header">
        <h2>Joyme</h2>
      </div>
      {/* <div className="Nav-search">
        <input value={ search } onChange={ (e) => changeSearch(e)}></input>
        <button>🔍</button>
      </div> */}
      <div className="Nav-userName"><h4>{userInfo['name']}</h4></div>
      <div className="Nav-userProfile"><img id="userProfile" src={ImgF}></img></div>
      { userLogin === 0 ? (<div className="Nav-loginButton">
        <form>
          <div className=''>
            <input name='username' value={userInfo.username} placeholder='USERNAME'></input>
          </div>
          <div>
            <input name='Password' value='' placeholder='PASSWORD'></input>
          </div>
        </form>
      </div>) : (<div className="Nav-logoutButton">
      </div>) }

    </div>
  );

}

export default Nav;