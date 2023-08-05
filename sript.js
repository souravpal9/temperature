const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const convertButton = document.getElementById("convertButton");

function convertTemperature() {
  const celsius = parseFloat(celsiusInput.value) || 0;
  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  fahrenheitInput.value = fahrenheit.toFixed(2);
  kelvinInput.value = kelvin.toFixed(2);
}

convertButton.addEventListener("click", convertTemperature);
