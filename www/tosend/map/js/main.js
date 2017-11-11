//    var $container = $("<div id='container'> </div>");

var $container = $("<div id='container_2'> </div>");

var WIDTH = 100;
var HEIGHT = 62;
var CELL_SIZE = 10;
var grid = new PF.Grid(WIDTH, HEIGHT);

//var veriables to atart and end points

var start_xPoint = null;
var end_xPoint = null;
var start_yPoint = null;
var end_yPoint = null;

// shop blocks map
var blocks = [
    // COL 01
    {
        name: 'A',
        img: 'map/img/food.png',
        id: 1,
        x1: 5,
        x2: 20,
        y1: 5,
        y2: 10,


    },
    {
        name: 'B',
        img: 'map/img/food.png',
        id: 2,
        x1: 5,
        x2: 12,
        y1: 12,
        y2: 17,

    },

    {
        name: 'C',
        img: 'map/img/food.png',
        id: 3,
        x1: 14,
        x2: 20,
        y1: 12,
        y2: 17,
    },

    {
        name: 'D',
        img: 'map/img/food.png',
        id: 4,
        x1: 5,
        x2: 12,
        y1: 25,
        y2: 40,
    },

    {
        name: 'E',
        img: 'map/img/food.png',
        id: 5,
        x1: 14,
        x2: 20,
        y1: 25,
        y2: 30,
    },

    {
        name: 'F',
        img: 'map/img/food.png',
        id: 6,
        x1: 14,
        x2: 20,
        y1: 32,
        y2: 40,
    },

    {
        name: 'H',
        img: 'map/img/food.png',
        id: 7,
        x1: 12,
        x2: 20,
        y1: 45,
        y2: 55,
    },

    {
        name: 'H',
        id: 9,
        img: 'map/img/food.png',
        title: 'test',
        x1: 5,
        x2: 12,
        y1: 45,
        y2: 52,
    },
    //COL 2
    {
        name: 'I',
        img: 'map/img/food.png',
        id: 10,
        x1: 30,
        x2: 50,
        y1: 5,
        y2: 10,
    },
    {
        name: 'I',
        img: 'map/img/food.png',
        id: 10,
        x1: 30,
        x2: 47,
        y1: 10,
        y2: 17,
    },
    {
        name: 'J',
        img: 'map/img/food.png',
        id: 10,
        x1: 30,
        x2: 40,
        y1: 25,
        y2: 30,
    },
    {
        name: 'K',
        img: 'map/img/food.png',
        id: 10,
        x1: 30,
        x2: 40,
        y1: 33,
        y2: 40,
    },
    {
        name: 'L',
        img: 'map/img/food.png',
        id: 10,
        x1: 43,
        x2: 50,
        y1: 25,
        y2: 40,
    },

    {
        name: 'M',
        img: 'map/img/food.png',
        id: 10,
        x1: 30,
        x2: 37,
        y1: 45,
        y2: 55,
    },
    {
        name: 'N',
        img: 'map/img/food.png',
        id: 10,
        x1: 40,
        x2: 50,
        y1: 45,
        y2: 55,
    },
    //COL 3
    {
        name: '0',
        img: 'map/img/food.png',
        id: 9,
        x1: 63,
        x2: 70,
        y1: 5,
        y2: 13,
    },
    {
        name: 'P',
        img: 'map/img/food.png',
        id: 9,
        x1: 80,
        x2: 85,
        y1: 5,
        y2: 10,
    },
    {
        name: 'P',
        img: 'map/img/food.png',
        id: 9,
        x1: 73,
        x2: 80,
        y1: 5,
        y2: 13,
    },
    {
        name: 'Q',
        img: 'map/img/food.png',
        id: 9,
        x1: 63,
        x2: 75,
        y1: 17,
        y2: 25,
    },
    {
        name: 'Q',
        img: 'map/img/food.png',
        id: 9,
        x1: 63,
        x2: 70,
        y1: 25,
        y2: 40,
    },


    {
        name: 'Q',
        img: 'map/img/food.png',
        id: 9,
        x1: 70,
        x2: 75,
        y1: 33,
        y2: 40,
    },
    {
        name: 'R',
        img: 'map/img/food.png',
        id: 9,
        x1: 77,
        x2: 85,
        y1: 17,
        y2: 25,
    },
    {
        name: 'S',
        img: 'map/img/food.png',
        id: 9,
        x1: 77,
        x2: 85,
        y1: 33,
        y2: 40,
    },

    {
        name: 'T',
        img: 'map/img/food.png',
        id: 10,
        x1: 63,
        x2: 75,
        y1: 45,
        y2: 55,
    },
    {
        name: 'U',
        img: 'map/img/food.png',
        id: 9,
        x1: 79,
        x2: 85,
        y1: 45,
        y2: 53,
    },

]
//------------------------------create grid map----------------------------

for (var y = 0; y < 62; y++) {
    for (var x = 0; x < 100; x++) {

        var addedDirt = false;

        for (var k = 0; k < blocks.length; k++) {
            var block = blocks[k];

            if ((block.x1 <= x && block.x2 > x) && (block.y1 <= y && block.y2 > y)) {
                addedDirt = true;
                grid.setWalkableAt(x, y, false);
                if (block.img && block.x1 === x && block.y1 === y) {
                    $("<div><img class='block_image' src='" + block.img + "'/></div>").addClass("dirt").appendTo($container);
                } else {
                    $("<div></div>").addClass("dirt").appendTo($container);
                }
            }
        }
        if (!addedDirt) {
            $("<div></div>").addClass("grass").appendTo($container);
        }


    }
    $("<div></div>").css("clear", "both").appendTo($container);

}


$container.appendTo($(".grid"));


//-----------------drag eliment-----------------------
var selected = null, // Object of the element to be moved
    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element

function _drag_init(elem) {
    // Store the object of the element which needs to be moved
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}

// Will be called when user dragging an element
function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
}

var selected = null, // Object of the element to be moved
    x_pos = 5, y_pos = 5, // Stores x & y coordinates of the mouse pointer
    x_elem = 5, y_elem = 5; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element

function _drag_init(elem) {
    // Store the object of the element which needs to be moved
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}


// Will be called when user dragging an element
function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;



    var pointX = jQuery.inArray(x_pos, pointX);
    var pointY = jQuery.inArray(y_pos, pointY);

    if (selected !== null) {
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';

    }
}

// Destroy the object when we are done
function _destroy() {
    selected = null;
}


// Bind the functions...
//~ document.getElementById('draggable-element').onmousedown = function (e) {
	
	//~ console.log(e);

    //~ var x;
    //~ var y;

    //~ if (true) {
        //~ x = x_pos, x_elem;
        //~ y = y_pos, y_elem;

        //~ x = Math.round(x / CELL_SIZE);
        //~ y = Math.round(y / CELL_SIZE);

        //~ console.log('x---', x);
        //~ console.log('y---', y);
        
        //~ start_xPoint = x;
        //~ start_yPoint = y;

        //~ //path find  using A*
        //~ var finder = new PF.AStarFinder();
        //~ var path = finder.findPath(x, y, point_to_x, point_to_y, grid);
        
        //~ var start_xPoint = null;
		//~ var end_xPoint = null;
		//~ var start_yPoint = null;
		//~ var end_yPoint = null;


    //~ }




    //~ _drag_init(this);
    //~ return false;
//~ };


//~ document.getElementById('draggable-element-green').onmousedown = function (e) {
	
	//~ console.log(e);

    //~ var x;
    //~ var y;

    //~ if (true) {
        //~ x = x_pos, x_elem;
        //~ y = y_pos, y_elem;

        //~ x = Math.round(x / CELL_SIZE);
        //~ y = Math.round(y / CELL_SIZE);

        //~ console.log('x---', x);
        //~ console.log('y---', y);
        
        //~ end_xPoint = x;
        //~ end_yPoint = y;
    //~ }




    //~ _drag_init(this);
    //~ return false;
//~ };



document.onmousemove = _move_elem;
document.onmousedown = _destroy;
//~ document.onmousedown = _destroy;

// variable array to stor x y positions

var xyArra = [];

// find pathstart end positions

function findPathDataPoints(stX,stY,enX,enY){
	var arr = {
		startX :stX,
		startY :stY,
		endX :enX,
		endY :enY
	};
	//~ console.log(arr.startX);
    var finder = new PF.AStarFinder({
        allowDiagonal: true,
        dontCrossCorners: true
    });

    var path = finder.findPath( arr.startX, arr.startY,arr.endX, arr.endY, grid);
    //~ console.log(path);
	xyArra=[];

     drawPath(path);
    //~ drawPath(path);
}

// red drag eliment
$(function () {

    $("#draggable-element").draggable({
        containment: "#containment-wrapper", 
        scroll: false,
		stop: function() {
		 var xy = coordinatesXY('#draggable-element');
		 
		 xyArra.push(xy);
		 //~ console.log(xy);
		}
    });
});

// green drag eliment
$(function () {

    $("#draggable-element-green").draggable({
        containment: "#containment-wrapper", 
        scroll: false,
		stop: function() {
		var xy = coordinatesXY('#draggable-element-green');
		
		xyArra.push(xy);
		//~ console.log(xy);
		}
    });
});

// get each eliment end positions
var coordinatesXY = function(element) {
    element = $(element);
    
    var top = element.position().top;
    var left = element.position().left;
    var xVal = Math.round(left/CELL_SIZE);
    var yVal = Math.round(top/CELL_SIZE);
    
    var xYval = {xVal,yVal};
    
    return xYval;
    //~ console.log('X: ' + left + ' ' + 'Y: ' + top);
}

// when submit pass x y data to findPathData function
$(function () {
	$("#submit-btn").click(function(){
		findPathDataPoints(xyArra[0].xVal,xyArra[0].yVal,xyArra[1].xVal,xyArra[1].yVal);
		//~ console.log(xyArra);
		
		//~ findPathDataPoints
	});
});

//page reload
$('#reload').click(function() {
    location.reload();
});

function drawPath(path){
	//~ console.log(path);
	
	var lineData = [];
	
	jQuery.each( path, function( i, val ) {
		lineData.push({x : val[0]*10 , y : val[1]*10});
	});
	
	//~ console.log(lineData);
	
	//~ var lineData = [{ "x": 50, "y": 50 }, {"x": 100,"y": 100}, {"x": 150,"y": 150}, {"x": 200, "y": 200}];
	console.log(lineData);
	
	//This is the accessor function we talked about above
	 var lineFunction = d3.line()
							  .x(function(d) { return d.x; })
							  .y(function(d) { return d.y; });

	//The SVG Container
	var svgContainer = d3.select("#container_2").append("svg");

	//The line SVG Path we draw
	lineEnter = svgContainer.append("g")
	var myLine = lineEnter.append("path")
		.attr("d", lineFunction(lineData))
		.attr("stroke", "blue")
		.attr("stroke-width", 2)
		.attr("fill", "none");

	lineEnter.append("text")
	.attr("y", function(d){ 
		return 10;
	} );

	var circles = svgContainer.selectAll(".my-circle")
	circles.data(lineData)
	.enter()
	.append("circle")
	.attr("class", ".my-circle")
	.attr("r", 3 )
	.attr("cx", function(d){ return d.x; })
	.attr("cy", function(d){ return d.y; });

}

