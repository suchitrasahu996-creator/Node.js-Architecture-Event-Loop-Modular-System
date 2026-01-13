import {writeFile} from "fs/promises"

await writeFile("./data.txt","Hello World")
console.log("saved")

await writeFile("Readme.md",)