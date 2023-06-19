const l = ["oie","mtm","ewfd"]
function lstNum(list){
    var listNum = []
    for(var i of list){
        if(typeof(i) === typeof(1)){
            listNum.push(i)
        }
    }
    return listNum
}
console.log(lstNum(l))