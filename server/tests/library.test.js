"use strict";

const Library = require("../models/library");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/testdb", {useMongoClient: true});

mongoose.Promise = global.Promise;

/*
  TODO:
  Utils para los tests de los models
*/

var nameTest    = fieldTest("name"),
    ownerIdTest = fieldTest("ownerId"),
    gameIdsTest = fieldTest("gameIds");

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

function fieldTest(field) {
  return model => {
    expect.assertions(1);

    return model
      .validate()
      .catch(err => {
        expect(err.errors[field]).toBeDefined();
      });
  };
}
