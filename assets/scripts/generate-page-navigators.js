function generatePageNavigators(currentPageNumber, totalPageNumber) {
	return `
	<footer class="footer-container">
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
	if (pageNo <= newsPaper[newsPaper.length - 1].info.totalPagesCount - 1) {
		document.getElementById(`page-${pageNo}`).style.display = "block";
		document.getElementById(`page-${pageNo - 1}`).style.display = "none";
	}
}

function flipPageBackward(pageNo) {
	if (pageNo - 2 >= 0) {
		document.getElementById(`page-${pageNo - 1}`).style.display = "none";
		document.getElementById(`page-${pageNo - 2}`).style.display = "block";
	}
}
