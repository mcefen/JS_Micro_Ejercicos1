
let frase = prompt('Escriba una frase para saber "vocales" que tiene');
let numeroVocales = frase.match(/[aeiou]/g);
alert(`Las vocales de tu frase son: ${numeroVocales}`);
