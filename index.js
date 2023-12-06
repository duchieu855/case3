$("document").ready(() => {
	let dataPost;
	$.ajax({ url: "./post.json", dataType: "json" }).done((result) => {
		console.log(result);
		dataPost = result;
	});

	$("#categonties").click(() => {
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

		// let templateAsideBotTop = `
		// 	div id="bottomAside-top" class="flex flex-col">
		// 	img src="$dataPost.asideBottomTop.src_video" alt="img_bottomAside-top">
		// 	span>$dataPost.asideBottomTop.tag</span>
		// 	p>$dataPost.asideBottomTop.content</p>
		// 	div class="flex justify-evenly">
		// 	div>
		// 	span><i class="fa fa-commenting-o" aria-hidden="true"></i></span>
		// 	span>1</span>
		// 	/div>
		// 	div>
		// 	span><i class="fa fa-eye" aria-hidden="true"></i></span>
		// 	span>1</span>
		// 	/div>
		// 	div>
		// 	span><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
		// 	span>1</span>
		// 	/div>
		// 	/div>
		// 	/div>`;
		// console.log(templateAsideBotTop);
		// let asideBotTop = templateAsideBotTop
		// 	.replace(
		// 		"$dataPost.asideBottomTop.src_video",
		// 		dataPost.asideBottomTop.src_video
		// 	)
		// 	.replace("$dataPost.asideBottomTop.tag", dataPost.asideBottomTop.tag)
		// 	.replace(
		// 		"$dataPost.asideBottomTop.content",
		// 		dataPost.asideBottomTop.content
		// 	);
		// console.log(asideBotTop);

		// let temAsideBotBot = dataPost.asideBottomBottom.forEach((element) => {
		// 	'<div id="bottomAside-bottom" class="flex flex-col">' +
		// 		'<div class="flex ">' +
		// 		'<div class="basis-1/3 h-[150px]">' +
		// 		`<img src="${element.src_video}" alt="img_bottomAside-bottom" class="w-full h-full">` +
		// 		"</div>" +
		// 		'<div class="flex flex-col justify-between basis-2/3">' +
		// 		`<p>${element.content}</p>` +
		// 		'<div class="flex justify-between">' +
		// 		"<div>" +
		// 		'<span><i class="fa fa-commenting-o" aria-hidden="true"></i></span>' +
		// 		"<span>1</span>" +
		// 		"</div>" +
		// 		"<div>" +
		// 		'<span><i class="fa fa-eye" aria-hidden="true"></i></span>' +
		// 		"<span>1</span>" +
		// 		"</div>" +
		// 		"<div>" +
		// 		'<span><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span>' +
		// 		"<span>1</span>" +
		// 		"</div>" +
		// 		"</div>" +
		// 		"</div>" +
		// 		"</div>" +
		// 		"</div>";
		// });

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
				'<div class="flex ">' +
				'<div class="basis-1/3 h-[150px]">' +
				'<img src="#" alt="img_bottomAside-bottom" class="w-full h-full">' +
				"</div>" +
				'<div class="flex flex-col justify-between basis-2/3">' +
				"<p></p>" +
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
		// .appendChild(asideBotTop)
		// .appendChild(temAsideBotBot);
	});
});
