var models = require('../models/date.js');

module.exports = {
  addDate: (req, res) => {
    const {date, ini_user_id, user, resta_id, resta} = req.body;

    models.addDate(date, ini_user_id, user,  resta_id, resta, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  },
  getMydate: (req, res) => {
    console.log('req', req.query.uid);
    const uid = req.query.uid;
    models.getMydate(uid, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    })
  }
}