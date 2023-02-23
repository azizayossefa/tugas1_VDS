function setup() {
    // put drawing code here
    createCanvas(400,400)
    background(128,4,0)
    
    y=123;
    j=0;
}
   function draw() {
    // put drawing code here

    //body
    fill(25, 25, 112);
    ellipse(200, 190, 100, 112);

    fill(25, 25, 112);
    ellipse(200, 190, 115, 112);

    noStroke();
    fill(255, 255, 255);
    ellipse(200, 190, 85, 112);

    //head
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

    //mounth
    fill(255, 234, 0);
    triangle(220, 140, 200, 160, 180, 140);

    //feet
    fill(255, 162, 0);
    triangle(140, 255, 177, 235, 177, 255);

    triangle(260, 255, 225, 235, 225, 255);


    var y = 123 + 30* Math.sin(PI/10*j)
    j+=1
    fill(0, 0, 0);
    ellipse(193, y, 10, 10);

    fill(0, 0, 0);
    ellipse(203, y, 10, 10);

    

}