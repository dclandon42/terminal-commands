const fs = require('fs');




module.exports.ls = () => {

  fs.readdir('./', (err, files) => {

    const filesToString = files.reduce((acc, file) => {

      return `${acc} ${file} `;

    }, '');


    console.log(filesToString);
  });
};

module.exports.touch = () =>{
  fs.writeFile('new-file.txt', data, (err)=>{
    if (err) throw err;
    console.log('The file has been created!');
  });
};

module.exports.mkdir = () => {
  fs.mkdir('/bloc/demo/terminal-commands/new-directory', {recursive: true}, (err)=> {
    if (err) throw err;
  });
};
