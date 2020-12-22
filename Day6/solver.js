var fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8').toString().split(/\r\n\r\n/);

let count = 0;
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
data.map(item=>{
    alphabet.map((letter)=>{
        if(item.includes(letter))
        count++;
    })
});

console.log(`total yes: ${count}`);
