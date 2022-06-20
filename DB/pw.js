const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username cannot be blank']
  },
  password: {
    type: String,
    required: [true, 'Password cannot be blacnk']
  },
  salt: {
    type: String
  }
})

module.exports = mongoose.model('user', userSchema);