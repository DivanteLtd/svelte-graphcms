<script>
	export let data;
</script>

<h2>{data.title}</h2>
<p>{@html data.content.html}</p>
{#if data.image}
	<img src={data.image.url} alt={data.image.fileName} />
{/if}
