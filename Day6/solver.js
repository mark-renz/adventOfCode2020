var fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8').toString().split(/\r\n\r\n/);
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const count = countYes(data,alphabet);
console.log(`total yes 1: ${count}`);

const count2 = countYes2(data,alphabet);
console.log(`total yes 2: ${count2}`);


function countYes(data,alphabet){
let count = 0;
data.forEach(item=>{
    alphabet.forEach((letter)=>{
        if(item.includes(letter))
        count++;
    })
});
return count;
}

function countYes2(data,alphabet){
    let count = 0;
    const truthy = new Array(alphabet.length); 
    data.map(items=>{
        item = items.split('\r\n');
        truthy.fill(0,0,26);
        item.forEach(ans =>{
            alphabet.forEach((letter,index)=>{
                if(ans.includes(letter)){
                truthy[index]++;
                if(truthy[index] === item.length){
                            count++;
                        }     
                    }
                });
            });
        });

    return count;
}
