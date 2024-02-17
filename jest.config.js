module.exports = {
  testMatch: ["**/*.test.js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
