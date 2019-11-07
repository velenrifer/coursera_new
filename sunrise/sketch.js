
// Quetzal vs Witzi
// (138, 43, 226) Purple rain (intenta entenderlo)
// (230, 230, 250) // background

var groundHeight;
var mountain1;
var mountain2;
var tree;
var tree2;
var tree3;
var tree4;
var moon;
var sun;
var darkness;
var x
var y
var darts
var queso
var quetzal
var cloud
var cloud2
var cloud3
var witzi
var witzilon
var pino
var drops = [];

function preload()
{
    queso = loadImage('imagen.png');
    witzi = loadImage('witzi.png');
    
}

function setup()
{
	createCanvas(800, 600);
    console.log(min(0, 600));
    console.log(max(0, 600));
    console.log(random());
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;
    
    for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }

	//initalise the mountain objects with properties to help draw them to the canvas
    
    mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	//initalise the tree object
	tree = {
        trunkPosx: 130, 
        trunkPosy: 400, 
		trunkWidth: 40,
        trunkMiddle: 150,
		trunkHeight: 150,

	};
    
    tree2 = {
        trunkPosx: 500, 
        trunkPosy: 410, 
		trunkWidth: 40,
        trunkMiddle: 520,
		trunkHeight: 150,
        scale: 0.8,
	};
    
        tree3 = {
        trunkPosx: 355, 
        trunkPosy: 390, 
		trunkWidth: 40,
        trunkMiddle: 375,
		trunkHeight: 150,
        scale: 0.5,
	};
    
        tree4 = {
        trunkPosx: 210, 
        trunkPosy: 410, 
		trunkWidth: 40,
        trunkMiddle: 230,
		trunkHeight: 150,

	};
     
        tree5 = {
        trunkPosx: 210, 
        trunkPosy: 410, 
		trunkWidth: 40,
        trunkMiddle: 230,
		trunkHeight: 150,

	};
     

    //initialise the cloud
    cloud = {Pos_x: 40,
             Pos_y: 50,
             Scale: 0.8};
    
    cloud2 = {Pos_x: 40,
             Pos_y: 100,
             Scale: 0.8};
    
    cloud3 = {Pos_x: 40,
             Pos_y: 150,
             Scale: 0.8};
    
    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80
	};
    
    
    //TASK: intialise a moon object with an extra property for brightness

    moon = {
        x: 400,
        y: groundHeight,
        diameter: 80,
        brightness: 200
    }
    
    // el pinche quesito
    
    quetzal = {x: 250,
               y: 300
              }
    
    // el pinche witzi
    
    witzilon = {x: 600,
                y: 300
               }
    
   

	//set the initial darkness
	darkness = 4;

}



function draw()
{
    
	//draw the sky
	background(150, 200, 255);
    
    for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }

	noStroke();    
    // Cloud settings
    
    fill(0, 0, 0, max(0 + mouseX/4));
    ellipse(min(cloud.Pos_x + mouseX), cloud.Pos_y, 50 * cloud.Scale,50 * cloud.Scale);
    
    fill(255,0,0, max(0 + mouseX/4));
    ellipse(min((cloud.Pos_x + 25) + mouseX/random()), cloud.Pos_y, 30 * cloud.Scale, 30 * cloud.Scale);
    ellipse(min((cloud.Pos_x + 40) + mouseX/random()), cloud.Pos_y, 20 * cloud.Scale, 20 * cloud.Scale);
    
        fill(0, 0, 0, raton);
    ellipse(min(cloud2.Pos_x + mouseX/3), cloud2.Pos_y, 50 * cloud2.Scale,50 * cloud2.Scale);
    ellipse(min((cloud2.Pos_x + 25) + mouseX), cloud2.Pos_y, 30 * cloud2.Scale, 30 * cloud2.Scale);
    ellipse(min((cloud2.Pos_x + 40) + mouseX), cloud2.Pos_y, 20 * cloud2.Scale, 20 * cloud2.Scale);
    
        fill(100, 50, 210, raton);
    ellipse(min(cloud3.Pos_x + mouseX/2), cloud3.Pos_y, 50 * cloud3.Scale,50 * cloud3.Scale);
    ellipse(min((cloud3.Pos_x + 25) + mouseX), cloud3.Pos_y, 30 * cloud3.Scale, 30 * cloud3.Scale);
    ellipse(min((cloud3.Pos_x + 40) + mouseX), cloud3.Pos_y, 20 * cloud3.Scale, 20 * cloud3.Scale);
    
    
	//draw the sun
	fill(255, 255, 0);
	ellipse(sun.x, min(sun.y + mouseX/2), sun.diameter);
    
  	//draw the ground and make it green
	fill(70, 200, 0);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
    
    //TASK: You can draw the tree yourself
    
    fill(100,70,45)
    rect(tree.trunkPosx, tree.trunkPosy, tree.trunkWidth, tree.trunkHeight);
    fill(10,150,80);
    beginShape();
    vertex(tree.trunkPosx-50, tree.trunkPosy+50);
    vertex(tree.trunkPosx+90, tree.trunkPosy+50);
    vertex(tree.trunkPosx+90-35, tree.trunkPosy);
    vertex(tree.trunkPosx+90-(35/2), tree.trunkPosy);
    vertex(tree.trunkMiddle+17.5, tree.trunkPosy-50); //167.5
    vertex(tree.trunkPosx+90-35, tree.trunkPosy-50);
    vertex(tree.trunkMiddle, tree.trunkPosy-100);
    vertex(((tree.trunkMiddle-(tree.trunkPosx-50))/2)+tree.trunkPosx-50, tree.trunkPosy-50);
    vertex((tree.trunkMiddle-((((tree.trunkMiddle-(tree.trunkPosx-50))/2)+tree.trunkPosx-50)/2))+((tree.trunkMiddle-(tree.trunkPosx-50))/2), tree.trunkPosy-50);//132.5,350
    vertex(tree.trunkPosx-50+17.5, tree.trunkPosy); //97.5
    vertex(tree.trunkPosx-50+35, tree.trunkPosy);
    endShape();
    console.log(vertex);

        fill(100,70,45)
    rect(tree2.trunkPosx, tree2.trunkPosy, tree2.trunkWidth, tree2.trunkHeight);
    fill(0,200,20);
    stroke(0);
    beginShape();
    vertex(tree2.trunkPosx-50, tree2.trunkPosy+50);
    vertex(tree2.trunkPosx+90, tree2.trunkPosy+50);
    vertex(tree2.trunkPosx+55, tree2.trunkPosy);
    vertex(tree2.trunkPosx+72.5, tree2.trunkPosy);
    vertex(((17.5))+tree2.trunkMiddle, tree2.trunkPosy-50); //167.5
    vertex(tree2.trunkPosx+55, tree2.trunkPosy-50);
    vertex(tree2.trunkMiddle, tree2.trunkPosy-100);
    vertex(((tree2.trunkMiddle-(tree2.trunkPosx-50))/2)+tree2.trunkPosx-50, tree2.trunkPosy-50);
    vertex((tree2.trunkMiddle/3.65-((tree.trunkMiddle/2-tree.trunkPosx-50/2)/2)+tree.trunkPosx+50)+((tree.trunkMiddle/2-tree.trunkPosx-50/2)/2)+tree.trunkPosx+50,tree2.trunkPosy-50);//check this...
    vertex(tree2.trunkPosx-32.5, tree2.trunkPosy); //97.5
    vertex(tree2.trunkPosx-15, tree2.trunkPosy);tree2.trunkPosx-50, tree2.trunkPosy+50
    vertex(tree2.trunkPosx-50, tree2.trunkPosy+50)
    endShape();
    noStroke();
    console.log(mouseX, mouseY);
    
      fill(100,70,45)
      rect(tree3.trunkPosx, tree3.trunkPosy, tree3.trunkWidth, tree3.trunkHeight);
    fill(100,140,110);
    stroke(0);
    beginShape();
    vertex(tree3.trunkPosx-50, tree3.trunkPosy+50);
    vertex(tree3.trunkPosx+90, tree3.trunkPosy+50);
    vertex(tree3.trunkPosx+55, tree3.trunkPosy);
    vertex(tree3.trunkPosx+72.5, tree3.trunkPosy);
    vertex(((17.5))+tree3.trunkMiddle, tree3.trunkPosy-50); //167.5
    vertex(tree3.trunkPosx+55, tree3.trunkPosy-50);
    vertex(tree3.trunkMiddle, tree3.trunkPosy-100);
    vertex(((tree3.trunkMiddle-(tree3.trunkPosx-50))/2)+tree3.trunkPosx-50, tree3.trunkPosy-50);
    vertex((tree3.trunkMiddle/5+((tree.trunkMiddle/2-tree.trunkPosx-50/2)/2)+tree.trunkPosx+50)+((tree.trunkMiddle/2-tree.trunkPosx-50/2)/2)+tree.trunkPosx+50,tree3.trunkPosy-50);//check this
    vertex(tree3.trunkPosx-32.5, tree3.trunkPosy); //97.5
    vertex(tree3.trunkPosx-15, tree3.trunkPosy);tree3.trunkPosx-50, tree3.trunkPosy+50
    vertex(tree3.trunkPosx-50, tree3.trunkPosy+50)
    endShape();
    noStroke();
    console.log(mouseX, mouseY);
    

    
      fill(100,70,45)
    rect(tree4.trunkPosx, tree4.trunkPosy, tree4.trunkWidth, tree4.trunkHeight);
    fill(0,200,20);
    stroke(0);
    beginShape();
    vertex(tree4.trunkPosx-50, tree4.trunkPosy+50);
    vertex(tree4.trunkPosx+90, tree4.trunkPosy+50);
    vertex(tree4.trunkPosx+55, tree4.trunkPosy);
    vertex(tree4.trunkPosx+72.5, tree4.trunkPosy);
    vertex(((17.5))+tree4.trunkMiddle, tree4.trunkPosy-50); //167.5
    vertex(tree4.trunkPosx+55, tree4.trunkPosy-50);
    vertex(tree4.trunkMiddle, tree4.trunkPosy-100);
    vertex(((tree4.trunkMiddle-(tree4.trunkPosx-50))/2)+tree4.trunkPosx-50, tree4.trunkPosy-50);
    vertex(((tree4.trunkMiddle/1.6-tree4.trunkPosx-50/2)/2)+tree4.trunkPosx+50,tree4.trunkPosy-50);//check this
    vertex(tree4.trunkPosx-32.5, tree4.trunkPosy); //97.5
    vertex(tree4.trunkPosx-15, tree4.trunkPosy);tree4.trunkPosx-50, tree4.trunkPosy+50
    vertex(tree4.trunkPosx-50, tree4.trunkPosy+50)
    endShape();
    noStroke();
    console.log(mouseX, mouseY);
    
    //TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
	//Use the alpha value of fill to determine how dark to make it 
    var raton
    raton = map(mouseX, 0, 800, 0, 230);
    raton = constrain(raton, 0, 230);
    fill(0, 0, 0, raton);
    rect(0, 0, width, height);
    //TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour
    //draw the moon
    fill(200, 200, 200, max(0 + mouseX/4));
    ellipse(moon.x, max((mountain2.height + 40) - mouseX/5.5), moon.diameter);
    

      if (mouseIsPressed) {      
    image(queso, min(mouseX, 400), mouseY - 100);
    fill(255,0,0, 255);
    ellipse(min((cloud.Pos_x + 25) + mouseX/random()), mouseY + 10, 30 * cloud.Scale, 30 * cloud.Scale);
    ellipse(min((cloud.Pos_x + 40) + mouseX/random()), mouseY, 20 * cloud.Scale, 20 * cloud.Scale);
    
    image(witzi, max(witzilon.x - mouseX, 400), mouseY - 100); 
    fill(0,0,255, 255);
    ellipse(max(witzilon.x - mouseX/random()), mouseY - 40, 30 * cloud.Scale, 30 * cloud.Scale);
    ellipse(max((cloud.Pos_x - 800) - mouseX/random()), mouseY - 70, 20 * cloud.Scale, 20 * cloud.Scale);
    
          
  } else {image(queso, quetzal.x, quetzal.y); 
          image(witzi, witzilon.x, witzilon.y);
                      fill(100,70,45);
         
         }

  print(mouseIsPressed);
}
    










