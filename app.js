console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log('');
        console.log(
            'Note created\n--\n' +
            `Title: ${note.title}\n` +
            `Body: ${note.body}`
        );
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.read(argv.title);
} else if (command === 'remove') {
    notes.remove(argv.title);
} else {
    console.log('Command not recognized');
}
