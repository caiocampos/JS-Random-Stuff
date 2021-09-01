(() => {
	const arr = Array.from({length: 50000}, () => Math.floor(Math.random() * 1000));
	let res;
	const f = (a) => a & 1 ? a : -a;
	const fx = {
		forEach: () => {
			res = 0;
			arr.forEach(el => {
				res += f(el);
			});
		},
		mapReduce: () => {
			res = arr.map(el => f(el)).reduce((t, el) => t + el);
		},
		forIConstLen: () => {
			res = 0;
			const len = arr.length;
			for (let i = 0; i < len; i++) {
				res += f(arr[i]);
			}
		},
		forI: () => {
			res = 0;
			for (let i = 0; i < arr.length; i++) {
				res += f(arr[i]);
			}
		},
		forOfVar: () => {
			res = 0;
			for (var el of arr) {
				res += f(el);
			}
		},
		forOfLet: () => {
			res = 0;
			for (let el of arr) {
				res += f(el);
			}
		},
		forOfConst: () => {
			res = 0;
			for (const el of arr) {
				res += f(el);
			}
		},
		forInVar: () => {
			res = 0;
			for (var i in arr) {
				res += f(arr[i]);
			}
		},
		forInLet: () => {
			res = 0;
			for (let i in arr) {
				res += f(arr[i]);
			}
		},
		forInConst: () => {
			res = 0;
			for (const i in arr) {
				res += f(arr[i]);
			}
		},
		forOfEntriesVar: () => {
			res = 0;
			for (var [_i, el] of arr.entries()) {
				res += f(el);
			}
		},
		forOfEntriesLet: () => {
			res = 0;
			for (let [_i, el] of arr.entries()) {
				res += f(el);
			}
		},
		forOfEntriesConst: () => {
			res = 0;
			for (const [_i, el] of arr.entries()) {
				res += f(el);
			}
		}
	};
	const test = (name, fx) => {
		if (!(fx instanceof Function)) {
			return;
		}
		const b = new Date();
		for (let i = 0; i < 100; i++) {
			fx();
		}
		const t = new Date() - b;
		console.log(`${name}: ${t}μs`);
	};
	Object.entries(fx).forEach(e => test(e[0], e[1]));
})();
