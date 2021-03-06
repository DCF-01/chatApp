// to obj array
function toObjArray(data){
    let arr = [];
    let obj = {};

    data.forEach(element => {
        obj.username = element.username;
        obj.message = element.message;
        arr.push(obj);
    });
    return arr;
}

module.exports = {
    toObjArray
}