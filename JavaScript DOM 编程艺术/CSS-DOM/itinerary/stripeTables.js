var tables = document.getElementsByTagName("table");
var odd, rows;

for (var i = 0; i < tables.length; i++) {
    odd = true;
    rows = tables[i].getElementsByTagName("tr");
    for (var j = 0; j < rows.length; j++) {
        if (odd === false) {
            addClass(rows[j], "odd");
            odd = true;
        } else {
            odd = false;
        }
    }
}

for (var i = 0; i < rows.length; i++) {
    rows[i].onmouseover = function() {
        this.style.fontWeight = "bold";
    };
    rows[i].onmouseout = function() {
        this.style.fontWeight = "normal";
    };
}

function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        element.className = element.className + " " + value;
    }
}
