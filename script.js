setInterval(horasatualmente,500)

function horasatualmente(){
    
    var tempo = new Date()
    var hora = tempo.getHours()
    var minuto = tempo.getMinutes()
    var segundo = tempo.getSeconds()

    if(hora<10){hora='0'+hora}
    if(minuto<10){minuto='0'+minuto}
    if(segundo<10){segundo= '0'+segundo}

    var relogio = document.getElementById('horas')

    relogio.innerHTML = `${hora}:${minuto}:${segundo}`

}
