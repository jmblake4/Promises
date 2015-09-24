var APromise = {}

APromise.all = function(promises){
	return Promise.all(promises);
};
	// console.log(promises+" "+promises.length);
// 	var promiseArray = [];
// 	if (!Array.isArray(promises)) {
// 		return Promise.resolve(promiseArray);
// 	}
// 	for (var i=0; i<promises.length; i++) {
// 		promises[i].then(function(value) {
// 			promiseArray.push(value);
// 		},function(err){return Promise.reject(err)});
// 	}
// 	return Promise.resolve(promiseArray);
// };
	// return function(){return(promiseArray)};
// };
// 	return new Promise(function(resolve,reject) {
// 		var promiseArray = [];
// 		if (!Array.isArray(promises)) {
// 			resolve(promiseArray);
// 		}
// 		for (var i=0; i<promises.length; i++) {
// 			promises[i].then(function(value) {
// 				promiseArray.push(value);
// 			},function(err){reject(err)});
// 		}
// 		console.log(promiseArray);
// 		resolve(promiseArray);
// 		// return function(){return(promiseArray)};
// 	});
// }

APromise.race = function(promises){
	return Promise.race(promises);
};

APromise.resolve = function(value){
	return Promise.resolve(value);
};

APromise.reject = function(err){
	return Promise.reject(err);
};

module.exports.APromise = APromise;
