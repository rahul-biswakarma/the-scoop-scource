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
	<header class="home-header-container">
		<div class="home-header-title">${category}</div>
		<div class="home-header-info-container">
			<span class="home-header-info">${date}</span>
			<span class="home-header-info">The Scoop Source</span>
			<span class="home-header-info">Page ${pageNo}</span>
		</div>
	</header>`;
}
