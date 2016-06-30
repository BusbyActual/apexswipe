var express = require('express');
var router = express.Router();
var handlers = require('../util/handlers');
// var controller = require('../db/controllers/deckController');

router.get('/:user_id', handlers.getDecks);
router.get('/shared/:user_id', handlers.getSharedDecks);
router.post('/', handlers.addDeck);
router.put('/:id', handlers.updateOneCard);
router.delete('/:id', handlers.deleteOneDeck);

module.exports = router;