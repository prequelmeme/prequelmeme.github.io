$("#select").change(function(){
	if($(this).val() == "exe"){
		$("#py-button").slideUp(200)
		$("#exe-button").delay( 200 ).slideDown(200)
	}

	if ($(this).val() == "py") {
		$("#exe-button").slideUp(200)
		$("#py-button").delay( 200 ).slideDown(200)
	}
});

$('.first').prop('selected', true);