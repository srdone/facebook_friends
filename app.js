$(document).ready(function myDataGenerator () {

	var nextData = '';

	var display = $('#dataviz')

	var getFriends = function () {

		var token = $('#token').val();

		$.ajax({
			method: 'GET',
			url: 'https://graph.facebook.com/v2.2/me/friends?access_token=' + token + '&format=json&method=get&pretty=0&suppress_http_code=1'
		})
		.done(function (data) {
			display.html('');
			display.append('<p>You have ' + data.summary.total_count + ' friends on facebook</p>');
		});
	};

	var getLikes = function () {

		var token = $('#token').val();

		var nextUrl = nextData || 'https://graph.facebook.com/v2.2/me/likes?fields=name&access_token=' + token;

		$.ajax({
			method: 'GET',
			url: nextUrl
		})
		.done(function (data) {
			display.html('');
			display.append('<p>The page of likes that Facebook returned was:</p>');
			data.data.forEach(function(c) {
				display.append('<p>' + c.name + '</p>');
			});
			if(data.paging.next) {
				nextData = data.paging.next;
				console.log(nextData);
				$('#getLikes').text('Get Next Page');
			}
		});
	};

	$('#getFriendCount').click(getFriends);
	$('#getLikes').click(getLikes);

});