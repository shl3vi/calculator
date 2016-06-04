function Queue (name){

	this.name = name;
	this.arr = [];

	this.inqueue = function(data){
	for(var i = this.arr.length; i > 0; i--){
		this.arr[i] = this.arr[i-1];
	}
	this.arr[0] = data;
}

this.dequeue = function (){
	this.arr.pop();
	}
}
exports.getQueue = function(name){
	var retVal = new Queue(name);
	return retVal;
}