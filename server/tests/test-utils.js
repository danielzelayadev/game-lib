"use strict";

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

module.exports = {
  fieldTest
};
