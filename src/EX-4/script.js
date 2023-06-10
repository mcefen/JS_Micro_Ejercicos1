/*function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
    /*console.log(getRandomInt(30));
    console.log(getRandomInt(56));*/

let numero1, numero2, sum;

numero1 = parseInt(prompt('Ingresar el numero 1'));
numero2 = parseInt(prompt('Ingresar el numero 2'));
sum = numero1 + numero2;
//document.write(sum);
document.getElementById("sum")
.innerHTML = 'La suma de ' + numero1 + ' con ' + numero2 + ' es ' + ' = ' + sum;


//console.log(sum);