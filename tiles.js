var sets = ["base", "artisans", "whims"];

var tiles = {
    base: [],
    artisans: [],
    whims: []
};

var baseTiles = [
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
];


var artisansTiles = [
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
];


var whimsTiles = [
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
},
];



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
            //row.push(a[(i * w) + j]);
            row.push(a.pop());
        }
        
        board.push(row);
    }
    
    return board;
}


function layoutWithBorder(inner, border, h, w) {
    console.log(inner.length);
    console.log(border.length);

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
    
    console.log(inner.length);
    console.log(border.length);
    
    return board;
}



function createTable(board) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');

  board.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(tileData) {
      var cell = document.createElement('td');
      //cell.style.color = tileData["color"];
      cell.className = tileData["class"] + " " + tileData["color"];
      cell.title = tileData["name"];
      cell.appendChild(document.createTextNode(tileData["value"]));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}


/* Base only: */

/*shuffle(baseTiles);
var board = layout(baseTiles, 5, 6);
createTable(board);*/


/* Base + Artisans: */

/*shuffle(baseTiles);

var central = artisansTiles.slice().concat(baseTiles.slice(0,10));
var remainder = baseTiles.slice(10,30);

shuffle(central);
var board = layoutWithBorder(central, remainder, 6, 6);
createTable(board);*/


/* Base + Whims: */

/*var tiles = baseTiles.concat(whimsTiles);
shuffle(tiles);
var board = layout(tiles, 6, 6);
createTable(board);*/


/* Base + Artisans + Whims: */

var baseAndWhims = baseTiles.concat(whimsTiles);
shuffle(baseAndWhims);

var central = artisansTiles.slice().concat(baseAndWhims.slice(0,14));
var remainder = baseAndWhims.slice(14,36);

shuffle(central);
var board = layoutWithBorder(central, remainder, 6, 7);
createTable(board);

