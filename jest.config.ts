const nextJest = require("next/jest");

// Next.js 루트 디렉토리(보통 package.json이 있는 곳)
const createJestConfig = nextJest({
  dir: "./",
});

// 커스텀 옵션
const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  verbose: true,
};

// next/jest가 만든 설정 + 커스텀 옵션 합치기
module.exports = createJestConfig(customJestConfig);