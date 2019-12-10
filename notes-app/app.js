const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
    command: 'Add',
    describe: 'Add a new note', 
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true, 
            type: 'string'
        }, 
        body: {
            describe: 'Note body', 
            demandOption: true, 
            type: 'string'
        }
    }, 
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }    
})

yargs.command({
    command: 'Delete',
    describe: 'Delete a note', 
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.deleteNote(argv.title)
    }
})

yargs.command({
    command: 'List', 
    describe: 'List all notes', 
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'Read', 
    describe: 'Read a note', 
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true, 
            type: 'string'
        }
    }, 
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()