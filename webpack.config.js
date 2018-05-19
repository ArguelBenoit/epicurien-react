
module.exports = {
  entry: [
    'react-hot-loader/patch',
    './react/index.js'
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }, {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [{ loader: 'file-loader' }]
      }
    ]
  },
  output: {
    path: __dirname + '/',
    publicPath: '/',
    filename: 'bundle.js'
  }
};
