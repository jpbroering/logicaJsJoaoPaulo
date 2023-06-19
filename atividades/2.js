function calcDias(anos){
    if( anos === NaN || anos <0){
        console.log(`${anos} não é uma idade valida`)
    }
    else{
        let dias = anos*365
        console.log(`Sua idade de ${anos} equivale a ${dias}`)
    }
}
calcDias(100)