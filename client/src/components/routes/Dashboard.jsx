import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestaList from './RestaList.jsx';

function Dashboard() {

  const [resta, setResta] = useState([]);
  useEffect(()=>{
    axios.get('http://ip-api.com/json')
    .then((response) => axios.post('/yelp', response.data))
    .then((res) => setResta(res.data.businesses))
    .catch((err) => console.log('err', err));
  }, []);

  return (
    <div id = 'addDate'> Start A New Date
    {resta.length > 0? <RestaList restaList={ resta }/> : <div>Loading</div>}
    </div>
  );
}

export default Dashboard;