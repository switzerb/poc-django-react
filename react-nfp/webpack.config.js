const webpack = require('webpack');

module.exports = env => {
  process.env.NODE_ENV = env.NODE_ENV;
  const config = {
    mode: 'production',
    entry: {
      rankings: './src/rankings.js',
      manager: './src/manager.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '../../rankings/static/rankings/js',
      filename: "[name].js"
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
