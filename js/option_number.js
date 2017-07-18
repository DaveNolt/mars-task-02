$(document).ready(function () {
	$(".option__number__val").each((i, el) => {
		el.innerHTML = el.getAttribute("data-min") ? el.getAttribute("data-min") : 0;
	});
	$(".option__button__minus").click(function () {
		var num = parseInt($(".option__number__val", $(this).parent()).text());
		var min = parseInt($(".option__number__val", $(this).parent()).data("min"));
		if (num - 1 === min) {
			$(this).addClass("option__button_hide");
		};
		$(".option__number__val", $(this).parent()).text(--num);

	});
	$(".option__button__plus").click(function () {
		var num = parseInt($(".option__number__val", $(this).parent()).text());
		var min = parseInt($(".option__number__val", $(this).parent()).data("min"));
		if (min === num) {
			$(".option__button__minus", $(this).parent()).removeClass("option__button_hide");
		}
		$(".option__number__val", $(this).parent()).text(++num);
	});
});