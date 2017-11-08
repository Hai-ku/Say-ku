var syllable = require('syllable');

var inputArr = process.argv;

var haiku = [];
var line_1 = [];
var line_2 = [];
var line_3 = [];

for (var i = 2; i<inputArr.length; i++) {
	haiku.push(inputArr[i]);
}

for (var j = 0; j < inputArr.length; j++) {
	if (syllable(line_1) < 5) {
		line_1.push(haiku[j]);
	} else if (syllable(line_2) < 7) {
		line_2.push(haiku[j]);
	} else {
		line_3.push(haiku[j]);
	}
}

console.log(line_1.join(" ") + " " + syllable(line_1) + "\n" + line_2.join(" ") + " " + syllable(line_2) + "\n" + line_3.join(" ") + syllable(line_3));

if (syllable(line_1) && syllable(line_3) !== 5 ||syllable(line_2) !== 7) {
	console.log("not a haiku");
} else {
	console.log("good job");
}


