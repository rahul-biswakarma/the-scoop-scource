function validateBreakingNewsInput(headline, imgUrl, content) {
	const urlPattern = /(https?:\/\/.*\.(?:png|jpg))/i;
	if (headline === "" || headline === undefined || headline === null) {
		createToast("Breaking News headline required");
		return false;
	}
	if (imgUrl === "" || imgUrl === undefined || imgUrl === null) {
		createToast("Breaking News Images URL in required");
		return false;
	}

	if (urlPattern.test(imgUrl) === false || checkImage(imgUrl) === false) {
		createToast("Breaking News Images URL is not valid");
		return false;
	}
	if (content === "" || content === undefined || content === null) {
		createToast("Breaking News Content is required");
		return false;
	}
	return true;
}

function validatePageCategory(category) {
	if (category === "" || category === undefined || category === null) {
		createToast("News page Category required");
		return false;
	}
}

function validateNews(headline, imgUrl, content) {
	const urlPattern = /(https?:\/\/.*\.(?:png|jpg))/i;
	if (headline === "" || headline === undefined || headline === null) {
		createToast("News headline required");
		return false;
	}
	if (imgUrl !== "" && imgUrl !== undefined && imgUrl !== null) {
		if (urlPattern.test(imgUrl) === false || checkImage(imgUrl) === false) {
			createToast("News Images URL is not valid");
			return false;
		}
	}

	if (content === "" || content === undefined || content === null) {
		createToast("News Content is required");
		return false;
	}
	return true;
}

async function checkUrl(url) {
	try {
		const response = await fetch(url);
		if (response.ok) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		return false;
	}
}

function checkImage(url) {
	const image = new Image();
	image.src = url;
	image.onload = function () {
		return true;
	};
	image.onerror = function () {
		return false;
	};
}
