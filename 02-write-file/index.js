const fs = require('fs');
const path = require('path');
const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
const fileName = 'text.txt';
const pathName = path.join(__dirname, '', fileName);
const { stdout } = process;
const output = fs.createWriteStream(pathName);

stdout.write('Welcome');

let text = '';

rl.on('line', (chunk) => {
  if (chunk === 'exit') {
    output.write(text);
    console.log(text, 'exit');
    process.exit();
  }
  text = chunk.toString();
});

rl.on('SIGINT', () => {
  output.write(text);
  rl.close();
});

process.on('exit', () => console.log('Goodbye'));
