function ingresarNumero() {
  let dato = prompt('Ingrese un número');
  return esPar(dato, ingresarNumero)
};

function esPar(prueba, callback) {
  // CASO RECURSIVO CON CALLBACK
  if (isNaN(prueba)) {
    return callback()
  }

  // CASO BASE: vuelta a invocar
  if (prueba % 2 === 0) return true
  else return false
};

resultado = ingresarNumero();

document.write('<h2 style="text-align: center; margin-top: 40px">Callback</h2>')
if (resultado) {
document.write('<h4 style="text-align: center; margin-top: 10px">' + '¿Es par? verdadero' + '</h4>')
} else {
document.write('<h4 style="text-align: center; margin-top: 10px">' + '¿Es par? falso' +  '</h4>')
}