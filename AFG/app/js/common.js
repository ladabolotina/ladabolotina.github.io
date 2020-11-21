$(function() {

	$(".toggle_mnu").click(function(){
		$(this).toggleClass("on");
		$(".main_mnu").slideToggle();
		return false;
	});

	$(".section_1 .section_content .info_item").equalHeights();
	$(".section_3 .section_content .info_item").equalHeights();
	$(".s1_bottom .info_item").equalHeights();
	$(".s2_item").equalHeights();
	$(".s2_item .img_wrap").equalHeights();

	$(".section_4").waypoint(function() {
		$(".section_4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 150*index);
		});
	}, {
		offset : "20%"
	});


	//SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
