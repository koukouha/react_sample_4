const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
}).listen(3333, 'localhost', function(err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3333');
});
