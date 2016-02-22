var slideshow = document.createElement("div");
slideshow.setAttribute("id", "slideshow");
var preview = document.createElement("img");
preview.setAttribute("src", "topics.gif");
preview.setAttribute("alt", "building blocks of web design");
preview.setAttribute("id", "preview");
slideshow.appendChild(preview);
var list = document.getElementById("linklist");
insertAfter(slideshow, list);
var links = list.getElementsByTagName("a");
links[0].onmouseover = function() {
    moveElement("preview", -100, 0, 10);
};
links[1].onmouseover = function() {
    moveElement("preview", -200, 0, 10);
};
links[2].onmouseover = function() {
    moveElement("preview", -300, 0, 10);
};

function moveElement(elementID, final_x, final_y, interval) {
    if (!document.getElementById(elementID)) {
        return false;
    }
    var elem = document.getElementById(elementID);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    if (!elem.style.left) {
        preview.style.left = "0px";
    }
    if (!elem.style.top) {
        preview.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        dist = Math.ceil((final_x - xpos) / 10);
        xpos += dist;
    }
    if (xpos > final_x) {
        dist = Math.ceil((xpos - final_x) / 10);
        xpos -= dist;
    }
    if (ypos < final_y) {
        dist = Math.ceil((final_y - ypos) / 10);
        ypos += dist;
    }
    if (ypos > final_y) {
        dist = Math.ceil((ypos - final_y) / 10);
        ypos -= dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = function() {
        moveElement(elementID, final_x, final_y, interval);
    };
    elem.movement = setTimeout(repeat, interval);
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild("newElement");
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
