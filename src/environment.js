// 위치, 날씨

//위치 좌표 불러오기
function onGeoOk(position) {
    console.log(position);
}

function onGeoError() {
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
const lat = 35.9323701;
const log = 128.5415403;

//openweathermap.org API
const key = 1129fffe00ecb17bfb0cb3409162ddb2;
const link = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
console.log(link);

const geoloction = document.querySelector(".geoloction");
const weather = document.querySelector(".weather");

