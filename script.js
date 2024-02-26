//your JS code here. If required.
const height = [...document.getElementsByClassName('height')];
const width = [...document.getElementsByClassName('width')];

window.onload = function(){
	height[0].innerHTML = window.innerHeight;
    width[0].innerHTML = window.innerWidth;
}

window.onresize = function(){
	height[0].innerHTML = window.innerHeight;
    width[0].innerHTML = window.innerWidth;
}