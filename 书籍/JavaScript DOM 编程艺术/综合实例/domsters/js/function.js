function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild("newElement");
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function moveElement(elementID, final_x, final_y, interval) {
    if (!document.getElementById(elementID)) {
        return false;
    }
    var elem = document.getElementById(elementID);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
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

function showArticle(id) {
    var articles = document.getElementsByTagName("article");
    for (var i = 0; i < articles.length; i++) {
        if (articles[i].getAttribute("id") == id) {
            articles[i].style.display = "block";
        } else {
            articles[i].style.display = "none";
        }
    }
}

function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
}
