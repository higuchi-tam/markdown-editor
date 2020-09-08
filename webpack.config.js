const path = require( 'path' )

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,　　 // x? = xの有無は任意
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', 'tsx'],
    },
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'index.js',
        publicPath: 'dist/',
    }
}