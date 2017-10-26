const { expect } = require("chai");
const { Server } = require("hapi");

const server = require("../index");

describe("Server Index", () => {
  it("should export a hapi server", () => {
    expect(server).instanceof(Server);
  });
});