const { Server } = require("hapi");

const server = require("../index");

describe("Server Index", () => {
  it("should export a hapi server", () => {
    expect(server).toBeInstanceOf(Server);
  });
});