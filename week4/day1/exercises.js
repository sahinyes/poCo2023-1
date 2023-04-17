// Exercies 1

// Say hello
// Create a program in JavaScript that prompts for your name and prints a greeting using your name.

alert("Hi, " + prompt("Name: "))


// Exercises 2

// Counting the number of characters
// Create a program in JavaScript that prompts for an input string and displays output that shows the input string and the number of characters the string contains.

alert(prompt("Name: ").length)


// Exercises 3

// Printing quotes
// Create a program that prompts for a quote and an author. Display the quotation and author as shown here:
// [Author] says, "[Quote]" (Replace [Author] and [Quote] with the actual values

var author = prompt("Author name:")
var quote = prompt("Quote: ")
alert(`${author} says, "${quote}"`)


// Exercises 4

// Fortune teller
// Why pay a fortune teller when you can just program your fortune yourself?
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen / console like so: "You will be a X in Y, and married to Z with N kids."

var jobTitle = "Powercoders participant"
var location = "home"
var partner = "your love"
var children = 1
console.log(`You will be a ${jobTitle} at ${location}, and married to ${partner} with ${children} kids`)

