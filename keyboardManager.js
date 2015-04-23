var KeyboardManager = function()
{
	this.keydown = function(e)
	{
		switch (e.keyCode)
		{
			case 37:
			if (sceneManager.currentScene == "game")
			{
				sceneManager.keyLeft = true;
			}
			break;		
				
			case 39:
			if (sceneManager.currentScene == "game")
			{
				sceneManager.keyRight = true;
			}
			break;					
		}
	}
	
	this.keyup = function(e)
	{
		switch (e.keyCode)
		{				
			case 37:
			if (sceneManager.currentScene == "game")
			{
				sceneManager.keyLeft = false;
			}
			break;					
				
			case 39:
			if (sceneManager.currentScene == "game")
			{
				sceneManager.keyRight = false;
			}
			break;						
		}		
	}
}

var keyboard = new KeyboardManager();

document.addEventListener('keydown', keyboard.keydown, true);	
document.addEventListener('keyup', keyboard.keyup, true);
