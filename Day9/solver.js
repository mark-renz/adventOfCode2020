const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
var fs = require('fs');



const data = fs.readFileSync('input.txt', 'utf8').toString().split(/\r\n/);
const preamble = 5;

const firstNumber = notSumOfTwo(data,preamble);
console.log(firstNumber);

function notSumOfTwo(input, preamble){
 let withTwoNumbersSum = new Array(input.length-1); 
    for(i=0; i<input.length-1;i++) {   
        if(i>preamble-1){
            const numberToCheck = input[i];
            const previousFive = input.filter((number,index)=>index<i&&index>=i-preamble);
            previousFive.sort();
            
            for(j=0;j<previousFive.length-1;j++) {
                let difference = numberToCheck - previousFive[j];
                answer = previousFive.filter(number=>number == difference);
                if(answer!=previousFive[j] && answer!=''){
                withTwoNumbersSum[i] = true;
                break;
                }
                else{
                    withTwoNumbersSum[i] = false;
                }
            }
        }
    }
    let noTwoSum = withTwoNumbersSum.reduce((arr,bool,index) => !bool? index: arr,[]);
    return input[noTwoSum];
}
