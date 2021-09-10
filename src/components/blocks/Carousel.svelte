<script>
	export let data;
</script>

<div style="border: 1px solid #999">
	<h1>Carousel block</h1>
	<div>{JSON.stringify(data)}</div>

	<!-- <h2>{data.title}</h2>
  {#each data.images as image}
    <img style="width:100px" src={image.url} alt={image.fileName} />
  {/each} -->
</div>
