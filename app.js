/*
    Dark/Light Theme Button

    1. click to changes to dark theme
        - initialize darkModeOn: boolean, default false
        - if darkModeOn is false
        - change <body>'s background color and text color
        - change <header>'s background color and text color
        - change <footer>'s background color and text color

    2. change to indicate that clicking again will change back to light theme
        - if darkModeOn is false
        - change theme button text to dark mode
        - else change theme button text to dark mode

    3. click again to change to light theme
        - if darkModeOn is true
        - change <body>'s background color and text color
        - change <header>'s background color and text color
        - change <footer>'s background color and text color
*/

let darkModeOn = false;
let noteArray = [];

function switchTheme() {
    // change background color
    document.body.classList.toggle("dark-theme");
    // change links color and textarea background color
    var elems = document.getElementsByTagName('a');
    if (darkModeOn) {
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.color = '#191724';
        }
        if (document.querySelector('input') != null) {
            document.querySelector('input').style.backgroundColor = '#fffaf3';
            document.querySelector('input').style.color = '#393552';
            document.querySelector('textarea').style.backgroundColor = '#fffaf3';
            document.querySelector('textarea').style.color = '#393552';
        }
        darkModeOn = false;
    } else {
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.color = '#faf4ed';
        }
        if (document.querySelector('input') != null) {
            document.querySelector('input').style.backgroundColor = '#817c9c';
            document.querySelector('input').style.color = '#faf4ed';
            document.querySelector('textarea').style.backgroundColor = '#817c9c';
            document.querySelector('textarea').style.color = '#faf4ed';
        }
        darkModeOn = true;
    }
}

/*
    New Note Button

    1. click to create a note taking area(textarea or div) with save and cancel button.
        - display a <textarea> in the main area

        - create a save button
            1. click to save the note
                - from a new note object with title and title body
                - add the object into note array
            2. remove the note taking area and buttons
                - remove <textarea> and buttons from main area

        - create a cancel button
            1. click to remove the note taking area and buttons without saving
                - remove <textarea> and buttons from main area
*/

function newNote() {
    document.getElementById('main-area').innerHTML =
        '<input class="width-100 mb-1" value="Note Title"><textarea class="width-100 height-50">Enter your note here</textarea><button onclick="saveNote()">Save</button><button onclick="cancelNote()">Cancel</button>'
}

function saveNote() {
    let note = {
        title: title = document.querySelector('input').value,
        body: body = document.querySelector('textarea').value
    };
    noteArray.push(note);
    console.log(note);
}

function cancelNote() {
    document.getElementById('main-area').innerHTML =
        '<button  onclick="newNote()">New Note</button>'
}

/*
    Stored Notes

    1. display saved note title in the side menu
        - loop through note array and display object.titles in the side menu

    2. click note title to display note in the main area with a close note button.
        - find object with that title in note Array
        - display its note body in the main area
*/

function showNotes() {
    document.getElementById('show-note-button').outerHTML =
        '<button id="hide-note-button" onclick="hideNotes()">Hide Notes</button>';

    if (noteArray[0] != null) {
        noteArray.forEach(function(note) {
            // document.getElementById('note-list').insertAdjacentHTML('beforeend', '<li>' + note.title + '</li>');
            document.getElementById('note-list').insertAdjacentHTML('beforeend', `<li><button onclick="displayNote(\'${note.title}\')"> ${note.title} </button></li>`);
        });
    } else {
        document.getElementById('note-list').insertAdjacentHTML('beforeend', '<li> No Notes To Show</li>');
    }
}

function hideNotes() {
    document.getElementById('hide-note-button').outerHTML =
        '<button id="show-note-button" onclick="showNotes()">Show Notes</button>';
    document.getElementById('note-list').innerHTML = '';
}

function findNoteByTitle(noteTitle) {
    let result = '';
    noteArray.forEach(function(note) {
        if (note.title == noteTitle) {
            result = note.body;
        }
    });

    return result;
}

function displayNote(noteTitle) {
    const noteBody = findNoteByTitle(noteTitle);

    let title = document.createElement('h3');
    title.append(noteTitle);

    let body = document.createElement('p');
    body.append(noteBody);

    document.getElementById('main-area').innerHTML = '';
    document.getElementById('main-area').append(title, body);
    document.getElementById('main-area').innerHTML += ('<button onclick="cancelNote()">Cancel</button>')
}
