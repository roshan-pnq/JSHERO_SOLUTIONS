function add(str){
    let num = str.split('+')
    sum = 0
    for(let i =0;i<num.length;i++)
    {
    a = parseInt(num[i])
    sum+=a
    }
    return sum
    }
    