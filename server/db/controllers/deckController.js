var mongoose = require('mongoose');
var db = require('../config');
var Deck = require('../models/deckModel');

module.exports = {
  
  getAll: function(user_id, callback) {

    Deck.find({user_id: user_id}, function(err, decks) {
      if(err) {
        callback(err)
      } else {
        callback(null, decks);
      }
    })
  },
  
  getShared: function(user_id, callback) {
    
    Deck.where('shared.user_id').equals(user_id)
      .exec(function(err, decks) {
        if(err) {
          callback(err)
        } else {
          callback(null, decks);
        }
      })
  },
  
  addDeck: function(deck, callback) {

    new Deck(deck).save(function(err, deck) {
      if(err) {
        callback(err);
      } else {
        callback(null, deck);
      }
    });
  },
  
  updateOneCard: function(deckId, cardId, callback) {
    
    Deck.findById(deckId, function(err, deck) {
      if(err) {
        callback(err);
        return;
      }
      var card = deck.deck.id(cardId);
      var likes = card.likes;
      card.likes = likes + 1;
      deck.save(function(err, deck) {
        if(err) {
          callback(err);
        } else {
          callback(null, deck);
        }
      });
      
    })
  },
  
  deleteOneDeck: function(deckId, user_id, callback) {
    
    Deck.findOneAndRemove({_id: deckId, user_id: user_id}, function(err) {
      if(err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  }
}
