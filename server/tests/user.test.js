"use strict";

var User = require("../models/user");
var mongoose = require("mongoose");

var { fieldTest } = require("./test-utils");

var firstNameTest = fieldTest("firstName");
var lastNameTest  = fieldTest("lastName");
var usernameTest  = fieldTest("username");

mongoose.connect("mongodb://localhost/testdb", {useMongoClient: true});

mongoose.Promise = global.Promise;

describe("User Model", () => {

  describe("first name", () => {
    it("should throw err if empty", () => {
      return firstNameTest(new User());
    });
    it("should throw err if invalid", () => {
      return firstNameTest(new User({
        firstName: "62 Ehj- +*2738() +32.e4"
      }));
    });
  });

  describe("last name", () => {
    it("should throw err if empty", () => {
      return lastNameTest(new User());
    });
    it("should throw err if invalid", () => {
      return lastNameTest(new User({
        lastName: "62 Ehj- +*2738() +32.e4"
      }));
    });
  });

  describe("username", () => {
    it("should throw err if empty", () => {
      return usernameTest(new User());
    });
    it("should throw err if invalid", () => {
      return usernameTest(new User({
        username : "!@3 4djfe*"
      }));
    });
  });

});

mongoose.disconnect();
