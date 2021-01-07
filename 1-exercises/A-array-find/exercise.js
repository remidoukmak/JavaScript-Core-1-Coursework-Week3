/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

var longNameThatStartsWithA = names.find(function LongNameThatStartsWithA(names){
return name.length > 7 && name[0]==="A";
})
console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
