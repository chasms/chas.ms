function display_opacity(className){
	var e = getElementsByClassName(className);
	for ( var i=0, len=e.length; i<len; ++i ){
		if(e[i].style.opacity == '1')
			e[i].style.opacity = '1';
		else
			e[i].style.opacity = '1';
	}	
}