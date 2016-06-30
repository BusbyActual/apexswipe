var express = require('express');
var router = express.Router();
var auth0 = require('../auth0.js');
var request = require('request');
var handlers = require('../util/handlers');

router.get('/', (req, res) => {
  
  var options = {
    uri: 'https://apexswipe.auth0.com/api/v2/users?fields=email%2Cusername%2Cuser_id%2Cpicture&include_fields=true',
    method: 'GET',
    headers: {
      Authorization: auth0.authentication
    }
  };
  
  request(options, (err, response, body) => {
    if (err) {
      console.log(err);
      res.statusCode(500).send();
    } else {
      res.send(body);
    }
  })
  
})

router.get('/friends/:user_id', handlers.getFriends);
router.post('/friends/:user_id', handlers.addFriend);
// router.delete('/friends/:user_id', handler.removeFriend);

module.exports = router;