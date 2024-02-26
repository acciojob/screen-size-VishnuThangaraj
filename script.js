//your JS code here. If required.
const result = document.getElementById('sizeInfo');

window.onload = function(){
	result.innerHTML = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}

window.onresize = function(){
	result.innerHTML = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}