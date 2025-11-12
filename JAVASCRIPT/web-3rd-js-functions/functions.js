// Functions => Functions are blocks of codes that are defined just once, but can be ran again and again.

// This allows us to get rid of repeating the same process and having redundant code.


document.writeln('<h1>Functions</h1><hr>')


// DRY => don't repeat yourself

// let sum = 10 + 15;

// sum = sum / 2

// sum = sum ** 2

// document.writeln(sum)

// let sum2 = 7 + 5

// sum2 = sum2 / 2

// sum2 = sum2 ** 2

// document.writeln(sum2)

// let sum3 = 28 + 20

// sum3 = sum3 / 2

// sum3 = sum3 ** 2

// document.writeln(sum3)




// to create a function, we must use the function keyword and then define the function's name, its parameters and its body.

function greetings() {

    alert('Hello, welcome to the system.')

    document.writeln("<h2>You've successfully entered the system.</h2>")
}

// above, we've only defined the function, so JavaScript knows what to do when we call the greetings function, but we haven't called it yet, so we haven't given order to JavaScript to run this function.

// So we have to call it

// To call(run) a function, you just enter its name and then use parantheses.


// greetings()






//              FUNCTIONS WITH PARAMETERS
// -------------------------------------------------

// Imagine a scenario like this, you have an add function but the function is defined to use set values. (e.g it only adds 10 and 20 together.)

// So in this sense, no matter how many times you run it, it'll only add 10 and 20 together.

function add() {

    const a = 10;
    const b = 20;

    document.writeln(a + b)
}


add()


// to fix this problem, we need to use parameters which mean external values that we enter to the function to run it the way we want and get the results that we want.

function calculateGrade(a, b) {

    // document.writeln('', a, '+', b, '=', (a + b))
    document.writeln(`${a} + ${b} = ${a + b}`)

}

document.writeln("<br>Student 1's grades are: ")
calculateGrade(45, 30);

document.writeln("<br>Student 2's grades are: ")
calculateGrade(85, 90);




// A student has 4 subjects, each one of them has an oral grade and a written grade
// what we want to do is get the average for each subject





function calculateGeneralGrade(grades) {

    const mathAvg = (grades.math[0] + grades.math[1]) / 2

    document.writeln('<br>Math average is :', mathAvg);

    const scienceAvg = (grades.science[0] + grades.science[1]) / 2

    document.writeln('<br>Science avg is :', scienceAvg);

    const englishAvg = (grades.english[0] + grades.english[1]) / 2

    document.writeln('<br>English avg is :', englishAvg);

    const literateAvg = (grades.literature[0] + grades.literature[1]) / 2

    // writeln => writes a line on the html
    document.writeln('<br>Literature avg is :', literateAvg);

}

const student1Grades = {
    math: [50, 90],
    science: [70, 85],
    english: [45, 30],
    literature: [35, 80]
}


calculateGeneralGrade(student1Grades)






// arrow function ( => )

const hello = (username, text) => {

    // TEMPLATE LITERAL => BEST WHEN COMBINING TEXT WITH JS VARIABLES
    // alert("Hello, " + username + " welcome to the system.")
    alert(`Hello ${username} welcome to the system. ${text}`)
}

const msgCount = 20

// hello('anela', `You have ${msgCount} unread messages.`)






// RETURN KEYWORD



// BEFORE

// an arrow function that gets two values (a,b) adds them together

const addition = (a, b) => {

    let sum = a + b

    // alert sends a notification to the user

    // we don't do these here because we want to use this addition function in different functions that do different things ( one console logs, the other alerts, the other document.writes)

    // --- DRY => Don't Repeat Yourself
    // alert('<br>Addition operation: ' + sum)
    // console.log(sum)
    // document.writeln(sum)

    return sum
}


const consoleLogResult = (result) => {
    // In this function: I only want to console.log the user and do nothing else.

    console.log(addition(10, 20))
}

// consoleLogResult()

const alertResult = (result) => {
    // In this function: I only want to alert and do nothing else.

    alert(addition(30, 14))
}

// alertResult()



// addition(100, 30)

// --------------------------------------------------------


// AFTER "RETURN" KEYWORD

// an arrow function that gets two values (a,b) adds them together AND returns the result back to the user

const additionWithReturn = (a, b) => {

    let sum = a + b

    // return the updated value to wherever the function was called

    // when the return is ran, it ends the function and if you add something after the return keyword, it returns the value to wherever you call the function
    return sum;
}

// console.log(additionWithReturn(60, 13))
// document.writeln('<br>Addition result is: ', additionWithReturn(15, 3))
// alert('hello your result is: ' + additionWithReturn(20, 4))


// ------------------------------------------------------------------------




// create a function that gets the midterm and final grades of the user, calculates the average and tells if the user can pass the year

// midterms stand for 40% of the average and finals are 60%

// if the general note is lesser than 50, then return whether the user passed the year or not


const calculateSuccess = (midterm, final) => {

    //              midterm makes up 40%        
    const average = (midterm * 0.4) + (final * 0.6)

    if (average > 50) {
        // IF the average that we calculated above is 50>
        // then return true (you've passed the year)
        return true;
    }
    else {
        // if not, then return false (you've failed the year)
        return false;
    }
}

const isYearPass = calculateSuccess(100, 40);

if (isYearPass === true) {
    console.log('CONGRATS!')
}
else {
    console.log('Sorry, you failed the year.')
}


// Ternary Operator => ? :
// also called, "one line if block"
// first part represents the condition
// after the ? it is what will happen if the condition is true
// and finally the : (colon) represents the else block



// if (isYearPass == true) {
//     alert("You passed the exam!!!")
// }
// else {
//     alert("Sorry you've failed.")
// }


// alert(isYearPass == true ? "You passed the exam!!!" : "Sorry you've failed.")






// -----------------------------------------------------------------


// Variables  =>   var, let, const || 

// Data Types =>   numbers,      strings, arrays(list),     object(key-value), boolean, dates

const number = 245

const numberString = "245"

const text = "hello world"

const textArray = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

const student = {
    name: "furkan",
    surname: "ercan",
}

const bool = true
const falseBool = false;

const today = new Date()

// ----------------------------------------

// OPERATORS

// Basic arithmetics
// + , - , / , * , ** (expo), - (negative), %(modulo - get remainder)

// complex arithmetics
// When a function comes from a JavaScript object, we call them "methods" instead of functions, but this is not very important.

// Math.random() , Math.floor(3.14), Math.ceil(), Math.round(), Math.sqrt(), Math.cbrt()



// ----------------------------------------

// LOGICAL FLOWS

// if else-if else

// switch case

const num = 3

switch (num) {
    case 1:
        console.log("number is one")
        break
    case 2:
        console.log('number is two')
        break
    default:
        console.log('ur number is neither 1 or 2')
}

// LOOPS

// for loop
// for of loop
// for in
// while loop

// loop keywords = break, continue



// FUNCTIONS

// function name(parameters) {body}

// const name = (parameters) => {body}

// inside functions, we have return keyword which both stops the function from running and returns the given value to the place where the function is called.

