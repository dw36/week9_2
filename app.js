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

/*
    Stored Notes

    1. display saved note title in the side menu
        - loop through note array and display object.titles in the side menu

    2. click note title to display note in the main area with a close note button.
        - find object with that title in note Array
        - display its note body in the main area
*/
