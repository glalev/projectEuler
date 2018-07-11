const fs = require('fs');

fs.readdirSync(__dirname + '/').forEach(function (file) {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    const name = file.replace('.js', '').toLowerCase();
    module.exports[name] = require('./' + file);
  }
});
