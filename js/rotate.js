function rotate(layerName){
	if (document.layers) {
		var page = eval('document.'+layerName);
	} else if (document.getElementById) {
		var page= eval("document.getElementById(layerName).style");
	} else if (document.all) {
		var page = eval('document.all.'+layerName+'.style');
	}
	if (page.transform=='rotate(135deg)'){
		page.transform='rotate(45deg)';
	} else {
		page.transform='rotate(135deg)';
	}
}/*
var rotated = false;

document.getElementById('project-title').onclick = function() {
    var div = document.getElementById('description-arrow'),
        deg = rotated ? 0 : 66;

    div.style.webkitTransform = 'rotate('+deg+'deg)'; 
    div.style.mozTransform    = 'rotate('+deg+'deg)'; 
    div.style.msTransform     = 'rotate('+deg+'deg)'; 
    div.style.oTransform      = 'rotate('+deg+'deg)'; 
    div.style.transform       = 'rotate('+deg+'deg)'; 
    
    rotated = !rotated;
}*/