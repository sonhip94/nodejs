var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a + b);
			} else {
				reject('Fail');
			}
		}, 1500);
	});
};

asyncAdd(5, '7').then((res) => {
	console.log('Result: ',res);
	return asyncAdd(res, 'hehe');
}).then((result) => {
	console.log('Result2: ',result);
}).catch((errorMessage) => {
	console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		// resolve('success');
// 		reject('fail');
// 	}, 2500);
// }).then((message) => {
// 	console.log('success:',message);
// }, (errorMessage) => {
// 	console.log('fail:' ,errorMessage);
// });

