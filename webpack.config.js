/**
 * Created by yzsoft on 16/4/12.
 */
var path = require('path');
const webpack=require('webpack');
module.exports = {
    entry: [
        path.resolve(__dirname, 'main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    devtool:'eval-source-map',
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:'jquery',
            "window.jQuery":"jquery",
            hasher:'hasher'
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }

};