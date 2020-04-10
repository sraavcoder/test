class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.3,
            length: 150
        }
        this.pointB = pointB;
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

   

    display(){
    
        var pointA = this.string.bodyA.position;
        var pointB = this.string.pointB;
        strokeWeight(6);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    
      
    }
    
}