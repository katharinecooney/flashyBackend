const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Group = require('../models/group');
const User = require('../models/user');
const Flashcard = require('../models/flashcard');

// const {
//   isLoggedIn,
//   isNotLoggedIn,
//   validationLoggin
// } = require('../helpers/middlewares');

//* ************** JOIN GROUP ***************//

router.post('/:groupId/join', (req, res, next) => {
  const { groupId } = req.params;
  const userId = req.session.currentUser._id;

  if (!mongoose.Types.ObjectId.isValid(groupId)) {
    res.status(400).json({ message: 'Group id is not valid' });
    return;
  }

  Group.findByIdAndUpdate(groupId, { $push: { members: req.session.currentUser } })
    .then(() => {
      User.findByIdAndUpdate(userId, { $push: { groups: groupId } }, { new: true })
        .then((user) => {
          // req.session.currentUser = user;
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
  const { school, subject, passcode } = req.body;
  // ADD VALIDATION
  if (!school || !subject || !passcode) {
    res
      .json({ message: 'Please fill in all fields!!!' })
      .status(422);
    return;
  }
  const creator = req.session.currentUser;
  Group.create({ creator, school, subject, passcode })
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

router.put('/:groupdId/card/:cardId/save', (req, res, next) => {
  const { cardId, groupId } = req.params;
  const userId = req.session.currentUser._id;
  User.findOneAndUpdate({ _id: userId, groups: groupId }, { $push: { 'groups.userDeck': cardId } })
    .then((user) => {
      res
        .json(user)
        .status(200);
    })
    .catch(error => { next(error); });
});

/** ************* VISIT SPECIFIC GROUP PAGE ***************/

router.get('/:groupid', (req, res, next) => {
  // find group by id
  const { groupid } = req.params;
  Group.findById(groupid)
    .then(foundGroup => {
      res.json(foundGroup);
    })
    .catch(error => {
      res
        .status(500)
        .json(error);
    });
});

module.exports = router;
