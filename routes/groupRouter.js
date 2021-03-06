const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Group = require('../models/group');
const User = require('../models/user');
const Flashcard = require('../models/flashcard');
const ObjectId = mongoose.Types.ObjectId;

//* ************** JOIN GROUP ***************//

router.post('/join', (req, res, next) => {
  const userId = req.session.currentUser._id;
  const { passcode } = req.body;
  Group.findByIdAndUpdate(passcode, { $push: { members: req.session.currentUser } })
    .then((group) => {
      User.findByIdAndUpdate(userId, { $push: { groups: { group: group._id } } }, { new: true })
        .then((user) => {
          req.session.currentUser = user;
          res
            .json({ message: 'Success!', user })
            .status(201);
        })
        .catch(error => next(error));
    })
    .catch(error => {
      next(error);
    });
});

//* ************** CREATE NEW GROUP ***************//

router.post('/create', (req, res, next) => {
  const { school, subject } = req.body;
  // ADD VALIDATION
  if (!school || !subject) {
    res
      .json({ message: 'Please fill in all fields!!!' })
      .status(422);
    return;
  }
  const creator = req.session.currentUser;
  Group.create({ creator, school, subject })
    .then((newGroup) => {
      res
        .json(newGroup)
        .status(200);
    })
    .catch(error => {
      next(error);
    });
});

/** ************* CREATE CARD IN GROUP PAGE ***************/

router.post('/:groupId/card/create', (req, res, next) => {
  const { groupId } = req.params;
  const { frontText, backText } = req.body;

  Flashcard.create({
    frontText: frontText,
    backText: backText
  })
    .then((newFlashcard) => {
      Group.findByIdAndUpdate(groupId, { $push: { groupDeck: newFlashcard._id } })
        .then((theResponse) => {
          res.status(201).json(theResponse);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/** ************* SAVE CARD TO PERSONAL DECK ***************/
router.put('/:groupId/card/:cardId/save', (req, res, next) => {
  const { cardId, groupId } = req.params;
  const userId = req.session.currentUser._id;

  let isSavedAlready = (currentCard) => {
    return currentCard === cardId;
  };

  const { groups } = req.session.currentUser;
  console.log(groups);
  groups.forEach((deck) => {
    console.log('DECK AND GROUP IDS', deck.group, groupId);
    console.log('DECK AND GROUP IDS ARE EQUAL', deck.group === groupId);
    if (deck.group === groupId) {
      console.log(deck.userDeck.includes(isSavedAlready));
      if (deck.userDeck.includes(isSavedAlready)) {
        return res.json({ message: 'you have this one' }).status(403);
      } else {
        User.findOneAndUpdate({ _id: userId, 'groups.group': groupId },

          // check if card is present

          { $push: { 'groups.$.userDeck': cardId } },

          { new: true })
          .then((user) => {
            req.session.currentUser = user;
            res
              .json(user)
              .status(200);
          })
          .catch(error => { next(error); });
      }
    }
  });
});

/** ************* VISIT SPECIFIC GROUP PAGE ***************/

router.get('/:groupid', (req, res, next) => {
  // find group by id
  const { groupid } = req.params;
  Group.findById(groupid).populate('groupDeck')
    .then(foundGroup => {
      res.json(foundGroup);
    })
    .catch(error => {
      res
        .status(500)
        .json(error);
    });
});

/** ************* UPDATE FLASHCARD ***************/

router.put('/:groupId/card/:cardId/update', (req, res, next) => {
  const { cardId } = req.params;
  const { frontText, backText } = req.body;
  // const userId = req.session.currentUser._id;
  console.log(cardId);
  Flashcard.findByIdAndUpdate(cardId, { $set: { frontText, backText } }, { new: true })
    .then(updatedCard => {
      console.log(updatedCard);
      res.json(updatedCard).status(200);
    })
    .catch(error => { next(error); });
});

module.exports = router;
