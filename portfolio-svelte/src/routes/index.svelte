<script type="text/javascript">
	import '../app.css';
	import Landing from '../pages/landing.svelte';
	import About from '../pages/about.svelte';
	import Contact from '../pages/contact.svelte';
	import Work from '../pages/work.svelte';
	import Nav from '../components/nav.svelte';
	import { Project1, Project2, Project3 } from '../pages/projects';
</script>

<Nav />
<div class="index bg-zinc-100 w-full h-full overflow-scroll relative scroll-smooth scroll-both z-0">
	<div
		id="svgContainer"
		class="grid grid-cols-[auto_auto_auto] grid-rows-[auto_auto_auto] relative z-0"
	>
		<Landing />
		<About />
		<Contact />
		<Work />
		<Project1 />
		<Project2 />
		<Project3 />
	</div>
</div>

<style>
	.index {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.index::-webkit-scrollbar {
		display: none;
	}
</style>
