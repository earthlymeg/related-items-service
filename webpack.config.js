const path = require('path');

module.exports = {
    entry: './client/src/index.jsx', // The entry point for the Application (Where ReactDOM.render is called)
    watch: true,
    module: {
      rules: [
        {
          test: [/\.jsx$/], // Important that webpack compiles our React jsx files too
          exclude: /node_modules/, // Ignoring the node_modules so they are not sent over with our client bundle
          use: {
            loader: 'babel-loader', // Allows Babel and Webpack to work together
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'] // Environment Presets... Not 100% what these do
            }
          }
        },
        {
          test: /\.(gif|svg|jpg|png)$/,
          loader: "file-loader",
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    performance: {
      hints: false
    },
     output: { // IMPORTANT: This is where we set the bundle to be built into a folder
      path: path.join(__dirname,'./client/dist/'), // Where Webpack should place the file
      filename: 'bundle.js' // The name of the file to build
    }
  };