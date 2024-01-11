module.exports = {
  preset: './jest-preset.json',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@core-ui/(.*)$': '<rootDir>/src/core-ui/$1',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testMatch: ['**/*.test.js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
}
