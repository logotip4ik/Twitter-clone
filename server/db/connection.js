const monk = require('monk');
const url = 'localhost/messageboard';
const db = monk(url);

db.then(() => {
    console.log('Connected correctly to server')
  });

module.exports = db;
