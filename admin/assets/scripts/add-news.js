function addNews(e, pageIndex) {
	e.preventDefault();
	let headline = document.getElementById("headline-input").value;
	let content = document.getElementById("news-content").value;
	let imgUrl = document.getElementById("imgurl-input").value;
	let newsArticle = {
		headline: headline,
		content: content,
		imgUrl: imgUrl,
	};
	console.log(pageIndex, newsPaper);
	newsPaper[pageIndex].news.push(newsArticle);
	renderAccordion(pageIndex, "accordion-container");

	document.getElementById("headline-input").value = "";
	document.getElementById("imgurl-input").value = "";
	$(`.summernote`).summernote("code", "");
}
