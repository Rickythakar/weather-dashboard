//Global Variables
const searchHistory = [];
const weatherApiUrl = "https://api.openweathermap.org/";
const apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=88a754472e95b886547fd49c550f9fe6&units=imperial";
const apiKey = "88a754472e95b886547fd49c550f9fe6";
// This calls the API, just update the url to have your key's name.
async function fetchKey() {
  const url = 'https://yorkieportunus.herokuapp.com/store/weather-dash'
  const response = await fetch(url);
  const key = await response.json();
  return key;
}
// Call this wherever you need your key.
fetchKey().then((key) => {
  secretKey = key.apiKey;
  console.log(secretKey);
});
console.log(apiUrl);

//Dom Element References 
let searchForm = document.querySelector("#search-form");


// Add timezone for any 
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function displaySearchHistory() {
  var apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=88a754472e95b886547fd49c550f9fe6`;
  fetch(apiUrl)
    .then(function (response) {
      return response.json()
    })
  console.log(apiUrl)
}

// Function to display search history 
function onGot(historyItems) {
  for (item of historyItems) {
    console.log(item.url);
    console.log(new Date(item.lastVisitTime));
  }
}
// let searching = browser.history.search({text: ""});
// searching.then(onGot);
// Function to update history and local storage
// Function to grab history from local storage


//this is for a one day card that appears in the todays weather container
function renderCurrentForecastCard(forecastData) {
  console.log("This is the forecast data ", forecastData)
  $("#js-weather-description").text(forecastData.weather[0].wind_speed);
  $("#js-temp").text("Temperature "+ forecastData.feels_like);
  let $todayIcon = $("today-icon").preventDefault;
  $("#today-icon").attr("src", "http://openweathermap.org/img/wn/" + forecastData.weather[0].icon + "@2x.png");
  $("#js-humidity").text("Humidity "+ forecastData.humidity);
  $("#js-wind-speed").text("Wind Speed: "+ forecastData.wind_speed);
  $("#js-uv-index").text("UV Index of "+ forecastData.uvi);
}

function renderFiveDay(fiveDayData) {
  let $fiveDayContainer = $("#js-five-day-container")
  let nowDayJs = dayjs()
  // empty any existing html in the five day container
  $fiveDayContainer.empty()
  console.log("five day data", fiveDayData)

  for (let i = 0; i < 5; i++) {
    let $cardHeader;
    const currentDayData = fiveDayData[i];
    console.log(currentDayData);
    let $cardElement = $("<div>").addClass("card text-white bg-primary mb-3");

    // TODO: write if/else-if statement to check if index is 0 or 1 for "today/tomorrow"

    // if () {
    //   $cardHeader = $("<div>").addClass("card-header").text("Day " + i);
    // } else if () {
    //   $cardHeader = $("<div>").addClass("card-header").text("Day " + i);
    // } else {
    const weekday = nowDayJs.format('dddd')
    $cardHeader = $("<div>").addClass("card-header").text(weekday);
    // }
    nowDayJs = nowDayJs.add(1, 'day')

    let $cardTemp = $("<div>").addClass("card-body").text("Tempterature: " + currentDayData.temp.day);
    let $cardWindSpeed = $("<div>").addClass("card-body").text("Wind Speed: " + currentDayData.temp.day);
    let $cardHumidity = $("<div>").addClass("card-body").text("UV Index: " + currentDayData.temp.day);
    //let $cardHeader = $("<div>").addClass("card-header").text();
    $cardElement.append($cardHeader);
    $cardElement.append($cardTemp);
    $cardElement.append($cardWindSpeed);
    $cardElement.append($cardHumidity);
    $fiveDayContainer.append($cardElement);
  }

}

// Function to grab weather data location using geolocation
function getCoords(event) {
  event.preventDefault();
  let city = document.getElementById("cityName").value;
  console.log("city Name = ", city);
  fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + apiKey)
    .then(response => response.json())
    .then(data => {
      console.log("Location Data ", data[0])
      let locationData = data[0]
      //console.log(locationData);
      let lat = locationData.lat
      let lon = locationData.lon
      dailyWeather(lat, lon)
    })
};

//Function to display daily weather within the container
function dailyWeather(lat, lon) {
  // let daily = document.getElementById("js-daily").value;
  // let city = location.name;
  fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&appid=" + apiKey + "&units=imperial")
    .then(response => response.json())
    .then(data => {
      let currentForecastData = data.current;
      let fiveDay = data.daily;
      renderCurrentForecastCard(currentForecastData);
      renderFiveDay(fiveDay);
      console.log(data)
    })
}


// fetch coordinates
document.getElementById("searchBtn").addEventListener("click", getCoords)