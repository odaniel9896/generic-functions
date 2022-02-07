import * as utils from "./index";

describe("STRING TO INT", () => {
  it("return success in parser string", () => {
    const number = utils.toInt("10");

    expect(number).toBe(10);
  });

  it("return 0 when string is not a number", () => {
    const number = utils.toInt(null);

    expect(number).toEqual(0);
  });

  //   it("return error when value is not a string", () => {
  //     const number = utils.toInt(null);

  //     expect(number).toEqual(0);
  //   });
});
