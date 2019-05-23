const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  groups: [{
    type: Schema.Types.ObjectId,
    ref: 'Group',
    userDeck: [{ type: Schema.Types.ObjectId, ref: 'Flashcard' }]
  }]

});

const User = mongoose.model('User', userSchema);
module.exports = User;
