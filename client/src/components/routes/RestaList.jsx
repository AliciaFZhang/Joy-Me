import React from 'react';
import Resta from './Resta.jsx';

function RestaList ({restaList, userInfo}) {
  console.log('restaList', restaList);
  return (
    <div className='RestaList'>
      {restaList.map((resta) => <Resta key={ resta['id']} resta={ resta }/>)}
    </div>
  );

}

export default RestaList;