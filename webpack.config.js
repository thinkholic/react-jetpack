var path = require('path');

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js',
    utils: './utils/index.js',
    createContext: './utils/createContext.js',
    components: './components/index.js',
    Button: './components/Button/index.js',
    Card: './components/Card/index.js',
    Checkbox: './components/Checkbox/index.js',
    File: './components/File/index.js',
    Image: './components/Image/index.js',
    Input: './components/Input/index.js',
    Radio: './components/Radio/index.js',
    Select: './components/Select/index.js',
    Textarea: './components/Textarea/index.js',
    Typography: './components/Typography/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
  externals: {
    react: 'commonjs react',
  },
};
