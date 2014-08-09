var rrequire= require('../index');
rrequire.setRoot(__dirname);

var modb= rrequire('/mod_b/index');
modb(); // prints "Module A"