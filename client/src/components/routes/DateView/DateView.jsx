import React, {useEffect} from 'react';
import StarRatings from 'react-star-ratings';
import dateview from './dateview.css';
import axios from 'axios';
import { auth } from '../../firebase-config.jsx';

function DateView({ dates }) {

  useEffect(()=> {
    const date_id = dates.date_id;
    axios.get('dates/join', {params: { date_id }})
    .then((data)=> console.log('get'))
    .catch((err)=> console.log('err'));
  },[]);

  function handleJoin () {
    e.preventDefault();
    const user_id = auth.currentUser.uid;
    axios.post('/dates/join', { date_id, user_id })
    .then((data)=> console.log('joined'))
    .catch((err)=> console.log('err'));
  }

  return (
    <div className="card">
      <div className="card-container">
        <form>
          <div>Place: {dates.name}</div>
          <div>Date & Time: {dates.datetime}</div>
          <div>Info: {dates.info}</div>
          <div>Attendence: {dates.cur}/{dates.size}</div>
          <div className="participants">
            <div className="starter">
              <div>{dates.displayname}</div>
              <img src={dates.photourl}/>
            </div>
          </div>
          <div>
            <button onClick={handleJoin} className="Joinbtn">Join</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DateView;