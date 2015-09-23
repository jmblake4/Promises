var q = require('q');

var defer = q.defer();

q.fcall(JSON.parse,process.argv[2])
.then(null,console.log);