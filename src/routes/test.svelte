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
	import Expandable from '$lib/utils/Expandable.svelte';
</script>

<div class="grid place-items-center grid-cols-2 gap-4 max-w-md aspect-square w-full">
	<Expandable backgroundColorClass="bg-amber-500" title="About Me" />
	<Expandable backgroundColorClass="bg-rose-500" title="Contact" />
	<Expandable backgroundColorClass="bg-green-500" title="CV" />
	<Expandable backgroundColorClass="bg-purple-500" title="Projects" />
</div>
