var topp = "airplane6";
var images = [ "airplane1", "airplane2", "airplane3", "airplane4", "airplane5",
		"airplane6" ];
// Vectors that store the dimensions used to resize the image in the top and
// produce the effect of an animation
var dimensionsW = [ "640px", "655px", "670px", "685px", "700px", "715px",
		"730px", "745px", "760px", "775px", "790px", "805px", "820px", "835px",
		"850px" ];
var dimensionsH = [ "425px", "435px", "445px", "455px", "465px", "475px",
		"485px", "495px", "505px", "515px", "525px", "535px", "545px", "555px",
		"565px" ];
var index = 0;
var inc = 1;

function init() {

	for (var int = 0; int < images.length; int++) {
		img = document.getElementById(images[int]);
		img.style.width = dimensionsW[0];
		img.style.height = dimensionsH[0];
	}
	animate();

}

// Function that changes gradually the size of the image in the top of the stack
function animate() {
	for (var int = 0; int < images.length; int++) {
		if (images[int] != topp) {
			img = document.getElementById(images[int]);
			img.style.width = dimensionsW[0];
			img.style.height = dimensionsH[0];
		}
	}
	img = document.getElementById(topp);

	// Two vectors pre-defined are used to change the values of the dimension of
	// the image
	img.style.width = dimensionsW[index];
	img.style.height = dimensionsH[index];

	index += inc;

	// This condition is responsible to make the image stretch and shrink
	// continuously
	if (index == 15 || index == -1) {
		inc = -inc;
	}

	setTimeout("animate()", 30);
}

function toTop(newTop) {

	var domTop = document.getElementById(topp).style;
	var domNew = document.getElementById(newTop).style;

	domTop.zIndex = "0";
	domNew.zIndex = "10";
	topp = newTop;
}
