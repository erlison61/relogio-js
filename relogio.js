function relogio(){
    var dia = new Date()
    var hour = dia.getHours()
    var min = dia.getMinutes()
    var sec = dia.getSeconds()
    if(hour < 10){
        hour = 0+hour
    }else if( min < 10){
        min = 0+min
    }else if( sec < 10){
        sec = 0+sec
    }
    document.getElementById('relogio').innerHTML= hour+':'+min+':'+sec
}
setInterval('relogio()', 1000)