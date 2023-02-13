function submitNews(pageIndex) {
	if (pageIndex !== 0) {
		let pageCategory = document.getElementById("category-input").value;
		newsPaper[pageIndex].info.category = pageCategory;
	} else {
		let breakingHeadline = document.getElementById(
			"breaking-headline-input"
		).value;
		let breakingImgUrl = document.getElementById("breaking-imgurl-input").value;
		let breakingNewsContent = document.getElementById(
			"breaking-news-content"
		).value;

		let breakingNews = {
			headline: breakingHeadline,
			imgUrl: breakingImgUrl,
			content: breakingNewsContent,
		};

		newsPaper[0].breakingNews = breakingNews;
	}
	newsPaper[pageIndex].news = localNews;
	localStorage.setItem("newsPaper", JSON.stringify(newsPaper));
}
