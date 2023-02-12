window.addEventListener("DOMContentLoaded", () => {
	let BODY_ELEMENT = document.querySelector("body");
	BODY_ELEMENT.innerHTML += newsPaper.reduce((acc, page) => {
		acc += generatePage(page);
		return acc;
	}, "");
});
