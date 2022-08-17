const replaceall = require('string.prototype.replaceall');
// XXX: AJP - replaceAll is not supported by the current Node version Jest is using. This can be removed when node has been upgraded to >= 15
replaceall.shim();
