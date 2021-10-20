/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

// export default {
//   clearMocks: true,
//   roots: [
//     "<rootDir>/src"
//   ],
//   testEnvironment: "node",
//   transform: {
//     '^.+\\.tsx?$': 'ts-jest'
//   },
// };

module.exports = {
  clearMocks: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  preset: 'ts-jest'
};