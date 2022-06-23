import React from 'react';
import Dates from './Dates.jsx';
function DateList ({dateList}) {
  return (
    <div className='RestaList'>
      {dateList.map((dates) => <Dates key={ dateList['date_id']} dates={ dates }/>)}
    </div>
  );
}

export default DateList;