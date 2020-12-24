const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
var fs = require('fs');



const data = fs.readFileSync('input.txt', 'utf8').toString().split(/\r\n/);

let accumulator = 0;

const instructions = parseInstructions(data);

//accumulator += countAcc(instructions);

//console.log(`answer part 1: ${accumulator}`);
changeInstructions(instructions);

// countAcc(instructions);
// console.log(countAcc(instructions));
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

function changeInstructions(instructions){
    let newInstructions = instructions;
    let itr = 0;
    let acc = 0;
    let finished = false;
    
    newInstructions.forEach(instruction => {
        if(!finished){
        if(instruction.move === 'jmp' 
        || instruction.move === 'nop'){
            if(parseInt(instruction.count) !== 0){
                //console.log('before',instruction.move);
                instruction.move === 'jmp'? 
                instruction.move = 'nop': instruction.move = 'jmp';
                //console.log('after',newInstructions,countAcc(newInstructions));

                    while(!newInstructions[itr].passed){
                        newInstructions[itr].passed = true;
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
                            console.log(itr);
                            if(itr>=newInstructions.length-1){
                                finished=true;
                                console.log(finished);
                                break;
                            }
                        }

                if(!finished){
                    instruction.move === 'jmp'? 
                    instruction.move = 'nop': instruction.move = 'jmp';
                    console.log('revert',instruction.move)
                }
            }
        }
    }
    });
}