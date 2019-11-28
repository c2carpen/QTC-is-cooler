let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/sleeping.jpg') {
        myImage.setAttribute('src', 'images/turkey.jpg');
    } else {
        myImage.setAttribute('src', 'images/sleeping.jpg');
    }
    let myButton = document.querySelector('button');
    let myHeading = document.querySelector('h1');}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Quinn is Cooler than you, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Quinn is Cooler than you, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }