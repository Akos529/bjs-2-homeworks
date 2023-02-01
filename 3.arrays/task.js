function compareArrays(arr1, arr2) {
    const compareArrays = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
    return compareArrays;
}

function getUsersNamesInAgeRange(users, gender) {
    let filteredUsers = users.filter(user => user.gender === gender);
    let ages = filteredUsers.map(filteredUser => filteredUser.age);
    let result = ages.reduce((prev, age) => prev + age, 0) / ages.length;
    if (isNaN(result)){
        return 0;
    }
    return result;  
}