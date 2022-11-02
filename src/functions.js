function myNewFunction(endpoint, type){
  const config = {};
  
  switch(type){
    case 'google': 
      config.type = 'You chose Google';
      config.endpoint = 'google.com';
      break;
    case 'yahoo':
      config.tye = 'You chose yahoo';
      config.endpoint = 'yahoo.com';
      break;
    default:
      config.type = 'You do not have a preference';
  }
  
  return {
      myData : config
   }
}

let test1 = myNewFunction('yahoo.com', 'yahoo');
let test2 = myNewFunction('google.com', 'google')
