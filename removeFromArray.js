const removeFromArray = function(arr,...rem) {
    let a = [...arr]
    for(let i=0;i<arr.length;i++){
        if(a.includes(rem[i])){
            a.splice(a.indexOf(rem[i]),1)
        }
    }
    return a

};

module.exports = removeFromArray;
