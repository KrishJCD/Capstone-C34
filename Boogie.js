class Boogie
{
    constructor(x,y,width,height)
    {
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;
        this.image=loadImage("images/coach.png");
        var options={
            isStatic:false
        }
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.body);
        Matter.Body.setMass(this.body,this.body.mass*4);
    }
    display()
    {
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
    }
};