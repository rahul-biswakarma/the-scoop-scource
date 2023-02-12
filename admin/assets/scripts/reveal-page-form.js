function revealPageForm(pageIndex) {
	let formSubmitButtonContainer = document.querySelector("#news-submit-button");
	formSubmitButtonContainer.innerHTML = `<button onclick="submitNews(${pageIndex})" id="submit-news-button" class="add-news-button">Submit</button>`;

	document.getElementById("editor-header-page-no").innerText = `Page ${
		pageIndex + 1
	}`;
	document.querySelector(".admin-main-right-container").style.display = "block";

	document.getElementById(
		"add-news-button-container"
	).innerHTML = `<button id="add-news-button" onclick="addNews(event,${pageIndex})" class="add-news-button">Add News</button>`;

	if (newsPaper[pageIndex] && newsPaper[pageIndex].news)
		renderAccordion(pageIndex, "accordion-container");
}
