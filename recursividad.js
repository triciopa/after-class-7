
function esPar(dato) {
  // CASO RECURSIVO: validaciones con recursividad 
  if (isNaN(dato)) { 
    return esPar(dato = prompt('Dato incorrecto, debe ingresar un número:'))    
  }

  // CASO BASE: termina la ejecución
  if (dato % 2 === 0) return true
  else return false
}

let dato = prompt('Ingrese un número');

let resultado = esPar(dato) ? 'verdadero' : 'falso'

alert("Es par: " + resultado)

document.write('<h2 style="text-align: center; margin-top: 40px">Recursividad</h2>')
document.write('<h4 style="text-align: center; margin-top: 10px">' + '¿Es par? ' + resultado +  '</h4>')