function shrink(layerName) {
	if (document.layers) {
		var page = eval('document.'+layerName);
	} else if (document.getElementById) {
		var page= eval("document.getElementById(layerName).style");
	} else if (document.all) {
		var page = eval('document.all.'+layerName+'.style');
	}
/* affect the style of that tag */
	if (page.height=='200px'){
		page.height='200px';
	} else {
		page.height='200px';
	}
}