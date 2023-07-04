console.log("Hi I'm learning node")

const express = require("express");
const app = express();

app.get("/", function (req, res) {
        res.send("Node seems fun!")
});

app.listen(5000);
  
require('fs').watch('file.txt', () => console.log('File changed'))

require('fs').readFile('file.txt', (err, data) => {
    if (err) {
        console.log(err)
    } else if (data) {
        console.log(data.toString())
    }
})

console.log('This will occur faster')

