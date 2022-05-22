<script lang="ts">
	import { throttle } from '$lib/utils/throttle';

	const MINIMIZE_MAX_WIDTH = 900;

	let navMinimized = false;

	const shouldMinimizeNav = (currWindowWidth: number): boolean =>
		currWindowWidth < MINIMIZE_MAX_WIDTH;
</script>

{#if !navMinimized}
	<nav
		class="absolute right-8 top-8 inline-block bg-white bg-opacity-10 rounded-md backdrop-blur-md select-none shadow-subtle-highlight"
	>
		<div class="relative">
			<ul class="text-accent-light text-lg flex flex-col font-medium p-2">
				<li class="nav-item">About Me</li>
				<li class="nav-item">What I'm Doing Now</li>
				<li class="nav-item">Things I've Worked With</li>
				<li class="nav-item">Let's Talk</li>
			</ul>
		</div>
	</nav>
{/if}

<svelte:window
	on:resize={throttle(() => {
		const windowWidth = window.innerWidth;
		navMinimized = shouldMinimizeNav(windowWidth);
	}, 250)}
/>

<style>
	.nav-item {
		@apply p-4 rounded bg-white bg-opacity-0 hover:bg-opacity-20 transition cursor-pointer;
	}
</style>
