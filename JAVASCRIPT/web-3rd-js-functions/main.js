// Date object
// Date object is used to get and transform date type values


// 1) get the current date but in form of milliseconds since 1970
let date = Date.now();

document.writeln(date,"<br>")

const record = {
    startDate: Date.now(),
    endDate: undefined,
}

const record2 = {
    startDate: Date.now(),
    endDate: undefined,
}

if(record.loginDate < record2.loginDate){
    console.log('first record is earlier')
}else{
    console.log('second record is earlier')
}




// --------------------------------------------


// 2) get the current date
let newDate = new Date();

document.writeln(newDate)

document.writeln('<br><br>')

// let compareDate = new Date('10/3/2025')
let compareDate = new Date(2025,11,10,13,30,10,999)

document.writeln(compareDate)




// 3) get month, year, day, hour or different specific values from the date

document.writeln('<br><br>Day only: ',compareDate.getDate())
document.writeln('<br><br>Day of the week: ',compareDate.getDay())
document.writeln('<br><br>Date with hour: ',compareDate.toLocaleString())
document.writeln('<br><br>Date without hour in string format: ',compareDate.toDateString())
document.writeln('<br><br>Date without hour in DD/MM/YYYY format: ',compareDate.toLocaleDateString('tr-TR'))
document.writeln('<br><br>Date milliseconds: ',compareDate.getMilliseconds())
document.writeln('<br><br>Date seconds: ',compareDate.getSeconds())
document.writeln('<br><br>Date minutes: ',compareDate.getMinutes())
document.writeln('<br><br>Date hours : ',compareDate.getHours())






// convert the millisecond type of date data to readable date

// date = Date.now().

// document.writeln(date)


