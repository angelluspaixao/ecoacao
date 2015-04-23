var Images = function(img,name,x,y,w,h)
{
	this.go = new GameObject(x,y,w,h);
	
	this.img = img;
	
	this.name = name;
	
	this.speedy = -2;	
	
	this.getInfo = function()
	{
		this.go.getInfo("image");
	}
	
	this.update = function()
	{		
		this.go.y += this.speedy;
	}
	
	this.draw = function()
	{
		graphics.ctx.save();
		
		graphics.drawImages(this.img,this.go.x,this.go.y,this.go.w,this.go.h);
		
		graphics.ctx.restore();
	}
}
