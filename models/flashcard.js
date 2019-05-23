const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flashcardSchema = new Schema({
  frontText: { type: String, required: true },
  backText: { type: String, required: true }
}
);

const Flashcard = mongoose.model('Flashcard', flashcardSchema);
module.exports = Flashcard;
