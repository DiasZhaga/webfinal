function getStarted() {
    let audio = document.getElementById("buttonclick");
    audio.play();
}

let sub = document.getElementById("subscribe");
sub.addEventListener("click", clickFunction);

  function clickFunction() {
    document.getElementById("demo").innerHTML = "You are subscribed!";
  }

  document.getElementById("mouse").onmouseover = function () {mouseOver()};
  document.getElementById("mouse").onmouseout = function () {mouseOut()};

function mouseOver() {
  document.getElementById("mouse").style.color = "blue";
  document.getElementById("mouse2").style.color = "blue";
  document.getElementById("mouse3").style.color = "blue";
}

function mouseOut() {
  document.getElementById("mouse").style.color = "white";
  document.getElementById("mouse2").style.color = "white";
  document.getElementById("mouse3").style.color = "white";
}

document.getElementById("mouse2").onmouseover = function () {mouseOver()};
document.getElementById("mouse2").onmouseout = function () {mouseOut()};

document.getElementById("mouse3").onmouseover = function () {mouseOver()};
document.getElementById("mouse3").onmouseout = function () {mouseOut()};

document.getElementById("emailinput").addEventListener("keydown", keydownFunction);

function keydownFunction() {
  document.getElementById("emailinput").style.backgroundColor = "green";
}

function keyupFunction() {
  document.getElementById("emailinput").style.backgroundColor = "white";
}

