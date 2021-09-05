// 위치, 날씨
//const linkAPI = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API%20key};

function onGeoOk() {
    console.log(position);
}

function onGeoError() {
    alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


const geoloction = document.querySelector(".geoloction");
const weather = document.querySelector(".weather");

