var i = 0;

function init() {
	i = 0;
	loadXMLDoc("task5.xml");
}

function previous() {
	i--;
	loadXMLDoc('task5.xml');
}
function next() {
	i++;
	loadXMLDoc('task5.xml');
}

function loadXMLDoc(url) {
	var xmlhttp;
	var txt, x, xx;
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			txt = "<table border='1'><tr><th>Title</th><th>Author</th><th>Price</th></tr>";
			x = xmlhttp.responseXML.documentElement
					.getElementsByTagName("book");
			if (i > x.length - 1) {
				i = 0;
			}
			if (i < 0) {
				i = x.length - 1;
			}
			txt = txt + "<tr>";
			xx = x[i].getElementsByTagName("title");
			{
				try {
					txt = txt + "<td>" + xx[0].firstChild.nodeValue + "</td>";
				} catch (er) {
					txt = txt + "<td> </td>";
				}
			}
			xx = x[i].getElementsByTagName("author");
			{
				try {
					txt = txt + "<td>" + xx[0].firstChild.nodeValue + "</td>";
				} catch (er) {
					txt = txt + "<td> </td>";
				}
			}
			xx = x[i].getElementsByTagName("price");
			{
				try {
					txt = txt + "<td>" + xx[0].firstChild.nodeValue + "</td>";
				} catch (er) {
					txt = txt + "<td> </td>";
				}
			}
			txt = txt + "</table>";
			document.getElementById('info').innerHTML = txt;
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}
