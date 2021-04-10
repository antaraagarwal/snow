class Snow {
    constructor(x, y) {
      var options = {
         restitution :0,
         friction :0,
     }
     this.body = Bodies.circle(x, y, 5, width, height, options);
     this.image = loadImage("snow4.webp");
     World.add(world, this.body);
    
 }
 
     update(){
         if (this.rain.position.y > height) {
             Matter.body.setPosition(this.rain, {x:random (0,400), y:random(0,400)})
             }
     }
    
     
     display() {
     fill("blue")
     imageMode(rect)
     image(this.body.position.x, this.body.position.y, this.radius)
     }
 }