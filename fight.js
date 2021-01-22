var circle1;
var circle2;

function startGame() {
    circle1 = new component1(20, 20, "red", 315, 330);
    circle2 = new component2(20, 20, "blue", 345, 330);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 660;
        this.canvas.height = 660;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component1(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX =  Math.random() * 1;
    this.speedY =  Math.random() * 1;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

function component2(width, height, color, x, y) {
    console.log("working");
    this.width = width;
    this.height = height;
    this.speedX =  Math.random() * 1;
    this.speedY =  Math.random() * 1;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

function updateGameArea() {
    myGameArea.clear();
    circle1.newPos();    
    circle1.update();
    circle2.newPos();    
    circle2.update();
}
