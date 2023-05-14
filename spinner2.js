process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinnerChars = ['|', '/', '-', '\\'];
const delay = 100;
let animationTime = 0;

for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, animationTime);
  animationTime += delay;
}

setTimeout(() => {
  process.stdout.write('\n');
}, animationTime);
