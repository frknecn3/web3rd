

// MAKING PAGES DYNAMIC



// Event => Event is literally everything that happens inside your webpage.

// -------------------------------------------------------------------

// DOMContentLoaded => Listening for when the DOM(document object model), i.e, our webpage is first loaded. So essentially means that "when my page is loaded"

// click => Listening for when a user clicks on anything on the webpage.

// onkeydown => listening for when the user sends a keystore from the keyboard

// submit => when you fill out a form and then use the submit button to send it, that event will also be listened.

// --------------------------------------------------------------------





// button.addEventListener('event', F() ) => 
//  F => the function that we want to run when the event happens.

// start listening for a type of event and when that event happens, run the code that i give you.


const learnBtn = document.getElementById('learn');



learnBtn.addEventListener('click', () => {

    alert('Udemig | 2025 | All Rights Reserved.')

})


const embraceBtn = document.getElementsByClassName('btn')[0];


embraceBtn.addEventListener('click', () => {

    // write a function that switches to dark theme if currently it is light theme, and switches back to light theme if currently its dark theme.

    // if(document.body.classList.contains('dark')){
    //     document.body.classList.remove('dark')
    // }
    // else{
    //     document.body.classList.add('dark')
    // }

    document.body.classList.toggle('dark')

})



// document.addEventListener('DOMContentLoaded', ()=>{

//     const age = prompt('How old are you?')

//     if(age<18){
//         alert('This is a governmental webpage, parental supervision is necessary for children under 18.')
//     }
//     else{
//         alert('Welcome to the system.')
//     }

// })


// QUERY SELECTOR
// forget the functions about id, class and tagnames. querySelector can do all of them inside just a single function

// METHOD => a function that comes from an object
// getElementById comes from the 'document' object

// getElementById returns a single element
// getElementsByClassName returns an array of elements that have that class
// getElementsByTagName returns an array of elements that have specific tag names('h1','input','button')

// querySelector selects the single first item that fits the criteria in it
/*
    # => select by ID
    . => select by class
    nothing => select by tag name
    * => select everything (but doesnt work in single query selector)
*/
const moneyInput = document.querySelector('#moneyInput')
const resultInput = document.querySelector('#resultInput')
const calculateBtn = document.querySelector('.calculation-wrapper button')
const currencySelect = document.querySelector('#currency')


calculateBtn.addEventListener('click', () => {

    // when we click on the button, we get the amount of money the user has entered inside the moneyInput
    var startMoney = moneyInput.value;

    // get the currency type (change) and have your limitations based on it

    var currency = currencySelect.value // CHF, USD or TRY

    
    startMoney = startMoney * currency

    //if the user inputs a value smaller than 1000$, then reject it and send a message ( alert ) it shouldn't calculate too.


    if (startMoney < 1000) {
        alert('The minimum entrance fee is 1000 USD.');

        resultInput.value = '';
        // when return is triggered, it stops the rest of the code from execution
        return;
    }



    // if (currency == 'USD' && startMoney < 1000) {
    //     alert('The minimum entrance fee is 1000 USD.');
    //     // when return is triggered, it stops the rest of the code from execution
    //     return;
    // }
    // else if(currency == 'CHF' && startMoney < 900){
    //     alert('The minimum entrance fee is 900 CHF.');
    //     return;
    // }
    // else if(currency == 'TRY' && startMoney < 40000){
    //     alert('The minimum entrance fee is 40.000 TRY.');
    //     return;
    // }

    // the company takes 20% cut from the amount of money entered, so the end result(debt) should be 20% higher than the original amount of money
    var result = (startMoney / currency) / 100 * 120;

    // we've calculated the result we want to show, now it's time to render it inside the Result input
    resultInput.value = result
})



// FUNCTION => a function that is declared by itself, and doesnt come from anywhere
const calculateTotal = () => {

}