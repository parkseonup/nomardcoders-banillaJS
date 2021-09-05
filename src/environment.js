// 위치, 날씨

//위치 좌표 불러오기
function onGeoOk(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    //openweathermap.org API
    const key = "1129fffe00ecb17bfb0cb3409162ddb2";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
    console.log(url);
}

function onGeoError() {
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const geoloction = document.querySelector(".geoloction");
const weather = document.querySelector(".weather");

 