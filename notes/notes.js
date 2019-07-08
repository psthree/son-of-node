const fs = require('fs');
const chalk = require('chalk/types');

const addNote = (title, body) => {
  const notes = loadNotes();

  //check it the tile has already be used
  // filter when it finds a match (filter stops at the first match it finds,
  // returns udefined if nothing is found)
  const duplicateNote = notes.find(note => note.title === title);

  //console.log('dups', duplicateNotes);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('Your note has been added'));
  } else {
    console.log(chalk.red.inverse('Sorry that title is already used'));
  }
  //console.log(notes);
};

const removeNote = title => {
  const notes = loadNotes();
  console.log('removing :', title);

  const notesToKeep = notes.filter(note => note.title !== title);

  //console.log(notesToKeep.length);
  if (notesToKeep.length < notes.length) {
    console.log(chalk.bgGreen('removing note'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgRed('Note not found'));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  // console.log('notes to list', notes);
  console.log(chalk.yellow.inverse('Here are your Notes'));
  notes.forEach(note => {
    console.log(note.title);
  });
};

//takes our note array as argument
const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    //no data? return empty array
    return [];
  }
};

const readNote = title => {
  //console.log('reading note', title);
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.yellow.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('No Note Found'));
  }
};

module.exports = {
  addNotes: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};