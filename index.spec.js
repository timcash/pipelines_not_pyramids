const equal = require("assert").deepEqual;
const { getUserBalanceV1, getUserBalanceV2 } = require("./index");

// ======================================
//
//      FIRST WAY getUserBalanceV1
//
// ======================================

test("should go boom with no user", () => {
  try {
    const result = getUserBalanceV1(null);
  } catch (e) {
    equal(e.toString(), "Error: user has no name");
  }
});

test("should go boom with no data", () => {
  try {
    const result = getUserBalanceV1({ name: "foo" });
  } catch (e) {
    equal(e.toString(), "Error: user has no data");
  }
});

test("should return the balance", () => {
  const result = getUserBalanceV1({ name: "tim" });
  equal(result, 60);
});

// ======================================
//
//      FIRST WAY getUserBalanceV2
//
// ======================================

test("should go boom with no user", () => {
  try {
    const result = getUserBalanceV2(null);
  } catch (e) {
    equal(e.toString(), "Error: user has no name");
  }
});

test("should go boom with no data", () => {
  try {
    const result = getUserBalanceV2({ name: "foo" });
  } catch (e) {
    equal(e.toString(), "Error: user has no data");
  }
});

test("should return the balance", () => {
  const result = getUserBalanceV2({ name: "tim" });
  equal(result, 60);
});
