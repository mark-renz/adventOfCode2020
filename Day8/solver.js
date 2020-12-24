const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
var fs = require('fs');



const data = fs.readFileSync('input.txt', 'utf8').toString().split(/\r\n/);

let accumulator = 0;
const instructions = parseInstructions(data);
//console.log(instructions);
accumulator += countAcc(instructions);

console.log(accumulator);

function parseInstructions(data){
    const newData = data.map(instruction=>{
        splitInstruct = instruction.split(' ');
        let move = splitInstruct[0];
        let count = splitInstruct[1];
        let passed = false;
        return {move,count,passed};
    });
    return newData;
}

function countAcc(instructions){
let itr = 0;
let acc = 0;
while(!instructions[itr].passed){
    instructions[itr].passed = true;
    switch (instructions[itr].move) {
            case 'acc':
                acc += parseInt(instructions[itr].count);
                itr+=1;
                break;
            
            case 'jmp':
                itr += parseInt(instructions[itr].count);
                break;
            
            case 'nop':
                itr+=1;
                break;
            
            default:
                break;
        }
    }
return acc;
}