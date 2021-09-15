module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'yet-yet-another-picker': './js',
        },
        cwd: 'babelrc',
      },
    ],
  ],
};
