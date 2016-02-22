window.onload = initPage;

function initPage() {
    var cells = document.getElementById("puzzleGrid").getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        cell.onclick = tileClick;
    }
}

function tileClick() {
    if (cellIsEmpty(this)) {
        alert("Please click on a numbered tile.");
        return;
    }
    var currentRow = this.id.charAt(4);
    var currentCol = this.id.charAt(5);
    var testRow, testCol, testCellId, testCell;

    if (currentRow > 1) {
        testRow = Number(currentRow) - 1;
        testCellId = "cell" + testRow + currentCol;
        testCell = document.getElementById(testCellId);
        if (cellIsEmpty(testCell)) {
            swapTiles(this, testCell);
            return;
        }
    }

    if (currentRow < 4) {
        testRow = Number(currentRow) + 1;
        testCellId = "cell" + testRow + currentCol;
        testCell = document.getElementById(testCellId);
        if (cellIsEmpty(testCell)) {
            swapTiles(this, testCell);
            return;
        }
    }

    if (currentCol > 1) {
        testCol = Number(currentCol) - 1;
        testCellId = "cell" + currentRow + testCol;
        testCell = document.getElementById(testCellId);
        if (cellIsEmpty(testCell)) {
            swapTiles(this, testCell);
            return;
        }
    }

    if (currentCol < 4) {
        testCol = Number(currentCol) + 1;
        testCellId = "cell" + currentRow + testCol;
        testCell = document.getElementById(testCellId);
        if (cellIsEmpty(testCell)) {
            swapTiles(this, testCell);
            return;
        }
    }

    alert("Please click a tile next to an empty cell.");
}

function swapTiles(selectCell, destinationCell) {
    selectedImage = selectCell.getElementsByTagName("img")[0];
    destinationImage = destinationCell.getElementsByTagName("img")[0];
    selectCell.appendChild(destinationImage);
    destinationCell.appendChild(selectedImage);
    if (pizzleIsComplete()) {
        document.getElementById("puzzleGrid").className = "win";
    }
}

function cellIsEmpty(cell) {
    var image = cell.getElementsByTagName("img")[0];
    if (image.alt == "empty") {
        return true;
    } else {
        return false;
    }
}

function pizzleIsComplete() {
    var tiles = document.getElementById("puzzleGrid").getElementsByTagName("img");
    var tileOrder = "";
    for (var i = 0; i < tiles.length; i++) {
        var num = tiles[i].src.substr(-6, 2);
        if (num != "ty") {
            tileOrder += num;
        }
    }
    if (tileOrder == "010203040506070809101112131415") {
        return true;
    } else {
        return false;
    }
}
