var fs = require("fs");
var http = require("http");

const PORT = 3001;

http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url === "/rickandmorty/character") {
        fs.readFile("./utils/data.js")
        
    }

}
).listen(PORT,'localhost');