let numero1 = prompt("Escribe un numero");
let numero2 = prompt("Escribe otro numero");
let numero3 = prompt("Escribe otro numero");
if(numero1 > numero2 && numero1 > numero3){
    alert(numero1 + " Es mayor ")
    } else if (numero2 > numero1 && numero2 > numero3){
        alert(numero2 + " Es el mayor ")
    } else if(numero3 > numero2 && numero3 > numero1){
        alert(numero3 + " Es el mayor ")
    }
    
    else { alert ( "Son iguales")
}
