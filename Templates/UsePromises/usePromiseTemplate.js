function mapAsync(iterator, obj, context) {
	var result = obj.map(iterator);
	return Promise.all(result);
};

function mapAsyncWithOrder(iterator, array, context, descending) {
	var initialValue = Promise.resolve([]);
	if (!Array.isArray(array)) {
		return initialValue;
	}
	iterator = iterator.bind(context);
	var inOrder = function(prevValue, nextValue, nextIndex, array) {
		return prevValue.then(function(items) {
			return iterator(nextValue, nextIndex, array).then(function(moreItems) {
				return items.concat(moreItems);
			});
		});
	}
	if (descending) {
		return array.reduceRight(inOrder, initialValue);
	}
	return array.reduce(inOrder, initialValue);
}

function mapAsyncInOrder(iterator, array, context) {
	mapAsyncWithOrder(iterator, array, context);
}

function mapAsyncInDescendingOrder(iterator, array, context) {
	mapAsyncWithOrder(iterator, array, context, true);
}

// function mapAsync(iterator, obj, context) {
// 	return new Promise(function(resolve,reject) {
// 		var promiseArray = [];

// 		for (var i=0; i<obj.length; i++) {
// 			iterator(obj[i]).then(function(value) {
// 				promiseArray.push(value);
// 			},function(){return reject('failed')});
// 		}
// 		resolve(promiseArray);	
// });


// function mapAsyncInOrder(iterator, array, context) {
// 	return new Promise(function(resolve,reject) {
// 		var promiseArray = [];

// 		for (var i=0; i<array.length; i++) {
// 			iterator(array[i]).then(function(value) {
// 				promiseArray.push(value);
// 			},function(){return reject('failed')});
// 		}
// 		resolve(promiseArray);
// 	});
// };

// function mapAsyncInDescendingOrder(iterator, array, context) {
// 	return new Promise(function(resolve,reject) {
// 		var promiseArray = [];

// 		for (var i=0; i<array.length; i++) {
// 			iterator(array[i]).then(function(value) {
// 				promiseArray.push(value);
// 			},function(){return reject('failed')});
// 		}
// 		resolve(promiseArray);
// 	});
// };