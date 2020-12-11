var fs = require('fs');


fs.readFile('input.txt', 'utf8', (err, data)=>{
    if(err) throw err;

    let dataToArray = data.split('\r\n');

    let arrayOfNumbers = dataToArray.map(Number);

    console.log(arrayOfNumbers);
    productOfTwo(arrayOfNumbers);
    productOfThree(arrayOfNumbers);

});


function productOfTwo(arrayOfNumbers){
    for (let i = 0; i<arrayOfNumbers.length;i++){
    let comp = 2020 - arrayOfNumbers[i];
    if(arrayOfNumbers.includes(comp)){
        let answer = comp * arrayOfNumbers[i];
        console.log(`answer 2 Numbers: ${answer}`);
        break;
    }
    }
}

function productOfThree(arrayOfNumbers){
    
    let check = false;
    for(let i =0; i<arrayOfNumbers.length-2; i++){
        let sumOfTwo = 2020 - arrayOfNumbers[i];
        for(let j=i+1; j<arrayOfNumbers.length;j++){
            let sumOfThree = sumOfTwo - arrayOfNumbers[j];
            if(arrayOfNumbers.includes(sumOfThree)){
                console.log(`${arrayOfNumbers[i]},${sumOfThree},${arrayOfNumbers[j]}`)
                let answer = arrayOfNumbers[i] *sumOfThree* arrayOfNumbers[j];
                console.log(`answer 3 Numbers: ${answer}`);
                check =true;
                break;
            }
            if(check) break;
        }
    }
}