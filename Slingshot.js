class Slingshot{
    constructor(bodyA,bodyB)
    {
        this.pointB=bodyB;
        var options={
            bodyA:bodyA,
            bodyB:this.pointB,
            stiffness:0.04
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    show()
    {
        var bodyA=this.sling.bodyA.position;
        var bodyB=this.sling.bodyB.position;
        strokeWeight(7);
        line(bodyA.x,bodyA.y,bodyB.x,bodyB.y);
    }
}