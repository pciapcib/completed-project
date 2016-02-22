var nav = document.getElementById("intronav");
var links = nav.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    var articleId = href.substring(1);
    links[i].saveId = articleId;
    links[i].onclick = function() {
        showArticle(this.saveId);
        return false;
    };
}
