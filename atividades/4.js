function retorna(valor){
    if(typeof(valor) === typeof(0)){
        return(-valor)
    }
    else if(valor === true || valor === false){
        if(valor === false){return true}
        else{return false}
    }
    else{
        return typeof(valor)
    }
}
console.log(retorna(true))