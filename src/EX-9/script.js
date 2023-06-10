let frase = prompt('Escriba una frase para saber "vocales" que tiene');
let numeroVocales = frase.match(/[aeiou]/gi).length;
alert(`Las vocales de tu frase son: ${numeroVocales}`);

