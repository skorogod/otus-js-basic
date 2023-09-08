function objectDestruct(admin_obj) {
    let {name, role} = admin_obj;
    
    return [name, role];
} 

module.exports = objectDestruct;