var Player = function(img,name,x,y,w,h)
{
	this.go = new GameObject(x,y,w,h);
	
	this.img = img;
	
	this.name = name;
	
	this.speedx = 6;
	this.GRAVITY = 0.5;
	this.speedy = this.GRAVITY;
	
	this.getInfo = function()
	{
		this.go.getInfo("player");
	}
	
	this.update = function(img)
	{
		this.img = img;
		
		if (sceneManager.keyLeft == true)
		{
			this.go.x -= this.speedx;
		}

		if (sceneManager.keyRight == true)
		{
			this.go.x += this.speedx;
		}
		
		this.go.y += this.speedy;
	}
	
	this.updateName = function(name)
	{
		this.name = name;
	}
	
	this.draw = function()
	{
		graphics.ctx.save();		
		
		graphics.drawImages(this.img,this.go.x,this.go.y,this.go.w,this.go.h);
		
		graphics.ctx.restore();
	}
}
