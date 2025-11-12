// * Mathmetical Functions (Math Object)

let price = 48.51;

document.writeln('BASIC OPERATORS')
document.writeln('<hr>')

document.writeln("Price: " + price)
document.writeln('<br>')


// addition
document.writeln('price + 10 = ', price + 10)
document.writeln('<br>')

// subtraction
document.writeln('price - 20 = ' + (price - 19.99))
document.writeln('<br>')


//multiplication
document.writeln('price * 2 = ' + price * 2)
document.writeln('<br>')

// division
document.writeln('price / 4 = ' + price / 4)
document.writeln('<br>')

// modulo
document.writeln(' 10 % 3 = ' + 10 % 3)
document.writeln('<br><br>')

// VERY USEFUL
document.writeln(' is this even or odd? <br>')
// when you use % 2 on a number and if it's zero

document.writeln(' 12 % 2 = ', 12 % 2)


















document.writeln('<br><br><br><br><h1>COMPLEX OPERATORS</h1>')
document.writeln('<hr>')



//     .ceil() => round the number ALWAYS to the closest upper decimal no matter the fractional value ( 48.01 => 49 )

document.writeln(".ceil: " + Math.ceil(price))
document.writeln('<br>')


//      .floor() => round the number ALWAYS to the closest lower decimal no matter the fractional value ( 48.99 => 48)

document.writeln(".floor: " + Math.floor(price))
document.writeln('<br>')


//      .round() => round the number to the closest upper or lower decimal based on proximity

document.writeln(".round: " + Math.round(price))
document.writeln('<br>')


//      .trunc() => truncate, only takes the decimal value and gets rid of the fractional part

document.writeln(".trunc: " + Math.trunc(price))
document.writeln('<br>')


//      .sign() => returns the sign of the number, if its positive it returns 1 if it's negative returns -1 and finally zero if it's zero.

document.writeln('.sign: ' + Math.sign(price))
document.writeln('<br>')


//      .pow() => returns the nth power of the number

document.writeln('.pow: ' + Math.pow(price, 2))
// alternatively you can use ** operator as well

document.writeln("<br> ** => " + price ** 2)
document.writeln('<br>')


//      .sqrt() => returns the square root of the number

document.writeln('.sqrt: ' + Math.sqrt(price))
document.writeln('<br>')


//      .cbrt() => returns the cuberoot of the number

document.writeln('.cbrt: ' + Math.cbrt(price))
document.writeln('<br>')

//      .abs() => absolute, returns the absolute value of a number regardless of its sign

document.writeln('.abs: ' + Math.abs(-price))
document.writeln('<br>')


//      .random() => brings a pseudo-random fractional value between 0 and 1.       0 is inclusive 1 is exclusive

document.writeln(Math.random())
document.writeln('<br>')
document.writeln('<br>')


// Common Practices =>

//    1) Get a random integer between two numbers.

document.writeln(".round + .random => " + Math.round(Math.random() * 10))


































// LOOPS
// -------------------------------------------------

document.writeln('<br><br><br><br><h1>LOOPS</h1>')
document.writeln('<hr>')


// We use loops mostly when working with arrays. 

let fruits = ['kiwi', 'mango', 'banana'];


// let's think that we want to show all our fruits in html
// the method below is very obsolete, code heavy and not modular

// document.writeln(fruits[0])
// document.write(', ')
// document.writeln(fruits[1])
// document.write(', ')
// document.writeln(fruits[2])

// DRY => DON'T REPEAT YOURSELF





// For Loop

// for loop has 3 parameters,

// First => starting point

// Second => Running Criteria 

// Third => Step



// 
// 1)starting from 1
// 2) and as long as my number is smaller or equal to 10, 
// 3)write console.log 
// 4) and increase my number by one each time

document.writeln('<h2>For Loop</h2>')

for (let i = 1; i <= 10; i++) {
    // all the code that we want to run will come inside here, the body

    document.writeln('hello world')
}






fruits = ['kiwi', 'mango', 'banana', "watermelon", "grapefruit", "apple", "orange"];

// 
// 1)starting from 0
// 2) and as long as my number is smaller or equal to the amount of items my array has, 
// 3)write console.log 
// 4) and increase my number by one each time
document.writeln('<br>')


for (let i = 0; i < fruits.length; i += 1) {
    // all the code that we want to run will come inside here, the body

    document.writeln('<br> Hello this is ' + fruits[i])
}


document.writeln('<br><br><br><br>')



//----------------- EVEN OR ODD ----------------------


for (let number = 0; number <= 20; number += 1) {


    if (number % 2 == 0) {
        document.writeln(number + ' is an EVEN number <br>')
    }
    else {
        document.writeln(number + ' is an ODD number. <br>')
    }
}



// ---------------------------For Of Loop----------------

document.writeln('<br><br><br><h2>For Of Loop</h2>')

document.writeln("<p>For-of loop is better for looping over arrays that don't require the loop number to be held.</p>")


let students = ['furkan', 'anela', 'ahmet', 'mehmet', 'hasan', "rıfat", "ayşe"];


// value of array
for (let student of students) {

    document.writeln(student)

}

// --------------- For In Loop -----------------------

document.writeln('<br><br><br><h2>For In Loop</h2>')

document.writeln("<p>For in loops are simpler than plain for loops, but they also give you the ability to access the iterating number</p>")

for (let id in students) {

    document.writeln(students[id])

}


document.writeln('<br><br><br><br>')
const user = {
    name:'furkan',
    surname:'ercan',
    pob:'istanbul',
    hasLicense:true,
    isEmployed:true,
    dob:2000,
}


for(let key in user){

    // we access each key in our user, then we can feed these keys to the user object to get the values

    // key:   value
    // name: 'furkan'

    // object[key] => value
    // user[name]  => furkan
    // user[pob]  => istanbul


    document.writeln(key + ': ' + user[key] + '<br>')

}





