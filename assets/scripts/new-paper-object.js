var newsPaper = [];

window.addEventListener("DOMContentLoaded", () => {
	if (localStorage.getItem("newsPaper"))
		newsPaper = JSON.parse(localStorage.getItem("newsPaper"));
});
