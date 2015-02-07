(function myDataGenerator () {
	var data;

	var getDataButton = $('#getData').click(getData);

	function getData() {

		var email = $('#username').val();
		var password = $('#password').val();

		alert(email + password);
	};

}());