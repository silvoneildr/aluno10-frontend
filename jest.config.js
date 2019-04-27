module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/__tests__/**',
    '!src/assets/**',
    '!src/pages/**',
    '!src/routes/**',
    '!src/services/**',
    '!src/store/index.js',
    '!src/store/ducks/index.js',
    '!src/store/sagas/index.js',
    '!src/styles/**',
    '!src/App.js',
    '!src/index.js',
    '!src/setupTests.js',
    '!src/**/styles.js'
  ],
  testRegex: '__tests__/.*\\.test\\.js$',
  resolver: 'jest-webpack-resolver',
  setupFiles: ['<rootDir>/src/setupTests.js', '<rootDir>/node_modules/regenerator-runtime/runtime'],
  setupFilesAfterEnv: ['jest-styled-components'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
