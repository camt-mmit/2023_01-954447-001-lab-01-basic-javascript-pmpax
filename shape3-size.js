import { createInterface } from "node:readline";

const rl = createInterface(process.stdin, process.stdout);
   
rl.question('Enter the size: ', (size) => {
    // Convert size to a number
    size = parseInt(size);
   
    // Check if size is a valid number
    if (isNaN(size) || size <= 0) {
      console.log('Invalid size');
      rl.close();
      return;
    }
   
    // Generate the shape
    let shape = '';
   
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
          shape += '*';
        } else {
          shape += ' ';
        }
      }
      shape += '\n';
    }
   
    console.log(shape);
    rl.close();
   });

//node lab1/shape3-size.js