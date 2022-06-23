import React from 'react';
import StarRatings from 'react-star-ratings';

function Dates({ dates }) {

  return (
    <div className="card">
      <div className="card-container">
        <form>
          <div>Date & Time: {dates.datetime}</div>
          <div>Attendence: {dates.cur}/{dates.size}</div>
        </form>
      </div>
    </div>
  );
}

export default Dates;