// 로그인

const bg = [
    "1.jpg", 
    "2.jpg", 
    "3.jpg", 
];
const colors = [
    "#002a39",
    "#1a2b01",
    "#371b08",
];
const login = document.querySelector(".login");
const user = document.querySelector(".user");
const loginForm = document.querySelector(".login_form");
const loginInput = document.querySelector("#login_input");
const loginLabelIcon = document.querySelector(".login_label_icon");
const basicBtn = document.querySelectorAll(".basic_btn");
const random = Math.floor(Math.random() * bg.length);
const header = document.querySelector("header");

const WARNING = "warning";
const HIDDEN = "hidden";

loginInput.autocomplete = "off"; // input 자동완성 끄기
document.body.style.background = `url("asset/${bg[random]}") no-repeat center / cover`; // bg 랜덤으로 뜨기
// 모든 버튼에 bg array의 순서와 동일한 colors array 값으로 bg 컬러 넣어주기
for(let i = 0; i < basicBtn.length; i++) {
    basicBtn[i].style.backgroundColor = colors[random];
}

// Login input에 focus되면 label에 글자 지우기
function handleFocusLoginInput() {
    loginLabelIcon.innerText = "";
    loginInput.classList.remove(WARNING);
}

// Login input에 값이 없으면 innterText 만들고 있으면 return
function handleBlurLoginInput() {
    if(loginInput.value === "") {
        loginLabelIcon.innerText = "Enter your name";
    } else {
        return;
    }
}

// 로그인하면 로컬 스토리지에 로그인 정보 저장, login폼 숨기기, user 이름만 뜨게 하기
function handleSubmitLogin(event) {
    event.preventDefault();
    const loginValue = loginInput.value;

    if(loginValue === ""){
        loginInput.classList.add(WARNING);
        loginLabelIcon.innerText = "Look at me! Enter!";
    } else {
        localStorage.setItem("name", loginValue);
        login.classList.add(HIDDEN);
        header.classList.add("user_access");
        header.classList.remove(HIDDEN);
        user.innerText = localStorage.getItem("name");
        handleSubmitGeolocation(); // environment.js 실행
        document.querySelector(".todo_wrap").classList.remove(HIDDEN);
    }
}

loginInput.addEventListener("focus", handleFocusLoginInput);
loginInput.addEventListener("blur", handleBlurLoginInput);
loginForm.addEventListener("submit", handleSubmitLogin);
