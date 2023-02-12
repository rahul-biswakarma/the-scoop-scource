function submitNews(pageNo) {
	if (newsPaper.length >= pageNo) {
		newsPaper[pageNo] = news;
	} else {
		newsPaper.push(news);
	}
}
