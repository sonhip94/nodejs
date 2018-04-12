console.log('Starting App');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

// var user = os.userInfo();
// console.log(notes.age);

// console.log(notes.add(2, 5));

// fs.appendFile('greetings.txt', `Hello ${user.username} ! Your are ${notes.age}`, (error) => {
// 	console.log(error);
// });


//////////////////////////////////////////////////

// console.log(_.isString(true));
// console.log(_.isString('hehe'));

// var filteredArray = _.uniq(['hehe', 1, 'haha', 'hehe', 1, 2, 3]);
// console.log(filteredArray);
const argv = yargs
	.command('add', 'Add a new node', {
		titie : {
			describe: 'Title of note',
			demand: true,
			alias: 't' 
		},
		body : {
			describe: 'Body of note',
			demand: true,
			alias: 'b' 
		}
	})
	.help()
	.argv;

var command = process.argv[2];
// console.log('Process:', process.argv);

console.log('Yargs:', argv);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note created');
		notes.logNote(note);
	} else {
		console.log('Note title taken');
	}
} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
	var note = notes.getNote(argv.title);
	if (note) {
		console.log('Note found');
		notes.logNote(note);
	} else {
		console.log('Note not found');
	}
} else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);
} else {
	console.log('Command not recognized');
}