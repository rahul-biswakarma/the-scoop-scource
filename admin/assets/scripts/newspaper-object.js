var newsPaper = [];

var pageNews = [];

window.addEventListener("DOMContentLoaded", () => {
	if (localStorage.getItem("newsPaper"))
		newsPaper = JSON.parse(localStorage.getItem("newsPaper"));
});
