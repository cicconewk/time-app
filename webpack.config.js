const path = require('path')

module.exports = {
  entry: {
    main: path.join(__dirname, 'client', 'index.js')
  },
  output: {
    path: path.join(__dirname, 'client', 'public'),
    filename: 'assets/js/[name].bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'client', 'public'),
    historyApiFallback: true,
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
