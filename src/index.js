function newDate(date) {
  let days = [
    "Suday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[now.getDay()];
  let currentTime = now.getHours();
  let currentMins = now.getMinutes();
  let fullDate = `${currentDay} ${currentTime}:${currentMins}`;
  return fullDate;
}
let now = new Date();
let timeDate = document.querySelector("#the-date");
timeDate.innerHTML = newDate(now);

function displayWeatherCondition(response) {
  document.querySelector("#new-city").innerHTML = response.data.name;
  document.querySelector("#big-temp").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#high").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#low").innerHTML = Math.round(
    response.data.main.temp_min
  );

  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function search(city) {
  let apiKey = "428e1092dea92c375a1485f279f8359a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  search(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

search("New York");
