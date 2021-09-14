class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("download-removebg-preview-removebg-preview.png")
      this.PointB:{x:offsetX:y:offsetY}
      this.width = width;
      this.height = height;
      this.Roof = Constraint.create(options);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };