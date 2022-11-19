module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!flowbite-react/.*)',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts',
  ],
};
