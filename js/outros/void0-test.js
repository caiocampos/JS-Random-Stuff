(() => {
	const arr = Array.from({length: 10000}, () => 0);
	let res;
	const fx = {
		fa: () => {
			for (let i = 0; i < arr.length; i++) {
				res = 0;
				res = undefined;
			}
		},
		fb: () => {
			for (let i = 0; i < arr.length; i++) {
				res = 0;
				res = void 0;
			}
		}
	};
	const test = (name, fx) => {
		if (!(fx instanceof Function)) {
			return;
		}
		const b = new Date();
		for (let i = 0; i < 1000; i++) {
			fx();
		}
		const t = new Date() - b;
		console.log(`${name}: ${t}μs`);
	};
	Object.entries(fx).forEach(e => test(e[0], e[1]));
})();
