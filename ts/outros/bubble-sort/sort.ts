export function sort<T>(origList: Array<T>): Array<T> {
	const list = origList.slice(0);
	for (let i = 0; i < list.length; i++) {
		const len = list.length - 1 - i;
		let hadChange = false;
		for (let j = 0; j < len; j++) {
			const k = j + 1;
			if (list[j] > list[k]) {
				hadChange = true;
				[list[j], list[k]] = [list[k], list[j]];
			}
		}
		if (!hadChange) {
			break;
		}
	}
	return list;
}