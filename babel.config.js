module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  env: {
    development: {
      plugins: [
        ['styled-components', {
          displayName: true,
        }],
      ],
    },
    production: {
      plugins: [
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements',
        'transform-react-remove-prop-types',
        ['styled-components', {
          displayName: false,
        }],
      ],
    },
  },
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    ['module-resolver', {
      root: ['./'],
      alias: {
        '@Components': './src/components',
        '@Routes': './src/routes',
        '@Pages': './src/pages',
        '@Style': './src/style',
        '@Redux': './src/redux',
        '@Actions': './src/actions',
        '@Constants': './src/constants',
        '@Icons': './src/icons',
        '@Utils': './src/utils',
      },
    }],
  ],
};
