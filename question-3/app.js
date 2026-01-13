const os = require("os");
const fs =require("fs").promises;


async function main(){
    //part A os module

console.log("free Memory:",os.cpus());
console.log("Total CPU Cores:",os.freemem());


//part B is the file system curd
//create the data.txt
await  fs.writeFile("./data.txt","Hello World!!")
console.log("saved")
//create the  Readme file
await fs.writeFile("Readme.md","##This is first line in Readme");

//read the data.txt
const f= require("fs")
const d=f.readFileSync("./data.txt",{encoding:"utf-8"});
console.log(d);

//append second line into data.txt
await fs.appendFile("data.txt","This is second line");

//delete the Readme.md
await fs.unlink("Readme.md")

}
main().catch(console.error);