module.exports = {
  mode: "development",

  entry: "./src/index.tsx",

  output: {
    path: __dirname + "/public",
    publicPath: "build/",
    filename: "bundle.js"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
}