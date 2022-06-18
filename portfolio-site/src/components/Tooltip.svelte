<script>
	import { fade, scale } from 'svelte/transition';
	export let title = '';
	let isHovered = false;
	/**
	 * @type {any}
	 */
	let x;
	/**
	 * @type {any}
	 */
	let y;

	/**
	 * @param {{ pageX: number; pageY: number; }} event
	 */
	function mouseOver(event) {
		isHovered = true;
		x = event.pageX;
		y = event.pageY;
	}
	/**
	 * @param {{ pageX: number; pageY: number; }} event
	 */
	function mouseMove(event) {
		x = event.pageX;
		y = event.pageY;
	}
	function mouseLeave() {
		isHovered = false;
	}

	let cond = true;

	const animate = (node, args) => (args.isHovered ? fade(node, args) : scale(node, args));
</script>

<div
	on:mouseover={mouseOver}
	on:focus
	on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}
	class="relative display flex justify-center"
>
	<slot />
	{#if isHovered}
		<div
			style="bottom: -2rem;"
			class="text-center tooltip text-xs text-zinc-600 absolute select-none bg-zinc-100 px-2 py-1 rounded-lg -z-10"
			transition:animate
		>
			{title}
		</div>
	{/if}
</div>
