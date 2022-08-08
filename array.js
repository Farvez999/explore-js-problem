const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11, name: 'amin' };
const friends = [12, 34, 45, 54, 46, 60];
function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof (country));
console.log(typeof (age));
console.log(typeof (isIndependent));
console.log(typeof (student));
//Array check to Array.isArray();
console.log(Array.isArray(friends));
console.log(typeof (add));

//---------------Index check
console.log(friends.includes(45));
console.log(friends.includes(450));

//concat:
const newFriends = [12, 34, 45, 54, 46, 60];
const allFriends = newFriends.concat(friends);
console.log(allFriends);