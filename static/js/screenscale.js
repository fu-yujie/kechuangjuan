window.onresize = function(){
	window.requestAnimationFrame(function () {
	  var AvailableWidth = window.innerWidth;
	  var fontSize = (AvailableWidth/375)*20;
	  jsEnvironment = document.getElementById('physical');
	  jsEnvironment.style.fontSize = fontSize+'px';
	});
}
window.onload = function(){
	  var AvailableWidth = window.innerWidth;
	  var fontSize = (AvailableWidth/375)*20;
	  jsEnvironment = document.getElementById('physical');
	  jsEnvironment.style.fontSize = fontSize+'px';
}
