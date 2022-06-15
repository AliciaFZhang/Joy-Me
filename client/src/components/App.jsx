import React, { useEffect, useState } from 'react';
import Nav from './Nav.jsx';
import RestaList from './RestaList.jsx';
import axios from 'axios';

function App () {
  const [resta, setResta] = useState([]);
  const [view, setView] = useState('home');

  useEffect(()=>{
    axios.get('http://ip-api.com/json')
    .then((response) => axios.post('/yelp', response.data))
    .then((res) => setResta(res.data.businesses))
    .catch((err) => console.log('err', err));
  }, []);

  switch(view) {
    case 'home':
      return (
        <div className="App">
          <Nav />
          <div><button onClick={(e) => setView('newdate')}>Add New Date</button></div>
        </div>
      )
      break;
    case 'newdate':
      return (
        <div className="App">
          <Nav />
          {resta.length > 0? <RestaList restaList={ resta }/> : <div>Loading</div>}
        </div>
      );
      break;
  }
}

export default App;