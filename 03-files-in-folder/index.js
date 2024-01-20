const fs = require('fs');
const path = require('path');
const pathName = path.join(__dirname, 'secret-folder');

fs.readdir(pathName, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  else {
    console.log('\nCurrent directory filenames:');
    files.forEach((file) => {
      if (file.isFile()) {
        const filePath = pathName + '/' + file.name;
        const fileName = file.name.split('.').slice(0, -1).join();
        const extension = path.extname(filePath).replace('.', '');
        fs.stat(filePath, (error, stats) => {
          if (error) {
            console.log(error);
          } else {
            const result = `${fileName}-${extension}-${stats.size}MB\n`;
            process.stdout.write(result);
          }
        });
      }
    });
  }
});
