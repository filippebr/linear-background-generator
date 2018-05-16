var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var btnRan = document.querySelector("#btn-color");
var color = {
  red: 0,
  green: 0,
  blue: 0,
  alpha: 0
};

function genRan(val1, val2) {
  var ranNum = Math.floor(Math.random()*((val2 - val1) - 1))+val1;
  return ranNum;
}

function addRanColor() {
  color.red = genRan(0, 255);
  color.green = genRan(0, 255);
  color.blue = genRan(0, 255);
  color.alpha = 1;

  var ranColor = 'rgba('+color.red+', '+color.green+', '+color.blue+', '+color.alpha+')';
  return ranColor;
}

function setRanGradient(e) {
  var target = e.target;

  var ranColor1 = addRanColor();
  var ranColor2 = addRanColor();

  if ( target.id === "btn-color" ) {
    body.style.background = "linear-gradient(to right,"
    + ranColor1 + "," + ranColor2 + ")";

    css.textContent = body.style.background;
  }

}

function setGradient() {
  body.style.background = "linear-gradient(to right,"
  + color1.value + "," + color2.value + ")";

  css.textContent = body.style.background;
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
btnRan.addEventListener('click', setRanGradient);
