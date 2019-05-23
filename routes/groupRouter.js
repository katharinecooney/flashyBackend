const express = require('express');
const router = express.Router;
const mongoose = require('mongoose');

const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require('../helpers/middlewares');


/*************** JOIN GROUP ***************/

router.post('/:groupid/join', isLoggedIn(), (req, res, next) => {
 // find group by id
 // add current member to members array
});

/*************** CREATE NEW GROUP ***************/

router.post('/create', isLoggedIn(), (req, res, next) => {
 // create new Group with school, class, passcode from req.body
 // ? do i need to add empty arrays for members and groupDeck? (not required)

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

router.get('/:groupid', isLoggedIn(), (req, res, next) => {
// find group by id
});  
