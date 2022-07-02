<script lang="ts">
	let cursor: HTMLDivElement;

	const CURSOR_PADDING = 8;

	// const showAndMoveCursor = (e: MouseEvent) => {
	// 	const buttonTarget = e.target as HTMLButtonElement;
	// 	const btnClientRect = buttonTarget.getBoundingClientRect();
	// 	console.log(btnClientRect);
	// 	cursor.style.opacity = '1';
	// 	cursor.style.width = `${btnClientRect.width + CURSOR_PADDING}px`;
	// 	cursor.style.height = `${btnClientRect.height + CURSOR_PADDING}px`;
	// 	cursor.style.left = `${btnClientRect.x}px`;
	// 	console.log(cursor.style.left);

	// 	cursor.style.top = `${btnClientRect.y}px`;
	// 	console.log(cursor.getBoundingClientRect());
	// };

	// const fadeCursor = (e: MouseEvent) => {
	// 	cursor.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200 });
	// };
</script>

<div
	class="fixed m-8 bg-white bg-opacity-5 max-w-xl p-8 backdrop-blur-sm shadow-subtle-highlight rounded-lg z-10 transition text-slate-100"
>
	<div class="relative flex flex-col sm:flex-row gap-4">
		<div>
			<p class="text-xl">Hello!</p>
			<p>My name is Evan Sheehan</p>
			<br />
			<p>
				I'm a full stack developer with 2+ years of experience building well-designed, reusable
				components with <span class="font-bold">Svelte</span>,
				<span class="font-bold">Typescript</span>
				, and <span class="font-bold">Tailwind</span>.
			</p>
			<p class="bg-white bg-opacity-5 mt-8 p-2 rounded">
				🚧 I'm actively working on this site, so please check back daily for something a little more
				interesting!! 🚧
			</p>
		</div>
		<div
			class="left-0 right-0 h-[2px] sm:h-auto sm:w-[2px] sm:top-0 sm:bottom-0 sm:left-auto sm:right-auto flex-shrink-0 bg-white bg-opacity-50"
		/>
		<div>
			<button><a href="https://www.linkedin.com/in/richardevansheehan/"> LinkedIn </a></button>
			<button><a href="https://github.com/evansheehan"> Github </a></button>
			<!-- <button>Download CV</button> -->
			<!-- <div bind:this={cursor} class="cursor" /> -->
		</div>
	</div>
</div>

<style>
	.cursor {
		@apply fixed rounded left-0 top-0 bg-opacity-10 bg-white z-50;
	}

	button {
		@apply w-full text-left whitespace-nowrap p-2 transition rounded hover:shadow-subtle-highlight hover:bg-opacity-5 bg-white bg-opacity-0;
	}
</style>
