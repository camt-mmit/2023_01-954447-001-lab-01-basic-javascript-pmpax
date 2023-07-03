import { createInterface } from "node:readline";

const rl = createInterface(process.stdin, process.stdout);

rl.question('input size: ', (size) => {
    printShape(size);
    rl.close();
   });
   
   function printShape(size) {
    for (let i = 1; i <= size; i++) {
      let row = '';
      for (let j = 1; j <= size; j++) {
        if (j <= i) {
          row += '*';
        } else {
          row += ' ';
        }
      }
      console.log(row);
    }
   }


//node lab1/shape-size.js