export const flip = async (prevEl: HTMLElement, newEl: HTMLElement) => {
	const prevClientRect = prevEl.getBoundingClientRect();
	const newClientRect = newEl.getBoundingClientRect();

	const scaleDeltaX = prevClientRect.width / newClientRect.width;
	const scaleDeltaY = prevClientRect.height / newClientRect.height;

	newEl.animate([{ transform: `scale(${scaleDeltaX},${scaleDeltaY})` }, { transform: '' }], {
		duration: 300,
		fill: 'forwards'
	});

	console.log(prevClientRect, newClientRect);
};
