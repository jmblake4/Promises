var q = require('q');
var http = require('q-io/http')
var defer = q.defer();

http.read('http://localhost:1337')
	.then(JSON.parse)
	.then(console.log)
	.then(null,console.log)
	.done();