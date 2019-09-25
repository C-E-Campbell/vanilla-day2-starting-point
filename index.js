document.body.onclick = function() {
	alert("you have been clicked");
};

// document.getElementById("myBtn").onclick = function(e) {
// 	e.stopPropagation();
// 	alert("From BTN");
// };

function listening(e) {
	e.stopPropagation();
	alert("Listening");
}
document.getElementById("myBtn").addEventListener("click", listening);
