var Credits = function()
{
	var bg = new Image();
	bg.src = 'Images/bgCreditos.jpg';
	
	var btBack = new Image();
	btBack.src = 'Images/bt_voltar.png';
	this.btBack = new Button(360,500,69,94,btBack);
	
	this.update = function()
	{
			if(collisionManager.mouse_vs_button(this.btBack) && mouse_press)
				{
					console.log("JOOJ");
					sceneManager.changeScene(0);			
				}
	}
	
	this.draw = function()
	{
		graphics.clear();
		
		graphics.drawImages(bg,0,0,800,600);
		this.btBack.draw();
	}
}
