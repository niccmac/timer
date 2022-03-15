let timeDelay = process.argv.slice(2);

for (let num of timeDelay) {
  if (!isNaN(num) || num > 0 || Number(num)) {
    setTimeout(() => process.stdout.write("."), num);
  }
}

