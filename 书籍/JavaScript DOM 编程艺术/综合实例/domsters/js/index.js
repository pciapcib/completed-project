var intro = document.getElementById("intro");

var slideshow = document.createElement("div");
slideshow.setAttribute("id", "slideshow");

var frame = document.createElement("img");
frame.setAttribute("id", "frame");
frame.setAttribute("src", "images/frame.gif");
slideshow.appendChild(frame);

var preview = document.createElement("img");
preview.setAttribute("id", "preview");
preview.setAttribute("src", "images/slideshow.gif");
slideshow.appendChild(preview);

insertAfter(slideshow, intro);

var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    links[i].onmouseover = function() {
        var href = this.getAttribute("href");
        if (href == "index.html") {
            moveElement("preview", 0, 0, 5);
        }
        if (href == "about.html") {
            moveElement("preview", -150, 0, 5);
        }
        if (href == "photos.html") {
            moveElement("preview", -300, 0, 5);
        }
        if (href == "live.html") {
            moveElement("preview", -450, 0, 5);
        }
        if (href == "contact.html") {
            moveElement("preview", -600, 0, 5);
        }
    };
}
