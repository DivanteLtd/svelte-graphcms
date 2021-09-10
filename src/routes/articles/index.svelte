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
		<h1>{page.props.page.title}</h1>
		{#await postsPromise then posts}
			<ul>
				{#each posts.postBlocks as post}
					<li><a rel="prefetch" href="articles/{post.slug}">{post.title}</a></li>
				{/each}
			</ul>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</section>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
