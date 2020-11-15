$(document).ready(function() {

	$("h2").animated("fadeInDown", "fadeOut");
	$(".icon_skill").animated("bounceIn", "fadeOut"); 
	$(".text_block").animated("fadeInLeft", "fadeOut");
	$(".photo_block").animated("fadeInRight", "fadeOut");

	$(".popup").magnificPopup({type:"image"});
	
	function heightDetect() {
		$(".main_header").css("height", $(window).height());
	};
	heightDetect();
	
});


// $(".toggle_mnu").click(function() {
// 	$(".sandwich").toggleClass("active");
// });

// $(".toggle_mnu ul a").click(function() {
// 	$(".top_mnu").fadeOut(600);
// });

// $(".toggle_mnu").click(function() {
// 	if ($(".top_mnu").is(":visible")) {
// 		$(".top_text").removeClass("h_opacify");
// 		$(".top_mnu").fadeOut(600);
// 		$(".top_mnu li a").removeClass("fadeInUp animated");
// 	} else {
// 		$(".top_text").addClass("h_opacify");
// 		$(".top_mnu").fadeIn(600);
// 		$(".top_mnu li a").addClass("fadeInUp animated");
// 	};	
// });

// $(".portfolio_item").each(function(i) {
// 	$(this).find("a").attr("href", "#work_" + i);
// 	$(this).find(".podrt_descr").attr("id", "work_" + i);
// });

// $("input,select,textarea").jqBootstrapValidation();

// $(".top_mnu ul a").mPageScroll2id();

// $(window).load(function() { 
// 	$(".loader_inner").fadeOut(); 
// 	$(".loader").delay(400).fadeOut("slow"); 
// });