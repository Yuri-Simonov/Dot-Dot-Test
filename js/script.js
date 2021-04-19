$(function () {
	$('.checkbox').change(function () {
		$('.show').toggle("hidden");
	}).change(); //ensure visible state matches initially
});


