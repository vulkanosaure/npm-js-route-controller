const path = require('path');

module.exports = {
    // entry: path.join(__dirname, '/ts/app.ts'),
    entry: path.join(__dirname, '/ts/index.ts'),
    output: {
        // filename: 'appbundle.js',
        filename: 'index.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};