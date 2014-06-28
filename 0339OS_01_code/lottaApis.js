$('#nextLink').click(function () {
	$.get('api/next', function (nextPage) {
		displayPage(nextPage);
  });
});