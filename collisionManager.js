var CollisionManager = function()
{	
	this.player_vs_screen = function(player)
	{
		if (player.go.x < 0)
		{	
			player.go.x = 0;
		}
		else if (player.go.x + player.go.w > graphics.canvas.width)
		{	
			player.go.x = graphics.canvas.width - player.go.w;
		}
		
		if (player.go.y + player.go.h < 0 ||
			player.go.y + player.go.h > graphics.canvas.height)
		{
			sceneManager.changeScene(1);
		}		
	}		
	
	this.images_vs_screen = function(images)
	{
		for (var i = 0; i < images.length; i++)
		{
			if (images[i].go.y + images[i].go.h < 0)
			{
				images.splice(i,1);
			}
		}
	}
	
	this.player_vs_images = function(player, images)
	{
		var up = false; 
		
		for (var i = 0; i < images.length; i++)
		{
			if (player.go.x               < images[i].go.x + images[i].go.w &&
				player.go.x + player.go.w > images[i].go.x                  &&
				player.go.y + player.go.h < images[i].go.y + images[i].go.h &&
				player.go.y + player.go.h == images[i].go.y)
			{				
				if(images[i].name == player.name)
				{
					console.log("ACERTOU, ABESTADO!");
					player.go.y = images[i].go.y - player.go.h;
					up = true;
				}				
				
				if(player.name != images[i].name)
				{
					console.log("ERROU!");
					images.splice(i,1);
				}
			}
		}
		
		if (up)
		{
			player.speedy = images[0].speedy;
		}
		else
		{
			player.speedy = player.GRAVITY;
		}
	}

	this.mouse_vs_button = function(button)
	{
		if (mouse_x < button.go.x + button.go.w &&
			mouse_x > button.go.x &&
			mouse_y < button.go.y + button.go.h &&
			mouse_y > button.go.y)
		{
			return true;
		}
			
		else
		{
			return false;
		}
	}
}

var collisionManager = new CollisionManager();
