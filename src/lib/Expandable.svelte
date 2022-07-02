<script lang="ts">
	export let backgroundColorClass: string;
	export let title: string;
</script>

<button
	on:click
	class="text-white shadow-sm hover:shadow-lg active:shadow-inner active:scale-90 ease-in-out hover:scale-150 transition w-full hover:z-10 h-full font-semibold flex items-center justify-center p-8 rounded-lg {backgroundColorClass}"
>
	<span>
		{title}
	</span>
</button>
