var newsPaper = [];

window.addEventListener("DOMContentLoaded", () => {
	if (localStorage.getItem("newsPaper"))
		newsPaper = JSON.parse(localStorage.getItem("newsPaper"));
	else {
		newsPaper = dummyNewsPaper;
	}
});

let dummyNewsPaper = [
	{
		info: {
			currentPage: 1,
			totalPagesCount: 1,
			date: "Feb 20, 2023",
		},
		breakingNews: {
			headline: "Razer new building has RGB strips all around 🤯",
			imgUrl: "https://www.farm.sg/bank/projects/00A/FARM_RAZER_01.jpg",
			content:
				'<p class="post-without-image" style="margin-bottom: 18px; color: rgb(68, 68, 68); font-family: Lato; font-size: 17px; background-color: rgb(255, 255, 255);"><span style="font-family: &quot;Source Sans Pro&quot;;">It’s easy enough to pick out Razer products from a lineup. Over the years, it has established a design language that has become unique to its brand, even ignoring the telltale three snake\'s logo. All Razer products, from PCs to accessories, carry a dominantly black motif with acid green lines for accents and highlig</span><span style="font-family: &quot;Source Sans Pro&quot;;">﻿</span><span style="font-family: &quot;Source Sans Pro&quot;;">hts.</span><br></p><p class="post-without-image" style="margin-bottom: 18px; color: rgb(68, 68, 68); font-family: Lato; font-size: 17px; background-color: rgb(255, 255, 255);"><span style="font-family: &quot;Source Sans Pro&quot;;">The company’s new Southeast Asian headquarters bears these same design cues, both on the outside as well as inside. Built on one-north, Singapore’s hub for tech and businesses, the Razer HQ’s tall, triangular shape is almost reminiscent of a PC hub for peripherals and accessories. That’s almost fitting given the building’s location as well as its purpose of being the company’s office hub for the region.</span></p><p style="margin-bottom: 18px; color: rgb(68, 68, 68); font-family: Lato; font-size: 17px; background-color: rgb(255, 255, 255);"><span style="font-family: &quot;Source Sans Pro&quot;;">When you’re the world’s biggest brand when it comes to PC gaming peripherals, it definitely speaks in your favor when your building looks exactly like one as well.</span></p><p style="margin-bottom: 18px; color: rgb(68, 68, 68); font-family: Lato; font-size: 17px; background-color: rgb(255, 255, 255);"><span style="font-family: &quot;Source Sans Pro&quot;;">Few tech companies pay attention to how their own office buildings can become gigantic advertisements for their brand and identity. Apple, of course, is at the forefront of that appreciation, especially with the newer “spaceship” Apple Park in Cupertino embodying the company’s aesthetic and design language inside and out. Others, like Google and Meta, do take care to provide a comfortable, safe, and productive environment inside but don’t have much to show on the outside. Gaming brand Razer is setting itself apart and has turned its newest building into an architectural representation of what it means to be Razer.</span></p>',
		},
		news: [
			{
				headline: "Lorem ipsum dolor sit amet",
				content:
					"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium viverra suspendisse potenti. Cras pulvinar mattis nunc sed blandit. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Vulputate eu scelerisque felis imperdiet proin fermentum. Pretium fusce id velit ut. Pharetra massa massa ultricies mi. Ipsum nunc aliquet bibendum enim. Aliquam purus sit amet luctus venenatis lectus. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Enim praesent elementum facilisis leo. Tincidunt id aliquet risus feugiat in ante metus dictum at. Enim ut sem viverra aliquet eget sit amet tellus. Orci a scelerisque purus semper eget duis at tellus. Massa tincidunt dui ut ornare lectus sit. Volutpat sed cras ornare arcu. Enim diam vulputate ut pharetra.</p><p>Interdum velit euismod in pellentesque massa placerat duis. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Risus at ultrices mi tempus imperdiet nulla malesuada. Consequat semper viverra nam libero justo laoreet. Quis eleifend quam adipiscing vitae proin sagittis. Tortor aliquam nulla facilisi cras fermentum odio. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Cras pulvinar mattis nunc sed blandit libero volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada. In eu mi bibendum neque egestas congue. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Et malesuada fames ac turpis egestas sed tempus urna et. Venenatis tellus in metus vulputate eu scelerisque felis. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Elementum facilisis leo vel fringilla est. Semper risus in hendrerit gravida rutrum quisque non tellus.</p>",
				imgUrl:
					"https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_960_720.jpg",
			},
			{
				headline: "Id velit ut tortor pretium viverra suspendisse potenti.",
				content:
					"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium viverra suspendisse potenti. Cras pulvinar mattis nunc sed blandit. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Vulputate eu scelerisque felis imperdiet proin fermentum. Pretium fusce id velit ut. Pharetra massa massa ultricies mi. Ipsum nunc aliquet bibendum enim. Aliquam purus sit amet luctus venenatis lectus. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Enim praesent elementum facilisis leo. Tincidunt id aliquet risus feugiat in ante metus dictum at. Enim ut sem viverra aliquet eget sit amet tellus. Orci a scelerisque purus semper eget duis at tellus. Massa tincidunt dui ut ornare lectus sit. Volutpat sed cras ornare arcu. Enim diam vulputate ut pharetra.<br></p> <img src='https://ia902204.us.archive.org/27/items/img-world-ticket-offers/yvA5SpUH-IMG-Worlds-1200x800.jpg'><p>Congue eu consequat ac felis donec et odio pellentesque diam. Fermentum dui faucibus in ornare. Blandit aliquam etiam erat velit scelerisque in. Cursus vitae congue mauris rhoncus aenean. Malesuada bibendum arcu vitae elementum. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Ac turpis egestas sed tempus urna et pharetra. Sed elementum tempus egestas sed sed risus pretium quam. Lectus proin nibh nisl condimentum. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Sit amet volutpat consequat mauris nunc congue.</p>",
				imgUrl: "",
			},
			{
				headline: "Excepteur sint occaecat cupidatat",
				content:
					"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
				imgUrl: "",
			},
			{
				headline: "Nisl nunc mi ipsum faucibus vitae aliquet",
				content:
					"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue interdum velit euismod in pellentesque massa placerat. Sit amet porttitor eget dolor morbi non arcu risus quis. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Vel turpis nunc eget lorem. Dignissim convallis aenean et tortor. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Condimentum lacinia quis vel eros. Odio facilisis mauris sit amet. Pulvinar pellentesque habitant morbi tristique senectus et netus. Eu consequat ac felis donec et. Tincidunt vitae semper quis lectus nulla at. Ultricies tristique nulla aliquet enim tortor at auctor urna. Diam in arcu cursus euismod quis viverra nibh cras. Mattis enim ut tellus elementum sagittis vitae et. Iaculis urna id volutpat lacus laoreet. Tellus elementum sagittis vitae et. Massa tempor nec feugiat nisl pretium fusce. Nisl tincidunt eget nullam non.</p>",
				imgUrl: "",
			},
		],
	},
	{
		info: {
			currentPage: 2,
			totalPagesCount: 2,
			date: "Feb 20, 2023",
			category: "Business",
		},
		news: [
			{
				headline: "Lorem ipsum dolor sit amet",
				content:
					"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium viverra suspendisse potenti. Cras pulvinar mattis nunc sed blandit. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Vulputate eu scelerisque felis imperdiet proin fermentum. Pretium fusce id velit ut. Pharetra massa massa ultricies mi. Ipsum nunc aliquet bibendum enim. Aliquam purus sit amet luctus venenatis lectus. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Enim praesent elementum facilisis leo. Tincidunt id aliquet risus feugiat in ante metus dictum at. Enim ut sem viverra aliquet eget sit amet tellus. Orci a scelerisque purus semper eget duis at tellus. Massa tincidunt dui ut ornare lectus sit. Volutpat sed cras ornare arcu. Enim diam vulputate ut pharetra.</p><p>Interdum velit euismod in pellentesque massa placerat duis. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Risus at ultrices mi tempus imperdiet nulla malesuada. Consequat semper viverra nam libero justo laoreet. Quis eleifend quam adipiscing vitae proin sagittis. Tortor aliquam nulla facilisi cras fermentum odio. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Cras pulvinar mattis nunc sed blandit libero volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada. In eu mi bibendum neque egestas congue. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Et malesuada fames ac turpis egestas sed tempus urna et. Venenatis tellus in metus vulputate eu scelerisque felis. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Elementum facilisis leo vel fringilla est. Semper risus in hendrerit gravida rutrum quisque non tellus.</p>",
				imgUrl:
					"https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_960_720.jpg",
			},
		],
	},
];
