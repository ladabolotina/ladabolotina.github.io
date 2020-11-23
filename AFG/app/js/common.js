$(function() {

	$(".toggle_mnu").click(function(){
		$(this).toggleClass("on");
		$(".main_mnu").slideToggle();
		return false;
	});

	$(".main_footer .toggle_mnu").click(function(){
		$("html, body").animate({ scrollTop: $(document).height()}, "slow");
		return false;
	});

	$(".arrow_bottom").click(function(){
		$("html, body").animate({ scrollTop: $(".main_head").height()+120 }, "slow");
		return false;
	});

	$(".top").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
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
			}, 200*index);
		});
	}, {
		offset : "20%"
	});

	$(".section_5").waypoint(function() {
		$(".section_5 .tc_item").each(function(index) {
			var ths = $(this);
			setTimeout(function() {
				var myAnimation = new DrawFillSVG({
					elementId: "tc-svg" + index
				});
				ths.removeClass("").addClass("");
			}, 500*index);
		});
		this.destroy();
	}, {
		offset : "20%"
	});

	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		smartSpeed : 600,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});

	$(".section_head h2, .section_head p").animated("fadeInRight");
	$(".info_item_wrap").animated("zoomIn");
	$(".slider .slide").animated("rollIn");
	$(".homesect.section_8 .forms").animated("fadeInRight");

	$(".section_2").waypoint(function() {
		$(".s2_item_wrap").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	});

	$(".homesect .section_bottom .buttons").click(function() {
		$("#callback h4").html($(this).text());
	}).magnificPopup({
		type: 'inline',
		mainClass: 'mfp-forms'
	});

	//SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//E-mail Ajax Send
	$(".forms").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
