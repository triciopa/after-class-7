// Significado en inglés: Immediately Invoked Function Expression

// let resultado;

(function esPar(mensaje = 'Ingrese un número') {
  let dato = prompt(mensaje);

  // CASO RECURSIVO: validaciones con recursividad 
  if (isNaN(dato)) {
    return esPar('Dato incorrecto, debe ingresar un número:')
  }

  // CASO BASE: vuelta a invocar
  if (dato % 2 === 0) return resultado = 'verdadero'
  else return resultado = 'falso'
})()

document.write('<h2 style="text-align: center; margin-top: 40px">IIFE</h2>')
document.write('<h4 style="text-align: center; margin-top: 10px">' + '¿Es par? ' + resultado +  '</h4>')


