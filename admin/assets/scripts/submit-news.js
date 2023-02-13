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

		if (
			validateBreakingNewsInput(
				breakingHeadline,
				breakingImgUrl,
				breakingNewsContent
			)
		)
			newsPaper[0].breakingNews = breakingNews;
	}
	if (localNews.length < 4) {
		createToast("Minimum 4 news article required");
		setTimeout(() => {
			createToast("Submit Failed 🙃");
		}, 500);

		return;
	}

	let totalImages = localNews.reduce((acc, news) => {
		if (news.imgUrl !== "" && news.imgUrl !== undefined) acc += 1;
		return acc;
	}, 0);

	console.log(totalImages);

	if (totalImages < 2) {
		createToast("Minimum 2 images required");
		setTimeout(() => {
			createToast("Submit Failed 🙃");
		}, 500);

		return;
	}

	newsPaper[pageIndex].news = localNews;
	localStorage.setItem("newsPaper", JSON.stringify(newsPaper));
}
