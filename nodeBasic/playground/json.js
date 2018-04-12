// var obj = {
// 	name: 'Son Hip'
// }

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

////////////////////////////

// var personString = '{"name" : "Son Hip", "job" : "Developer", "age" : 25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

//////////////////////////////

const fs = require('fs');

var originalNote = {
	'title' : 'Some title',
	'body' : 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);//ghi file

var noteString = fs.readFileSync('notes.json');//doc file

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);