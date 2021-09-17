<script>
	import { Styles } from 'sveltestrap';
	import Header from '$components/header/Header.svelte';
	import { Card, Jumbotron } from 'sveltestrap';
</script>

<Styles />

<Header />

<div class="container-xl mt-5 mb-5 min-vh-100">
	<main>
		<Card body><slot /></Card>
	</main>
</div>

<Jumbotron class="p-3">
	<p class="lead text-center">
		GraphCMS POC by <a href="https://divante.com">Divante</a> based on SvelteKit
	</p>
</Jumbotron>
