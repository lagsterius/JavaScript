(function() {
	$('#test').click(function() {
		var k;
		k = $(this).attr('value');
		$(this).attr('value', ++k);
		$('body').attr('title', k);
	});
})();

