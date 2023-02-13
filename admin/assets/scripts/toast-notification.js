function createToast(message, container = "toast-notification-container") {
	let time = Date.now();

	let TOAST_CONTAINER = document.getElementById(container);
	let fragment = document.createDocumentFragment();
	let divElement = document.createElement("div");
	divElement.innerText = message;
	divElement.classList.add("toast-message");
	divElement.classList.add(`toast-${time}`);
	fragment.appendChild(divElement);
	TOAST_CONTAINER.appendChild(fragment);
	// setTimeout(() => {
	// 	document.querySelector(`.toast-${time}`).remove();
	// }, 3000);
}
