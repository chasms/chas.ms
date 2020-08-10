function slide_up(layerName) {
	if (document.layers) {
		var page = eval('document.'+layerName);
	} else if (document.getElementById) {
		var page= eval("document.getElementById(layerName).style");
	} else if (document.all) {
		var page = eval('document.all.'+layerName+'.style');
	}
/* affect the style of that tag */
	if (page.top=='-120%'){
		page.top='-120%';
	} else {
		page.top='-120%';
	}
}