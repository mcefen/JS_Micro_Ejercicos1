



function contarNumerodeas(str) {
    let letra = str[0].toLowerCase();
    let arreglo=[]
    str= str.split('');
    str.map(n => {
        if(n.toLowerCase() === letra){
            arreglo.push(n)
        } 
            
    })

return `La cantidad de ${letra} es: ${arreglo.length}`
  
}
document.getElementById("vocal")

.innerHTML = (contarNumerodeas("Abracalabrapata de cabra"));


