function generatePage(pageObject) {
	return `
	<section id="page-${pageObject.info.currentPage - 1}" class="page">
		${
			pageObject.info.currentPage === 1
				? generateHomeHeader(
						pageObject.info.date,
						pageObject.info.price,
						newsPaper.length
				  )
				: generateHeader(
						pageObject.info.category,
						pageObject.info.date,
						pageObject.info.currentPage
				  )
		}

		<div class="page-content-container">
			${
				pageObject.info.currentPage === 1 &&
				pageObject.breakingNews.headline !== "" &&
				pageObject.breakingNews.headline !== undefined
					? newsLayout1(
							pageObject.breakingNews.headline,
							pageObject.breakingNews.content,
							pageObject.breakingNews.imgUrl
					  )
					: ""
			}
			<main>
				${pageObject.news.reduce((acc, singleNews, index) => {
					acc += newsLayout2(
						singleNews.headline,
						singleNews.content,
						singleNews.imgUrl
					);
					return acc;
				}, "")}
			</main>
		</div>
		
	${generatePageNavigators(
		pageObject.info.currentPage,
		pageObject.info.totalNoOfPages
	)}
		
	</section>
	`;
}
