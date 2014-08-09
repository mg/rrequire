var rrequire= require('rrequire');
rrequire.setRoot(__dirname);

var modb= rrequire('/mod_b/index');
modb(); // prints "Module A"