const fs = require('fs');
const path = require('path');
const mockData = require('./mockData');

//destructuring mockdata to courses and authors
const { courses, authors } = mockData;
const data = JSON.stringify({ courses, authors }); // parsing to strings
const filepath = path.join(__dirname, 'db.json'); // path of db.json

// writing to db.json
fs.writeFile(filepath, data, (err) => {
  err ? console.log(err) : console.log('Mock DB Created');
});
