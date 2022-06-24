import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DateView from '../DateView/DateView.jsx';
import { auth } from '../../firebase-config.jsx';
import './viewdates.css';

function Viewdates({isAuth}) {
  const [alldates, setAlldates] = useState([]);

  useEffect(()=>{
    axios.get('/date/alldates')
    .then((res) => {setAlldates(res.data);})
    .catch((err) => console.log('err', err));
  }, []);

  console.log('alldates', alldates);

  return (
    <div id = 'addDate'>
    {alldates.length > 0? (<div>{alldates.map((dates) => <DateView dates={dates}/>)}</div>) : (<div> No upcoming date</div>)}
    </div>
  );
}

export default Viewdates;