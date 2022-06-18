<script>
	import '../app.css';
	import Landing from '../pages/landing.svelte';
	import About from '../pages/about.svelte';
	import Contact from '../pages/contact.svelte';
	import Work from '../pages/work.svelte';
	import Nav from '../components/nav.svelte';
	import { Project1, Project2, Project3 } from '../pages/projects';
</script>

<Nav />
<div class="index w-full h-full overflow-hidden relative scroll-smooth">
	<div class="grid grid-cols-[auto_auto_auto] grid-rows-[auto_auto_auto] z-0">
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
