var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let x = 0
let y = 0

const positionFunction = (x, y) => {
    if (x === 0 && y === 2) {
      console.log('whats up')
    } else if (x === 0 && y === 3) {
      console.log('kobe')
    } else if (x === 1 && y === 4) {
        console.log('bean')
      }else if (x === 2 && y === 5) {
        console.log('byrant')
      }
      else if (x === 3 && y === 4) {
        console.log('goat')
      } else if (x === 3 && y === 4) {
        console.log('greatess')
      } else if (x === 3 && y === 4) {
        console.log('of')
      } else if (x === 3 && y === 4) {
        console.log('all-time')
      }
  } 




var recursiveAsyncReadLine = function () {
  rl.question(`Your coordinates are (${x}, ${y}). Would you like to go "up", "right", "down", or "left"?`, function (answer) {
    if (answer == 'exit') //we need some base case, for recursion
      return rl.close(); //closing RL and returning from function.


    if (answer === 'up') {
        y = y +1;
        positionFunction(x , y)
  } else if (answer === 'down') {
    y = y -1;
    positionFunction(x , y)

  } else if (answer === 'right') {
      x = x +1;
      positionFunction(x , y)
  } else if (answer === 'left') {
      x = x - 1;
      positionFunction(x , y)
  }
    recursiveAsyncReadLine(); //Calling this function again to ask new question
  });
};

recursiveAsyncReadLine(); //we have to actually start our recursion somehow



























// const readline = require 
// ('readline').createInterface({
//     input: process.stdin,
//     output
// })


// let x = 0;
// let y = 0;



// while (y>= -5 || y <= 5) {
//     console.log('hi')
// }