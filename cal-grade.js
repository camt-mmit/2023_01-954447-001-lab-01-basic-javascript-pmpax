import { createInterface } from "node:readline";

const rl = createInterface(process.stdin, process.stdout);

rl.question('Input score: ', (score) => {
 score = parseInt(score);

 let grade;

 if (score >= 80) {
   grade = 'A';
 } else if (score >= 70) {
   grade = 'B';
 } else if (score >= 60) {
   grade = 'C';
 } else if (score >= 50) {
   grade = 'D';
 } else {
   grade = 'F';
 }

 console.log(`Your grade is ${grade}.`);

 rl.close();
});

// node lab1/cal-grade.js