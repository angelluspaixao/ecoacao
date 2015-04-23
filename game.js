var Game = function(level)
{
	this.count = 0;

	this.name = ['Men','Mai','Equ','Sum','Sub','Mul','Div','Rad','Pot'];
	
	this.bg = new Array();
	
	this.bg[1] = new Image();
	this.bg[1].src = 'Images/bg_fase1.png';
	
	this.bg[2] = new Image();
	this.bg[2].src = 'Images/bg_fase2.png';
	
	this.bg[3] = new Image();
	this.bg[3].src = 'Images/bg_fase3.png';
	
	this.bg[4] = new Image();
	this.bg[4].src = 'Images/bg_fase4.png';

	this.obj = new Array();
	
	this.obj[0] = new Image();
	this.obj[0].src = 'Images/PMen.png';
	
	this.obj[1] = new Image();
	this.obj[1].src = 'Images/PMai.png';
	
	this.obj[2] = new Image();
	this.obj[2].src = 'Images/PEqu.png';
	
	this.obj[3] = new Image();
	this.obj[3].src = 'Images/PSum.png';
	
	this.obj[4] = new Image();
	this.obj[4].src = 'Images/PSub.png';
	
	this.obj[5] = new Image();
	this.obj[5].src = 'Images/PMul.png';
	
	this.obj[6] = new Image();
	this.obj[6].src = 'Images/PDiv.png';
	
	this.obj[7] = new Image();
	this.obj[7].src = 'Images/PRad.png';
	
	this.obj[8] = new Image();
	this.obj[8].src = 'Images/PPot.png';
	
	this.rnd = 0;
	
	this.imageManager = new ImageManager(level, 14);
	this.player = new Player(this.obj[this.rnd],this.name[this.rnd],150,50,50,80);
	
	sceneManager.keyLeft = false;
	sceneManager.keyRight = false;
	
	this.update = function()
	{
		this.count++;
		
		if(this.count % 120 == 0)
		{
			this.count = 0;
			this.rnd = Math.floor(Math.random()* (2 * level + 1));
			console.log("PLAYER NAME: " + this.name[this.rnd]);
		}
	
		if (this.imageManager.num_images >= this.imageManager.NUM_MAX)
		{
			console.log("--- FASE " + level +" ---");
			
			sceneManager.changeScene(0);
			this.drawBG(level);
		}
		
		this.player.update(this.obj[this.rnd]);
		this.player.updateName(this.name[this.rnd]);
		this.imageManager.update();
		
		collisionManager.player_vs_screen(this.player);
		collisionManager.images_vs_screen(this.imageManager.images);
		collisionManager.player_vs_images(this.player, this.imageManager.images);
	}
	
	this.drawBG = function(level)
	{
		graphics.drawImages(this.bg[level],0,0,800,600);
	}
	
	this.draw = function()
	{
		graphics.clear();
		
		this.drawBG(level);
		this.player.draw();
		this.imageManager.draw();
	}
}
