window.onload = initPage;

var frequencyTable = ["a", "a", "a", "a", "a", "a", "a", "a", "b", "c", "c", "c", "d", "d", "d", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "f", "f", "g", "g", "h", "h", "h", "h", "h", "h", "i", "i", "i", "i", "i", "i", "i", "j", "k", "l", "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n", "o", "o", "o", "o", "o", "o", "o", "o", "p", "p", "q", "q", "q", "q", "q", "q", "r", "r", "r", "r", "r", "r", "s", "s", "s", "s", "s", "s", "s", "s", "t", "t", "t", "u", "u", "v", "v", "w", "x", "y", "y", "z"];

function initPage() {
    randomizeTiles();
}

function randomizeTiles() {
    var tiles = document.getElementById("letterbox").getElementsByTagName("a");
    for (var i = 0; i < tiles.length; i++) {
        var index = Math.floor(Math.random() * 100);
        var letter = frequencyTable[index];
        tiles[i].className = tiles[i].className + " l" + letter;
        tiles[i].onclick = addLetter;
    }
}

function addLetter() {
    var tileLetter = this.className.substr(10, 1);
    var currentWordDiv = document.getElementById("currentWord");
    if (currentWordDiv.childNodes.length === 0) {
        var p = document.createElement("p");
        currentWordDiv.appendChild(p);
        var letterText = document.createTextNode(tileLetter);
        p.appendChild(letterText);
        var submit = document.getElementById("submit").firstChild;
        submit.onclick = submitWord;
    } else {
        var p = currentWordDiv.firstChild;
        var letterText = p.firstChild;
        letterText.nodeValue += tileLetter;
    }
    this.className += " disabled";
    this.onclick = null;
}

function submitWord() {
    request = createRequest();
    if (request === null) {
        alert("Unable to create request");
        return;
    }
    var userWord = document.getElementById("currentWord").firstChild.firstChild.nodeValue;
    var url = "lookup-word.php?word=" + escape(userWord);
    request.open("GET", url, true);
    request.onreadystatechange = updateScore;
    request.send(null);
}

function updateScore() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            if (request.responseText == -1) {
                alert("You have entered an invalid word. Try again!");
            } else {
                var wordListDiv = document.getElementById("wordList");
                var p = document.createElement("p");
                wordListDiv.appendChild(p);
                var userWord = document.getElementById("currentWord").firstChild.firstChild.nodeValue;
                var newWord = document.createTextNode(userWord);
                p.appendChild(newWord);
                var scoreDiv = document.getElementById("score");
                var scoreNode = scoreDiv.firstChild;
                var currentScore = parseInt(scoreNode.nodeValue.substr(7));
                currentScore += parseInt(request.responseText);
                scoreNode.nodeValue = "Score: " + currentScore;
            }
            var currentWordDiv = document.getElementById("currentWord");
            currentWordDiv.removeChild(currentWordDiv.firstChild);
            enableAllTiles();
            var submit = document.getElementById("submit").firstChild;
            submit.onclick = function() {
                alert("Please click tiles to add letters and create a word.");
            };
        }
    }
}

function enableAllTiles() {
    var tiles = document.getElementById("letterbox").getElementsByTagName("a");
    for (var i = 0; i < tiles.length; i++) {
        var tileClasses = tiles[i].className.split(" ");
        if (tileClasses.length > 3) {
            var newClasses = tileClasses[0] + " " + tileClasses[1] + " " + tileClasses[2];
            tiles[i].className = newClasses;
            tiles[i].onclick = addLetter;
        }
    }
}
