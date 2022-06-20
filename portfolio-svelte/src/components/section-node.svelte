<script>
	export /**
	 * @type {string | null | undefined}
	 */ let title = undefined;

	export /**
	 * @type {string}
	 */ let content;

	export /**
	 * @type {string}
	 */ let image;

	export /**
	 * @type {boolean | null | undefined}
	 */ let flip = undefined;
</script>

<div class={`flex ${flip ? 'flex-row-reverse' : 'flex-row'} w-full justify-center gap-16`}>
	<div
		class="bg-white rounded-xl border-[1px] border-zinc-900 overflow-hidden w-[400px] h-[400px] node-shadow"
	>
		<img class="w-full h-full" src={image} alt={title} />
	</div>
	<div class="flex flex-col gap-4">
		{#if title}
			<h2 class="text-2xl font-bold">{title}</h2>
		{/if}
		<p class="text-sm max-w-[400px] min-w-[300px]">{content}</p>
	</div>
</div>
