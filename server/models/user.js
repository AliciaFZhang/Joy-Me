const db = require('../../db/pw.js');

module.exports = {
  saveUser: (uid, displayName, photoURL, email, callback) => {
    db.query(`
    IF EXISTS (SELECT 1 FROM users WHERE uid=${uid})
    BEGIN
      UPDATE users SET displayName=${displayName}, photoURL=${photoURL}, email=${email} WHERE uid=${uid};
    END
    ELSE
    BEGIN
      INSERT INTO users (uid, displayName, photoURL, email) values ('${uid}', '${displayName}', '${photoURL}', '${email}');
    END`)
  }
}
// module.exports = {
//   insertpw: function (username, hash, callback) {
//     db.create({username, password:hash})
//       .then((data) => callback(null,data))
//       .catch((err) => callback(err));
//   },
//   login: function (username, callback) {
//     db.find({username})
//       .then((data) => callback(null, data[0]))
//       .catch((err) => callback(err));
//   }
// }