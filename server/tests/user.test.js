"use strict";

var User = require("../models/user");
var mongoose = require("mongoose");

var { fieldTest } = require("./test-utils");

var firstNameTest = fieldTest("firstName");

mongoose.connect("mongodb://localhost/testdb", {useMongoClient: true});

mongoose.Promise = global.Promise;

describe("User Model", () => {

  describe("first name", () => {
    it("should throw err if empty", () => {
      return firstNameTest(new User());
    });
  });

});

mongoose.disconnect();
