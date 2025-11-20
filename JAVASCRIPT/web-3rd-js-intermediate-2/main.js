document.writeln('<h1>Loops</h1>')

document.writeln('<hr>')

document.writeln('<h2>While Loop</h2>')

// While Loop => loops over and over again until a certain criteria is met, in terms of syntax a little bit more understandable than for-loop but has some upsides and downsides

let count = 0;

// if you are using the while loop, make sure that your condition is eventually false

while (count < 10) {

    // count+=1 IS THE SAME AS count = count + 1

    // continue => skip the rest of this single loop

    count += 1

    if (count == 5 || count == 6 || count == 7) {
        continue;
        // if the criteria is met, nothing below will be ran
    }

    console.log(count)

    // you can break a loop by using the break keyword
    if (count > 8) {
        break
    }
}


// loops inside if blocks
// lets say that a company was sending annual "thank you" messages to their clients

// after 2015, they started saying "our family" instead of our "community"

//however after 2020, they stopped doing it yearly and they do it only once.
//  how do we imitate this?

let companyStartYear = 2000;

let userJoinYear = 2021;



// if (userJoinYear < 2021) {

//     for (
//         // we define a new variable called currentYear that starts from our companyStartYear which is 2000
//         let currentYear = companyStartYear;

//         // we continue the loop as long as our currentYear is smaller than userJoinYear(which is 2009)
//         currentYear < userJoinYear;

//         //on each iteration, we increase currentYear by one
//         currentYear++
//     ) {

//         // this part will never run, because we only run our loop until we hit 2009, so this if block will never be true

//         // to fix this problem
//         if (currentYear >= 2015) {
//             document.writeln('Thank you for being a part of our FAMILY.<br>')
//         } else {
//             document.writeln('Thank you for being a part of our community.<br>')
//         }
//     }


// } else {
//     document.writeln('Thank you for being a part of our community.<br>')
// }


// we'll do the same thing except with if else blocks on the outside rather than in the for loop


// up until 2015, we only send community messages

if (userJoinYear < 2020) {
    for (let year = companyStartYear; year < 2015; year++) {
        document.writeln('Thanks for being a part of our community. <br>')
    }
    for (let year = 2015; year < userJoinYear; year++) {
        document.writeln('Thanks for being a part of our family. <br>')
    }

}
else {
    document.writeln('Thanks for being part of our community.')
}





// have a text, and find all the unique characters in it (all characters will be displayed once, no copies or duplicates)

let text = "web 3rd season weekdays";

const uniqueCharacters = [];

for (let char of text) {
    //access each character inside the text
    // console.log(char);

    // push the character that we are going over right now 
    // ONLY IF it doesn't already exist inside the array
    if (uniqueCharacters.includes(char)) {
        console.log('skipping duplicate character')
        continue;
    }

    uniqueCharacters.push(char)

}
console.log(uniqueCharacters)





// We have a text with some numbers in it, we only want to get the numbers inside the text, (i.e filtering all the text and only get the numbers)
//

// a character can be a letter or number or anything on that matter

const numberedText = "welcome to 3rd season 123123123 session 4 9 34 5 i hope you enjoy it"

const numbers = [];

for (let char of numberedText) {

    // check if the char is a number and if it is, push it inside the numbers array

    if (Number(char) && !numbers.includes(char)) {

        numbers.push(char)

    }
    else{
        console.log(char + " is not a number")
    }
}

console.log(numbers)





