// to obj array
function formatEmailQuery(data){
    let str = '';
    let i = 1;

    data.forEach(element => {
        str += element.username + ': ';
        str += element.message + '. ';
        str += '\n'
    });
    return str;
}

module.exports = {
    formatEmailQuery
}