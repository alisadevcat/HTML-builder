const fs = require('fs');
const path = require('path');
const pathNameNew = path.join(__dirname, 'files-copy');
const pathName = path.join(__dirname, 'files');

function copyDir() {
  fs.promises.mkdir(pathNameNew, { recursive: true });
  getFileNames();
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

function getFileNames() {
  fs.readdir(pathName, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      files.forEach((file) => {
        if (file.isFile()) {
          copy(file.name);
        }
      });
    }
  });
}

copyDir();
