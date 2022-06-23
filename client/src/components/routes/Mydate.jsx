import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase-config.jsx';
import DateList from './DateList.jsx';
import { useNavigate } from 'react-router-dom';

function Mydate({isAuth}) {

  const [dates, setDates] = useState([]);

  useEffect(()=>{
    axios.get('/date', {params: {uid: auth.currentUser.uid}})
    .then((res) => {console.log('res', res); setDates(res.data);})
    .catch((err) => console.log('err', err));
  }, []);

  return (
    <div id = 'addDate'>
    {dates.length > 0? <DateList dateList={ dates }/> : <div>No upcoming date</div>}
    </div>
  );
}

export default Mydate;