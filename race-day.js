let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

let runnersAge = 70

// if (registeredEarly === true && runnersAge > 18) {
//   console.log('True');
// }

console.log(raceNumber += 1000);

if (registeredEarly === true && runnersAge > 18) { 
    console.log('Race at 9:30am. ' + (raceNumber += 1000));} 
  else if (registeredEarly === false && runnersAge > 18) {
    console.log('Race at 11am. ' + (raceNumber += 1000));} 
  else if (registeredEarly === true && runnersAge < 18) {
    console.log('Youth registrants run at 12:30pm \(regardless of registration\). ' + (raceNumber += 1000));}
  else if (registeredEarly === false && runnersAge < 18) {
    console.log('Youth registrants run at 12:30pm \(regardless of registration\). ' + (raceNumber += 1000));
    }
    else if (runnersAge === 18) {
      console.log('Please see the registration desk.');
    }






