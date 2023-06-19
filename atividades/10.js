var melhoresAlunos = ({
    Augusto:[8, 7.6, 8.9, 6], // media 7.625
    Mariana:[9, 6.6, 7.9, 8], // media 7.875
    Carla:[7, 7, 8, 9] // media 7.75
    })
function media(list){
    for(e in list){
        let c = 0
        var r = 0
        list[e].forEach(element => {
            c =c+element
            r = c
        });
        var cM = r/list[e].length
        console.log(`o aluno ${e} te a media ${cM}`)
    }
}
media(melhoresAlunos)
