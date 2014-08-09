"use strict"

var root= '';

function setRoot(newroot) {
	root= newroot + '/';
}

function rrequire(rpath) {
	if(rpath[0] != '/') {
		return require(rpath)
	}
    return require(root + rpath);
}

rrequire['setRoot']= setRoot;

module.exports= rrequire;