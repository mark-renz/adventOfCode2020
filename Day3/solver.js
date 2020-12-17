var fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data)=>{
    if(err) throw err;
    let dataToArray = data.split('\r\n');

   //right = 3, down = 1
    let trees = check(dataToArray,3,1);
    console.log(`trees: ${trees}`);

    let moves = [[1,1],[3,1],[5,1],[7,1],[1,2]];

    let arrOfTrees = moves.map((move)=>{
        let right = move[0];
        let down = move[1];
        console.log(`${right},${down}`)
        console.log(check(dataToArray,right,down));
        return check(dataToArray,right,down);
    }).reduce((product, value)=> product* value);

    console.log(`product of Trees: ${arrOfTrees}`);
    

});

function check(data,right,down){;
    let ptr = 0;
    let collision = 0;
    arrSize = data.length-1;
    
    for(let i=down; i<arrSize;i+=down){
        let strSize = data[i].length-1;
        ptr = ptr + right;
        
        if(ptr>strSize){
            //-1 because it should start with 0 again
            ptr = (ptr%strSize) - 1;
        }
        
        if(data[i].charAt(ptr) === "#"){
            collision++;
        }
    
    }
    return collision;
    }

