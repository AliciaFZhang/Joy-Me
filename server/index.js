require('dotenv').config();
const express = require('express');
const compression = require('compression');
const app = express();
const PORT = 1337 || process.env.PORT;
const axios = require('axios');
const path = require('path');

app.use(express.static('client/dist'));
app.use(express.json());
app.use(compression())

app.post('/yelp', (req, res) => {
  const lat = req.body['lat'];
  const lon = req.body['lon'];
  axios.get(`https://api.yelp.com/v3/businesses/search?term=delis&latitude=${lat}&longitude=${lon}`, {headers: {
    Authorization: `Bearer ${process.env.token}`}
 })
  .then((data) => res.status(200).send(data.data))
  .catch((err) => res.status(500).send(err));
})


app.listen(PORT, () => { console.log(`Server listening on port: ${PORT}`);});