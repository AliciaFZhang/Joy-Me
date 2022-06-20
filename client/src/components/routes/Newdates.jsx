import React from 'react';
import StarRatings from 'react-star-ratings';

function Resta({ resta }) {
  return (
    <div className="card">
      <img id="resta" src={ resta['image_url'] }/>
      <div className="card-container">
        <a href={resta['url']}>{ resta['name'] }</a>
        <div className = 'price-star'>{resta['price']+'  '}
          <StarRatings rating={resta['rating']} starRatedColor="black"
            numberOfStarts={5} starDimension="15px" starSpacing="2px" name='rating'/>
        </div>
        <div>Phone: {resta['display_phone']}</div>
        <div>Address: {resta['location']['address1']}, {resta['location']['city']}</div>
      </div>
    </div>
  );
}

export default Resta;