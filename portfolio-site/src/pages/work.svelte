<script>
	import Card from '../components/card.svelte';
</script>

<div
	id="work"
	class="w-[1500px] h-[850px] p-8 col-start-2 col-span-1 row-start-2 row-span-1 relative flex justify-center items-center"
>
	<h1 class="section-title">Work</h1>
	<div
		class="bg-white border-[1px] border-zinc-900 rounded-xl flex flex-row p-12 gap-12 w-min h-min node-shadow"
	>
		<Card link={'#project1'} name="Botpress" time="00/0000 - 00/0000" />
		<Card link={'#project2'} name="Kabloom" time="00/0000 - 00/0000" />
		<Card link={'#project3'} name="Sheridan Printing" time="00/0000 - 00/0000" />
	</div>
</div>
