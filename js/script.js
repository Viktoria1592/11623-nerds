var link = document.querySelector(".write-to-us");
var popup = document.querySelector(".modal");
var close = document.querySelector(".button-close");
var form = popup.querySelector("form");
var yourname = popup.querySelector("[name=your_name]");		 
var mail = popup.querySelector("[name=mail]");
var text = popup.querySelector("[name=text]");
var storage = localStorage.getItem("yourname");
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if(storage){
		yourname.value=storage;
		mail.focus();
	} 	
	else {
		yourname.focus();  
	} 	
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});
form.addEventListener("submit", function(evt) {
	if(!yourname.value || !mail.value || !text.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
      	popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	}	
	else {
		localStorage.setItem("yourname", yourname.value);
	}
});
window.addEventListener("keydown", function(evt) {
	if(evt.keyCode === 27){
		if(popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});