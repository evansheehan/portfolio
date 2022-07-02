<script lang="ts">
	import '../app.css';
</script>

<main
	class="flex items-center justify-center bg-gradient-to-br from-slate-800 to-black w-full overflow-y-auto h-full p-4"
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

	/* .main-gradient {
		background-image: linear-gradient(
			330deg,
			hsl(130deg 100% 12%) 0%,
			hsl(141deg 29% 42%) 50%,
			hsl(154deg 55% 75%) 100%
		);
	} */
</style>
