function renderAccordion(pageIndex, newsObj, targetElementId) {
	const ELEMENT = document.querySelector(`#${targetElementId}`);
	ELEMENT.innerHTML = "";

	if (newsObj && newsObj.length > 0) {
		document.querySelector(".admin-left-container").style.display = "flex";
		ELEMENT.innerHTML += newsObj.reduce((acc, singleNews, index) => {
			acc += `
		<section  class="accordion">
			<header onclick="toggleAccordion(${index})"  class="accordion-header">
				${singleNews.headline}
				<div class="accordion-icon-container">
					<span onclick="deleteNews(event, ${index}, ${pageIndex})" class="material-symbols-outlined accordion-delete-icon">
						delete
					</span>
					<span class="material-symbols-outlined accordion-arrow-icon">
						expand_more
					</span>
				</div>
			</header>
			<div class="accordion-body">
				<form class="news-addition-form">
					<div class="news-addition-form-input-container">
						<label>Headline</label>
						<input id="headline-input-${index}" name="headline" placeholder="Headline" value="${singleNews.headline}" />
					</div>
					<div class="news-addition-form-input-container">
						<label>Image Url</label>
						<input id="imgurl-input-${index}" name="image-url" placeholder="Image Url" value="${singleNews.imgUrl}" />
					</div>
					<div class="news-addition-form-input-container">
						<label>News Content</label>
						<textarea class="accordion-summernote-${index}" name="news-content" id="news-content-${index}" value="${singleNews.content}"
							placeholder="News Content"></textarea>
					</div>
					<div class="news-addition-form-button-container">
						<button onclick="editNews(event,${pageIndex},${index})" id="edit-news-button" class="add-news-button">Edit News</button>
					</div>
				</form>
			</div>
		</section>
		`;
			setTimeout(() => {
				initiateAccordionSummerNote(index, singleNews.content);
			}, 500);
			return acc;
		}, "");
	} else {
		document.querySelector(".admin-left-container").style.display = "none";
	}
}

function toggleAccordion(accordionIndex) {
	let allAccordions = document.querySelectorAll(".accordion");

	Array.from(allAccordions).map((accordion, index) => {
		if (index !== accordionIndex) accordion.classList.remove("active");
	});

	let targetAccodion = allAccordions[accordionIndex];
	if (targetAccodion.classList.contains("active"))
		targetAccodion.classList.remove("active");
	else targetAccodion.classList.add("active");
}

function initiateAccordionSummerNote(accordionIndex, content) {
	$(`.accordion-summernote-${accordionIndex}`).summernote({
		toolbar: [
			["style", ["style"]],
			["font", ["bold", "underline", "clear"]],
			["fontname", ["fontname"]],
			["color", ["color"]],
			["para", ["ul", "ol", "paragraph"]],
			["table", ["table"]],
			["insert", ["link", " picture", "video"]],
			["view", ["fullscreen", "codeview", "help"]],
		],
		callbacks: {
			onInit: function () {
				$(`.accordion-summernote-${accordionIndex}`).summernote(
					"code",
					content
				);
			},
		},
	});
}
