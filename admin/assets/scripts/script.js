$(".summernote").summernote({
	toolbar: [
		["style", ["style"]],
		["font", ["bold", "underline", "clear"]],
		["fontname", ["fontname"]],
		["color", ["color"]],
		["para", ["ul", "ol", "paragraph"]],
		["table", ["table"]],
		["insert", ["link", "picture", "video"]],
		["view", ["fullscreen", "codeview", "help"]],
	],
	inheritPlaceholder: true,
	height: 300,
});

window.addEventListener("DOMContentLoaded", () => {});
