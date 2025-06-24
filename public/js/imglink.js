$(document).ready(function(){
	var images = document.getElementsByClassName('imglink');
	for (var i = 0; i < images.length; i++) {
		var image = images[i];
		var parentElement = image.parentElement;
		var a = document.createElement('a');
		a.href = image.getAttribute('href');
		a.appendChild(image);
		parentElement.appendChild(a);
	}
});