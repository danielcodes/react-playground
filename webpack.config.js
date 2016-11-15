
// transform js files
// what to transform, what kind of transformation and where to put it
// entry point is the outermost component class

module.exports = {
  entry: __dirname + '/app/index.js',
  module: {
    loaders: [
      {
        // grab *.js files -> exclude n_m/ -> pass through babel loader
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    // name of transformed js and file directory
    filename: 'transformed.js',
    path: __dirname + '/build'
  }

};

