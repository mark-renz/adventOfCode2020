const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
var fs = require('fs');



const data = fs.readFileSync('input.txt', 'utf8').toString().split(/\r\n/);

let accPart1 = moveArray(parseInstructions(data)).acc;
console.log(`answer part 1: ${accPart1}`);

let accPart2 = changeInstructions(data);
console.log(`answer part 1: ${accPart2}`);

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

function moveArray(input){
let itr = 0;
let acc = 0;
let isFinished = false;

while(!isFinished && !input[itr].passed){
    input[itr].passed = true;

    switch (input[itr].move) {
            case 'acc':
                acc += parseInt(input[itr].count);
                itr+=1;
                break;
            
            case 'jmp':
                itr += parseInt(input[itr].count);
                break;
            
            case 'nop':
                itr += 1;
                break;
            
            default:
                break;
        }

        if(itr>input.length-1){
        isFinished = true;
        }
    }
return {acc,isFinished};
}

function changeInstructions(data){
    const newInstructions = parseInstructions(data);

    let canChangeIndex = [];
    const canChange = newInstructions.filter((instruction,index) => { 
            if(instruction.move === 'nop' && parseInt(instruction.count) != 0){
                canChangeIndex = [...canChangeIndex, index];
                return instruction;
            }
            if(instruction.move === 'jmp'){
                canChangeIndex = [...canChangeIndex, index];
                return instruction;
            }
    },[]);
    
    for (i = 0; i <= canChange.length-1;i++) {
        const instructions = parseInstructions(data);
        const changeMove = instructions[canChangeIndex[i]];

        changeMove.move === 'jmp' 
        ? changeMove.move = 'nop' : changeMove.move = 'jmp';
        const answers = moveArray(instructions);

        if(answers.isFinished){
            return answers.acc;
        }

    }

}
