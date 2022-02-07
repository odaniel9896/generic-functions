module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.(js|ts)",
    "!<rootDir>/src/main/**",
    "!<rootDir>/src/**/*-protocols.ts",
    "!**/protocols/**",
    "!**/test/**",
  ],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  testMatch: ["**/*.spec.(js|ts)", "**/*.test.(js|ts)"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  preset: "ts-jest",
};
