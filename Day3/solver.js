var fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data)=>{
    if(err) throw err;
    let dataToArray = data.split('\r\n');

   //right = 3, down = 1
    let trees = check(dataToArray,3,1);
   console.log(`trees: ${trees}`)
});

function check(data,right,down){;
    let ptr = 0;
    let collision = 0;
    
    for(let i=1; i<data.length;i+=down){
        let arrSize = data[i].length-1;
        ptr = ptr + right;
        
        if(ptr>arrSize){
            ptr = (ptr%arrSize) - 1;
        }
        
        if(data[i].charAt(ptr) === "#"){
            collision++;
        }
    
    }
    return collision;
    }
