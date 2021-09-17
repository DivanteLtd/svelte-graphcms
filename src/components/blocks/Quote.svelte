<script>
	export let data;
	import { Jumbotron } from 'sveltestrap';
</script>

<Jumbotron fluid class="p-3">
	<h1 class="display-3">{data.quote}</h1>
	<p class="lead">
		{data.author}
	</p>
</Jumbotron>
