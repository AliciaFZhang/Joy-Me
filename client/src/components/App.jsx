import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route, Outlet, Link} from 'react-router-dom';
import {auth} from './firebase-config.jsx';
import {signOut} from 'firebase/auth';

import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';
import Dashboard from './routes/Dashboard.jsx';
import Mydate from './routes/Mydate.jsx';

function App () {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  const signUserOut = () => {
    signOut(auth)
    .then(()=> {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname="/";
    })
  }
  return (
    <Router>
      <div className ='dashboard'>
        {!isAuth ? (<div className="headline"><Link className="navhead" to="/">Home</Link></div>) :
        (
          <div className="headline">
            <Link className="navhead" to="/">Home</Link>
            <Link className="navhead" to="/viewdates">View dates</Link>
            <Link className="navhead" to="/mydates">My dates</Link>
            <Link className="navhead" to="/dashboard">Create a date</Link>
            <button className="navhead" onClick={signUserOut}>Log Out</button>
          </div>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} setIsAuth ={setIsAuth}/>}/>
        <Route path="/dashboard" element={<Dashboard isAuth={isAuth} />}/>
        <Route path="/mydates" element={<Mydate isAuth ={isAuth}/>}/>
      </Routes>
    </Router>
  );



}

export default App;


  // switch(view) {
  //   case 'home':
  //     return (
  //       <div className="App" id='main'>
  //         <Nav />
  //         <div><button onClick={(e) => setView('newdate')}>Add New Date</button></div>
  //       </div>
  //     )
  //     break;
  //   case 'newdate':
  //     return (
  //       <div className="App">
  //         <Nav />
  //         {resta.length > 0? <RestaList restaList={ resta }/> : <div>Loading</div>}
  //       </div>
  //     );
  //     break;
  // }
      /* <div className="Nav-search">
      <input value={ search } onChange={ (e) => changeSearch(e)}></input>
      <button>🔍</button>
    </div> */


