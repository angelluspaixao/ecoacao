var Opening = function()
{
	var bg = new Image();
	bg.src = 'Images/bgMenu.png';
	
	var btPlay = new Image();
	btPlay.src = 'Images/bt_jogar.png';
	this.btPlay = new Button(150,210,137,187,btPlay);
	
	var btCredits = new Image();
	btCredits.src = 'Images/bt_creditos.png';
	this.btCredits = new Button(260,360,115,157,btCredits);
	
	var btTutorial = new Image();
	btTutorial.src = 'Images/bt_tutorial.png';
	this.btTutorial = new Button(70,360,115,157,btTutorial);
	
	this.update = function()
	{
		if(collisionManager.mouse_vs_button(this.btPlay) && mouse_press)
		{
			console.log("JOOJ");
			sceneManager.changeScene(0);			
		}
		
		if(collisionManager.mouse_vs_button(this.btCredits) && mouse_press)
		{
			console.log("WHO FEZ");
			sceneManager.changeScene(1);			
		}
		
		if(collisionManager.mouse_vs_button(this.btTutorial) && mouse_press)
		{
			console.log("HOW JOOJA");
			sceneManager.changeScene(2);			
		}
	}
	
	this.draw = function()
	{
		graphics.clear();
		
		graphics.drawImages(bg,0,0,800,600);
		this.btPlay.draw();
		this.btCredits.draw();
		this.btTutorial.draw();
	}
}
