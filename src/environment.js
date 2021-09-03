// 위치, 날씨, 시계

//위치
const geoloction = document.querySelector(".geoloction");

// 날씨
const weather = document.querySelector(".weather");

// 시계
const time = document.querySelector(".time");

function currentTime() {
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const minStr = String(min);
    const secStr = String(sec);
    const minPad = minStr.padStart(2, "0");
    const secPad = secStr.padStart(2, "0");
    time.innerText = `${hours}:${minPad}:${secPad}`;
}

setInterval(currentTime, 1000);