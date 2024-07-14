// Scroll Effects
function scrollAppear() {
  var introText = document.querySelector(".side-text");
  var sideImage = document.querySelector(".sideImage");
  var introPosition = introText.getBoundingClientRect().top;
  var imagePosition = sideImage.getBoundingClientRect().top;

  var screenPosition = window.innerHeight / 1.2;

  if (introPosition < screenPosition) {
    introText.classList.add("side-text-appear");
  }
  if (imagePosition < screenPosition) {
    sideImage.classList.add("sideImage-appear");
  }
}

window.addEventListener("scroll", scrollAppear);

// Mobile Navigation Menu Switching
var i = 2;
function switchTAB() {
  var listSwitch = document.getElementById("list-switch");
  var searchSwitch = document.getElementById("search-switch");

  if (i % 2 == 0) {
    listSwitch.style = "display: grid; height: 50vh; margin-left: 5%;";
    searchSwitch.style = "display: block; margin-left: 5%;";
  } else {
    listSwitch.style = "display: none;";
    searchSwitch.style = "display: none;";
  }
  i++;
}

// Login and Registration Form Switching
var loginForm = document.getElementById("login");
var registerForm = document.getElementById("register");
var btn = document.getElementById("btn");
var log = document.getElementById("log");
var reg = document.getElementById("reg");
var other = document.getElementById("other");

function register() {
  loginForm.style.left = "-400px";
  registerForm.style.left = "50px";
  btn.style.left = "110px";
  other.style.visibility = "hidden";
  reg.style.color = "#fff";
  log.style.color = "#000";
}

function login() {
  loginForm.style.left = "50px";
  registerForm.style.left = "450px";
  btn.style.left = "0px";
  other.style.visibility = "visible";
  log.style.color = "#fff";
  reg.style.color = "#000";
}

// Checkbox and Button Style
function goFurther() {
  var btnSubmit = document.getElementById("btnSubmit");
  if (document.getElementById("chkAgree").checked) {
    btnSubmit.style =
      "background: linear-gradient(to right, #FA4B37, #DF2771);";
  } else {
    btnSubmit.style = "background: lightgray;";
  }
}

// External Navigation
function google() {
  window.location.assign(
    "https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession",
    "_blank"
  );
}

// Validation Functions
function validateName(name) {
  var regex = /^[A-Za-z\s]+$/;
  return regex.test(name);
}

function validatePassword(password) {
  return password.length >= 8;
}

function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Form Validation for Registration
function validateRegisterForm() {
  var name = document.getElementById("register-name").value;
  var email = document.getElementById("register-email").value;
  var password = document.getElementById("register-password").value;
  var confirmPassword = document.getElementById(
    "register-confirm-password"
  ).value;

  if (!validateName(name)) {
    alert("Name must contain only alphabets.");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!validatePassword(password)) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

/* Quiz Frame Management
function quizt(frame) {
  for (var i = 1; i <= 11; i++) {
    document.getElementById("f" + i).style = "display: none;";
  }
  document.getElementById("f" + frame).style = "display: block;";
}

function startquiz() {
  document.getElementById("title").style = "display: none;";
  document.getElementById("panel").style = "display: inline-flex;";
  document.getElementById("left").style = "display: block;";
  document.getElementById("right").style = "display: block;";
}

// Image Display
function display(n) {
  var imgs = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3"), document.getElementById("img4")];
  var selectors = [document.getElementById("s1"), document*/
