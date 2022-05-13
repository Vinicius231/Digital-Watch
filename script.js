var date = new Date()
var hora = date.getHours()
var minuto = date.getMinutes()
var segundo =  date.getSeconds()

setInterval(contador, 1000)

if(segundo<10){segundo= '0'+segundo}
if(minuto<10){minuto='0'+minuto}
if(hora<10){hora='0'+hora}

function contador(){
    segundo++
    document.getElementById('horas').innerHTML = hora+':'
    document.getElementById('minutos').innerHTML = minuto+':'
    document.getElementById('segundos').innerHTML = segundo
   
    if(segundo== 59){
        minuto++
        segundo = 0
        if(minuto<10){minuto='0'+minuto}
        if(segundo<10){segundo= '0'+segundo}
    }
}