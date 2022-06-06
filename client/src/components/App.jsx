import React, { useEffect, useState } from 'react';
import Nav from './Nav.jsx';
import RestaList from './RestaList.jsx';
import axios from 'axios';

function App () {
  const [resta, setResta] = useState([]);

  useEffect(()=>{
    axios.get('http://ip-api.com/json')
    .then((response) => axios.post('/yelp', response.data))
    .then((res) => setResta(res.data.businesses))
    .catch((err) => console.log('err', err));
  }, []);

  return (
    <div className="App">
      <Nav />
      {resta.length > 0? <RestaList restaList={ resta }/> : <div>Loading</div>}
    </div>
  );
}

export default App;