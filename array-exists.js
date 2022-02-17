function megaFriends(friends) {
    if (Array.isArray(friends) == false) {
        return "please input an array";
    }

    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['jakku', 'noman', 'shibly', 'lion', 'Abdullah', 'Ahnaaaff'];
const myBigBuddy = megaFriends(friends);
console.log(myBigBuddy);

// check in array.  #way-1
if(friends.indexOf('lion') != -1){
    console.log('lion exists');
}
// #way-2
if(friends.includes('lion') != -1){
    console.log('I am lion');
}

