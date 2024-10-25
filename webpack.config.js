const path = require('path');

module.exports = {
  mode: 'development', // O 'production'
  entry: './src/index.js', // Cambia esta ruta según tu punto de entrada
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Ruta donde se guardará el archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Regla para archivos .js y .jsx
        exclude: /node_modules/, // No procesar archivos de node_modules
        use: {
          loader: 'babel-loader', // Usar Babel para transpilar el código
        },
      },
    ],
  },
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "net": false,
      "tls": false,
      "timers": require.resolve("timers-browserify"),
      "fs": false,
    },
    extensions: ['.js', '.jsx'], // Permitir importar archivos .js y .jsx sin especificar la extensión
  },
};
