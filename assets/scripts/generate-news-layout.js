function newsLayout1(headline, content, imgUrl) {
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
			${isHTML(content) ? content : `<p>${content}</p>`}
		</div>
	</article>`;
}

function newsLayout2(headline, content, imgUrl) {
	return `
	<article class="article-type-2">
		<h1 class="article-type-2-headline">${headline}</h1>
		${
			imgUrl !== "" && imgUrl !== undefined
				? `<img
						class="article-type-2-img lazy"
						src="./assets/images/placeholder.svg"
						data-src="${imgUrl}"
						data-srcset="${imgUrl} 1x"
						alt="${headline}"
					/>`
				: ""
		}
		<div class="article-type-2-content">
			${content}
		</div>
	</article>`;
}
