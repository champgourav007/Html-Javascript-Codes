// In javascript there are mostly two type of fucntions:-
// 1. Naming Functions(Simple Functions) 
// 2. Anonymous Functions


const greeter = 'CodeQuotient';

//Naming Function
function help(){
  console.log("Ya!! There!");
}

help();

//Anonymous Function 
let sayHi = function(){
  console.log(`${greeter} says, 'Hi!'`);
  
  var greeter = 'CQ';

  console.log(`${greeter} says, 'Hi!'`);
}

sayHi();