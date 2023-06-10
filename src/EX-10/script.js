function contar() {
    
    const texto = document.getElementById('texto').
    value.trim().toLowerCase().split('');
    
    const repeticiones = {};
    
    texto.forEach( ( letra ) => {
      repeticiones[ letra ] = ( repeticiones[ letra ] || 0 ) + 1;
    });
    for( let letra in repeticiones ) {
      const text = `${ letra } = ${ repeticiones[ letra ] }<br>`;
      document.getElementById('resultado').innerHTML += text;
    }
}