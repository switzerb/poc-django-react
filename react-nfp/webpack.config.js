const webpack = require('webpack');

module.exports = env => {
  process.env.NODE_ENV = env.NODE_ENV;
  const config = {
    mode: 'production',
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '../../rankings/static/rankings',
      filename: 'Ranking.js',
      library: 'Ranking',
      libraryTarget: 'umd',
      publicPath: '/',
      //filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
  if (env.NODE_ENV === 'development') {
        config.mode = 'development';
        config.devServer = {
          contentBase: './dist',
          hot: true
        };
        config.watch = true;
    }
  return config;
};
