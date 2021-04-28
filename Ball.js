class Ball{
    constructor(x,y,diameter){
        var options ={
            density: 1,
            frictionAir: 0.01
        }
        this.body = Bodies.circle (x, y, diameter, options);
        this.diameter = diameter
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(0, 0, this.diameter, this.diameter);
        pop();
    }
    
}