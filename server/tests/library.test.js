"use strict";

var Library = require("../models/library");
var mongoose = require("mongoose");

var { fieldTest } = require("./test-utils");

var nameTest    = fieldTest("name"),
    ownerIdTest = fieldTest("ownerId"),
    gameIdsTest = fieldTest("gameIds");

mongoose.connect("mongodb://localhost/testdb", {useMongoClient: true});

mongoose.Promise = global.Promise;

describe("Library Model", () => {

  describe("name field", () => {
    it("should throw err if empty", () => {
      return nameTest(new Library());
    });
    it("should throw err if name is invalid", () => {
      return nameTest(new Library({name: "%$@*kd"}));
    });
  });

  describe("owner id field", () => {
    it("should throw err if empty", () => {
      return ownerIdTest(new Library({
        name: "MyLib"
      }));
    });
    it("should throw err if owner id doesn't exist", () => {
      return ownerIdTest(new Library({
        name: "MyLib",
        ownerId: -100
      }));
    });
  });

  describe("game ids field", () => {
    it("should throw err if a game id doesn't exist", () => {
      return gameIdsTest(new Library({
        name: "MyLib",
        ownerId: 1,
        gameIdsTest: [1,2,-100]
      }));
    });
  });

});

mongoose.disconnect();
