var Button = function(x,y,w,h,image)
{
  this.go = new GameObject()x,y,w,h;
  this.img = image;
  
  this.draw = function()
  {
    graphics.ctx.save();
    graphics.drawImages(this.img,this.go.x,tgis.go.y,this.go.w,this.go.h);
    graphics.ctx.restore();
  }
}
