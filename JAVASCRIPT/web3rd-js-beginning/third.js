// CONDITIONALS

// to control whether a piece of code will run or not


// 1) IF-ELSE blocks

// if  (conditions)   {commands}
// if (condition) {this will run}

const hasLicense = false;

// if the condition is not met, the body of the conditional will be skipped
if (hasLicense == true) {
    // if has license is true, run the alert below
    // alert('You have a driving license.')
}
else {
    // if the query above isn't run, run the alert below
    // alert("You DON'T have a driving license.")
}


// -----------------------


// imagine a school where if a student gets above 90 grade, they are:
//  1) prestigious honor student
// if they get 75> and <90
//  2) honor student
// if they are neither, they are just normal graduates.
//  3) normal graduate

const grade = 95;

// if(grade>90){
//     alert("You are a prestigious honor student.")
// }
// else if(75<grade){
//     alert('You are an honor student.')
// }
// else if(65<grade){
//     alert('You are a normal graduate')
// }
// else{
//     alert("You didn't pass, try hard next time.")
// }



// ------------------------------


// imagine a university where if you get above 3.5 general grade then you are an honor student, if only above 2.5 then you are a normal student if below 2.5 then you fail

// finally, no matter what, if you are absent for 7> days, you fail.

const absentCount = 6;

const point = 3;

// order of queries => absency is more important here than the points, so it only makes sense to check absency before the point

// this can be even more simplified

// if (absentCount > 7) {
//     alert("you've failed because of being absent too long")
// }
// else if (point > 3.5) {
//     alert('honor student')
// }
// else if (point > 2.5) {
//     alert('normal graduate')
// }
// else {
//     alert('Your score is too low, failed.')
// }



// simplified version:

// if (absentCount > 7) {
//     alert("you've failed because of being absent too long")
// }
// else {

//     if (point > 3.5) {
//         alert('honor student')
//     }
//     else if (point > 2.5) {
//         alert('normal graduate')
//     }
//     else {
//         alert('Your score is too low, failed.')
//     }

// }


// ------------------------------------------------


// switch case => VERY USEFUL when you are working with a single variable that can have multiple different values


// assume we want to display the day of the week in an alert


// if - else method

const day = "Saturday";
const holiday = true;

if (holiday == true) {
    alert('this is a holiday')
}
else if (day == "Monday") {
    alert("Today is Monday")
}
else if (day == "Tuesday") {
    alert("Today is Tuesday")
}
else if (day == "Wednesday") {
    alert("Today is Wednesday")
}
else if (day == "Thursday") {
    alert("Today is Thursday")
}
else if (day == "Friday") {
    alert("Today is Friday")
}
else if (day == "Saturday") {
    alert("Today is Saturday")
}
else {
    alert('Today is Sunday.')
}



// switch case method



if (holiday == true) {
    alert('this is a holiday')
} else {
    switch (day) {
        case 'Monday':
            alert("Today is Monday")
            break;
        case 'Tuesday':
            alert('Today is Tuesday')
            break;
        case 'Wednesday':
            alert('Today is Wednesday')
            break;
        case 'Thursday':
            alert('Today is Thursday')
            break;
        case 'Friday':
            alert('Today is Friday')
            break;
        case 'Saturday':
            alert('Today is Saturday')
            break;
        default:
            'Today is Sunday'
    }
}
