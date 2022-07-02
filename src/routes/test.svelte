<script context="module" lang="ts">
	export async function load() {
		const isDevEnv = import.meta.env.DEV;
		if (isDevEnv) {
			return {
				status: 200
			};
		} else {
			return {
				status: 401,
				message: 'Uh oh!'
			};
		}
	}
</script>

<script lang="ts">
	import Expandable from '$lib/Expandable.svelte';
	import BackArrow from '$lib/icons/Back-Arrow.svelte';
	import { flip } from '$lib/utils/flip';
	import { tick } from 'svelte';

	enum Sections {
		'about me',
		'contact',
		'cv',
		'projects'
	}

	let selectedSection: Sections | undefined = undefined;
	let aboutMeExpanded: HTMLDivElement;

	const handleSectionClick = async (e: Event) => {
		const thisElement = e.currentTarget as HTMLElement;
		selectedSection = Sections['about me'];
		await tick();
		flip(thisElement, aboutMeExpanded);
	};
</script>

<div class="grid relative place-items-center grid-cols-2 gap-4 max-w-md aspect-square w-full">
	<Expandable on:click={handleSectionClick} backgroundColorClass="bg-amber-500" title="About Me" />
	<Expandable
		on:click={() => (selectedSection = Sections.contact)}
		backgroundColorClass="bg-rose-500"
		title="Contact"
	/>
	<Expandable
		on:click={() => (selectedSection = Sections.cv)}
		backgroundColorClass="bg-green-500"
		title="CV"
	/>
	<Expandable
		on:click={() => (selectedSection = Sections.projects)}
		backgroundColorClass="bg-purple-500"
		title="Projects"
	/>

	{#if selectedSection === Sections['about me']}
		<div
			bind:this={aboutMeExpanded}
			class="flex absolute bg-amber-500 col-span-2 row-span-2 w-full h-full rounded-lg p-5 text-white"
		>
			<BackArrow on:click={() => (selectedSection = undefined)} />
			<div class="text-xl font-semibold ml-8">About Me</div>
		</div>
	{:else if selectedSection === Sections.contact}
		<div
			class="flex bg-rose-500 col-span-full row-span-full w-full h-full rounded-lg p-5 text-white"
		>
			<BackArrow on:click={() => (selectedSection = undefined)} />
			<div class="text-xl font-semibold ml-8">Contact</div>
		</div>
	{:else if selectedSection === Sections.cv}
		<div
			class="flex bg-green-500 col-span-full row-span-full w-full h-full rounded-lg p-5 text-white"
		>
			<BackArrow on:click={() => (selectedSection = undefined)} />
			<div class="text-xl font-semibold ml-8">CV</div>
		</div>
	{:else if selectedSection === Sections.projects}
		<div
			class="flex bg-purple-500 col-span-full row-span-full w-full h-full rounded-lg p-5 text-white"
		>
			<BackArrow on:click={() => (selectedSection = undefined)} />
			<div class="text-xl font-semibold ml-8">Projects</div>
		</div>
	{/if}
</div>

<!-- <div class="text-white">Oopsie! 🙁</div> -->
