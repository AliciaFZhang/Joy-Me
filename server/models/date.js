const db = require('../../db/db.js');
module.exports = {
  addDate: (req, res) => {
    const { datetime, info, size } = date;
    const { displayName, email, photoURL } = user;
    const { name, image_url, url, price, rating, display_phone, location} = resta;
    db.query(`insert into dates (ini_user_id, displayName, photoURL, resta_id, name, datetime, size, info) values ('${ini_user_id}', '${displayName}', '${photoURL}', '${resta_id}', '${name}', '${datetime}', ${size}, '${info}')`)
    .then(data => callback(null, data))
    .catch(err => callback(err));
  },
  getMydate: (uid, callback) => {
    console.log('uid',uid);
    db.query(`select * from dates where ini_user_id = '${uid}' order by datetime`)
    .then(data => callback(null, data.rows))
    .catch(err => callback(err));
  }
}