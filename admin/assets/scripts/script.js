$(".summernote").summernote({
	toolbar: [
		["style", ["style"]],
		["font", ["bold", "underline", "clear"]],
		["fontname", ["fontname"]],
		["color", ["color"]],
		["para", ["ul", "ol", "paragraph"]],
		["table", ["table"]],
		["insert", ["link", "picture", "video"]],
		["view", ["fullscreen", "codeview", "help"]],
	],
	inheritPlaceholder: true,
	height: 300,
});

window.addEventListener("DOMContentLoaded", () => {
	let news = [];

	const ADD_NEWS_BUTTON = document.getElementById("add-news-button");

	ADD_NEWS_BUTTON.addEventListener("click", (e) => {
		e.preventDefault();
		let headline = document.getElementById("headline-input").value;
		let content = document.getElementById("news-content").value;
		let imgUrl = document.getElementById("imgurl-input").value;
		let newsArticle = {
			headline: headline,
			content: content,
			imgUrl: imgUrl,
		};
		news.push(newsArticle);
		renderAccordion(news, "accordion-container");

		document.getElementById("headline-input").value = "";
		document.getElementById("imgurl-input").value = "";
		$(`.summernote`).summernote("code", "");
	});
});
