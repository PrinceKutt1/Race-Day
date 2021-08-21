let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 19;

if (age > 18 && registeredEarly ) {
  raceNumber += 1000;
  }

if (age >18 && registeredEarly) {
  console.log(`Your race number is ${raceNumber}, and it starts at 9:30 am`);

} else if (age >18 && !registeredEarly) {
  console.log(`Your race number is ${raceNumber}, you will race at 11:00 am`);

} else if ( age < 18) {
  console.log(`Your race number is ${raceNumber}, you will race at 12:30 pm`);
} else//(age==18)
 {
console.log("See the registration desk");
} ;








 
 
