function userAdmin(user){
    user_copy = Object.assign({}, user);
    user_copy.role = "admin";
    return user_copy;
}

module.exports = userAdmin