module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  moduleNameMapper: {
    '\\.(css|sass|scss)$': '<rootDir>/src/config/jest/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/config/jest/fileMock.js',
    '@root/(.*)': '<rootDir>/src/$1',
    '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
    '@layouts': '<rootDir>/src/layouts/',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
  },
};
