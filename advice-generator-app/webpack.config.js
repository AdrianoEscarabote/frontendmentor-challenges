const path = require("path")

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  mode: "production",
  module: {
    rules: [{
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }]
  }
}