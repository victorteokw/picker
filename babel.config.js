module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'modified-picker': './js',
        },
        cwd: 'babelrc',
      },
    ],
  ],
};
