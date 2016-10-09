var path =require('path')
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack')

var compiler = webpack({
    context: __dirname,
    entry: {
        basic: path.join(__dirname, 'basic', 'entry.js')
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].entry.js'
    },
    resolve: {
        alias: {
            'react-pretty-components': path.join(__dirname, '../src')
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
});

var server = new WebpackDevServer(compiler, {
    contentBase: __dirname,
    hot: true
});

server.listen(8080, "localhost", function() {});
