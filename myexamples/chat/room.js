function room(id){

	this.id = id;
	this.arr = [];
	
	
	this.setMsg = function(msg){
		this.arr.push(msg);
	}

	this.getMsg = function(){
		return this.arr;
	} 
}

exports.getRoom = function(id){
	var retVal  = new room(id);
	return retVal;
}