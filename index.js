// document.body.onclick = function() {
// 	alert("you have been clicked");
// };

// document.getElementById("myBtn").onclick = function(e) {
// 	e.stopPropagation();
// 	alert("From BTN");
// };

// function listening(e) {
// 	e.stopPropagation();
// 	alert("Listening");
// }
// document.getElementById("myBtn").addEventListener("click", listening);

// console.log(document.querySelector("#myBtn"));

// document.querySelector("form").onsubmit = function(e) {
// 	e.preventDefault();
// 	const usernameInput = document.querySelector("#username");
// 	const usernamePassword = document.querySelector("#password");
// 	document.querySelector("#user-name").textContent = usernameInput.value;
// 	document.querySelector("#user-password").textContent = usernamePassword.value;
// 	usernameInput.value = "";
// 	usernamePassword.value = "";
// };

const createLink = () => {
	const newElement = document.createElement("a");
	const text = document.createTextNode("Let me Google that for you");
	newElement.appendChild(text);
	newElement.setAttribute("href", "https://lmgtfy.com");
	newElement.setAttribute("target", "_blank");
	newElement.setAttribute("class", "made-link");
	document.body.appendChild(newElement);
};

const removeMadeLink = () => {
	const elementToRemove = document.querySelector(".made-link");
	// const parentNode = elementToRemove.parentNode;
	// parentNode.removeChild(elementToRemove);
	elementToRemove.parentNode.removeChild(elementToRemove);
};

document.querySelector(".addLink").addEventListener("click", createLink);
document.querySelector(".removeLink").addEventListener("click", removeMadeLink);
