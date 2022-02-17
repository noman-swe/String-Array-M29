const anthem = 'Amar Shonar Bangla, Ami Tomai Valobashi';
const search = 'valo';

let userInput = 'blackPinK'; 
let savedUserName = 'blackPink';
savedUserName = savedUserName.toLowerCase();
userInput = userInput.toLowerCase();
if(userInput == savedUserName){
    console.log('user-exists');
}else{
    console.log('else')
}