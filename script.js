function verificar (){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade =  ano - Number (fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')

        if  (fsex[0].checked) {
           gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src' , 'bebe masculino.jpg') 
            }else if (idade < 21){
                //jovem
                img.setAttribute('src' , 'jovem masculino.jpg') 
            } else if (idade < 50){
                //adulto
                img.setAttribute('src' , 'adulto masculino.jpg')
            } else {
                //idoso
                img.setAttribute('src' , 'idoso masculino.jpg')
            }
        

        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                    //criança 
            img.setAttribute('src' , 'bebe feminino.jpg')                    
            }else if (idade < 21){
                    //jovem
            img.setAttribute('src' , 'jovem feminino.jpg')
            } else if (idade < 50){
                    //adulto
            img.setAttribute('src' , 'adulto feminino.jpg')
            } else {
                 //idoso
            img.setAttribute('src' , 'idoso feminino.jpg')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${gênero} na faixa dos ${idade} anos.`
        res.appendChild (img)
            
        }    
}