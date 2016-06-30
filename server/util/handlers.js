var deckController = require('../db/controllers/deckController');
var friendsController = require('../db/controllers/friendsController');

module.exports = {
  
  getDecks: function(req, res) {
    var user_id = req.params.user_id;
    
    deckController.getAll(user_id, function(err, decks) {
      if(err) {
        console.log(err);
        res.sendStatus(400);
      } else {
        res.status(200).send(decks);
      }
    });
  },
  
  getSharedDecks: function(req, res) {
    var user_id = req.params.user_id;
    
    deckController.getShared(user_id, function(err, decks) {
      if(err) {
        console.log(err);
        res.sendStatus(400);
      } else {
        res.status(200).send(decks);
      }
    });  
  },
  
  addDeck: function(req, res) {
    var deck = req.body;
    
    deckController.addDeck(deck, function(err, deck) {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(201).send('New Deck Added');
      }
    });
  },
  
  updateOneCard: function(req, res) {
    var deckId = req.params.id;
    var cardId = req.body.cardId;
    
    deckController.updateOneCard(deckId, cardId, function(err, deck) {
      if(err) {
        console.log(err);
        res.sendStatus(400)
      } else {
        res.sendStatus(200)
      }
    })
  },
  
  deleteOneDeck: function(req, res) {
    var deckId = req.params.id;
    var user_id = req.body.user_id;
    
    deckController.deleteOneDeck(deckId, user_id, function(err) {
      if(err) {
        console.log(err);
        res.sendStatus(400)
      } else {
        res.sendStatus(200)
      }
    })
  },
  
  getFriends: function(req, res) {
    var user_id = req.params.user_id;
    friendsController.getFriends(user_id, function(err, list) {
      if(err) {
        console.log(err);
        res.sendStatus(400);
      } else {
        res.status(200).send(list);
      }
    })

  },
  
  addFriend: function(req, res) {
    var user_id = req.params.user_id;
    var friend = req.body;
    
    friendsController.addFriend(user_id, friend, function(err, friends) {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(201).send('New Friend Added');
      }
    });
  },
  
  // removeFriend: function(req, res) {
  //   var user_id = req.params.user_id;
  //   var friendId = req.body.user_id;
    
  //   deckController.removeFriend(user_id, friendId, function(err) {
  //     if(err) {
  //       console.log(err);
  //       res.sendStatus(400)
  //     } else {
  //       res.sendStatus(200)
  //     }
  //   })
  // },
  
}