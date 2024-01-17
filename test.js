// eslint-disable-next-line no-unused-vars
const { stdin, stdout, stderr } = process;
//output stream = console.log;
console.log('Hello, world!');
// stdout.write('Node.js');

//input stream
//outputs the entered data to the console
//Using the .on() method, we subscribe to the data event of the stdin object.
// stdin.on('data', (data) => stdout.write(data));

//exit
//instead of Ctrl + C
process.on('exit', () => stdout.write('Good luck learning Node.js!'));

process.on('exit', (code) => {
  if (code === 0) {
    stdout.write('Everything is ok');
  } else {
    stderr.write(`Something went wrong. The program exited with code ${code}`);
  }
});

// stdout.write('What is your name?\n');
// stdin.on('data', (data) => {
//   stdout.write('Hello');
//   let dataStringified = data.toString();
//   const name = dataStringified.split('').reverse().join('');
//   stdout.write(name);
//   process.exit();
// });
// process.on('exit', () => stdout.write('Goodbye!'));

process.on('exit', () => stdout.write('Goodbye!'));
//console.log(process.argv);

// const flagIndex = process.argv.indexOf("-m");
// if (flagIndex !== -1) {
//   const message = process.argv[flagIndex + 1];
//   console.log(message);
// }
console.log(__dirname);
console.log(__filename);
