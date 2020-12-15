var fs = require('fs');

let validCount = 0;
let items = [];

main();

function splitData(data){
    //console.log(data);
    let dataToArray = data.split('\r\n');
    //console.log(dataToArray);
    dataToArray.map((item)=>{
        let lowerLimit = item.match(/^\d*?(?=-)/);
        let upperLimit = item.match(/(?<=-)\d+/);
        let letter = item.match(/.?(?=:)/);
        let password = item.match(/[^\s]+$/);

        let obj ={'lowerLimit':lowerLimit[0],'upperLimit':upperLimit[0],'letter':letter[0],'password':password[0]};
      items.push(obj);
        /* messy split but works
        console.log(items);
        console.log(`lowerlimit: ${lowerLimit} upperlimit: ${upperLimit} letter: ${letter} password: ${password}`)
       checkPassword(lowerLimit[0],upperLimit[0],letter[0],password[0]);

        let upperlimit = item.match(//);
        let lowerLimit = item.split('-');
        let upperLimit = lowerLimit[1].split(" ");
        let letter = upperLimit[1].split(':');
        let password = upperLimit[2].split(',');
        console.log(`${lowerLimit[0]} ${upperLimit[0]} ${letter[0]} ${password}`); */
        
    });
}
    function checkPassword(lowerLimit, upperLimit, letter, password, mode){
        let regex = new RegExp(letter,'g');
        let count = 0;
        if(mode === 'a'){
            count = (password.match(regex) || []).length;
                if(parseInt(lowerLimit)<=count && parseInt(upperLimit)>=count){
                    return true;
                }
                else false;
            }
        if(mode === 'b'){
            //.includes does not work
            //dont know why
            let lowerBool = password.charAt(lowerLimit-1)== letter;
            let upperBool = password.charAt(upperLimit-1)== letter;
            if(lowerBool === !upperBool){
                console.log(`${password},${lowerLimit},${upperLimit},${letter},${lowerBool},${upperBool}`);
                return true;
            }
            else false;
        }
    }
    
    

    function main(){
    fs.readFile('input.txt', 'utf8', (err, data)=>{
        if(err) throw err;
        splitData(data);
        items.map((item)=>{
            let {lowerLimit,upperLimit,letter,password} = item;
            if(checkPassword(lowerLimit, upperLimit, letter,password, 'b')){
                validCount++;
            }
            
        });
    
        console.log(validCount);
         
        });
    }
      





