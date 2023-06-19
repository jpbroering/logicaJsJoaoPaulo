const l = [1,2,3,4,9]
function soma(list){
    var c  = 0
    for(i of list){
        c = c+i
    }
    return c
}
console.log(soma(l))