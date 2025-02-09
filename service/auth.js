const myMap = new Map()

function set_User(id,user){
    myMap.set(id,user)
}

function get_User(id){
    return myMap.get(id)
}

module.exports = {
    set_User,
    get_User
}