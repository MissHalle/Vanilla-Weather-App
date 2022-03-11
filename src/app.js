function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "5a43febac9e08234e55ed941a9b78425";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
