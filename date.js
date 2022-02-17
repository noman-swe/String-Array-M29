
const myFavoriteDate = new Date('1971-12-26');
//console.log(myFavoriteDate);

// another date 
const anotherDate = new Date(1971,3,26,11,50,40,80);
//console.log(anotherDate);

// js compare two dates -> need to know more
if(myFavoriteDate.getTime()  < anotherDate.getTime()){
    console.log('favorite is earlier');
}