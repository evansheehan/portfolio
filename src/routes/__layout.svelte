<script lang="ts">
	import '../app.css';

	let canvasEl: HTMLCanvasElement;

	const populateCanvas = (
		canvas: HTMLCanvasElement,
		{ mouseX, mouseY }: { mouseX: number; mouseY: number }
	) => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		ctx.fillStyle = 'rgba(256, 256, 256, 0.05)';

		for (let i = 0; i < canvas.width + 10; i = i + 10) {
			for (let j = 0; j < canvas.height + 10; j = j + 10) {
				// if (i - mouseX < 20) ctx.fillRect(i, j, 10, 10);
				// else if (j - mouseY < 20) ctx.fillRect(i, j, 10, 10);
				ctx.fillRect(i, j, 5, 5);
			}
		}
		// ctx.fillText(canvas.getBoundingClientRect().width.toString(), 50, 50, 500);
	};
</script>

<svelte:window on:resize={() => populateCanvas(canvasEl, { mouseX: 0, mouseY: 0 })} />

<main
	class="flex items-center overflow-hidden justify-center bg-gradient-to-br from-slate-800 to-black w-full h-full p-4"
>
	<canvas use:populateCanvas={{ mouseX: 0, mouseY: 0 }} bind:this={canvasEl} />
	<slot />
</main>

<style global>
	* {
		font-family: 'Varela Round', sans-serif;
	}

	h1,
	h2,
	h3 {
		font-family: 'Playfair Display', serif;
	}

	/* .main-gradient {
		background-image: linear-gradient(
			330deg,
			hsl(130deg 100% 12%) 0%,
			hsl(141deg 29% 42%) 50%,
			hsl(154deg 55% 75%) 100%
		);
	} */
</style>
