let horas, minutos, segundos, momentoActual


const mueveReloj = () => {
  momentoActual = new Date()
  horas = momentoActual.getHours()
  minutos = momentoActual.getMinutes()
  segundos = momentoActual.getSeconds()

  if (horas < 10) horas = '0' + horas
  if (minutos < 10) minutos = '0' + minutos
  if (segundos < 10) segundos = '0' + segundos

  document.getElementById('segundos').innerHTML = segundos
  document.getElementById('minutos').innerHTML = minutos
  document.getElementById('horas').innerHTML = horas



}

setInterval(() => {
  mueveReloj()
}, 1000);

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.weatherapi.com/v1/current.json?key=5f0aadd14c4f42e484330945200309&q=Pachuca", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
