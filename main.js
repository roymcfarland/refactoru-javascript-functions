// NUMBER 1(a)
// var tripleFive = function() {
// 	console.log(["Five!", "Five!", "Five!"]);
// };
// tripleFive()


// NUMBER 1(b)
// for (var i=0; i<3; i++) {
// 	console.log("Five!");
// };

// // NUMBER 2
// var lastLetter = function(s) {
// 	return s.charAt(s.length-1);
// };
// console.log(lastLetter("hello"));
// console.log(lastLetter("island"));

// // NUMBER 3
// var square = function(x) {
// 	return x * x;
// };
// console.log(square(3));
// console.log(square(5));

// NUMBER 4
// var negate = function(x) {
// 	return x * -1;
// };
// console.log(negate(5));
// console.log(negate(-8));

// NUMBER 5
// var toArray = function(x, y, z) {
// 	return [x, y, z];
// };
// console.log(toArray(1, 4, 5));
// console.log(toArray(8, 9, 10));

// NUMBER 6
// var startsWithA = function(x) {
// 	if (x.charAt(0) === "a") {
// 		return "true";
// 	} else {
// 		return "false";
// 	};
// };
// console.log(startsWithA("aardvark"));
// console.log(startsWithA("bear"));

// NUMBER 7
// var excite = function(x) {
// 	return x + "!!!";
// };
// console.log(excite("yes"));
// console.log(excite("no"));

// NUMBER 8
// var sun = function(x) {
// 	if (x.indexOf("sun") === -1) {
// 		return "false";
// 	} else {
// 		return "true";
// 	};
// };
// console.log(sun("sundries"));
// console.log(sun("asunder"));
// console.log(sun("catapult"));

// NUMBER 9
// var tiny = function(x) {
// 	if (x < 1 && x > 0) {
// 		return "true";
// 	} else {
// 		return "false";
// 	};
// };
// console.log(tiny(0.3));
// console.log(tiny(14));
// console.log(tiny(-5));

// NUMBER 10
var getSeconds = function(time) {
	var timesplit = time.split(":");
	var timemins = +timesplit[0];
	var timesecs = +timesplit[1];
	return 60 * timemins + timesecs;
};
console.log(getSeconds("01:30"));
console.log(getSeconds("10:25"));

