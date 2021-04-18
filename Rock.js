class Rock
{
    constructor(x,y,width,height,imgName)
    {
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;
        var options={
            isStatic:false
        }
        this.image=loadImage(imgName);
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.body);
    }
    display()
    {
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
    }
};