const numbersList = [];

function sum(a, b){
    return a + b
}

function substract(a, b){
    return a - b
}

function father(a, b, callback){
    return numbersList.push(callback(a,b))
}
father(2,3,sum)
father(2,4,sum)
father(5,3,substract)
father(67,43,sum)
father(67,38,substract)
father(15,29,sum)
console.log(numbersList);