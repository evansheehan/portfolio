<script>
	import '../app.css';
</script>

<main class="relative bg-primary-mid p-8 rounded-md text-slate-300">
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
