debugger
var a='Hello world';
console.log(a);
String.prototype.myConcat = function(str2 ){
	var str = this;
	var str2 = " how are you?"; 
	return this + str2;
	console.log(a.myConcat('how r u?'));

