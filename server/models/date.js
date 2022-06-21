const db = require('../../db/db.js');
module.exports = {
  addDate: (date, ini_user_id, user,  resta_id, resta, callback) => {
    const { datetime, info, size } = date;
    const { displayName, email, photoURL } = user;
    const { name, image_url, url, price, rating, display_phone, location} = resta;
    db.query(`insert into dates (ini_user_id, diaplayName, photoURL, resta_id, name, datetime, size, info) values ("${ini_user_id}", "${displayName}", "${photoURL}", "${resta_id}", "${name}", "${datetime}", ${size}, "${info}")`)
    .then(data => callback(null, data))
    .catch(err => callback(err));
  }
  ,
  addResta: () =>{}
}