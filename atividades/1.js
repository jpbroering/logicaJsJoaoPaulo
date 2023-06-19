
function maior(n1, n2){
    if(n1 > n2){
        console.log(`O numero ${n1} é maior que ${n2}`)
        return true
    }
    else if (n1 === n2) {
        console.log(`O numero ${n1} é igual a ${n2}`)
        return true
    }
    else{
        console.log(`O numero ${n1} não é maior e nem igual que ${n2}`)
        return false
    }
}
maior(6,6)