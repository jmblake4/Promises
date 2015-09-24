var qhttp = require('q-io/http');

qhttp.read('http://localhost:7000')
.then(String)
.then(parseFirstRead)
.then(String)
.then(JSON.parse)
.then(console.log)
.then(null,console.log)
.done();

function parseFirstRead(id) {
	return qhttp.read('http://localhost:7001/' + id);
}