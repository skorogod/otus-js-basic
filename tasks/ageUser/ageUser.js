
let user = {name: 'John'};

function ageUser(){
    let age = prompt('enter age');
    user['age'] = +age;
    console.log(user)

    return user;
}

module.exports = ageUser;