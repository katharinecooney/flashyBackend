const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

/** ************* UPDATE PROFILE ***************/

router.put('/update', (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const userId = req.session.currentUser._id;
  User.findByIdAndUpdate(userId, { firstName, lastName, email, password }, { new: true })
    .then(user => {
      res.json(user).status(201);
    })
    .catch(error => { next(error); });
});

/** ************* SHOW ALL DECKS ***************/
router.get('/decks', (req, res, next) => {
  const userId = req.session.currentUser._id;
  User.findById(userId).populate('groups.userDeck').populate('groups.group')
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      next(error);
    });
});

/** ************* SHOW ALL GROUPS ***************/
router.get('/groups', (req, res, next) => {
  const userId = req.session.currentUser._id;
  User.findById(userId).populate('groups.group')
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      next(error);
    });
});

/** ************* SHOW SINGLE DECK ***************/
router.get('/:deckId', (req, res, next) => {
  const { deckId } = req.params;
  const userId = req.session.currentUser._id;
  User.findById(userId, { 'group.userDeck._id': deckId }).populate('groups.userDeck')
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      next(error);
    });
});

/** ******* DELETE CARD FROM PERSONAL DECK *********/
router.delete('/:groupId/:cardId/delete', (req, res, next) => {
  const userId = req.session.currentUser._id;
  const { cardId, groupId } = req.params;
  console.log(cardId);
  console.log(groupId);
  User.findOneAndUpdate({ _id: userId, 'groups.group': groupId }, { $pull: { 'groups.$.userDeck': ObjectId(cardId) } }, { new: true })
    .then((newUser) => {
      console.log(newUser);
      req.session.currentUser = newUser;
      res
        .status(202)
        .json({ message: `Card with id ${cardId} removed successfully.`, newUser });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
