const path = require("path");
const entryPath = "03_Dzien_4/03_Async_Await/02_Zadanie_2";

module.exports = {
  entry: ["whatwg-fetch",`./${entryPath}/js/app.js`],
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`)
  },
  devServer: {
    contentBase: path.join(__dirname, `${entryPath}`),
    publicPath: "/build/",
    compress: true,
    port: 3001,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
