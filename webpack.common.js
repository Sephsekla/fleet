const path = require('path');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");


const autoprefixer = require('autoprefixer');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
  filename: "main.min.css",
});

const extractAdmin = new ExtractTextPlugin({
  filename: "landing.min.css",
});

const extractSettings = {
  use: [{
      loader: "css-loader",
      options: {
        url: false,
        sourceMap: true

      }
    },

    {
      loader: 'postcss-loader',
      options: {
        plugins: () => [autoprefixer({
          'browsers': ['> 1%', 'last 2 versions']
        })],
        sourceMap: true
      }
    },

    {
      loader: "sass-loader",
      options: {
        sourceMap: true
      }

    },

  ],
  // use style-loader in development
  fallback: "style-loader"
}

module.exports = {


  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'dist/assets'),
      UI: path.resolve(__dirname, 'src/ui'),
      
    },
  },

  entry: {

    landing: './src/index.js',

  },
  plugins: [
    extractSass,
    extractAdmin,
      new HtmlWebpackPlugin({
        template: 'index.ejs',
        templateParameters: (compilation, assets, assetTags, options) => {
          return {
            compilation,
            webpackConfig: compilation.options,
            htmlWebpackPlugin: {
              tags: assetTags,
              files: assets,
              options
            },
            'foo': 'Fleet'
          };
        },
      })

  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },



  //When run in WordPress we want to use external jquery
  externals: {
   // jquery: 'jQuery'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
          }
        }, {
          loader: "ifdef-loader",
          options: {
            DEBUG: false,
          }
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {}
        }]
      },

      {
        test: /\.scss$/,
        exclude: /landing\.scss$/,
        use: extractSass.extract(extractSettings)
      },

      {
        test: /landing\.scss$/,
        use: extractAdmin.extract(extractSettings)
      },



      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          minimize: true
        }
      }

    ]
  }

};