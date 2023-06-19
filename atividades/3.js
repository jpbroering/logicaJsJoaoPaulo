function meses(n){
    const mes = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]
    if(n > 0 && n <= 12){
        n--
        console.log(mes[n])
    }
}
meses(05)