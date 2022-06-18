<script>
	export /**
	 * @type {string}
	 */ let link;
	export /**
	 * @type {string}
	 */ let name;
	export /**
	 * @type {string}
	 */ let time;
</script>

<div
	class="card h-[400px] w-72 bg-white border-[1px] border-zinc-900 rounded-lg p-6 lifted-shadow flex flex-col justify-between"
>
	<div class="flex h-full w-full justify-center items-center">IMG</div>
	<div class="info z-10 flex flex-col gap-3">
		<h2 class="font-medium text-xl">{name}</h2>
		<h4 class="text-sm">{time}</h4>
		<a href={link}>
			<button
				class="text-center p-2 border-[1px] border-zinc-900 w-full rounded-lg text-sm bg-white lifted-shadow active:lifted-shadow-active"
				>view</button
			>
		</a>
	</div>
</div>

<style>
	.card {
		position: relative;
		overflow: hidden;
	}
	.card:after {
		@apply bg-zinc-100;
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50%;
		-webkit-transform-origin: 0 100%;
		-ms-transform-origin: 0 100%;
		transform-origin: 0 100%;
		-webkit-transform: skewY(12deg);
		-ms-transform: skewY(12deg);
		transform: skewY(12deg);
		box-shadow: 0 0 0 1px rgb(24, 24, 27);
	}
</style>
