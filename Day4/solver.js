var fs = require('fs');
const { fileURLToPath } = require('url');


const data = fs.readFileSync('input.txt', 'utf8').toString().split(/\r\n/);

const passports = getPassports(data);
const count = passports.filter(passport=>checkFields(passport)).length;

console.log(`valid ids: ${count}`);

function checkFields(passport){
required = ['byr','iyr','eyr','hgt','hcl','ecl','pid'];
return required.every(field=>field in passport);
}

function getPassports(data) {
    //split data
    let temp = '';
    let ctr = 0;
    let passports =[];
    for(let i=0;i<data.length;i++){
        if(data[i] === '' || i>=data.length-1){
            passports[ctr] = temp.trim();
            ctr++;
            temp = '';
        }
        else{
            temp+= " " +data[i];
        }
    }
    const id = passports.map(passport=>{
        let pass = passport.split(' ').reduce((acc,curr)=>{
            const [key,value] = curr.split(':');
            return {...acc, [key]:value}
        },{})
        return pass;           
    })
    return id;
}

