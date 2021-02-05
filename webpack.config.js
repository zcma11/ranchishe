const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.ts$/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: 'babel-loader',
                                options: {
                                    presets: [
                                        [
                                            '@babel/preset-env',
                                            {
                                                targets: {
                                                    "chrome": "58",
                                                    "ie": "11"
                                                },
                                                corejs: "3",
                                                useBuiltIns: "usage"
                                            }
                                        ]
                                    ]
                                }
                            },
                            'ts-loader'
                        ]
                    },
                    {
                        test: /\.less$/,
                        use: [
                            'style-loader',
                            'css-loader',
                            'less-loader'
                        ]
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'production',
    resolve: {
        extensions: ['.js','.ts']
    }
}