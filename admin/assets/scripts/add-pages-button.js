function addPagesButton() {
	let totalPagesCount = newsPaper.length;
	if (totalPagesCount === 0) {
		let page = {
			info: {
				currentPage: totalPagesCount + 1,
				totalPagesCount: totalPagesCount + 1,
				date: "Feb 20, 2023",
			},
			breakingNews: {},
			news: [],
		};
		newsPaper.push(page);
	} else {
		let page = {
			info: {
				currentPage: totalPagesCount + 1,
				totalPagesCount: totalPagesCount + 1,
				date: "Feb 20, 2023",
			},
			news: [],
		};
		newsPaper.push(page);
	}
}

function updatePagesOptionContainer() {
	let totalPages = newsPaper.length;
	let pageContainer = document.querySelector(".pages-container");

	pageContainer.innerHTML = "";

	for (let page = 0; page < totalPages; page++) {
		pageContainer.innerHTML += `<button class="page-button" onclick="revealPageForm(${page})"><span>Page ${
			page + 1
		}</span> <span onclick="deletePage(event, ${page})" class="material-symbols-outlined accordion-delete-icon">
		delete
	</span></button>`;
	}
}

document.getElementById("add-pages-button").addEventListener("click", () => {
	addPagesButton();
	updatePagesOptionContainer();
});
