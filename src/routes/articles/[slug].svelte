<script context="module">
	import { language } from '$stores';
	import { getPost } from '$actions';

	export async function load({ page }) {
		const slug = page.params.slug;
		const postPromise = getPost(slug);

		return {
			props: {
				slug,
				postPromise
			}
		};
	}
</script>

<script>
	export let postPromise;
	export let slug;

	language.subscribe(() => {
		update();
	});

	async function update() {
		postPromise = getPost(slug);
	}
</script>

{#await postPromise then { postBlock }}
	<h1>{postBlock.title}</h1>

	<div class="content">
		{@html postBlock.content.html}
		{#if postBlock.coverImage}
			<img style="max-width:100%" src={postBlock.coverImage.url} alt="" />
		{/if}
	</div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
