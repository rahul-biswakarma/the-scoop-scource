function deletePage(e, pageIndex) {
	e.stopPropagation();
	let updateNewsPaper = newsPaper.filter((data, index) => {
		return pageIndex !== index;
	});

	newsPaper = updateNewsPaper;
	localStorage.setItem("newsPaper", JSON.stringify(newsPaper));
	updatePagesOptionContainer();
	revealPageForm(pageIndex - 1);
}
