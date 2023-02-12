function generatePage(pageObject) {
	return `
	<section class="page">
		${
			pageObject.info.currentPageNo === 1
				? generateHomeHeader(
						pageObject.date,
						pageObject.price,
						pageObject.totalNoOfPages
				  )
				: generateHeader("")
		}

		${newsLayout1(
			pageObject.breakingNews.headline,
			pageObject.breakingNews.content,
			pageObject.breakingNews.imgUrl
		)}
		
	${pageObject.news.reduce((acc, singleNews, index) => {
		acc += newsLayout2(
			singleNews.headline,
			singleNews.content,
			singleNews.imgUrl
		);
		return acc;
	}, "")}
		
	${generatePageNavigators(
		pageObject.info.currentPageNo,
		pageObject.info.totalNoOfPages
	)}
		
	</section>
	`;
}
