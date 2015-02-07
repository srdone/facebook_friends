$(document).ready(function myDataGenerator () {

	var button = $('#getData');

	var getData = function () {
		debugger;
		var token = $('#token').val();

		alert(token);

		$.ajax({
			method: 'GET',
			url: 'https://graph.facebook.com/v2.2/me/friends?access_token=' + token + '&format=json&method=get&pretty=0&suppress_http_code=1'
		}).done(postData);

	};

	var postData = function (data) {
		$('#dataviz').text(data.summary.total_count);
	};

	button.click(getData);

});