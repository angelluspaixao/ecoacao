var ImageManager = function(level)
{	
	this.count = 79;
	
	this.num_images = 0;
	this.NUM_MAX = 20 * level;
	
	var pos;
	var width = 200;
	var height = 75;
	
	var bar0Ready = false;
	var bar1Ready = false;
	var bar2Ready = false;
	var bar3Ready = false;
	var bar4Ready = false;
	var bar5Ready = false;
	var bar6Ready = false;
	var bar7Ready = false;
	var bar8Ready = false;	
	
	this.name = ["Men","Mai","Equ","Sum","Sub","Mul","Div","Rad","Pot"];
	
	this.images = new Array();
	this.bars = new Array();
	
	this.bars[0] = new Image();
	this.bars[0].src = 'Images/Men.png';
	this.bars[0].onload = function(){bar0Ready = true;};
	
	this.bars[1] = new Image();
	this.bars[1].src = 'Images/Mai.png';
	this.bars[1].onload = function(){bar1Ready = true;};
	
	this.bars[2] = new Image();
	this.bars[2].src = 'Images/Equ.png';
	this.bars[2].onload = function(){bar2Ready = true;};
	
	this.bars[3] = new Image();
	this.bars[3].src = 'Images/Sum.png';
	this.bars[3].onload = function(){bar3Ready = true;};
	
	this.bars[4] = new Image();
	this.bars[4].src = 'Images/Sub.png';
	this.bars[4].onload = function(){bar4Ready = true;};
	
	this.bars[5] = new Image();
	this.bars[5].src = 'Images/Mul.png';
	this.bars[5].onload = function(){bar5Ready = true;};
	
	this.bars[6] = new Image();
	this.bars[6].src = 'Images/Div.png';
	this.bars[6].onload = function(){bar6Ready = true;};
	
	this.bars[7] = new Image();
	this.bars[7].src = 'Images/Rad.png';
	this.bars[7].onload = function(){bar7Ready = true;};
	
	this.bars[8] = new Image();
	this.bars[8].src = 'Images/Pot.png';
	this.bars[8].onload = function(){bar8Ready = true;};

	this.randPosX;
	
	this.update = function()
	{
		this.count++;
		if (this.count % 80 == 0)
		{
			this.count = 0;
			if(bar0Ready && bar1Ready && bar2Ready && bar3Ready && bar4Ready && bar5Ready && bar5Ready && bar6Ready && bar7Ready && bar8Ready)
			{
				rnd = Math.floor(Math.random()* (2 * level + 1));
				
				randPosX = Math.floor(Math.random()* 400);
				
				this.images.push(new Images(
								this.bars[rnd],
								this.name[rnd],
								randPosX + width,
								650,
								width,
								height));
				this.num_images++;
			}
		}
		
		for (var i = 0; i < this.images.length; i++)
		{
			this.images[i].update();
		}
	}

	this.draw = function()
	{
		for (var i = 0; i < this.images.length; i++)
		{
			this.images[i].draw();
		}
	}	
}
