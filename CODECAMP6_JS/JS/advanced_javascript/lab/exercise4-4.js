function isEmpty(object) {
    for (let key in object) {
        return false
    }
    return true
} //ถามว่า object นี้ว่างไหม

isEmpty(object)