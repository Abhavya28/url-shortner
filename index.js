// const command = process.argv[2];
// const url = process.argv[3];

// if (command === "shorten") {
//   if (!url) {
//     console.log("Please provide a URL.");
//     return;
//   }
//   console.log("Shortening ", url);
// } else if (command === "list") {
//   console.log("Listing all urls");
// } else if (command === "delete") {
//   if (!url) {
//     console.log("Please provide a short code.");
//     return;
//   }
//   console.log("Deleting ", url);
// } else {
//   console.log("Unknow Command");
// }


const fs = require("fs");

fs.readFile("urls.json", "utf8", (err,data) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})

