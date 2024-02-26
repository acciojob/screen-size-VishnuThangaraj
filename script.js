//your JS code here. If required.
const result = document.getElementById('sizeInfo');

window.onload = function(){
	result.innerHTML = `<h1> Width: ${window.innerWidth} and Height: ${window.innerHeight}</h1>`;
}

window.onresize = function(){
	result.innerHTML = `<h1> Width: ${window.innerWidth} and Height: ${window.innerHeight}</h1>`;
}