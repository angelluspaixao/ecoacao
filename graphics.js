var Graphics = function()
{
	this.canvas = document.getElementById("myCanvas");
	this.ctx    = this.canvas.getContext("2d");
	
	this.clear = function()
	{
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
		this.ctx.fillStyle = "white";
	}

	this.drawText = function(text,x,y,font,color)
	{
		this.ctx.fillStyle = color;
		this.ctx.font = font;
		this.ctx.fillText(text,x,y);	
	}
	
	this.drawRect = function(x,y,w,h,color)
	{
		this.ctx.fillStyle = color;
		this.ctx.fillRect(x,y,w,h);
	}
	
	this.drawImages = function(img,x,y,w,h)
	{
		this.ctx.drawImage(img,x,y,w,h);
	}
}

var graphics = new Graphics();
