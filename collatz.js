$(function() {
	for (var i = 1; i <= 1000; i++) {
		calcNumber(i);
	}

	function calcNumber(n) {
		$("#answer").append("<p>")
		while (n != 1) {
			$("#answer").append(n + " ");
			n = getNextNumber(n);
		}
		$("#answer").append(n + "</p>");
	}

	function getNextNumber(n) {
		if (n % 2) {
			n = (n * 3) + 1;
		} else {
			n = n / 2;
		}
		return n;
	}
});