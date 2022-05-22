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

<script>
	import Nav from '$lib/nav.svelte';
</script>

<Nav />
