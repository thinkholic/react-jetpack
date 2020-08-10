var path = require('path');

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './index.js',
        utils: './utils/index.js',
        createContext: './utils/createContext.js',
        components: './components/index.js',
        Button: './components/Button/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['env']
                    }
                }
            }
        ]
    },
    externals: {
        'react': 'commonjs react' 
    }
}