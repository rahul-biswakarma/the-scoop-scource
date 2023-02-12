function editNews(e, pageIndex, newsIndex) {
	e.preventDefault();
	let headline = document.getElementById(`headline-input-${newsIndex}`).value;
	let content = document.getElementById(`news-content-${newsIndex}`).value;
	let imgUrl = document.getElementById(`imgurl-input-${newsIndex}`).value;
	let newsArticle = {
		headline: headline,
		content: content,
		imgUrl: imgUrl,
	};
	newsPaper[pageIndex].news[newsIndex] = newsArticle;
	renderAccordion(pageIndex, "accordion-container");
}
