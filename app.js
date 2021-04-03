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


/*
    Close Button

    1. click to remove the displaying note
    2. then return to its original state
*/
