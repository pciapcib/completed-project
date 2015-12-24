var live = document.getElementById("livetable");

var title = document.createElement("h3");
var title_text = document.createTextNode("Abbreviations");
title.appendChild(title_text);

var dlist = document.createElement("dl");

live.appendChild(title);
live.appendChild(dlist);

var abbreviations = document.getElementsByTagName("abbr");
for (var i = 0; i < abbreviations.length; i++) {
    var abbr_title = abbreviations[i].getAttribute("title");
    var abbr_text = abbreviations[i].firstChild.nodeValue;

    var dtitle = document.createElement("dt");
    var dtitle_text = document.createTextNode(abbr_text);
    dtitle.appendChild(dtitle_text);

    var ddesc = document.createElement("dd");
    var ddesc_text = document.createTextNode(abbr_title);
    ddesc.appendChild(ddesc_text);

    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
}
