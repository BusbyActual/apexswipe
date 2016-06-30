var mongoose = require('mongoose');

var friendsSchema = mongoose.Schema({

  // id of user creating deck
  user_id: {
    type: String,
    required: true
  },
  
  // array containing user ids that user has chosen to share with
  list: [{
    user_id: String,
    picture: String,
    email: String
  }],
  
});

var Friends = mongoose.model('Friends', friendsSchema);
module.exports = Friends;