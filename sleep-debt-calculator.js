const getSleepHours = day => {
  if (day === 'monday') {
    return 8; } 
  else if (day === 'tuesday') {
    return 7; } 
  else if (day === 'wednesday') {
    return 8; } 
  else if (day === 'thursday') {
    return 9; } 
  else if (day === 'friday') {
    return 6; } 
  else if (day === 'saturday') {
    return 6; } 
  else if (day === 'sunday') {
    return 7; 
  }
  };
  
  const getActualSleepHours = () => getSleepHours('monday') 
  + getSleepHours('tuesday')
  + getSleepHours('wednesday')
  + getSleepHours('thursday')
  + getSleepHours('friday')
  + getSleepHours('saturday')
  + getSleepHours('sunday');
  
  console.log(getActualSleepHours(getSleepHours));
  
  const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
  };
  
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
  const actualSleepHours 
  = getActualSleepHours();
  const idealSleepHours 
  = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } 
  
  else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than needed!');
  } 
  
  else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less than you should have. You should get some rest');}
  };
  
  calculateSleepDebt();
  
  
  
  
  
  
  