var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var xcoord = canvas.width/2;
var ycoord = canvas.height/2;

var cvWidth = canvas.width;
var cvHeight = canvas.height;

ctx.font = "40px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

var xdirection = "right";
var ydirection = "down";
var xrate = 1.6;
var yrate = 1.1;


var newColor = "#ffffff";
function getHex() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

setInterval(function() {

    if(xcoord > cvWidth - 40){
        xcoord -= xrate;
        xdirection = "left";
    }
    if(xcoord < 40){
        xcoord += xrate;
        xdirection = "right";
    }
    else {
        if(xdirection == "right")
        {
            xcoord += xrate;
        }
        else
        {
            xcoord -= xrate;
        }  
    }

    if(ycoord > cvHeight - 10){
        ycoord -= yrate;
        ydirection = "up";
    }
    if(ycoord < 18){
        ycoord += yrate;
        ydirection = "down";
    }
    else {
        if(ydirection == "down")
        {
            ycoord += yrate;
        }
        else
        {
            ycoord -= yrate;
        }  
    }

    if( (xcoord > cvWidth - 40) || (xcoord < 40) || (ycoord > cvHeight - 10) || (ycoord < 18) ) {
        newColor = getHex();
    }



    ctx.clearRect(0,0,cvWidth,cvHeight);
    var grd = ctx.createRadialGradient(xcoord,ycoord,5,xcoord,ycoord,30);
    grd.addColorStop(0,"#ffffff");
    grd.addColorStop(1,newColor);
    ctx.fillStyle = grd;


    ctx.fillText("DVD",xcoord,ycoord);
},15);