/**
 * 
 */
var images = ["images/airplane1.png","images/airplane2.png", "images/airplane3.png"];
var links = ["https://www.google.de/", "https://www.google.com.br/", "https://www.google.com.au"];
var index = 0;

function init(){
	change();
}

function change(){
	anchor = document.getElementById("myAnchor");
	img = document.getElementById("myImg");
	
	anchor.href = links[index];
	img.src = images[index];
	
	index++;
	if (index>2){
		index=0;
	}
	setTimeout("change()", 2000);
}

