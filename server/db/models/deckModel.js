var mongoose = require('mongoose');

var deckSchema = mongoose.Schema({

  // id of user creating deck
  user_id: {
    type: String,
    required: true
  },
  
  // array containing user ids that user has chosen to share with
  shared: [{
    user_id: String,
    swiped: Boolean
  }],
  
  // name of deck
  name: String,
  
  // deck array containing objects(cards)
  deck: [{
    name: String, // or businessID?
    imageUrl: String,
    likes: Number,
  }],
});

var Deck = mongoose.model('Deck', deckSchema);
module.exports = Deck;


