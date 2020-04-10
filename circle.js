class Circle{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,25,options);
        
        this.width = width;
        this.height = height; 
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        ///push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        ellipseMode(CENTER);
        fill(218,66,87)
        ellipse(pos.x,pos.y,50);
       // pop();
      }
}