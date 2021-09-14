<script>
	import * as Fields from '$components/blocks/fields';
	export let data;
	const fields = data.fields.map((field) => {
		return Fields[field.__typename];
	});
	let formInputs = {};
	const onSubmit = (e) => {
		const formData = new FormData(e.target);
		for (let field of formData) {
			const [key, value] = field;
			formInputs[key] = value;
		}
	};
</script>

<div style="border: 1px solid #999">
	<h1>{data.formName}</h1>

	<form on:submit|preventDefault={onSubmit}>
		{#each fields as field, index}
			<svelte:component this={field} data={data.fields[index]} />
		{/each}
		<button type="submit">{data.cta}</button>
	</form>
	{JSON.stringify(formInputs)}
</div>

<style>
	* {
		box-sizing: border-box;
	}
	form {
		display: flex;
		flex-direction: column;
		width: 300px;
		margin: 0 auto;
	}
</style>
