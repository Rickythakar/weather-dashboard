console.log("js file is hooked up")
//Global Variables
const searchHistory = [];
const weatherApiUrl = "https://api.openweathermap.org/";
const apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=88a754472e95b886547fd49c550f9fe6&units=imperial";
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
// #search form. #search-input, #today, #forecast, #history
let searchForm = document.querySelector("#search-form");
// let searchInput
// let todayBox
// let forecastBox
// let searchDisplayBox

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
  console.log(forecastData)
  $("#js-weather-description").text(forecastData.weather[0].description);
  $("today-icon").preventDefault;
  $("#today-icon").attr("src", "http://openweathermap.org/img/wn/" + forecastData.weather[0].icon +"@2x.png");
  //temp
  //wind
  //humidity
  // uv index
}

function renderFiveDay(fiveDayData) {
  let $fiveDayContainer = $("#js-five-day-container")
  console.log("five day data", fiveDayData);
  for (let i = 0; i < 5; i++) {
    const currentDayData = fiveDayData[i];
    console.log(currentDayData);
    let $cardElement = $("<div>").addClass("card text-white bg-primary mb-3");
    let $cardHeader = $("<div>").addClass("card-header").text("Day " + i);
    let $cardText = $("<div>").addClass("card-text").text("Tempterature" + currentDayData.temp.day);
    //let $cardHeader = $("<div>").addClass("card-header").text();
    //let $cardHeader = $("<div>").addClass("card-header").text();
    $cardElement.append($cardHeader);
    $cardElement.append($cardText);
    $fiveDayContainer.append($cardElement);
  }
  // let dailyWeather = document.createElement("div");
  // let fiveDay = document.createElement("h4");

  //Set attr to five day variable and add text content from api
  //craete for loop to go thru the days of the week 
}

// Function to grab weather data location using geolocation
function getCoords(event) {
  event.preventDefault();
  let city = document.getElementById("cityName").value;
  console.log("city Name = ", city);
  fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + apiKey)
    .then(response => response.json())
    .then(data => {
      console.log(data[0])
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

// Function to handle search forms
// Function to handle click history
// Function to displaySearchHistory
// Call back function to grab search history from local storage
// Two add event listners for the search history and search submission
//  searchDisplayBox.innerHTML = "";

// Make a request to the one call and show them how to make api key
// fetch coordinates
document.getElementById("searchBtn").addEventListener("click", getCoords)