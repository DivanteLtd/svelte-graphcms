<script context="module">
	import { language } from '$stores';
	import { getPage, getPosts } from '$actions';

	export async function load() {
		const postsPromise = getPosts();
		const pagePromise = getPage('articles');

		return {
			props: {
				pagePromise,
				postsPromise
			}
		};
	}
</script>

<script>
	export let pagePromise;
	export let postsPromise;
	import { ListGroup, ListGroupItem } from 'sveltestrap';
	import Time from 'svelte-time';

	language.subscribe(() => {
		update();
	});

	async function update() {
		postsPromise = getPosts();
		pagePromise = getPage('articles');
	}
</script>

{#await pagePromise then page}
	<section>
		<h1 class="text-center">{page.props.page.title}</h1>

		{#await postsPromise then posts}
			<ListGroup>
				{#each posts.postBlocks as post}
					<ListGroupItem tag="a" href="articles/{post.slug}" action
						><b><Time timestamp={post.createdAt} /></b> / {post.title}</ListGroupItem
					>
				{/each}
			</ListGroup>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</section>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
