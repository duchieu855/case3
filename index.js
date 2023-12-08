$("document").ready(() => {
	let dataPost;
	$.ajax({ url: "./post.json", dataType: "json" }).done((result) => {
		dataPost = result;
	});

	function hidePost() {
		$(".post").hide();
		console.log($(".post"));
	}
	hidePost();
	$("#categonties").click(() => {
		hidePost();
		$("#postCategonties").show();
		$("#section").html("");
		$("#aside").html("");
		dataPost.section.forEach((element) => {
			$("#section").append(
				'<article class="flex">' +
					`<div class="basis-1/2"><img class = "h-[300px] w-full" src="${element.img}" alt="img_section"/></div>` +
					'<div class= "px-[20px] basis-1/2">' +
					`<h3>${element.tag}</h3>` +
					`<h3>${element.title}</h3>` +
					'   <p class = "flex justify-between">' +
					`       <span>${element.author}</span>` +
					`<span>${element.date_post}</span>` +
					"   </p>" +
					`<p>${element.content}</p>` +
					'   <div class="flex justify-between">' +
					"       <div>" +
					'           <span><i class="fa fa-commenting-o" aria-hidden="true"></i></span>' +
					"           <span>1</span>" +
					"       </div>" +
					"       <div>" +
					'           <span><i class="fa fa-eye" aria-hidden="true"></i></span>' +
					"           <span>1</span>" +
					"       </div>" +
					"       <div>" +
					'           <span><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span>' +
					"           <span>1</span>" +
					"       </div>" +
					"   </div>" +
					"</div>" +
					"</article>"
			);
		});

		console.log(dataPost);
		$("#aside").append(
			'<div id="topAside" class="flex justify-evenly">' +
				'<div class="flex flex-col bg-blue">' +
				`<span><a href ="${dataPost.asideTop.src_face}"><i class="fa fa-facebook" aria-hidden="true"></i></a></span>` +
				"<span>1</span>" +
				"<span>Fan</span>" +
				"</div>" +
				'<div class="flex flex-col bg-blue">' +
				`<span><a href ="${dataPost.asideTop.src_twice}"><i class="fa fa-twitter" aria-hidden="true"></a></i></span>` +
				"<span>1</span>" +
				"<span>Fan</span>" +
				"</div>" +
				'<div class="flex flex-col bg-blue">' +
				`<span><a href = "${dataPost.asideTop.src_google}"><i class="fa fa-google-plus"  aria-hidden="true"></i></a></span>` +
				"<span>1</span>" +
				"<span>Fan</span>" +
				"</div>" +
				"</div>" +
				'<div id="bottomAside">' +
				"<h3>Latest Video</h3>" +
				'<div id="bottomAside-top" class="flex flex-col">' +
				`<img src="${dataPost.asideBottomTop.src_video}" alt="img_bottomAside-top">` +
				`<span>${dataPost.asideBottomTop.tag}</span>` +
				`<p>${dataPost.asideBottomTop.content}</p>` +
				'<div class="flex justify-evenly">' +
				"<div>" +
				'<span><i class="fa fa-commenting-o" aria-hidden="true"></i></span>' +
				"<span>1</span>" +
				"</div>" +
				"<div>" +
				'<span><i class="fa fa-eye" aria-hidden="true"></i></span>' +
				"<span>1</span>" +
				"</div>" +
				"<div>" +
				'<span><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span>' +
				"<span>1</span>" +
				"</div>" +
				"</div>" +
				"</div>" +
				'<div id="bottomAside-bottom" class="flex flex-col">' +
				"<div>" +
				'<div class="basis-1/3 h-[150px]">' +
				`<img src="${dataPost.asideBottomBottom.src_video}" alt="img_bottomAside-bottom" class="w-full h-full">` +
				"</div>" +
				'<div class="flex flex-col justify-between basis-2/3">' +
				`<p>${dataPost.asideBottomBottom.content}</p>` +
				'<div class="flex justify-between">' +
				"<div>" +
				'<span><i class="fa fa-commenting-o" aria-hidden="true"></i></span>' +
				"<span>1</span>" +
				"</div>" +
				"<div>" +
				'<span><i class="fa fa-eye" aria-hidden="true"></i></span>' +
				"<span>1</span>" +
				"</div>" +
				"<div>" +
				'<span><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span>' +
				"<span>1</span>" +
				"</div>" +
				"</div>" +
				"</div>" +
				"</div>" +
				"</div>" +
				"</div>"
		);
	});

	$("#detail").click(() => {
		hidePost();
		$("#postDetail").show();
		$("#postDetail").html("");
		const detail = $("#postDetail");
		detail.attr("class", "flex flex-col");
		const divImgMain = document.createElement("div");
		// console.log(divImgMain);
		divImgMain.classList.add("w-full", "h-[300px]", "object-fit");
		const divMain = document.createElement("div");
		divMain.classList.add("flex", "justify-between", "my-4");
		const section = document.createElement("section");
		section.classList.add("grow", "mr-4");
		const aside = document.createElement("aside");
		aside.classList.add(
			"flex",
			"flex-col",
			"justify-between",
			"p-4",
			"border",
			"basis-1/4"
		);
		const contentAsideTOP = `<div class = "flex flex-col justify-content space-y-2"><p>Share This Post</p><div class = "flex justify-center rounded bg-blue-500 px-4 py-[2px]"><span><i class="fa fa-google-plus" aria-hidden="true"></i></span><span class="ml-2">Facebook</span></div><div class = "flex justify-center rounded bg-blue-500 px-4 py-[2px]"><span><i class="fa fa-google-plus" aria-hidden="true"></i></span><span class="ml-2">Facebook</span></div><div class = "flex justify-center rounded bg-blue-500 px-4 py-[2px]"><span><i class="fa fa-google-plus" aria-hidden="true"></i></span><span class="ml-2">Facebook</span></div></div>`;
		const contentAsideBot = `<div></div>`
		aside.innerHTML = contentAsideTOP;
		const ratingContentMain = `<div class = "flex justify-end"><div><span><i class="fa fa-commenting-o" aria-hidden="true"></i></span><span>1</span></div><div><span><i class="fa fa-eye" aria-hidden="true"></i></span><span>1</span></div><div><span><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span><span>1</span></div> </div> <p class = "border-b">$content</p>`;
		// ratingContentMain.replace("$content", dataPost.asideBottomTop.content);
		section.innerHTML = ratingContentMain.replace(
			"$content",
			dataPost.asideBottomTop.content
		);

		divMain.append(section);
		divMain.append(aside);
		console.log(divMain);
		const temImgMain = `<img class = "w-full h-[300px] object-cover" src ="$src"/>`;
		const imgMain = temImgMain.replace(
			"$src",
			dataPost.asideBottomTop.src_video
		);
		divImgMain.innerHTML = imgMain;
		detail.append(divImgMain);
		detail.append(divMain);
	});
});
