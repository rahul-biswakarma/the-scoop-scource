function generateHomeHeader(date, price, totalNoOfPages) {
	return `
	<header class="home-header-container">
		<div class="home-header-title">The Scoop Source</div>
		<div class="home-header-info-container">
			<span class="home-header-info">Pages ${totalNoOfPages}</span>
			<span class="home-header-info">${date}</span>
			<span class="home-header-info">₹ ${price}</span>
		</div>
	</header>`;
}

function generateHeader(category, date, pageNo) {
	return `
	<header class="header-container">
		<div class="header-category">${category}/div>
		<div class="header-center-dotted-line"></div>
		<div class="header-info-container">
			<span class="header-info">${date}</span>
			<span class="header-info">The Scoop Source <span class="header-info-pageNo">${pageNo}</span></span>
		</div>
	</header>`;
}
