module.exports = {
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.test.json'
      }
    },
    testEnvironment: 'jsdom',
    roots: ["<rootDir>/src"],
    testMatch: [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    // transform: {
    //   "^.+\\.(ts|tsx)$": "ts-jest",
    // },
    // ./config/.jestrc.js
// (trimmed to just the relevant parts)
    transform: {
      '^.+\\.tsx?$': [
        'ts-jest',
        // required due to custom location of tsconfig.json configuration file
        // https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig
        {tsconfig: './config/tsconfig.json'},
      ],
    },
    transformIgnorePatterns: [
      "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$",
    ],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    }
  };
  