var link = document.querySelector(".write-to-us");

var popup = document.querySelector(".modal");
var close = popup.querySelector(".button-close");

var form = popup.querySelector(".write-us-form");
			 
	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
    	
	});

	close.addEventListener("click", function (evt) {
    	evt.preventDefault();
    	popup.classList.remove("modal-show");
 	});

