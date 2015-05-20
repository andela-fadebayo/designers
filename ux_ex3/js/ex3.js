document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		var hidden_menu = document.getElementById("overlay");
		
		document.getElementById("menu-click").addEventListener("click", function (event) {
			hidden_menu.style.display="block";
		});

		document.getElementById("close").addEventListener("click", function (event) {
			hidden_menu.style.display="none";
		});
	}
}