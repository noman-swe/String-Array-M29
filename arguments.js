function addNumbers(num1, num2){
    //console.log(arguments);//arguments is a array lite objcet
    let result = 0;
    for(const num of arguments){
        console.log(num);
        result = result + num;
    }
    return result;
}
const sum = addNumbers(23, 13, 50, 100, 420);
console.log('total: ' + sum);


// string
function getFullName(firstName, lastName){
    let fullName = '';
    //const fullName = firstName + " " + lastName;
    for(const part of arguments){
        fullName = fullName + part + ' '; 
    }
    return fullName;
}
const name = getFullName('Omuk', 'shongket', 'bin', 'hanif', 'shongket');
console.log(name);