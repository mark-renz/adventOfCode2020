var fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data)=>{
    if(err) throw err;

    console.log(data);
    let dataToArray = data.split('\r\n');
    console.log(dataToArray);
    dataToArray.map((item)=>{
        let lowerLimit = item.split('-');
        let upperLimit = lowerLimit[1].split(" ");
        let letter = upperLimit[1].split(':');
        let password = upperLimit[2].split(',');
        console.log(`${lowerLimit[0]} ${upperLimit[0]} ${letter[0]} ${password}`);
        
    })

});
