function deleteNews(e, newsIndex, pageIndex) {
	e.stopPropagation();
	let updatedNews = localNews.filter((data, index) => {
		return index !== newsIndex;
	});
	localNews = updatedNews;
	if (localNews.length === 0) submitNews(pageIndex);
	renderAccordion(0, localNews, "accordion-container");
}
