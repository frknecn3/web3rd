// list.pop() => remove element from the end of the array
// list.shift() => remove element from the start of the array





// S-A | .slice => taking a slice(a certain part that has a beginning and an end) from an array or a string

const numbers = [1,2,3,4,5,6,7,8,9,10];

const numberSlice = numbers.slice(4,9)
// => notice how 6 is not included, because starting index is included but ending index isn't

console.log(numberSlice)

// ----------

// Strings as well

const str = "this is a placeholder text";

console.log(str.slice(0,10));

// --------

// send "congrats you've won the lottery message to only the first 100 users"

const users = []

users.slice(0,101) 
// gets the 0-100 elements inside the users array











// A | .splice => can remove, replace, add elements at specified indexes

const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// 1st parameter is the starting point, 2nd is how many steps of elements it will delete
list.splice(10,10)

//starts from 10 and deletes 10 elements going forward

console.log(list)














// S | .substring / .substr

const oldText = "substr is an old way, and it's replaced by .slice"

const textPart = oldText.substring(6,20);

console.log(textPart)







