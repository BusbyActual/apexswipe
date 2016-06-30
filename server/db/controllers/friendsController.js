var mongoose = require('mongoose');
var db = require('../config');
var Friends = require('../models/friendsModel');

module.exports = {
  
  getFriends: function(user_id, callback) {
   
    Friends.findOne({user_id: user_id})
      .exec(function(err, user) {
        if(err) {
          callback(err);
        } else if (!user) {
          var newList = {
            user_id: user_id,
            list: []
          }
          new Friends(newList).save(function(err, user) {
            if(err) {
              callback(err);
            } else {
              callback(null, user.list);
            }
          })
        } else {
          console.log('iam called')
          callback(null, user.list);
        }
      });
  },
  
  addFriend: function(user_id, friend, callback) {
    
    Friends.findOne({user_id: user_id})
      .exec(function(err, user) {
        if(err) {
          callback(err);
        } else if (!user) {
          var newList = {
            user_id: user_id,
            list: [friend]
          }
          new Friends(newList).save(function(err, user) {
            if(err) {
              callback(err);
            } else {
              callback(null, user.list);
            }
          })
        } else {
          user.list.push(friend);
          user.save(function(err, user) {
            callback(null, user.list);
          })
        }
      });
  },
  
  // removeFriend: function(user_id, friendId, callback) {
    
  //   Friend.findOne({user_id: user_id}, function(err, friends) {
  //     if(err) {
  //       callback(err);
  //       return;
  //     }
  //     // console.log(deck);
  //     var card = deck.deck.id(cardId);
  //     var likes = card.likes;
  //     card.likes = likes + 1;
  //     deck.save(function(err) {
  //       if(err) {
  //         callback(err)
  //       }
  //     });
      
  //   })
  // }
}
