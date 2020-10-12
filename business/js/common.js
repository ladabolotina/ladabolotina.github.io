$(document).ready(function () {
	$(".top_banner").mousemove(function (e) {
		var moveX = (e.pageX * -1 / 25);
		var moveY = (e.pageY * -1 / 25);
		$(this).css("background-position", moveX +"px " + moveY + "px");
	});
});

// document, после того как будет готов - ready, запустит функцию function
// e - переменная, к которой будем обращаться
// moveX moveY - определяют положение мышки относительно стр, а деление на 15 - скорость
// this - потому что вверху мы уже обозначили данную функцию