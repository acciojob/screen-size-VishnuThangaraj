//your JS code here. If required.
let result = document.getElementsByTagName('h1');

window.onload = function(){
	result[0].innerHTML = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}

window.onresize = function(){
	result[0].innerHTML = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}