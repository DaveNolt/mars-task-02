$(document).ready(function () {
	$('.option__dropdown').data('toggle', 'false');
	$('.option__button__dropdown').click(function () {
		if ($(this).parents('.option__dropdown').data('toggle') == 'false') {
			activateDropdown.bind(this).call();
			$(this).parents('.option__dropdown').data('toggle', 'true');
		}
		else {
			deactivateDropdown.bind(this).call();
			$(this).parents('.option__dropdown').data('toggle', 'false');
		}
	});
	$('.option__dropdown__list__item').click(function () {
		if ($(this).parents('.option__dropdown').data('toggle') == 'false') {
			activateDropdown.bind(this).call();
			$(this).parents('.option__dropdown').data('toggle', 'true');
		}
		else {
			if (!$(this).hasClass('item_selected')) {
				$('.item_selected', $(this).parent()).removeClass('item_selected');
				$(this).addClass('item_selected');
			}
			deactivateDropdown.bind(this).call();
			$(this).parents('.option__dropdown').data('toggle', 'false');
		}
	});
});

function activateDropdown () {
	$(this).parents('.option__dropdown').addClass('option__dropdown_active');
	$('.option__dropdown__list__item:not(.item_selected)', $(this).parents('.option__dropdown')).removeClass('option__dropdown__list__item_hide');
	$('.caret', $(this).parents('.option__dropdown')).addClass('caret-up');
}

function deactivateDropdown () {
	$(this).parents('.option__dropdown').removeClass('option__dropdown_active');
	$('.option__dropdown__list__item:not(.item_selected)', $(this).parents('.option__dropdown')).addClass('option__dropdown__list__item_hide');
	$('.caret', $(this).parents('.option__dropdown')).removeClass('caret-up');
}