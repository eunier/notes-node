var obj = {
    name: 'Andrew'
};

var stringOjb = JSON.stringify(obj);
console.log(typeof stringOjb);
console.log(stringOjb);


var personString = '{"name": "Yunier", "age": 24}';
// convert string to JSON
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);


const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

// originalNoteString
originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync(__dirname + '/notes.json', originalNoteString);

var noteString = fs.readFileSync(__dirname + '/notes.json');
note = JSON.parse(noteString);

console.log(typeof note);
console.log(note);