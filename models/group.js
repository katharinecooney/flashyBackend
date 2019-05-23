const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
  school: { type: String, required: true },
  subject: { type: String, required: true },
  passcode: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  groupDeck: [{ type: Schema.Types.ObjectId, ref: 'Flashcard' }]
}
);

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;
