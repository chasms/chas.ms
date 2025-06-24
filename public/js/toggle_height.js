function toggle_height(layerName){
	if (document.layers) {
		var page = eval('document.'+layerName);
	} else if (document.getElementById) {
		var page= eval("document.getElementById(layerName).style");
	} else if (document.all) {
		var page = eval('document.all.'+layerName+'.style');
	}
	if (page.height=='auto'){
		page.height='0px';
	} else {
		page.height='auto';
	}
}