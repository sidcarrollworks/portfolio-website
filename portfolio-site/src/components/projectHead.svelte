<script>
	export /**
	 * @type {string}
	 */
	let name;

	export /**
	 * @type {string}
	 */
	let time;

	export /**
	 * @type {string}
	 */
	let description;
</script>

<div
	class="bg-white border-[1px] border-zinc-900 rounded-xl flex flex-col p-10 gap-12 w-min h-min node-shadow"
>
	<div class="w-[645px] flex flex-row justify-between">
		<div class="flex flex-col gap-2">
			<h2 class="text-3xl font-semibold uppercase">{name}</h2>
			<p class="text-sm">From {time}</p>
		</div>
		<div class="w-14 h-14 rounded-full bg-blue-500" />
	</div>
	<p class="w-full">
		{description}
	</p>
</div>
