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