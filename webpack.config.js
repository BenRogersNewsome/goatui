const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")


module.exports = {
    entry:{
		index: [
		 	'./demo/index.tsx'
			// 'webpack-hot-middleware/client'
		]
	},
    output : {
		path : path.resolve(__dirname, 'demo', 'public'),
		filename : '[name].bundle.js',
		publicPath : '/'
	},
    plugins:[
        new NodePolyfillPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin()
    ],
    module: {
      rules:[
        {
          test : /\.js$/,
          exclude : /node_modules/,
                  use: {
                      loader: 'babel-loader',
                      options: {
                          presets: ['@babel/preset-env', '@babel/preset-react']
                      }
                  }
        },
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            
          },
          exclude: /node_modules/,
        },
        {
          test : /\.jsx$/,
          exclude : /node_modules/,
                  use: {
                      loader: 'babel-loader',
                      options: {
                          presets: ['@babel/preset-env', '@babel/preset-react']
                      }
                  }
        }
      ],
    },
    resolve: {
      fallback: {
          "path": require.resolve("path-browserify")
      },
      alias: {
          goatui: path.join(__dirname, 'src')
      },
      modules: ['src', 'node_modules', 'demo'],
      extensions: ['.js', '.jsx', '.tsx', '.ts']
    },
    
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
          static: {
              directory: path.join(__dirname, 'demo', 'public')
          },
      compress: true,
      port: 9000,
      host: 'localhost',
      historyApiFallback: true
    }
  };