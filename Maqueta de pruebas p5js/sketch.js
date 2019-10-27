let x = 0;
let y = 0;
let easing = 0.05;

function setup()
{
	createCanvas(600, 600);
    background(200);
}

function draw()
{
    arc(130, 70,120, 60, radians(40), TWO_PI);
    bezier(50, 200, 300, 500, 90, 10, 220, 90);
    
let targetX = mouseX;
let targetY = mouseY;
    x += (targetX -x)* easing;
    y += (targetY -y)* easing;
    ellipse(x ,y, 30, 30);
}