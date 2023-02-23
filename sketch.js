function setup() {
    // put drawing code here
    createCanvas(800,400)
    background(128,4,0)
    
    y=100;
    j=0;
}
   function draw() {
    // put drawing code here
    line(400, 400, 400,0)

    //body kanvas kiri
    fill(25, 25, 112);
    ellipse(200, 190, 100, 112);

    fill(25, 25, 112);
    ellipse(200, 190, 115, 112);

    noStroke();
    fill(255, 255, 255);
    ellipse(200, 190, 85, 112);
    
    //body kanvas kanan
    fill(25, 25, 112);
    ellipse(600, 190, 100, 112);

    fill(25, 25, 112);
    ellipse(600, 190, 115, 112);

    noStroke();
    fill(255, 255, 255);
    ellipse(600, 190, 85, 112);

    //head kanvas kiri
    noStroke();
    fill(25, 25, 112);
    ellipse(200, 123, 75, 75);

    fill(255, 255, 255);
    ellipse(187, 123, 25, 25);

    fill(255, 255, 255);
    ellipse(210, 123, 25, 25);

    fill(0, 0, 0);
    ellipse(193, 123, 10, 10);

    fill(0, 0, 0);
    ellipse(203, 123, 10, 10);

    //head kanvas kanan
    noStroke();
    fill(25, 25, 112);
    ellipse(600, 123, 75, 75);

    fill(255, 255, 255);
    ellipse(587, 123, 25, 25);

    fill(255, 255, 255);
    ellipse(610, 123, 25, 25);

    fill(0, 0, 0);
    ellipse(593, 123, 10, 10);

    fill(0, 0, 0);
    ellipse(603, 123, 10, 10);


    //mounth kanvas kiri
    fill(255, 234, 0);
    triangle(220, 140, 200, 160, 180, 140);

    //mounth kanvas kanan
    fill(255, 234, 0);
    triangle(620, 140, 600, 160, 580, 140);

    //feet kanvas kiri
    fill(255, 162, 0);
    triangle(140, 255, 177, 235, 177, 255);

    triangle(260, 255, 225, 235, 225, 255);

    //feet kanvas kanan
    fill(255, 162, 0);
    triangle(540, 255, 577, 235, 577, 255);

    triangle(660, 255, 625, 235, 625, 255);


    var y = 123 + 30* Math.sin(PI/10*j)
    j+=1
    fill(0, 0, 0);
    ellipse(593, y, 10, 10);

    fill(0, 0, 0);
    ellipse(603, y, 10, 10);

}