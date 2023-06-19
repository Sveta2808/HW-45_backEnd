const fs = require('fs');
const zlib = require('zlib');

const inputFile = fs.createReadStream('book.txt.gz');  
const outputFile = fs.createWriteStream('book2.txt');  
 
inputFile.pipe(zlib.createUnzip()).pipe(outputFile);