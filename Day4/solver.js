var fs = require('fs');
const { fileURLToPath } = require('url');


const data = fs.readFileSync('input.txt', 'utf8').toString().split(/\r\n/);

const passports = getPassports(data);
const valid1 = passports.filter(passport=>checkFields(passport));

const valid2 = valid1.filter(passport=>
    checkByr(passport['byr']) 
    && checkIyr(passport['iyr'])
    && checkEyr(passport['eyr'])
    && checkHgt(passport['hgt'])
    && checkHcl(passport['hcl'])
    && checkEcl(passport['ecl'])
    && checkPid(passport['pid']));

console.log(`valid ids part 1: ${valid1.length}`);
console.log(`valid ids part 2: ${valid2.length}`);

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
        temp+= " " +data[i];
        //console.log(temp);

        if(data[i] === '' || i>=data.length-1){
            passports[ctr] = temp.trim();
            ctr++;
            temp = '';
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

function checkByr(input){
    return (input>=1920 && input<=2002);
}

function checkIyr(input){
    return (input>=2010 && input<=2020);
    }

function checkEyr(input){
    return (input>=2020 && input<=2030);
}

function checkHgt(input){
    if(input === undefined)
        return false;
    else{
        height = input.split(/(\d+)/g);

            if(height[2].trim() === 'cm'){
                return (parseInt(height[1])>=150 && (parseInt(height[1])<=193))
            }
            else if(height[2].trim() === 'in'){
                return (parseInt(height[1])>=59 && (parseInt(height[1])<=76))
            }
            else return false;
        }
}

function checkHcl(input){
    const regex = RegExp(/#[0-9a-f]{6}/);
    return regex.test(input);
}

function checkEcl(input){
    const color = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
    return color.includes(input);
}

function checkPid(input){
    return !isNaN(input) && input.length === 9;
}








