// ======================================
//
//                  V1
//
// ======================================

function step1v1(user) {
  if (!user || !user.name) throw new Error("user has no name");
  return step2v1(user);
}

function step2v1(user) {
  if (user.name !== "tim") throw new Error("user has no data");
  return step3v1(user);
}

function step3v1(user) {
  return 60;
}

function getUserBalanceV1(user) {
  return step1v1(user);
}

// ======================================
//
//                  V2
//
// ======================================

function step1v2(user) {
  if (!user || !user.name) throw new Error("user has no name");
  return true;
}

function step2v2(user) {
  if (user.name !== "tim") throw new Error("user has no data");
  return true;
}

function step3v2(user) {
  return 60;
}

function getUserBalanceV2(user) {
  const s1 = step1v2(user);
  const s2 = step2v2(user);
  const s3 = step3v2(user);
  return s3;
}

// ======================================
//
//               EXPORTS
//
// ======================================

module.exports = {
  getUserBalanceV1,
  getUserBalanceV2
};
