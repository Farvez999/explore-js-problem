const names = ['abul', 'babul', 'cabul', 'ebul', 'babul', 'abul', 'abul', 'cabul', 'kabul', 'gbul'];
function removeDuplicate(name) {
    const unique = [];
    for (let i = 0; i < name.length; i++) {
        let named = name[i];
        if (unique.includes(named) === false) {
            unique.push(named);
        }
    }
    return unique;
}

const uniqueNumber = removeDuplicate(names);
console.log(uniqueNumber);