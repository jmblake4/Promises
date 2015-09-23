var q = require('q');

var defer = q.defer();

function parseJSON(data){
  return new Promise(function (fulfill, reject){
      try {
        fulfill(JSON.parse(data));
      } catch (ex) {
        reject(ex);
      }
  });
}

function parseJSON2(data) {
	var q = require('q');
	defer = q.defer();
	try {
		defer.resolve(JSON.parse(data));
	} catch (e) {
		defer.reject(e);
	}
	return defer.promise;
}

parseJSON(process.argv[2])
.then(null,console.log);