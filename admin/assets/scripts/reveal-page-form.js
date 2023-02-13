function revealPageForm(pageIndex) {
	// Updating localNews object
	localNews = newsPaper[pageIndex].news;

	// Submit Buttons
	let formSubmitButtonContainer = document.querySelector("#news-submit-button");
	formSubmitButtonContainer.innerHTML = `
	<button onclick="submitNews(${pageIndex})" id="submit-news-button" class="add-news-button">Submit</button>
	<a href="http://127.0.0.1:5500/" target="_blank" class="add-news-button">Preview</a>
	`;

	document.getElementById("editor-header-page-no").innerText = `Page ${
		pageIndex + 1
	}`;
	document.querySelector(".admin-main-right-container").style.display = "block";

	document.getElementById(
		"add-news-button-container"
	).innerHTML = `<button id="add-news-button" onclick="addNews(event,${pageIndex})" class="add-news-button">Add News</button>`;

	// Extra Form
	document.getElementById("extra-form-container").innerHTML = "";
	if (pageIndex !== 0)
		document.getElementById("extra-form-container").innerHTML = `
	<div id="page-category-input" class="news-addition-form-input-container">
		<label>Page Category</label>
		<input id="category-input" name="category" placeholder="Page Category" ${
			newsPaper[pageIndex].info.category !== "" &&
			newsPaper[pageIndex].info.category !== undefined
				? `value="${newsPaper[pageIndex].info.category}"`
				: ""
		} />
	</div>`;
	else {
		document.getElementById("extra-form-container").innerHTML = `
		<div id="breaking-news-container">
			<h1 class="breaking-news-form-title">Breaking News</h1>
			<div class="breaking-new-form">
				<div class="news-addition-form-input-container">
					<label>Headline</label>
					<input id="breaking-headline-input" name="breaking-headline" placeholder="Headline" ${
						newsPaper[0].breakingNews.headline !== "" &&
						newsPaper[0].breakingNews.headline !== undefined
							? `value="${newsPaper[0].breakingNews.headline}"`
							: ""
					}  />
				</div>
				<div class="news-addition-form-input-container">
					<label>Image Url</label>
					<input id="breaking-imgurl-input" name="breaking-image-url" placeholder="Image Url" ${
						newsPaper[0].breakingNews.imgUrl !== "" &&
						newsPaper[0].breakingNews.imgUrl !== undefined
							? `value="${newsPaper[0].breakingNews.imgUrl}"`
							: ""
					} />
				</div>
				<div class="news-addition-form-input-container">
					<label>News Content</label>
					<textarea class="breaking-news-summernote" name="breaking-news-content" id="breaking-news-content"
						placeholder="News Content"></textarea>
				</div>
			</div>
		</div>`;

		setTimeout(() => {
			$(".breaking-news-summernote").summernote({
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
				height: 100,
			});
			if (
				newsPaper[0].breakingNews.content !== "" &&
				newsPaper[0].breakingNews.content !== undefined
			) {
				$(".breaking-news-summernote").summernote(
					"code",
					newsPaper[0].breakingNews.content
				);
			}
		}, 300);
	}

	if (newsPaper[pageIndex] && newsPaper[pageIndex].news)
		renderAccordion(pageIndex, localNews, "accordion-container");
}
