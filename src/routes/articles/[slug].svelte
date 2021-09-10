<script context="module">
  import { language } from "$stores";
	import { getPost } from "$actions"

	export async function load({page}) {
    const slug = page.params.slug
		const postPromise = getPost(slug)

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
		update()
	});
	
	async function update() {
		postPromise = getPost(slug)
  }
</script>

{#await postPromise}

{:then {postBlock} }

  <h1>{postBlock.title}</h1>

  <div class="content">
    {@html postBlock.content.html}
    {#if postBlock.coverImage }
      <img style="max-width:100%" src={postBlock.coverImage.url} alt="" />
    {/if}
  </div>

{:catch error}

  <p style="color: red">{error.message}</p>

{/await}

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>
