#rrequire

## Attention: There is no reason to use is. Use NODE_PATH and/or Webpack's resolve config to do this

A rooted require for nodejs to escape the relative paths. Allows you to go from

	var obj= require('../../../module/file');

to

	var obj= rrequire('/module/file');

where "/module" is assumed to be relative to the root of the project.

Install:
	
	npm install rrequire --save

In your start file (index.js) set the root:

	var rrequire= require('rrequire');
	rrequire.setRoot(__dirname);

Now you can use **rrequire** to require your files.
