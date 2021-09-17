<script>
	export let data;
	import {
		Carousel,
		CarouselControl,
		CarouselIndicators,
		CarouselItem,
		CarouselCaption
	} from 'sveltestrap';

	let items = data.images;

	let activeIndex = 0;
</script>

<h2>{data.title}</h2>

<Carousel {items} bind:activeIndex ride={true} interval={2000}>
	<CarouselIndicators bind:activeIndex {items} />

	<div class="carousel-inner">
		{#each items as item, index}
			<CarouselItem bind:activeIndex itemIndex={index}>
				<img src={item.url} class="d-block w-100" alt={item.fileName} />
				<CarouselCaption captionHeader={item.fileName} captionText={item.fileName} />
			</CarouselItem>
		{/each}
	</div>

	<CarouselControl direction="prev" bind:activeIndex {items} />
	<CarouselControl direction="next" bind:activeIndex {items} />
</Carousel>
