const path = require("path")

module.exports = {
  entry: {
    index: "./src/index.js",
    index: "./src/style.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    filename: "style.js"
  },
  mode: "production",
  module: {
    rules: [{
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }]
  }
}