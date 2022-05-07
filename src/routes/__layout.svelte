<script context="module" lang="ts">
	enum State {
		Start,
		Expanded
	}
	export const state = writable(State.Start);
</script>

<script lang="ts">
	import { writable } from 'svelte/store';
	import '../app.css';

	let mainEl: HTMLElement;

	$: expandState($state);
	const expandState = (newState: State) => {
		console.log('Init expand state');
		if (newState !== State.Expanded) return;
	};
</script>

<main
	bind:this={mainEl}
	on:click={() => {
		const mainElBoundsBefore = mainEl.getBoundingClientRect();
		state.set(State.Expanded);
		const mainElBoundsAfter = mainEl.getBoundingClientRect();
	}}
	class="relative bg-primary-mid transition  select-none  p-8 rounded-md text-slate-300 {$state ===
	State.Expanded
		? 'h-full w-full'
		: 'hover:scale-105 hover:ring-2 ring-0 ring-accent-deep cursor-pointer'}"
>
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
</style>
