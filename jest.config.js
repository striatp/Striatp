import '@testing-library/jest-dom';

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };