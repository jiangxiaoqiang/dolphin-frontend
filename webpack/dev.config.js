var path = require('path');
process.env.NODE_ENV = 'development';
var basePath = path.resolve(__dirname, '..');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
    plugins: [new BundleAnalyzerPlugin({
        // Can be `server`, `static` or `disabled`.
        // In `server` mode analyzer will start HTTP server to show bundle report.
        // In `static` mode single HTML file with bundle report will be generated.
        // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
        analyzerMode: 'server',
        // Host that will be used in `server` mode to start HTTP server.
        analyzerHost: '127.0.0.1',
        // Port that will be used in `server` mode to start HTTP server.
        analyzerPort: 8888,
        // Path to bundle report file that will be generated in `static` mode.
        // Relative to bundles output directory.
        reportFilename: 'report.html',
        // Module sizes to show in report by default.
        // Should be one of `stat`, `parsed` or `gzip`.
        // See "Definitions" section for more information.
        defaultSizes: 'parsed',
        // Automatically open report in default browser
        openAnalyzer: true,
        // If `true`, Webpack Stats JSON file will be generated in bundles output directory
        generateStatsFile: false,
        // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
        // Relative to bundles output directory.
        statsFilename: 'stats.json',
        // Options for `stats.toJson()` method.
        // For example you can exclude sources of your modules from stats file with `source: false` option.
        // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
        statsOptions: null,
        // Log level. Can be 'info', 'warn', 'error' or 'silent'.
        logLevel: 'info'
    })]
    ,
    module: {
        loaders: [{
            test: /\.jsx?$/,   // 匹配jsx语法规则
            exclude: /node_modules/,   // 排除的模块
            loaders: 'babel-loader',   // loader名
            query: {
                // 将react预置为es5
                presets: ['es2015', 'react']
            }
        }]
    }
};