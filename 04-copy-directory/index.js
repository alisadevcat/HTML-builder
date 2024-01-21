const fs = require('fs');
const path = require('path');
const pathNameNew = path.join(__dirname, 'files-copy');
const pathName = path.join(__dirname, 'files');

function copyDir() {
  fs.promises.mkdir(pathNameNew, { recursive: true });
  uniqueValues().then((data) =>
    data.forEach((file) => {
      fs.watch(path.join(pathName, file), (event, filename) => {
        if (filename && event === 'change') {
          // console.log(`${filename} file Changed`);
          copy(file);
        }
      });
    }),
  );
}

function copy(file) {
  fs.copyFile(
    path.join(pathName, file),
    path.join(pathNameNew, file),
    (err) => {
      if (err) {
        console.log('Error Found:', err);
      } else {
        // Get the current filenames
        // after the function
      }
    },
  );
}

async function uniqueValues() {
  const files = await fs.promises.readdir(pathName);
  await Promise.all(
    files.map((file) => {
      copy(file);
    }),
  );

  return new Set(files);
}

copyDir();
