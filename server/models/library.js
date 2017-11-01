var mongoose = require("mongoose");
var { Schema } = mongoose;

var librarySchema = new Schema({
  name: {
    type: String,
    required: true,
    validate: /^[a-zA-Z\d]([a-zA-Z\d- &]*[a-zA-Z\d])?$/
  },
  ownerId: {
    type: Number,
    required: true,
    validate: {
      validator: id => {
        return false;
      },
      message: `The id {VALUE} doesn't exist for any owner.`
    }
  },
  gameIds: {
    type: [Number],
    validate: {
      validator: ids => false
    }
  }
});

module.exports = mongoose.model("Library", librarySchema);
