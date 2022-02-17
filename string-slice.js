// split()
const anthem = 'Amar Shonar Bangla, Ami Tomai Valobashi';
const words = anthem.split(' ');
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

// concat
const first = 'Amader';
const second = 'City';
//way 1
const fullString = first + second;
console.log(fullString);

// another way
const fullCity = first.concat(second).concat('Dhaka');
console.log(fullCity);
// const words
const woords = ['a', 'b', 'c', 'd'];
const allJoin = woords.join();
const allJoin2 = woords.join('');
console.log(allJoin);
console.log(allJoin2);