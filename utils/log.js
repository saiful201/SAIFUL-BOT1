const chalk = require('chalk');

module.exports = (data, option) => {
  switch (option) {
    case "warn":
      console.log(chalk.bold.hex("#00FF00")('[ ❕ ] » ') + data);
      break;
    case "error":
      console.log(chalk.bold.hex("#FF0000")('[ ❗ WARNING ] » ') + data);
      break;
    default:
      console.log(chalk.bold.hex("33FFCC")(`${option} » `) + data);
      break;
  }
}

module.exports.loader = (data, option) => {
  switch (option) {
    case "warn":
      console.log(chalk.bold.hex("#66FF00")('SAIFUL-BOT » ') + data);
      break;
    case "error":
      console.log(chalk.bold.hex("#FF0000")('SAIFUL-BOT » ') + data);
      break;
    default:
      console.log(chalk.bold.hex("#3399CC")('SAIFUL-BOT » ') + data);
      break;
  }
}
