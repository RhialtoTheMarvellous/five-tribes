var SETS = {
    base: [
        {
            "name": "Large Market",
            "value": "4",
            "class": "large-market",
            "color": "red"
        },
        {
            "name": "Large Market",
            "value": "4",
            "class": "large-market",
            "color": "red"
        },
        {
            "name": "Large Market",
            "value": "4",
            "class": "large-market",
            "color": "red"
        },
        {
            "name": "Large Market",
            "value": "4",
            "class": "large-market",
            "color": "red"
        },
        {
            "name": "Small Market",
            "value": "6",
            "class": "small-market",
            "color": "red"
        },
        {
            "name": "Small Market",
            "value": "6",
            "class": "small-market",
            "color": "red"
        },
        {
            "name": "Small Market",
            "value": "6",
            "class": "small-market",
            "color": "red"
        },
        {
            "name": "Small Market",
            "value": "6",
            "class": "small-market",
            "color": "red"
        },
        {
            "name": "Small Market",
            "value": "6",
            "class": "small-market",
            "color": "red"
        },
        {
            "name": "Small Market",
            "value": "6",
            "class": "small-market",
            "color": "red"
        },
        {
            "name": "Small Market",
            "value": "6",
            "class": "small-market",
            "color": "red"
        },
        {
            "name": "Small Market",
            "value": "6",
            "class": "small-market",
            "color": "red"
        },
        {
            "name": "Oasis",
            "value": "8",
            "class": "oasis",
            "color": "red"
        },
        {
            "name": "Oasis",
            "value": "8",
            "class": "oasis",
            "color": "red"
        },
        {
            "name": "Oasis",
            "value": "8",
            "class": "oasis",
            "color": "red"
        },
        {
            "name": "Oasis",
            "value": "8",
            "class": "oasis",
            "color": "red"
        },
        {
            "name": "Oasis",
            "value": "8",
            "class": "oasis",
            "color": "red"
        },
        {
            "name": "Oasis",
            "value": "8",
            "class": "oasis",
            "color": "red"
        },
        {
            "name": "Village",
            "value": "5",
            "class": "village",
            "color": "blue"
        },
        {
            "name": "Village",
            "value": "5",
            "class": "village",
            "color": "blue"
        },
        {
            "name": "Village",
            "value": "5",
            "class": "village",
            "color": "blue"
        },
        {
            "name": "Village",
            "value": "5",
            "class": "village",
            "color": "blue"
        },
        {
            "name": "Village",
            "value": "5",
            "class": "village",
            "color": "blue"
        },
        {
            "name": "Sacred Place",
            "value": "6",
            "class": "sacred-place",
            "color": "blue"
        },
        {
            "name": "Sacred Place",
            "value": "6",
            "class": "sacred-place",
            "color": "blue"
        },
        {
            "name": "Sacred Place",
            "value": "6",
            "class": "sacred-place",
            "color": "blue"
        },
        {
            "name": "Sacred Place",
            "value": "6",
            "class": "sacred-place",
            "color": "blue"
        },
        {
            "name": "Sacred Place",
            "value": "10",
            "class": "sacred-place",
            "color": "blue"
        },
        {
            "name": "Sacred Place",
            "value": "12",
            "class": "sacred-place",
            "color": "blue"
        },
        {
            "name": "Sacred Place",
            "value": "15",
            "class": "sacred-place",
            "color": "blue"
        }
    ],
    artisans: [
        {
            "name": "Workshop",
            "value": "5",
            "class": "workshop-nw",
            "color": "blue"
        },
        {
            "name": "Workshop",
            "value": "5",
            "class": "workshop-se",
            "color": "blue"
        },
        {
            "name": "Workshop",
            "value": "5",
            "class": "workshop-se",
            "color": "blue"
        },
        {
            "name": "Specialized Market",
            "value": "10",
            "class": "specialized-market",
            "color": "red"
        },
        {
            "name": "Specialized Market",
            "value": "10",
            "class": "specialized-market",
            "color": "red"
        },
        {
            "name": "Chasm",
            "value": "",
            "class": "chasm",
            "color": ""
        }
    ],
    whims: [
        {
            "name": "Fabulous City",
            "value": "5+",
            "class": "fabulous-city",
            "color": "blue"
        },
        {
            "name": "Fabulous City",
            "value": "5+",
            "class": "fabulous-city",
            "color": "blue"
        },
        {
            "name": "Fabulous City",
            "value": "5+",
            "class": "fabulous-city",
            "color": "blue"
        },
        {
            "name": "Fabulous City",
            "value": "5+",
            "class": "fabulous-city",
            "color": "red"
        },
        {
            "name": "Fabulous City",
            "value": "5+",
            "class": "fabulous-city",
            "color": "red"
        },
        {
            "name": "Great Lake",
            "value": "",
            "class": "great-lake",
            "color": ""
        }
    ]
};


/******************************************************************************/

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function layout(a, h, w) {
    var i, j;
    
    var board = [];
    var row;
    
    for (i = 0; i < h; i++) {
        row = [];
        
        for (j = 0; j < w; j++) {
            row.push(a.pop());
        }
        
        board.push(row);
    }
    
    return board;
}

function layoutWithBorder(inner, border, h, w) {
    var i, j;
    
    var board = [];
    var row;
    
    for (i = 0; i < h; i++) {
        row = [];
        
        for (j = 0; j < w; j++) {
            if (i % (h-1) === 0 || j % (w-1) === 0) {
                row.push(border.pop());            
            }
            else {
                row.push(inner.pop());
            }
        }
        
        board.push(row);
    }
    
    return board;
}


function createTable(board) {
    var tableDiv = document.getElementById("div-board");
    var table = document.createElement("table");
    table.id = "table-board";
    var tableBody = document.createElement("tbody");

    board.forEach(function(rowData) {
        var row = document.createElement("tr");

        rowData.forEach(function(tileData) {
            var cell = document.createElement("td");
            cell.className = tileData["class"] + " " + tileData["color"];
            cell.title = tileData["name"];
            cell.appendChild(document.createTextNode(tileData["value"]));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    tableDiv.appendChild(table);
}



function generate() {
    var artisans = document.getElementById("checkbox-artisans").checked;
    var whims = document.getElementById("checkbox-whims").checked;
    
    var div = document.getElementById("div-board");
    var oldTable = document.getElementById("table-board");
    
    if(oldTable) div.removeChild(oldTable);
    
    var board;
    
    if (!artisans && !whims) {
        // Base only:
        var tiles = SETS.base.slice();
        shuffle(tiles);
        board = layout(tiles, 5, 6);
    }
    else if (artisans && !whims) {
        // Base + Artisans:
        var baseTiles = SETS.base.slice();
        shuffle(baseTiles);
        
        var central = SETS.artisans.slice().concat(baseTiles.slice(0,10));
        var remainder = baseTiles.slice(10,30);

        shuffle(central);
        board = layoutWithBorder(central, remainder, 6, 6);
    }
    else if (!artisans && whims) {
        // Base + Whims:
        var tiles = SETS.base.concat(SETS.whims);
        shuffle(tiles);
        board = layout(tiles, 6, 6);
    }
    else if (artisans && whims) {
        // Base + Artisans + Whims:
        var baseAndWhims = SETS.base.concat(SETS.whims);
        shuffle(baseAndWhims);

        var central = SETS.artisans.slice().concat(baseAndWhims.slice(0,14));
        var remainder = baseAndWhims.slice(14,36);

        shuffle(central);
        board = layoutWithBorder(central, remainder, 6, 7);
    }
    
    createTable(board);
}


var button = document.getElementById("button-generate");

button.onclick = generate;





