function newsLayout1(headline, contents, imgUrl) {
	return `
	<article class="article-type-1">
		<img
			class="article-type-1-img lazy"
			src="./assets/images/placeholder.svg"
			data-src="${imgUrl}"
			data-srcset="${imgUrl} 1x"
			alt="${headline}"
		/>
		<h1 class="article-type-1-headline">${headline}</h1>
		<div class="article-type-1-content">
			${contents.map((content) => {
				if (isHTML(content)) return content;
				return `<p>${content}</p>`;
			})}
		</div>
	</article>`;
}

function newsLayout2(news) {
	const { headline, content, imgUrl } = news;
	return `
	<article class="article-type-2">
		<img
			class="article-type-2-img lazy"
			src="./assets/images/placeholder.svg"
			data-src="${imgUrl}"
			data-srcset="${imgUrl} 1x"
			alt="${headline}"
		/>
		<h1 class="article-type-2-headline">${headline}</h1>
		<div class="article-type-2-content">
			${isHTML(content) ? content : `<p>${content}</p>`}
		</div>
	</article>`;
}
