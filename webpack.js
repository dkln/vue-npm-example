const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader"
        }
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      },
      {
        test: /\.js$/,
        type: "javascript/esm",
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  debug: false,
                  spec: true
                }
              ]
            ],
            plugins: [
              ["@babel/plugin-syntax-decorators", { decoratorsBeforeExport: true }],
              "@babel/plugin-syntax-dynamic-import"
            ]
          }
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    spec: true
                  }
                ]
              ],
              plugins: [
                ["@babel/plugin-syntax-decorators", { decoratorsBeforeExport: true }],
                "@babel/plugin-syntax-dynamic-import"
              ]
            }
          },
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
              allowTsInNodeModules: true
            }
          }
        ]
      },
      {
        test: /\.slim$/,
        use: {
          loader: "slim-loader"
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: [".mjs", ".ts", ".js"],
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  },
  entry: {
    "index": "./index.ts"
  },
  context: path.resolve(__dirname, "src"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd"
  },
  externals: [
    "@babel/core",
    "@babel/plugin-syntax-decorators",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/preset-env",
    "babel-eslint",
    "vue",
    "vue-loader",
    "vue-resource",
    "vue-template-compiler",
    "babel-loader",
    "file-loader",
    "ts-loader",
    "typescript",
    "vue-class-component",
    "vue-property-decorator",
    "webpack",
    "webpack-cli"
  ]
};
