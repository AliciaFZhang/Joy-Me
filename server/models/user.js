const db = require('../../db/pw.js');

module.exports = {
  insertpw: function (username, hash, callback) {
    db.create({username, password:hash})
      .then((data) => callback(null,data))
      .catch((err) => callback(err));
  },
  login: function (username, callback) {
    db.find({username})
      .then((data) => callback(null, data[0]))
      .catch((err) => callback(err));
  }
}