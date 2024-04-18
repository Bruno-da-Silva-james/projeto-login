const fset = require("fs");


const user = fset.readFile('data.json', 'utf8', function(err, data){
    // Display the file content
    console.log(data);
})

fset.writeFile()
console.log(user);