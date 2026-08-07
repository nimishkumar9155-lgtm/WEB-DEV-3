 //console.log("Hello world")

 //const cities = require("./Data/mydata.js");
 //console.log(cities);

// import chalk from 'chalk';
//console.log(chalk.blue("Hello world"));
//const os = require('os');
//const userInfo = os.userInfo();
//const platform = os.platform();
//const architecture = os.arch();
//const uptime = os.uptime();
//console.log(userInfo);
//console.log(platform);
//console.log(architecture);
//console.log(uptime);

//const fs = required('fs');
//fs. writefilesync('data/data.txt', 'Hello world');

const path = require("path");
const filePath = path.join(__dirname, "Data", "mydata.js");
console.log("File path:", filePath);