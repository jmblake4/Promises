// var qhttp = require('q-io/http');

// qhttp.read('http://localhost:7000')
// .then(String)
// .then(parseFirstRead)
// .then(String)
// .then(JSON.parse)
// .then(console.log)
// .then(null,console.log)
// .done();

// function parseFirstRead(id) {
// 	return qhttp.read('http://localhost:7001/' + id);
// }

var qhttp = require('q-io/http')
	, _ = require('lodash')
	, cachePath = "http://localhost:7000/"
	, dbPath = "http://localhost:7001/";
    
var buildDbPath = _.bind(String.prototype.concat, dbPath);
console.log(buildDbPath);
    
qhttp.read(cachePath)
.then(_.compose(qhttp.read, buildDbPath))
.then(_.compose(console.log, JSON.parse))
.then(null, console.error)
.done();
