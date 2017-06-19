var words = {
	0:"",
	1:"one",
	2:"two",
	3:"three",
	4:"four",
	5:"five",
	6:"six",
	7:"seven",
	8:"eight",
	9:"nine",
	10:"ten",
	11:"eleven",
	12:"twelve",
	13:"thirteen",
	14:"fourteen",
	15:"fifteen",
	16:"sixteen",
	17:"seventeen",
	18:"eighteen",
	19:"nineteen",
	20:"twenty",
	30:"thirty",
	40:"forty",
	50:"fifty",
	60:"sixty",
	70:"seventy",
	80:"eighty",
	90:"ninety",
};

function numberLetterCounts(x) {
	var count = 0;
	for (var i = 1; i <= x; i++) {
		var sn = i.toString().split("").reverse();
		if (sn.length === 1) {
			count += words[sn[0]].split("").length;
		} else if (sn.length === 2) {
			if (parseInt(sn[1] + "" + sn[0]) <= 20) {
				count += words[sn[1] + "" + sn[0]].split("").length
			} else {
				count += words[parseInt(sn[1])*10].split("").length;
				count += words[parseInt(sn[0])].split("").length;
			}
		} else if (sn.length === 3) {
			count += words[sn[2]].split("").length + "hundred".length;
			if (parseInt(sn[1] + "" + sn[0]) > 0) {
				count += "and".length;
			}
			if (parseInt(sn[1] + "" + sn[0]) <= 20 && parseInt(sn[1] + "" + sn[0]) > 9) {
				count += words[sn[1] + "" + sn[0]].split("").length
			} else {
				count += words[parseInt(sn[1])*10].split("").length;
				count += words[parseInt(sn[0])].split("").length;
			}
		} else if (sn.length === 4) {
			count += words[sn[3]].split("").length + "thousand".length;
			if (parseInt(sn[2]) > 0) {
				count += words[sn[2]].split("").length + "hundred".length;
				if (parseInt(sn[1] + "" + sn[0]) > 0) {
					count += "and".length;
				}
			}
			if (parseInt(sn[1] + "" + sn[0]) <= 20 && parseInt(sn[1] + "" + sn[0]) > 9) {
				count += words[sn[1] + "" + sn[0]].split("").length
			} else {
				count += words[parseInt(sn[1])*10].split("").length;
				count += words[parseInt(sn[0])].split("").length;
			}
		}
		console.log(sn);
	}
	return count;
}

console.log(numberLetterCounts(1000))
