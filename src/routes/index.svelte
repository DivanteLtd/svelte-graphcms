<script context="module">
	import * as Blocks from '$components/blocks';
	import { language } from '$stores';
	import { getPage } from '$actions';
	import { Card } from 'sveltestrap';

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
	<h1 class="text-center">{page.title}</h1>

	{#each components as component, index}
		<Card class="mb-3" body>
			<svelte:component this={component} data={page.pageBlocks[index]} />
		</Card>
	{/each}
</section>
