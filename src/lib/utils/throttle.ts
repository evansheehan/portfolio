export const throttle = (callback: Function, delay: number) => {
	let wait = false;
	return () => {
		if (!wait) {
			callback.call(this);
			wait = true;
			setTimeout(() => {
				wait = false;
			}, delay);
		}
	};
};
