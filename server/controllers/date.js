var models = require('../models/date.js');

module.exports = {
  addDate: (req, res) => {
    const {date, time, size, info, userInfo, restaId} = req.body;
    console.log('req', req.body);
    models.addDate(date, time, size, info, userInfo.username, userInfo.photo,userInfo.uid, restaId ,(err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    })
  }
}