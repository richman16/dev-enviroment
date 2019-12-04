// Importar el html webpack plugin instalado mediante NPM
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Importar clean webpack plugin instalado mediante NPM
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// Obtener el path para la salida
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        // path: './dist/',
        // Resolver la ruta absoluta en donde estamos y agregar la carpeta local del output
        path: path.resolve(__dirname,"./dist"),
        // filename: 'bundle.js' || con [hash], le agrega un hash
        filename: 'bundle.[hash].js',
    },
    module: {
        rules: [
            {
                // Expresion regular para seleccionar todos los archivos JS
                test: /\.js$/,
                // Convertidor de Babel adaptado a webpack
                use: 'babel-loader',
                // Excluis node_modules para evitar 
                exclude: /node_modules/
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: './public/index.html'
        } ),
        new CleanWebpackPlugin(),
    ]
};