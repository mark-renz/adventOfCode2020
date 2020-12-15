var fs = require('fs');

let validCount = 0;
let items = [];

fs.readFile('input.txt', 'utf8', (err, data)=>{
    if(err) throw err;
    splitData(data);
    
});

function splitData(data){
    //console.log(data);
    let dataToArray = data.split('\r\n');
    //console.log(dataToArray);
    dataToArray.map((item)=>{
        let lowerLimit = item.match(/^\d*?(?=-)/);
        let upperLimit = item.match(/(?<=-)\d+/);
        let letter = item.match(/.?(?=:)/);
        let password = item.match(/[^\s]+$/);


        
        //console.log(`lowerlimit: ${lowerLimit} upperlimit: ${upperLimit} letter: ${letter} password: ${password}`)
       checkPassword(lowerLimit[0],upperLimit[0],letter[0],password[0]);

        //let upperlimit = item.match(//);
        // let lowerLimit = item.split('-');
        // let upperLimit = lowerLimit[1].split(" ");
        // let letter = upperLimit[1].split(':');
        // let password = upperLimit[2].split(',');
        // console.log(`${lowerLimit[0]} ${upperLimit[0]} ${letter[0]} ${password}`);
        
    });

    function checkPassword(lowerLimit, upperLimit, letter, password ){
        let regex = new RegExp(letter,'g');
        let count = (password.match(regex) || []).length;
        if(parseInt(lowerLimit)<=count && parseInt(upperLimit)>=count){
            validCount= validCount + 1;
            console.log(count);
            console.log(`count: ${validCount}`);
        }

    }

}