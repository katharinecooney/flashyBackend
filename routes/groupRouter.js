const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require('../helpers/middlewares');

//*************** JOIN GROUP ***************//

router.post('/:groupid/join', (req, res, next) => {

  const {groupid} = req.params;

  if ( !mongoose.Types.ObjectId.isValid(groupid) ) {
  res.status(400).json({ message: 'Group id is not valid' });
  return;
}

  Group.findByIdAndUpdate(groupid, {$push: { members: req.session.currentUser }})
  .then(() => {
    res
    .json({message: "Success!"})
    .status(201)
  })
  .catch(error => {
    next(error);
  })
});

//*************** CREATE NEW GROUP ***************//

router.post('/create', (req, res, next) => {
 // create new Group with school, class, ?passcode from req.body
 // ? do i need to add empty arrays for members and groupDeck? (not required)
const { school, subject, passcode } = req.body;
Group.create({school, subject, passcode })

});

/*************** CREATE CARD IN GROUP PAGE ***************/

router.post('/:groupid/card/create', (req, res, next) => {
// create new Flashcard with frontText, backText from req.body
// push new flashcard to groupDeck array in Group collection
});

/*************** SAVE CARD TO PERSONAL DECK ***************/

router.put('/:groupid/card/save', (req, res, next) => {
// push flashcard to User's groups.userDeck
});

/*************** VISIT SPECIFIC GROUP PAGE ***************/

router.get('/:groupid', (req, res, next) => {
  // find group by id
  const { groupid } = req.params;
  Group.findById(groupid)
    .then(foundGroup => {
      res.json(foundGroup)
    })
    .catch( error => {
      res
        .status(500)
        .json(error)
    })
});  

module.exports = router;