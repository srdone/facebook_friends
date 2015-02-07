$(document).ready(function myDataGenerator () {

	var button = $('#getData');

	var getData = function () {

		var token = $('#token').val();

		var getLikes = function () {
			$.ajax({
				method: 'GET',
				url: 'https://graph.facebook.com/v2.2/me/likes?access_token=' + token
			})
			.done(function (data) {
				console.log(data.data);
				$('#dataviz').append('<p>The first page of likes that Facebook returned was:</p>');
				data.data.forEach(function(c) {
					$('#dataviz').append('<p>' + c.name + '</p>');
				});
			});
		};

		var getFriends = function () {
			$.ajax({
				method: 'GET',
				url: 'https://graph.facebook.com/v2.2/me/friends?access_token=' + token + '&format=json&method=get&pretty=0&suppress_http_code=1'
			})
			.done(function (data) {
				$('#dataviz').append('<p>You have ' + data.summary.total_count + ' friends on facebook</p>');
				setTimeout(getLikes(), 1);
			});
		};

		getFriends();

	};

	button.click(getData);

});