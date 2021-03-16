class box{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
			restitution:1			
			}
		this.x=x;
		this.y=y;
		this.w=w
        this.h=h
		this.image=loadImage("package.png")
		
      
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;
			var angle=this.body.angle		

			push()
			translate(groundPos.x, groundPos.y);
            imageMode(CENTER)
            rotate(angle)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.w, this.h);
			pop()
			
    }
}
