function loadXMLDoc(url) {
	var xmlhttp;
	var txt, x, xx, i;
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			txt = "<table border='1'><tr><th>Title</th><th>Artist</th><th>Album</th><th>Year</th></tr>";
			x = xmlhttp.responseXML.documentElement
					.getElementsByTagName("music");
			for (i = 0; i < x.length; i++) {
				txt = txt + "<tr>";
				xx = x[i].getElementsByTagName("title");
				{
					try {
						txt = txt + "<td>" + xx[0].firstChild.nodeValue
								+ "</td>";
					} catch (er) {
						txt = txt + "<td> </td>";
					}
				}
				xx = x[i].getElementsByTagName("artist");
				{
					try {
						txt = txt + "<td>" + xx[0].firstChild.nodeValue
								+ "</td>";
					} catch (er) {
						txt = txt + "<td> </td>";
					}
				}
				xx = x[i].getElementsByTagName("album");
				{
					try {
						txt = txt + "<td>" + xx[0].firstChild.nodeValue
								+ "</td>";
					} catch (er) {
						txt = txt + "<td> </td>";
					}
				}
				xx = x[i].getElementsByTagName("year");
				{
					try {
						txt = txt + "<td>" + xx[0].firstChild.nodeValue
								+ "</td>";
					} catch (er) {
						txt = txt + "<td> </td>";
					}
				}
				txt = txt + "</tr>";
			}
			txt = txt + "</table>";
			document.getElementById('info').innerHTML = txt;
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}
