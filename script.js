//let myAge = 38;//my age
let myAge = prompt('what is your age?');
let earlyYears = 2;
//•	The first two years of a dog’s life count as 10.5 dog years each.
earlyYears *= 10.5;
let laterYears = myAge - 2; 
// Result has been set
laterYears *= 4;
//Each year following equates to 4 dog years.
console.log(`Early Years ${earlyYears} and ${laterYears} Later Years`);

let myAgeInDogYears = earlyYears + laterYears;
//ages are added
let myName = "Gulsenem";

myName = myName.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears }years in dog years.`)

// display my name and age in dog years


alert(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears }years in dog years.`);

var tortoise_age = prompt("What is your tortoise age");
var human_age;
human_age = tortoise_age * 10 + 2; 
 
 alert(`When tortoise ${tortoise_age} age, human ${human_age} years old.`);
 //human age 10 * 10 + 2