<script lang="ts">
	export let backgroundColorClass: string;
	export let title: string;
</script>

<button
	class="text-white shadow-sm hover:shadow-lg active:shadow-inner active:scale-90 ease-in-out hover:scale-150 transition w-full bg-opacity-50 backdrop-blur-md hover:z-10 h-full font-semibold flex items-center justify-center p-8 rounded-lg {backgroundColorClass}"
>
	{title}
</button>
