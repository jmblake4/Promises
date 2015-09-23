var q = require('q');

var defer = q.defer();

defer.promise.then(console.log,printError);
setTimeout(defer.reject, 300, 'REJECTED!');

function printError(msg) {
	console.log(msg);
}