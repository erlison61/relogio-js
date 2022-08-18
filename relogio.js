function relogio(){
   const newDate=document.getElementById('relogio')
   const hour= new Date().toLocaleTimeString('en-us')
   newDate.innerHTML=hour
}



setInterval('relogio()', 1000)
