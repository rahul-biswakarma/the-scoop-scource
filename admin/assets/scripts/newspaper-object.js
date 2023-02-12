var newsPaper = [];

var news = [];

window.addEventListener("DOMContentLoaded", () => {
	if (localStorage.getItem("newsPaper"))
		newsPaper = JSON.parse(localStorage.getItem("newsPaper"));
});
