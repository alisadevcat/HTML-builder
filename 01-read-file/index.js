const fs = require('fs');
const path = require('path');

function readFileFunction() {
  const readableStream = fs.createReadStream(
    path.join(__dirname, '', 'text.txt'),
    'utf-8',
  );
  readableStream.on('data', (chunk) => console.log(chunk));
  readableStream.on('error', (error) => console.log('Error', error.message));
}
readFileFunction();
