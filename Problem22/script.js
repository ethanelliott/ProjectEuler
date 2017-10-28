//This one looks a little different due to the AJAX request

var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function getNameScore(x) {
	x = x.split("");
	var score = 0;
	for (var a = 0; a < x.length; a++) {
		for (var i = 0; i < alpha.length; i++) {
			if (alpha[i] === x[a]) {
				score += (i + 1);
			}
		}
	}
	return score;
}

function nameScores() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var scoreSum = 0;
			var data = JSON.parse(this.responseText).sort();
			for (var i = 0; i < data.length; i++) {
				scoreSum += ((i+1) * getNameScore(data[i]));
			}
			console.log(scoreSum);
		}
	};
	xhttp.open("GET", "names.txt", true);
	xhttp.send();
}

nameScores();
