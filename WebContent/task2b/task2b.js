var dom, x, y, startx, starty, extremex, extremey, incrx = 1, incry = 1;
finalx = 500, finaly = 500;
var direction = 1;

function initText() {
	dom = document.getElementById('box').style;
	/* Get the current position of the text */

	var x = 0;
	var y = 0;
	startx = x;
	starty = y;
	extremex = finalx;
	extremey = finaly;

	window.onclick = changeDirection;
	/* Call the function that moves it */
	moveText(x, y);
}/** * end of function initText */

function changeDirection() {
	if (direction == 1) {
		direction = 0;
	} else {
		direction = 1;
	}
}
function moveText(x, y) {
	//This part is totally different for the task2a
	if (direction == 1) {
		x = x + incrx;
		if ((x == extremex)) {

			incrx = -incrx;
			if (incrx == -1) {
				extremex = startx;
			} else {
				extremex = finalx;
			}
		}
	} else {
		y = y + incry;
		if ((y == extremey)) {

			incry = -incry;
			if (incry == -1) {
				extremey = starty;
			} else {
				extremey = finaly;
			}
		}
	}
	dom.left = x + "px";
	dom.top = y + "px";
	/* Recursive call, after a 1-millisecond delay */
	setTimeout("moveText(" + x + ", " + y + ")", 1);

}
