// comment line - single line

/* comment line - multi line

Comment lines are useful to test things out, take notes, explain how the code works etc.
*/




// // console.log("") => the primary command to write something to the browser's console, very useful for testing things in JavaScript.


// // console.log("hello from external javascript")
// // console.log("this will be run after the hello")



// // console.log("console log is used to analyze the parts of JavaScript")
// // console.log("for example: all of these logs prove that JavaScript is currently working")


// ------------------------------------------------------

// VARIABLES => holding memory, accessing it, changing it


// var and let  => defines a value that can be reassigned later on

var firstName = "furkan"

firstName = "anela"

let apples = 10;

apples = 9

// const => constant, doesn't allow for reassignment, stays the same

const lastName = "ercan"

// lastName = "karaoglan" => will give error





// ------------------------------------------------------

var age = 25

// this line will write 25 to the console, because we declared a variable called age above and assigned it the value of 25
// // console.log(age)



// VARIABLE TYPES IN JS

// 1) number => just plain numbers, you can do arithmetic operations on them

var year = 2025

var month = 6

var day = 10


// // console.log(year,day,month)

// 2) string (text) => written in either quotation marks or single quotes or backticks(` `) ````````````

// case-sensitive
var name = `john`
// var Name = "mike" --- NOT THE SAME AS name


//camel case => recommended
var veryImportantText = "important text"

//snake case
var snake_case;

// pascal case
var PascalCaseString;

// // console.log(veryImportantText)


// 3) boolean (true or false) => useful for logical processes

var hasLicense = true

var isStudent = false






// 4) arrays => list-like data types that can represent more than just a single value. Arrays are created by using square brackets. Inside the brackets you can define multiple values, seperated by commas.

var fruits = ["apple", "orange", "banana", "kiwi", "grape", "watermelon"]

// to get the number of items in an array, you can use:

// array.length

// // console.log(fruits.length)


// to get an item from an array you can use:

// inside the square brackets, enter the index of the element you want to get

// array[0]

// // console.log(fruits[0])







// ----------- string - array methods 
// (most of them work for both, but not all)


// S-A   .length => gets the number of items in the variable

// A .push() => adds the item you enter in the parantheses into the end of the variable

let students = ["ahmet", "mehmet"]

students.push("veli")

// // console.log(students)

//--------------------------------------------

// S-A .indexOf() => useful when you want to find the index of an element

students = ["ahmet", "mehmet", "veli", "furkan", "hasan", "ali"]

const index = students.indexOf('ali')

// console.log(index);

const string = "merhaba dünya";

// console.log(string.indexOf("ü"))

//--------------------------------------------

// S-A - array[index] - get the element by the index inside the array/string

const array = [1, 2, 3, 4, 5, ["banana","apple"]]

// console.log("Searched Number:",array[3]);

const kelime = "dünya";

// // console.log(kelime[1])


// ------------------------------------------



// S-A .includes() => returns true or false based on whether an array includes the element in between the parantheses or not

const foods = ["pizza", "kebab", "lahmacun"]

const searchedFood = "lasagna"

// console.log(
//     "Is "
//     + searchedFood
//     + " included in the menu? "
//     + foods.includes(searchedFood)
// )

const suspiciousText = "this text is very suspicious and you can find a word in this";

const foulWord = "world"
// console.log(
//     "Is there a foul word? " + suspiciousText.includes(foulWord)
// )

// -------------------------------------------


//  S  .replace() => gets two parameters, 
// first is SearchText and the second is ReplaceText
// it replaces the SearchText with the ReplaceText

const greeting = "Hello //USERNAME//, have a good evening.";

const username = "furkan";

// console.log(
//     greeting.replace('//USERNAME//',username)
// )




// -----
// arrays don't have this function apparently but we can still do the same thing with an extra step

students = ["ahmet","anela","furkan"]

// we get the index of furkan
const changeIndex = students.indexOf('furkan')

// we use the index to change furkan's value
students[changeIndex] = "ertuğrul"

// document means the HTML page
document.writeln(
    students
)



// -------------------------------------

// S .split()  ---------   splits a string into an array

const completeText = "ahmet,anela,furkan";

document.writeln(completeText)

// // console.log("\n SINGLEWORD")

let splitText = completeText.split('')

// console.log(splitText)

// -----------------------

// you can define what to use as a basis of splitting

splitText = completeText.split(',')

// console.log(splitText)


// --------------------------------------------



// A .join() => joins an array into a single string and puts the parameter in between joints

const splitWords = ["hello","this","is","a","split","text!"]

const unifiedWords = splitWords.join('\n')

// console.log(unifiedWords)

// ------------------------------------------------


let uniString = "this,sentence,needs,to,have,dashes,between,each,words";

// console.log(uniString);

// we turned it into an array by splitting the text using commas
uniString = uniString.split(",");

// console.log(uniString);

// we will turn it back into a string by using - (dashes) as delimiter
uniString = uniString.join('-');

// console.log(uniString);






// Objects - 


/*
        Objects are key-value pairs that are semi-similar to arrays but you can know what to access in objects.


        Example: your ID card or password or anything that has its own attributes

*/

const user = {
    name: "furkan",
    surname: "ercan",
    id: 11111111,
    pob: "istanbul",
    birthDate: 2000,
    isDriver: false
}

// console.log(user);


// --------------------

// HOW TO ACCESS THE VALUE OF A PROPERTY IN AN OBJECT?

// object.property

// console.log(user.id)


// -------------

var car = {
    make: "toyota",
    model: "corolla",
    year: 2004,
    fuelType: "petrol",
    type: "sedan"
}


// changing the values of an object

car.model = "auris"

// console.log(car)


// ----------------------------------

// second way of accessing object's properties

// console.log("Our car's year:",car['year'])


// access object inside an array

const newStudents = [
    {
        name:"furkan",
        surname: "ercan",
        siblings: [
            {
                name: "duhan"
            },
            {
                name: "numan"
            },
            {
                name: "ayya"
            }
        ]
    },
    {
        name: "ahmet",
        surname: "yılmaz"
    },
    {
        name: "anela",
        surname: "karaoglan"
    }
]

//  console.log(
//     "The name of the first student's second sibling:", 
//     newStudents[0].siblings[1].name
// )
















