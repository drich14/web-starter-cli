const inquirer = require('inquirer');
const download = require('download-git-repo');

const main = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'app',
        message: "What's the name of your app?"
      }
    ])
    .then(({ app }) => {
      download('drich14/web-starter', app, err =>
        console.log(err ? 'Error' : 'Success')
      );
    });
};

exports = module.exports = main();
