var abbreviations = document.getElementsByTagName("abbr");
var dels = new Array();
if (abbreviations) {
	for (var i = 0; i < abbreviations.length; i++) {
		var definition = abbreviations[i].getAttribute("title");
		var key = abbreviations[i].firstChild.nodeValue;
		dels[key] = definition;
	}
}
var dlist = document.createElement("dl");
for (key in dels) {
	var definition = dels[key];
	var dtitle = document.createElement("dt");
	var dtitle_text = document.createTextNode(key);
	dtitle.appendChild(dtitle_text);
	var desc = document.createElement("dd");
	var desc_text = document.createTextNode(definition);
	desc.appendChild(desc_text);
	dlist.appendChild(dtitle);
	dlist.appendChild(desc);
}
var header = document.createElement("h2");
var header_text = document.createTextNode("Abbreviations");
header.appendChild(header_text);
document.body.appendChild(header);
document.body.appendChild(dlist);
