let x = 0;
let y = 0;
let easing = 0.05;
let angle = 0.0;
let r = 200;


function setup()
{
	createCanvas(600, 600);
    background(200);
}

function draw()
{
    stroke(255-angle);
let x1= width/2 + cos(angle)*(r-angle);
let y1= height/2 + sin(angle)*(r-angle);
line(width/2, height/2, x1, y1);
angle += 0.01; 

    arc(130, 70,120, 60, radians(40), TWO_PI);
    bezier(50, 200, 300, 500, 90, 10, 220, 90);

    
let targetX = mouseX;
let targetY = mouseY;
    x += (targetX -x)* easing;
    y += (targetY -y)* easing;
    ellipse(x ,y, 30, 30);


}
