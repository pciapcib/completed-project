var description = document.createElement("h6");
var desctext = document.createTextNode("Choose an image");
description.appendChild(desctext);

var placeholder = document.createElement("img");
placeholder.setAttribute("src", "images/placeholder.gif");
placeholder.setAttribute("alt", "placeholder");
placeholder.setAttribute("id", "placeholder");

var gallery = document.getElementById("imagegallery");

insertAfter(description, gallery);
insertAfter(placeholder, description);

var links = gallery.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        showPic(this);
        return false;
    };
}
