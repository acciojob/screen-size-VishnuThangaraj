//your JS code here. If required.
const height = document.getElementById('height');
const width = document.getElementById('width');

window.onload = function(){
	height.innerHTML = window.innerHeight;
    width.innerHTML = window.innerWidth;
}

window.onresize = function(){
	height.innerHTML = window.innerHeight;
    width.innerHTML = window.innerWidth;
}