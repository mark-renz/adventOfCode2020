var fs = require('fs');

fs.readFile('day1.txt', 'utf8', (err, data)=>{
    if(err) throw err;

    let dataToArray = data.split('\r\n');

    let arrayOfNumbers = dataToArray.map(Number);

    console.log(arrayOfNumbers);

    for (let i = 0; i<arrayOfNumbers.length;i++){
        let comp = 2020 - arrayOfNumbers[i];
        if(arrayOfNumbers.indexOf(721)!= -1){
            console.log("hi!");
        }
    }
})