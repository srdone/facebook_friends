$(document).ready(function myDataGenerator () {

	var button = $('#getData');

	var getData = function () {

		var token = $('#token').val();

		$.ajax({
			method: 'GET',
			url: 'https://graph.facebook.com/v2.2/me/friends?access_token=' + token + '&format=json&method=get&pretty=0&suppress_http_code=1'
		})
		.done(function (data) {
			$('#dataviz').text(data.summary.total_count);
		});

	};

	button.click(getData);

});