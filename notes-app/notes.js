const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {

    const notes = loadNote()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title, 
            body: body
        })

        saveNote(notes)
        const msg = chalk.green.inverse("Note successfully added!")
        console.log(msg)

    } else {
        const msg = chalk.red.inverse("Note title taken!")
        console.log(msg)
    }

  

}

const deleteNote = (title) => {
    const notes = loadNote()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notesToKeep.length < notes.length) {
        const msg = chalk.green.inverse("Note removed!")
        console.log(msg)
        saveNote(notesToKeep)
    } else {
        const msg = chalk.red.inverse("No note found!")
        console.log(msg)
    }
}

const listNotes = () => {
    const notes = loadNote()

    firstMsg = chalk.inverse("Your notes:")
    console.log(firstMsg)

    var i 
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNote()

    selectedNote = notes.find((note) => note.title === title)

    if (!selectedNote) {
        const msg = chalk.inverse.red("Error! No title found!")
        console.log(msg)
    } else {
        title = chalk.inverse(selectedNote.title)
        body = selectedNote.body
        console.log("Title: ", title)
        console.log("Body: ", body)
    }
}

const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNote = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const data = dataBuffer.toString()
    
        return JSON.parse(data)
    } catch (e) {
        return []
    }
   
}

module.exports = {
    addNote: addNote,
    deleteNote: deleteNote,
    listNotes: listNotes,
    readNote: readNote
}