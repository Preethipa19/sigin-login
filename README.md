# sigin-login

## Introduction
This project is a simple SignIn/LogIn web page that includes both login and registration forms. The page has some basic validation for user inputs such as username, password, and email.

## Project Structure
project-directory/
│
├── images/
│   ├── icon/
│   │   └── favicon.png
│   ├── chef.jpeg
│   ├── fb2.png
│   ├── insta2.png
│   └── tt2.png
│
├── signin.css
├── scripts.js
├── index.html
└── README.md
## HTML File
index.html: This is the main file that contains the structure of the login and registration forms. It includes the necessary HTML, CSS, and JavaScript references.
CSS File
signin.css: This file contains the styles for the login and registration forms, buttons, and other elements on the page.
## JavaScript File
scripts.js: This file contains JavaScript code for form validation, handling form submission, and other interactions on the page.
## Dependencies
jQuery: The project uses jQuery for handling form submissions and other DOM manipulations.
Included from CDN: https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
## Features
Login Form: Users can log in using their username or phone number and password.
Registration Form: Users can register with their full name, email address, password, and confirm password.
## Form Validation:
Full name should contain only alphabets.
Email should be in a valid email format.
Password must be at least 8 characters long.
Confirm password should match the password.
Social Media Login: Users can log in using their Google account.
## Validation Functions
The JavaScript file (scripts.js) contains functions for validating the inputs in the registration form:

## javascript

// Validate Full Name
function validateName(name) {
  var regex = /^[A-Za-z\s]+$/;
  return regex.test(name);
}

// Validate Password
function validatePassword(password) {
  return password.length >= 8;
}

// Validate Email
function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Form Validation for Registration
function validateRegisterForm() {
  var name = document.getElementById("register-name").value;
  var email = document.getElementById("register-email").value;
  var password = document.getElementById("register-password").value;
  var confirmPassword = document.getElementById("register-confirm-password").value;

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
## Usage
Clone the repository to your local machine.
Open index.html in your web browser to view the login and registration page.
Enter the required details in the login or registration form and submit.
Customization
Styling: You can customize the appearance of the page by modifying the signin.css file.
Functionality: You can add or modify the validation rules in the scripts.js file to suit your requirements.
## Notes
Make sure to include all the images and icons in the appropriate directories as referenced in the HTML file.
The project uses inline CSS for some elements; you can move these styles to the signin.css file for better separation of concerns.
