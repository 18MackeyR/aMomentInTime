var moment = require('moment');
const chalk = require('chalk');
console.log(chalk.underline.green(moment().format('dddd'))); 

currentTime = moment().format('H')
if ( 24 > currentTime > 12 ){
    console.log(chalk.underline.blue("Good morning!"))
} else if (12 > currentTime < 17){
    console.log(chalk.underline.yellow("Good afternoon!"))
} else if (17 > currentTime < 24){
    console.log(chalk.underline.magenta("Good evening!"))
} else {
    console.log("Its a Wonderful day!")
}

