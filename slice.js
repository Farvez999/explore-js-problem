//Slice
const friends = [12, 34, 45, 54, 46, 60, 70, 80];
const partial = friends.slice(1, 5);
console.log(partial);
console.log(friends);

//splice = remove the array of splice
const newFriends = [12, 34, 45, 54, 46, 60, 70, 80];
const newPartial = friends.splice(2, 5, 9, 99, 999);
console.log(newPartial);
console.log(friends);