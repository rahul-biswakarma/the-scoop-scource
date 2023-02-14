window.addEventListener("DOMContentLoaded", () => {
	let BODY_ELEMENT = document.querySelector("body");
	BODY_ELEMENT.innerHTML += newsPaper.reduce((acc, page) => {
		acc += generatePage(page);
		return acc;
	}, "");

	if (
		localStorage.getItem("previewPageNo") &&
		localStorage.getItem("previewPageNo") !== null &&
		localStorage.getItem("previewPageNo") !== undefined
	) {
		document.getElementById(
			`page-${localStorage.getItem("previewPageNo")}`
		).style.display = "block";
		document.getElementById(`page-0`).style.display = "none";
	}
});
