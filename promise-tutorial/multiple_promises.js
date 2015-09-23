var q = require('q');

var defer1 = q.defer();
var defer2 = q.defer();

function all(d1,d2) {
	var defer = q.defer();
	var counter=0;
	var promiseArray = [];
	d1.then(function(value) {
		counter++;
		promiseArray.push(value);
		if (counter == 2) {
			defer.resolve(promiseArray);
		}
	},function(){defer.reject});
	d2.then(function(value) {
		counter++;
		promiseArray.push(value);
		if (counter == 2) {
			defer.resolve(promiseArray);
		}
	},function(){defer.reject});
	return defer.promise;
}

all(defer1.promise,defer2.promise).then(console.log);
setTimeout(resolveFunc, 200);

function resolveFunc() {
	defer1.resolve("PROMISES");
	defer2.resolve("FTW");
}