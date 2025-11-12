import { descInput, form, notes, renderNotes, titleInput } from "./main.js";

var menus = document.querySelectorAll('.settings')
var menuBtns = document.querySelectorAll('.menu-btn');
const closeBtn = document.querySelector('#close-btn');
const openBtn = document.querySelector('.add-box');
export const popupBox = document.querySelector('.popup-box');
export const popup = document.querySelector('.popup');
const popupTitle = document.querySelector('.popup-title')
const popupButton = document.querySelector('.popup-btn')
export var editMode = false;
var editNoteId = 0;

const showMenu = (button) => {

    console.log(button)
    // since the button itself doesnt contain our menu we have to access the parent first, and then the menu

    // to access the container(parent) of a html element, we use 
    // .parentElement

    button.parentElement.classList.add('show');

    // whenever we click outside the menu, the menu should close itself WIP

}

// ^ TO ADD BUTTON FUNCTIONALITY TO THE MENUS OF ALL OUR NOTES
const refreshMenus = () => {

    menuBtns = document.querySelectorAll('.menu-btn');
    menus = document.querySelectorAll('.settings')
    let deleteBtns = document.querySelectorAll('.delete-btn')
    let editBtns = document.querySelectorAll('.edit-btn')

    //* this for-loop adds the "menu opening" functionality to our menu buttons

    //? so we have to run this when the page first loads
    for (let btn of menuBtns) {
        btn.addEventListener('click', () => { showMenu(btn) })
    }

    //* we will also add, delete functionality to all our delete buttons as well

    //^ ---------------- DELETING NOTES


    // We've given all of our note HTMLs their own data-noteid attributes so that when we click on delete buttons, we can easily see which note we want to delete because we can access the "soon to be deleted" note by the noteid of the delete button

    for (let btn of deleteBtns) {
        btn.addEventListener('click', (e) => {
            // this is the id of the note that i want to delete
            const deleteId = e.target.dataset.noteid;

            //* first let's delete it from html

            // get the closest element with the class of note and delete it from html
            e.target.closest('.note').remove();


            //^ BUT THIS IS NOT ENOUGH
            // we also have to delete it from localStorage, so that they won't keep coming back when we refresh the page

            //& we have to find the note that matches the deleteId we have selected above

            //? .filter => Runs through all the elements in an array like a for-loop and returns an array that only match the criteria given in the function

            // SPLICE
            const index = notes.findIndex(note => note.id == deleteId);
            if (index !== -1) {
                // changes the notes function in-place (mutates)
                notes.splice(index, 1); // removes the note from the array
            }

            // FILTER -- we can't use this because
            // .filter is immutable => you will have to assign it to your notes again
            // * but we can't assign it because notes is imported and you can't assign a value to imported variables
            // notes = notes.filter((note) => {

            //     console.log("noteid:", note.id, "deleteid:",deleteId)
            //     // === or !== also includes type-checking so if you are comparing a string with a number, use != or == instead.
            
            //     console.log()
            //     if (note.id != deleteId) {
            //         return note
            //     }

            // })





            //  SIMPLER FORM
            // const updatedNotes = notes.filter((note) => note.id !== deleteId)

            // we update the localStorage with the updated notes
            localStorage.setItem('notes', JSON.stringify(notes));

        })
    }

    //^ ------------------ EDITING (UPDATING) NOTES

    // ? We can utilize the popup form that we already have, and fill it with values of the note that we want to edit.

    for (let btn of editBtns) {
        btn.addEventListener('click', (e) => {
            // * First, show the popup itself
            popup.classList.add('show');
            popupBox.classList.add('show');

            // * Then, change the name of the popup to Edit Note and also the button
            popupTitle.innerHTML = "Edit Note";
            popupButton.innerHTML = "Update Note";

            // * and close your own menu
            btn.closest('.settings').classList.remove('show')

            //* We want to fetch the values of the note that we want to edit, so that we can fill in the input boxes with it.

            editNoteId = e.target.dataset.noteid

            console.log("note that we want to edit", editNoteId)

            // * now it's time to use this id to get the values of the note we want to edit from the notes array

            const editNote = notes.find((note) => note.id == editNoteId)

            //* we fill the popup box with the values we get from the editnote
            titleInput.value = editNote.title
            descInput.value = editNote.description

            // we are setting the editmode to be true
            editMode = true;
        })
    }
}


document.body.addEventListener('click', (event) => {

    // ^ EVENT PARAMETERS ARE IMPORTANT
    // We can use these to access some data about the events including:

    // What we clicked on
    // When we clicked
    // X-Y coordinates of our click position

    // console.log(event)

    // event.target => catches the element that we clicked on

    // if i click on something that isn't an icon(menu button) OR if i click on something that isn't an option THEN close all my menus

    // .closest => checks if the element or any of its ancestors have the specified class
    if (!event.target.closest('.settings')) {
        for (let menu of menus) {
            menu.classList.remove('show')
        }
    }
})


closeBtn.addEventListener('click', () => {

    // we want to remove the .show classes from both the popupbox(black bacground) and the popup itself

    popupBox.classList.remove('show');
    popup.classList.remove('show');

})

//^ Popup Open Functionality

openBtn.addEventListener('click', () => {

    // I want to clear my form's content when I first open the popup
    form.reset();

    // we want to add .show class to both the popupbox and the popup itself

    popupBox.classList.add('show');
    popup.classList.add('show');

    //? MAKE SURE THE POPUP IS "ADD NOTE" BECAUSE THIS IS THE ADD NEW NOTE BUTTON
    popupTitle.innerHTML = "New Note";
    popupButton.innerHTML = "Add Note";
})



// ^ THE ACTUAL FUNCTION THAT WILL RUN WHEN WE EDIT NOTES

export const editNote = () => {

    const findIndex = notes.findIndex((note) => note.id == editNoteId)

    notes[findIndex] = {
        title: titleInput.value,
        description: descInput.value,
        id: editNoteId,
        date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
    }

}




export { refreshMenus, showMenu }