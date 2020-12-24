var fs = require('fs');



const data = fs.readFileSync('input.txt', 'utf8').toString().split(/\r\n/);

const rules = parseRules(data);

const directContains = findBags(rules,'shiny gold');
const numberOfBags = countBags(rules,'shiny gold');

console.log(`Answer part 1: ${directContains.size}`);
console.log(`Answer part 1: ${numberOfBags}`);
function parseRules(data){
    const rules = data.reduce((obj,rule) => {
        bag = rule.split('contain ');
        bagDesign = bag[0].split(/\sbag[s]/).join('');
        contents = bag[1].split(', ');
         bagClean = contents.map(content =>{
            if(!content.includes('no other')){
                splitContent = content.split(' ');
                return  {'amount': parseInt(content[0]), 'design':`${splitContent[1]} ${splitContent[2]}`}
            }
            else{
                return 'no other bag';
            } 
          })
        return [...obj, {'bag':bagDesign.trim(), 'contain': bagClean}];
    }
    ,[]);

    return rules;
}

function findBags(rules,searchKey){
    let bagsWithKey = [];
    rules.map( bag => {
        if(!(bag.contain.toString() === 'no other bag')){
            bag.contain.map(single=>{
                if(single.design === searchKey)
                bagsWithKey.push(bag);
            });
        }
    });

    bagsWithKey.forEach(bag=>{
       bagsWithKey.push(...findBags(rules,bag.bag));
    })

   return new Set(bagsWithKey);
}

function countBags(rules, searchKey){
    let sum = 0;
    const bag = rules.find(rule => rule.bag === searchKey);
    if(!(bag.contain.toString() === 'no other bag')){
    sum = bag.contain.reduce((total,content)=>{
        const {design, amount} = content;
        return total + amount + amount * countBags(rules,design);
    },0);
    console.log(sum);
    }
    return sum;
}

