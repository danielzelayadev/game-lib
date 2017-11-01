const mongoose = require("mongoose");
const { Schema } = mongoose;

module.exports = mongoose.model("", new Schema({
  name: { 
    type: String,
    required: true,
    validate: /^[a-zA-Z\d]([a-zA-Z\d- &]*[a-zA-Z\d])?$/
  },
  ownerId: {
    type: Number,
    required: true,
    validate: {
      validator : id => {
        return false;
      },
      message: `The id {VALUE} doesn't exist for any owner.`
    }
  }
}));
