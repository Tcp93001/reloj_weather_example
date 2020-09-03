let horas, minutos, segundos, momentoActual

const mueveReloj = () => {
  momentoActual = new Date()
  horas = momentoActual.getHours()
  minutos = momentoActual.getMinutes()
  segundos = momentoActual.getSeconds()

  if (horas < 10) horas = '0' + horas
  if (minutos < 10) minutos = '0' + minutos
  if (segundos < 10) segundos = '0' + segundos

  document.getElementById('digits-container').innerHTML = `
    <div class="digits">
    <p id="horas">${horas}</p>:
    <p id="minutos">${minutos}</p>:
    <p id="segundos">${segundos}</p>
    </div>
  `
}

setInterval(() => {
  mueveReloj()
}, 1000);

var requestOptions = {
  method: 'GET'
};

fetch("https://api.weatherapi.com/v1/current.json?key=5f0aadd14c4f42e484330945200309&q=Mexico", requestOptions)
  .then(response =>
    response.text())
  .then(result => {
    console.log(JSON.parse(result), 'result')
    const datosClima = JSON.parse(result)
    const { current: { condition, feelslike_c }  } = datosClima
    console.log(condition, 'condition')
    document.getElementById('clima').innerHTML = `
    <div class="clima">
      <h1 class="clima-title">Ciudad de México</h1>
      <div class="clima-distribution">
        <div class="clima-elements">
          <p>Condición</p>
          <img src='https:${condition.icon}' alt="condiciones">
          <p>${condition.text}</p>
        </div>
        <div class="clima-elements">
          <p>Sensación Térmica</p>
          <p>${feelslike_c} °C</p>
        </div>
      </div>
    </div>
    `

  })
  .catch(error => console.log('error', error));
