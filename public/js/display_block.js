function display_block(className) {
  var e = getElementsByClassName(className);
  for (var i = 0, len = e.length; i < len; ++i) {
    if (e[i].style.display == "block") e[i].style.display = "block";
    else e[i].style.display = "block";
  }
}
