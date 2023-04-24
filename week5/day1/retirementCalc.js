var age = +prompt("What is your age? ")
var retiredAge = +prompt("At what age would you like to retire? ")

if ((isNaN(age) || isNaN(retiredAge)) || (age < 0 || retiredAge < 0)){
    console.log("Inputs are not valid")
} else if (age >= retiredAge) {
    console.log("Age cannot be smaller than retire age")    
} else {
    var currentYear = new Date().getFullYear()
    var retire = retiredAge - age
    console.log(`You have ${retire} years left until you can retire.\nIt's ${currentYear}, so you can retire in ${currentYear + retire}`)
}
