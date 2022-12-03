const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema({
  entryTitle: {
    type: String,
    required: true,
  },
  entryPrice: {
    type: Number,
    required: true,
  }
});

const Entry = mongoose.model("funData", EntrySchema);

module.exports = Entry;
