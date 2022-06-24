var models = require('../models/date.js');

module.exports = {
  addDate: (req, res) => {
    const {date, ini_user_id, user, resta_id, resta} = req.body;
    models.addDate(date, ini_user_id, user, resta_id, resta, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  },
  getMydate: (req, res) => {
    const uid = req.query.uid;
    models.getMydate(uid, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    })
  },
  getAlldates: (req, res) => {
    models.getAlldates((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    })
  },
  join: (req, res) => {
    console.log('req', req.body);
    const {date_id, user_id} = req.body;
    models.join(date_id, user_id, (err,data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    })
  },
  getUserdates: (req, res) => {
    const date_id = req.query.date_id;
    models.getUserdates(date_id, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    })
  }
}