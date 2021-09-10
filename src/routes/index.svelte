<script context="module">
	import * as Blocks from '$components/blocks';
	import { get } from 'svelte/store';
	import { language } from '$stores';
	import { getPage } from '$actions';

	export async function load() {
		return getPage('home');
	}
</script>

<script>
	export let page;

	const components = page.pageBlocks.map((block) => {
		return Blocks[block.__typename];
	});

	language.subscribe(() => {
		update();
	});

	async function update() {
		const data = await getPage('home');
		page = data.props.page;
	}
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<section>
	<h1>{page.title}</h1>

	{#each components as component, index}
		<svelte:component this={component} data={page.pageBlocks[index]} />
	{/each}
</section>

<style>
</style>
