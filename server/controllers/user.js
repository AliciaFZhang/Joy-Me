var models = require('../models/user.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  register: (req, res) => {
    const {password, username} = req.body;
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) =>
        models.insertpw(username, hash, (err, data)=> {
          if(err) { res.status(404).send(err);}
          else { res.status(200).send(data);}
        }))
    })
  },
  login: (req, res) => {
    const {password, username} = req.body.loginInfo;
    models.login(username,(err, data) => {
      if(err) {
        res.status(500).send(err);
      } else {
        bcrypt.compare(password, data.password, (err, result) => {
          if (err) { res.status(500).send(err);}
          else {
            res.status(200).send(result);
            // if (result === true) {
            //   res.status(200).send(`Welcome, ${username}`);
            // } else {
            //   res.status(200).send(`Wrong password, try again`);
            // }
          }
        })
      }
    })
  }
}