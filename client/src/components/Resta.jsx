import React from 'react';

function Resta({ resta }) {
  return (
    <div className="card">
      <img id="resta" src={ resta['image_url'] }/>
      <div className="container">
        <a href={resta['url']}>{ resta['name'] }</a>
        <div>{resta['price']}</div>
        <div>Rating: {resta['rating']}</div>
        <div>Phone: {resta['display_phone']}</div>
        <div>Address: {resta['location']['address1']}, {resta['location']['city']}</div>
      </div>
    </div>
  );
}

export default Resta;