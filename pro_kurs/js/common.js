$(document).ready(function() {

	$('.popup').magnificPopup({type:'image'});
	$('.popup_c').magnificPopup();

	$(".owl-carousel").owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		dots: true,
		navText: ["<img src='img/arr_left.png'>", "<img src='img/arr_right.png'>"],
		responsive: {
			0: {
				items: 1
			}
		}
	});


	function wResize() {
		$("header").css("min-height", $(window).height());
	};
	
	wResize();
	$(window).resize(function() {
		wResize();
	});

	//Первые табы
	$(".top_phone .tab_item").not(":first").hide();
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Вторые табы
	$(".tabs_header .tab_item").not(":first").hide();
	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Третьи табы
	$(".contacts_top .tab").click(function() {
		$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Последние табы
	$(".bottom_phone .tab_item").not(":first").hide();
	$(".bottom_phone .wrapper .tab").click(function() {
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				magnificPopup.close(); 
				$(this).trigger("reset");
			}, 1000);
		});
		return false;
	});
});

$(window).load(function() {
	$(".top_header").animated("fadeInDown", "fadeOut");
	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
	$(".profi_item").animated("fadeInLeft", "fadeOut");
	$(".s_profi form").animated("zoomInRight", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	// $("footer").animated("fadeInUp", "fadeOut");
});