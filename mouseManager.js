var mouse_x;
var mouse_y;	
var mouse_press = false;

function _mouseDown(e) 
{
	if(e.button == 0)
	{
		mouse_press = true;
	}
}

function _mouseMove(e) 
{
	mouse_x = e.x;
	mouse_y = e.y;
}

function _mouseUp(e) 
{
	if(e.button == 0)
	{
		mouse_press = false;
	}
}

document.addEventListener('mousedown', _mouseDown, false);
document.addEventListener('mouseup', _mouseUp, false);
document.addEventListener('mousemove', _mouseMove, false);
