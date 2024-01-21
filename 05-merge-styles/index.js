const fs = require('fs');
const path = require('path');
const pathNameNew = path.join(__dirname, 'project-dist');
const output = fs.createWriteStream(pathNameNew + '/' + 'bundle.css');
const pathName = path.join(__dirname, 'styles');

async function compileCss() {
  const files = await fs.promises.readdir(pathName);
  const filesContent = await Promise.all(
    files.map((file) => {
      const extension = path
        .extname(path.join(pathName, file))
        .replace('.', '');

      if (extension === 'css') {
        return fs.promises.readFile(path.join(pathName, file), 'utf8');
      } else {
        return '';
      }
    }),
  );
  overWrite(filesContent);
}
compileCss();

function overWrite(filesContent) {
  const str = filesContent.reduce((acc, data) => {
    acc += data;
    return acc;
  }, '');
  output.write(str);
}
