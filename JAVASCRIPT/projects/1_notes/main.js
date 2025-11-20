import { editMode, editNote, popup, popupBox, refreshMenus, showMenu } from "./utils.js";


//^ BRINGING HTML ELEMENTS WITH JS

const openBtn = document.querySelector('.add-box');
const wrapper = document.querySelector('.wrapper')
var deleteBtns = document.querySelectorAll('.menu-btn');



// This array will hold our notes in JavaScript object form, NOT AS HTML
export var notes = [];


// get the permanent notes from my localStorage when the page first loads
// basically means
document.addEventListener('DOMContentLoaded', () => {

    // JavaScript cannot read JSON, so you have to convert it to JS
    notes = JSON.parse(localStorage.getItem('notes')) || []

    // We are setting our notes with the localstorage data HOWEVER we are not displaying them on the screen, so we need a function to display our notes

    renderNotes();
    refreshMenus();
})

//^ ------------ SHOW SAVED NOTES ON SCREEN

export const renderNotes = () => {

    // * BEFORE WE RENDER OUR NOTES, MAKE SURE THERE ARE NO NOTES
    for (let element of wrapper.children) {
        if (!element.classList.contains('add-box')) {
            element.remove()
        }
    }


    // render ( put in the page) the note htmls
    for (let note of notes) {
        const newNote = `
        <div class="note">
            <div class="details">
                <h2 class="title">${note.title}</h2>
                <p class="description">${note.description}</p>
            </div>

            <div class="bottom">
                <span class="date">${note.date}</span>

                <div class="settings">
                    <i class='bx  bx-dots-horizontal-rounded menu-btn'></i>

                    <ul class="menu">
                        <li class="edit-btn" data-noteid="${note.id}">
                            <i class='bx  bx-edit'></i>
                            Edit
                        </li>
                        <li class="delete-btn" data-noteid="${note.id}">
                            <i class='bx  bx-trash'></i>
                            Delete
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `
        openBtn.insertAdjacentHTML('afterend', newNote)

    }

}




// we import showMenu from utils



// we'll add event listeners to ALL of our deleteBtns

for (let btn of deleteBtns) {
    btn.addEventListener('click', () => { showMenu(btn) })
}

// listen for click events on the body element

// we imported the function from utils as well.
// THE REASON:
// We've had two different menus variables both in our main.js and utils.js

// since we are updating our menus in utils.js, the menus in main.js was stale and not getting updated.

// So, as a solution, we moved the function that adds the "close functionality" over to utils.js, which made sure that ALL menus get that function, not the outdated menus in main.js



//^ ------------- PSEUDO CODE

// Adding a New Note: Methodology

//* 1) I want to get the content of my Title input
//* 2) I want to get the form element to catch when I submit the form.
//* 2) I want to get the content of my Description input
//* 3) When the user submits the form, i want to:
//* 4) Create a new "Note" div in JavaScript
//* 5) Replace the default title with the Input content
//* 6) Replace the default description with the Input content
//* 7) Replace the date with the current date. (WIP for update as well)
//* 8) Inject this newly created HTML into the notes container.

export const titleInput = document.querySelector('#title-input');
export const descInput = document.querySelector('#description-input');
export const form = document.querySelector('form');
const container = document.querySelector('.wrapper');

//^ --------------------------- ADD A NEW NOTE

form.addEventListener('submit', (e) => {

    // In HTML, pages refresh when forms are submitted. But this is a behaviour we mostly don't want.

    // to prevent the default action of refreshing the page to stop, we have to use

    e.preventDefault();

    // this id will NEVER change
    const newId = Date.now();

    const newNote = `
    <div class="note">
            <div class="details">
                <h2 class="title">${titleInput.value}</h2>
                <p class="description">${descInput.value}</p>
            </div>

            <div class="bottom">
                <span class="date">${new Date()}</span>

                <div class="settings">
                    <i class='bx  bx-dots-horizontal-rounded menu-btn'></i>

                    <ul class="menu">
                        <li class="edit-btn" data-noteid="${newId}">
                            <i class='bx  bx-edit'></i>
                            Edit
                        </li>
                        <li class="delete-btn" data-noteid="${newId}">
                            <i class='bx  bx-trash'></i>
                            Delete
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `

    // ^ IF EDIT MODE IS TRUE, THEN DO EDIT THINGS

    if (editMode) {


        editNote();

    }

    //^IF NOT THEN ADD A NEW ELEMENT
    else {
        // appendChild means add the html that i give to you to the end of the element -- We'll use it on a later project.

        // insertAdjacentHTML
        openBtn.insertAdjacentHTML('afterend', newNote)

        // We want the page to get all our menu buttons and menus themselves again to include our newly created note's buttons and menus as well.

        refreshMenus();

        // after we display the note on the screen of the user, we have to save it in the persistent/permanent storage (localstorage)

        // we have to first add the note into our temporary notes array

        notes.push({
            title: titleInput.value,
            description: descInput.value,
            id: newId,
            date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
        })
    }




    // then we have to save our updated notes array in the localstorage

    // localStorage cannot directly store JS objects or arrays, so we have to convert them into JSON format
    // this is easy, to convert to JSON, use JSON.stringify()
    // to convert FROM JSON use JSON.parse()

    localStorage.setItem('notes', JSON.stringify(notes));

    // close the popup
    popupBox.classList.remove('show');
    popup.classList.remove('show');

    // remove everything inside the form inputs so that when I open the form again, I don't see the previous values


    //! we clear previous notes so that when we edit something, we don't end up with the old notes + the new ones. 
    clearNotes();

    //? renderNotes takes all the notes from localstorage and displays them, so before running this you need to clear all the "old notes"
    renderNotes();
    refreshMenus();

    //* after we finish adding or editing a note, we want to clear the form
    form.reset();

})




//^ ------------------- LOCAL STORAGE SAVING AND LOADING

// Normally, HTML that is dynamically injected by JavaScript is NOT SAVED ANYWHERE. So it's temporary

// So, to fix that issue the developers of JavaScript have created a storing system called "localStorage"

// localStorage uses JSON formatted files(very similar to JS) and the data it holds doesn't go away or get deleted until the user deletes it themselves.

// Let's create a function that will load our saved notes from localstorage, and another function that will save our notes to localStorage, rather than only displaying it on our screen.




// function to clear all notes

const clearNotes = () => {
    for (let element of wrapper.children) {
        if (!element.classList.contains('add-box')) {
            element.remove()
        }
    }
}





