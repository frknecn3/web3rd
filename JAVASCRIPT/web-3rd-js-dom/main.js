// DOM => Document Object Model

// As a built-in(intrinsic) object in JavaScript, we can access our HTML file(webpage) by using the "document" object.



// Accessing elements:

// 1) getElementById()
// Gets the element with the specified ID as a parameter
// Gets only a single element, and if you put the same id several times, it only gets your first element.
var card = document.getElementById('first-card');


// 2) getElementsByClassName()
// get all elements that match the specified class name, even if there is only one element that has the class, it is still brought as an Array.

var cards = document.getElementsByClassName('card');

console.log('Cards: ', cards)

// 3) getElementsByTagName()
// gets all elements with the type of element you enter inside
// for example: <h1> => h1
var paragraphs = document.getElementsByTagName('p')

console.log(paragraphs)



// Manipulating HTML Elements by using JavaScript

var title = document.getElementById('title')

// innerText => Access to what's written inside an HTML text element and you can also change the content

// const hour = new Date().getHours()
const hour = 9

if (hour > 22) {
    title.innerText = 'Good night!'
}
else if (hour > 16) {
    title.innerText = 'Good evening!'
}
else if (hour > 12) {
    title.innerText = 'Good afternoon!'
}
else if (hour > 5) {
    title.innerText = 'Good morning!'
}

// 3) -- Access an element inside an element

// access the first element inside the card
console.log(card.firstElementChild)

card.firstElementChild.innerText = "Personal Info"

// access the last element inside the card

card.lastElementChild.innerText = 'Backend Developer'

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------

/* 
    Accessing something in the middle (not first-last)
*/

// .children

// if you know the index of the element, then you can first access the children array, and inside that you can access your element.

const name = card.children[0]

name.innerText = "Anela Karaoglan"


// .getElementsByClassName

card
    .getElementsByClassName('card-name')[0]
    .innerText = 'Bekir Asim Celik'

// --------------------------------------------------------------------



// Accessing the styles

if (hour > 12) {
    document.body.style = `
    background-color: black;
    padding: 20px;
`
}
else {
    document.body.style = `
    background-color: white;
    padding: 20px;
`
}



// EXAMPLE: Manipulate multiple elements at once

let newCards = document.getElementsByClassName('card')

console.log(newCards)

// since we have an array, we want to run a loop over them.




// FOR LOOP
// --------------------------------------------
// i will start from 0, go as long as my i is lower than the array's length (as long as I haven't looped over all the items), and each time increase my number by one



// for(let i = 0; i<newCards.length; i+=1){

//     newCards[i].style = `background-color: rgb(${i*85},${i*30},0);`
// }


/* FOR IN */
// -------------------------------------------------------
// for(let i in newCards){

//     newCards[i].style = `background-color: rgb(${i*85},${i*30},0);`

// }


// FOR OF
// --------------------------------------------------------


let i = 0;

for (let card of newCards) {

    i++

    // 0,1,2,3,4,5,6,7,
    // 0,25,50,75,100,125,150...255
    // 0,1,2,0,1,2,0
    // 0,25,50,0,25,50

    card.style = `background-color: rgb(${(i % 3) * 85},${(i % 3) * 0},255);`


    if (i == 4) {
        i = 0
        card.style = `background-color: rgb(${i * 155},${i * 50},255); border-radius: 0px; border: solid red 3px;`
    }


};

