class Bird extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("istockphoto-519187376-612x612-removebg-preview");
    }
  
    display() {
      super.display();
    }
  }