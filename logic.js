exports.sub = function(a, b){
	return (a - b);
}

exports.add = function(a, b){
	return (a + b);
}

exports.multiply = function(a, b){
	return (a * b);
}

exports.divide = function(a, b){
	if (b==0)
		return 0;

	return (a/b);
}