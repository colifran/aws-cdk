const baseConfig = require('@aws-cdk/cdk-build-tools/config/jest.config');

module.exports = {
  ...baseConfig,
  testMatch: [
    "<rootDir>/**/test/**/?(*.)+(test).js",
  ],
  testEnvironment: 'node',
};