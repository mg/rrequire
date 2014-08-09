var rrequire= require('rrequire');
var res= rrequire('/mod_a/index');

module.exports= function() {
	console.log(res());
};