"use strict";

var mongoose = require("mongoose");
var {Schema} = mongoose;

var nameRegexp = /^[a-zA-Z][a-zA-Z\-]*$/;

var userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    validate: nameRegexp
  },
  lastName: {
    type: String,
    required: true,
    validate: nameRegexp
  },
  username: {
    type: String,
    required: true,
    validate : /^[a-zA-Z_\d][a-zA-Z_\d\-]{2,}$/
  }
});

module.exports = mongoose.model("User", userSchema);
