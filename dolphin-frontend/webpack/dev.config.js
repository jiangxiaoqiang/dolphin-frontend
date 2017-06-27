var path = require('path');
var basePath = path.resolve(__dirname, '..');

module.exports = {
    entry: path.resolve(basePath, './src/index.js'),
    resolve: {
        modules: [basePath, 'node_modules'],
        extensions: ['.js'],
    },
    output: {
        path: path.resolve(basePath, './dist'),
        filename: 'bundle.js',
    },
    module:{
        loaders:[{
            test : /\.jsx?$/,   // 匹配jsx语法规则
            exclude : /node_modules/,   // 排除的模块
            loaders : 'babel-loader',   // loader名
            query : {
                // 将react预置为es5
                presets : ['es2015', 'react']
            }
        }]
    }
};