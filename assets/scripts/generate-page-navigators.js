function generatePageNavigators(currentPageNumber, totalPageNumber) {
	return `
	<footer class="footer-container">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
		<button onclick="flipPageBackward(${currentPageNumber})" class="page-navigation-button">
			<span class="material-symbols-outlined">
				arrow_back
			</span>
		</button>
		<button onclick="flipPageForward(${currentPageNumber})" class="page-navigation-button">
			<span class="material-symbols-outlined">
				arrow_forward
			</span>
		</button>
	</footer>
	`;
}

function flipPageForward(pageNo) {
	document.getElementById(`page-${pageNo}`).style.display = "block";
	document.getElementById(`page-${pageNo - 1}`).style.display = "none";
}

function flipPageBackward(pageNo) {
	document.getElementById(`page-${pageNo}`).style.display = "block";
	document.getElementById(`page-${pageNo + 1}`).style.display = "none";
}
