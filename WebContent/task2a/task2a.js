var dom, x, y, startx, starty, extremex, extremey, incr = 1, finalx = 500, finaly = 300;

function initText() {
	dom = document.getElementById('box').style;
	var x = dom.left;
	var y = dom.top;
	startx = x;
	starty = y;
	extremex = finalx;
	extremey = finaly;

	/* Call the function that moves it */

	moveText(x);
}/** * end of function initText */

// ************************************************* //
// A function to move the text from its original
// position to (finalx) and back to (startx) after this
function moveText(x) {
	x = x + incr;
	
	if ((x == extremex)) {

		incr = -incr;
		if (incr == -1) {
			extremex = startx;
		}else {
			extremex=finalx;
		}
	}
	dom.left = x + "px";
	/* Recursive call, after a 1-millisecond delay */
	
	setTimeout("moveText(" + x + ")", 1);

}
