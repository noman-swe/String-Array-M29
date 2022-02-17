// split()
const anthem = 'Amar Shonar Bangla, Ami Tomai Valobashi';
const words = anthem.split(' ');
const withOutA = anthem.split('a');
console.log(words);

//Slice(start, end) 
const smallSlice = anthem.slice(5, 13);
console.log(smallSlice);

// substr(start, no of letter amount)
const anotherPart = anthem.substr(10, 1);
console.log(anotherPart);

// substring(start, end)
const anotherAnotherPart =  anthem.substring(5, 13);
console.log(anotherAnotherPart);