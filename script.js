var medidor = document.getElementById('medidor');

medidor.addEventListener('click', function(event) {
  var rect = medidor.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;

  var medida = Math.sqrt((x * x) + (y * y)); // Calcular la medida basada en las coordenadas

  // Enviar la medida a tu servidor o realizar otras acciones necesarias
  console.log('Medida del anillo: ' + medida);
});
