var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn1 = document.querySelector(".bttn1");
var btn2 = document.querySelector(".bttn2");

function changeColor(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";;
}

function randomColor(){
  	var c = '';
  	while (c.length < 6) {
    	c += (Math.random()).toString(16).substr(-6).substr(-1)
  	}
  	return '#'+c;
}
// function setRandColor1(){
// 	// var target = event.target;
// 	// color1.value = randomColor();
// 	// changeColor();
// 	console.log('boton1');
// }

// function setRandColor2(){
// 	color2.value = randomColor();
// 	changeColor();
// }

function setRandColor(event){
	var target = event.target;
	if (target.className == "bttn1") {
		color1.value = randomColor();
	}
	else if (target.className == "bttn2"){
		color2.value = randomColor();
	}
	changeColor();
}


color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
btn1.addEventListener("click", setRandColor);
btn2.addEventListener("click", setRandColor);

window.addEventListener("load", changeColor);