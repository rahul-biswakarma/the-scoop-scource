var newsPaper = [];

window.addEventListener("DOMContentLoaded", () => {
	if (localStorage.getItem("newsPaper"))
		newsPaper = localStorage.getItem("newsPaper");
});
