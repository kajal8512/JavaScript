// const fas = require("fs")
// how to create file and write data in that file
// fas.writeFileSync("bio.txt","Hello I am Gayatri from Maharshtra")
// fas.writeFileSync("bio.txt","Hello I am Neha from pune")

// How to add data in file
// fas.appendFileSync("bio.txt","\n I am from Navgurukul and I am doing software course in navgurukul")


// How to read file without buffer..
// const buf_data=fas.readFileSync("bio.txt");
// const buf_data=fas.readFileSync("bio.txt","utf8");
// org_data=buf_data.toString()
// console.log(org_data)
// console.log(buf_data)


// How to rename of file
// fas.renameSync("bio.txt","mybio.txt")


// How to delete file
// fas.unlinkSync("bio.txt")
    


// for creating folder
// fas.mkdirSync("file")


// for deleting folder
// fas.rmdirSync("file")


// fas.readFile("bio.txt",function(err,data){
//         console.error(data.toString());
    
// })