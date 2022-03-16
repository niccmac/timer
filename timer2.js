const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  if (input === "b") {
    process.stdout.write("beep");
  }
  if (Number(input) % 1 === 0 && Number(input) >= 1 && Number(input) <= 9) {
    console.log(`setting timer for ${input} seconds...`);
    setTimeout(() => process.stdout.write('\x07'), input * 1000);
  }
});

rl.on('close', () => {
  console.log(`Thanks for using me, ciao!`);
});


