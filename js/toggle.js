function toggle(layerName){
	if (document.layers) {
		var page = eval('document.'+layerName);
	} else if (document.getElementById) {
		var page= eval("document.getElementById(layerName).style");
	} else if (document.all) {
		var page = eval('document.all.'+layerName+'.style');
	}
	if (page.opacity=='1'){
		page.opacity='0';
	} else {
		page.opacity='1';
	}
}